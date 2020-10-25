
import React from "react";
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack'
import AlbumsListContainer from "../ui/components/albums_list/AlbumsListContainer";


const Stack = createStackNavigator();


const AppContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'AlbumsList'} component={AlbumsListContainer} options={{ headerLeft: null }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppContainer;
