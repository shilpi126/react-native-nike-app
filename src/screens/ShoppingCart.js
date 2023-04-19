import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
//import cart from "../data/cart"
import CartListItem from "../components/CartListItem"
import { useSelector , useDispatch} from 'react-redux'
import {
    selectDeliveryPrice,
    selectSubtotal,
    selectTotal,
    cartSlice,
  } from '../store/cartSlice';

const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    //console.log(cartItems);

    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);
    const dispatch = useDispatch();

  return (
  
    <FlatList
        data={cartItems} 
        renderItem={({item}) => <CartListItem cartItem={item}/>}
        ListFooterComponent={() => (
            <View style={styles.totalContainer}>
                <View style={styles.row}>
                    <Text style={styles.text}>Subtotal</Text>
                    <Text style={styles.text}>{subtotal} US$</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Delivery</Text>
                    <Text style={styles.text}>{deliveryFee} US$</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>{total} US$</Text>
                </View>
            </View>
        )}
    />
 
)
}

const styles = StyleSheet.create({
    totalContainer:{
        margin:20,
        paddingTop:10,
        borderColor:"gainsboro",
        borderTopWidth:1,
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:2
    },
    text:{
        color:"gray"
    }
})

export default ShoppingCart