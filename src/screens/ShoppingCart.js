import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import cart from "../data/cart"
import CartListItem from "../components/CartListItem"

const ShoppingCart = () => {
return (
  
    <FlatList
        data={cart} 
        renderItem={({item}) => <CartListItem cartItem={item}/>}
        ListFooterComponent={() => (
            <View style={styles.totalContainer}>
                <View style={styles.row}>
                    <Text style={styles.text}>Subtotal</Text>
                    <Text style={styles.text}>410,00 US$</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Delivery</Text>
                    <Text style={styles.text}>10,00 US$</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>420,00 US$</Text>
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