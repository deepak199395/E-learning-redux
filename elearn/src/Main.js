import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppNavigation from './Screen/AppNavigation';
import { useDispatch } from 'react-redux';
import { addMyProduct } from './Screen/NewRedux/MyproductSlice';
import protine1 from "./Assets/p1.jpeg"
import protine2 from "./Assets/new.jpeg"
import protine3 from "./Assets/p3.jpeg"
import protine4 from "./Assets/p4.jpeg"
import protine5 from "./Assets/p5.jpeg"
import protine6 from "./Assets/p6.jpeg"
import protine7 from "./Assets/p7.jpeg"

const items = [
    {
      id: 0,
      image: protine1,
      brand: "RED SCIENCE NUTRITIONS",
      price: 1500,
      quality: 0
    },
    {
      id: 1,
      image: protine2,
      brand: "BATCH WHEY PRO",
      price: 2400,
      quality: 0
    },
    {
      id: 2,
      image: protine3,
      brand: "PLANT PROTEIN",
      price: 2600,
      quality: 0
    },
    {
      id: 3,
      image: protine4,
      brand: "GXN WHEY STACK",
      price: 3200,
      quality: 0
    },
    {
      id: 4,
      image: protine5,
      brand: "CHAMPIUN PURE WHEY",
      price: 4000,
      quality: 0
    },
    {
      id: 5,
      image: protine6,
      brand: "DIOMOND FULLSTACK",
      price: 4000,
      quality: 0
    },
    {
      id: 6, // Change this to a unique value, e.g., 7
      image: protine7,
      brand: "ISONENE",
      price: 4000,
      quality: 0
    }
  ];
  
const Main = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
 items.map(item=>{
    dispatch(addMyProduct(item))
 })
    },[])
  return (
    <AppNavigation/>
  )
}

export default Main

