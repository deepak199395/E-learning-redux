import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, decrementProductQuantity, incrementProductQuantity, removeMyCartItemCat } from './NewRedux/MyCartSlice';
import { useNavigation } from '@react-navigation/native';

const MyProduct = () => {
  const navigation = useNavigation();
  const myProduct = useSelector(state => state.product);
  const myCatItem = useSelector(state => state.cart);
  
  const dispatch = useDispatch();

  const handleView = () => {
    navigation.navigate('MyCart');
  };

  const getTotal = () => {
    return myCatItem.reduce((total, item) => total + item.quality * item.price, 0);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.txt}>PowerPro</Text>
      </View>
      <FlatList
        data={myProduct}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.flatlistcontainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productDetails}>
              <Text style={styles.brand}>{item.brand.substring(0, 20) + '..'}</Text>
              <Text style={styles.price}>{'₹' + item.price}</Text>
              <View style={styles.groupbtn}>
                {item.quality === 0 ? (

                  <TouchableOpacity style={styles.btn} onPress={() =>
                     dispatch(addProductToMyCart(item))}>
                    <Text style={styles.txtbtn}>Add to cart</Text>
                  </TouchableOpacity>

                ) : (
                  
                  <>
                    <TouchableOpacity style={styles.btn} onPress={() => 
                      dispatch(decrementProductQuantity(item.id))} >
                      <Text style={styles.txtbtn}>-</Text>
                    </TouchableOpacity>

                    <Text style={{ marginLeft: 5 }}>{item.quality}</Text>
                    <TouchableOpacity style={styles.btn} onPress={() =>
                       dispatch(incrementProductQuantity(item.id))}>
                      <Text style={styles.txtbtn}>+</Text>
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      {myCatItem.length > 0 ? (
        <View style={styles.carttotal}>
          <View style={styles.cartitem}>
            <Text style={{ fontSize: 16, fontWeight: "800", color: "black" }}>{'added items' + '(' + myCatItem.length + ')'}</Text>
            <Text>{'Total: ₹' + getTotal()}</Text>
          </View>
          <View style={styles.cartitem}>
            <TouchableOpacity style={styles.viewCartButton} onPress={handleView}>
              <Text style={styles.viewCartButtonText}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20
  },
  flatlistcontainer: {
    width: "94%",
    height: 160,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 10,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    padding: 10
  },
  txt: {
    fontSize: 40,
    fontWeight: "bold"
  },
  brand: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  price: {
    color: "green",
  },
  groupbtn: {
    flexDirection: "row",
    alignItems: "center"
  },
  btn: {
    backgroundColor: "green",
    borderRadius: 5,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5
  },
  txtbtn: {
    color: "white",
    padding: 5
  },
  carttotal: {
    width: "98%",
    height: 60,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.5,
    marginLeft: 5,
    borderRadius: 10
  },
  cartitem: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  viewCartButton: {
    width: "70%",
    height: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  viewCartButtonText: {
    color: "white"
  }
});

export default MyProduct;
