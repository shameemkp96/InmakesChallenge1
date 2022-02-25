import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from "./login";
import Register from "./Register";

const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Register'
            component={Register}
            options= {{headerShown:false}}>

            </Stack.Screen>
            <Stack.Screen
            name='login'
            component={Login}>

            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default function App (){
    return(
        <NavigationContainer>
            <MyStack>

            </MyStack>
        </NavigationContainer>
    )
}