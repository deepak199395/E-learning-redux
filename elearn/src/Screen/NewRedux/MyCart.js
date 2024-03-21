import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToMyCart, deleteFromNycart, removeMyCartItemCat } from './MyCartSlice';

const MyCart = () => {
    const dispatch = useDispatch();
    const myCartItem = useSelector(state => state.cart);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.txt}>PowerPro</Text>
            </View>
            <FlatList
                data={myCartItem}
                renderItem={({ item }) => (
                    <View style={styles.flatlistcontainer}>
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.productDetails}>
                            <Text style={styles.brand}>{item.brand.substring(0, 20) + '..'}</Text>
                            <Text style={styles.price}>{'₹' + item.price}</Text>
                            <View style={styles.groupbtn}>
                                {item.quality !== 0 ? (
                                    <TouchableOpacity style={styles.btn} onPress={() =>{
                                         if(item.quality>1){
                                            dispatch(removeMyCartItemCat(item.id))

                                         }else{
                                            dispatch(deleteFromNycart(item.id))
                                         }
                                        }}>
                                        <Text style={styles.txtbtn}>--</Text>
                                    </TouchableOpacity>
                                ) : null}
                                <Text style={{ marginLeft: 5 }}>{item.quality}</Text>
                                <TouchableOpacity style={styles.btn} onPress={() => dispatch(addProductToMyCart(item))}>
                                    <Text style={styles.txtbtn}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default MyCart;

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
        justifyContent: "space-evenly",
        borderWidth: 0.5,
        marginLeft: 5,
        borderRadius: 10
    },
    cartitem: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    }
});
