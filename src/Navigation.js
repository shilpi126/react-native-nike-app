import  React from 'react';
import ProductsScreen from "./screens/productsScreen"
import ProductDetailsScreen from "./screens/productDetailsScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCart from "./screens/ShoppingCart"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { Pressable, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from './store/cartSlice';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const numberOfItems = useSelector(selectNumberOfItems);
  console.log(numberOfItems);


    return (


  <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{contentStyle:{backgroundColor:"white"}}}
      >
        <Stack.Screen 
        name="ProductsScreen" 
        component={ProductsScreen}
        options={ ({navigation}) => ({
          headerRight: () => (
          <Pressable onPress={() => navigation.navigate("ShoppingCart")} style={{flexDirection:"row"}}>
            <FontAwesome5 name="shopping-cart" size={18} color="gray"/>
            <Text style={{marginLeft: 5, fontWeight: "500"}}> {numberOfItems}</Text>
          </Pressable>
        )})}
        />
        <Stack.Screen name="Product Details" 
        component={ProductDetailsScreen}
        options={{presentation:"modal"}}
        />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart}/>
      </Stack.Navigator>
    </NavigationContainer>

    
    )
}

export default Navigation