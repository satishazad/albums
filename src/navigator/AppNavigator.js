
import React from "react";
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack'
import AlbumsListContainer from "../ui/components/albums_list/AlbumsListContainer";
import AlbumDetailsContainer from "../ui/components/album_details/AlbumDetailsContainer";


const Stack = createStackNavigator();


const AppContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'AlbumsList'} component={AlbumsListContainer} options={{ headerLeft: null, title: 'Albums' }}/>
                <Stack.Screen name={'AlbumDetails'} component={AlbumDetailsContainer} options={{ title: 'Album Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppContainer;
