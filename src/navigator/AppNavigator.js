
import React from "react";
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createStackNavigator
} from '@react-navigation/stack'
import AlbumsListContainer from "../ui/components/albums_list/AlbumsListContainer";
import AlbumDetailsContainer from "../ui/components/album_details/AlbumDetailsContainer";
import DisplayPageContainer from "../ui/components/display_page/DisplayPageContainer";


const Stack = createStackNavigator();


const AppContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'AlbumsList'} component={AlbumsListContainer} options={{ headerLeft: null, title: 'Albums' }}/>
                <Stack.Screen name={'AlbumDetails'} component={AlbumDetailsContainer} options={{ title: 'Album Details' }} />
                <Stack.Screen name={'DisplayPage'} component={DisplayPageContainer} options={{ title: 'Content'}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppContainer;
