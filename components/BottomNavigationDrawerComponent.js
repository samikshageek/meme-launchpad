import * as React from 'react';
import { BottomNavigation , Text } from 'react-native-paper';
import { View , StyleSheet , Dimensions} from'react-native' ;
import MemeCategory from './MemeCategories';
import Icon from 'react-native-vector-icons/FontAwesome';
import Settings from './settingsScreen';

const homeRoute = () => (
    <MemeCategory />
);

const favouritesRoute = () => (
    <Text> Favourites </Text>
)

const settingsRoute = () => (
    <Settings />
)

const screenWidth = Dimensions.get('window').width ;
const screenHeight = Dimensions.get('window').height ;

const BottomDrawerNavigator = () => {
   
    const [index ,  setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key : "home", title:"Home" , icon : 'home' ,  color: '#3F51B5'  },
        { key : "favourites", title : "Favourites" ,icon : 'heart' ,  color: '#795548'},
        { key : "settings", title : 'Settings' , icon : 'cogs' , color :  '#607D8B' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        'home': homeRoute ,
        'favourites' : favouritesRoute,
        'settings' : settingsRoute
    })

   
    return(
    <View style ={{ height: screenHeight, paddingBottom : 64} }>
        <BottomNavigation 
         navigationState = {{ index , routes}}
         onIndexChange = { setIndex }
         renderScene={ renderScene}
         activeColor='yellow'
         />
    </View>
    )
}

export default BottomDrawerNavigator ; 

const styles = StyleSheet.create({
    container :{
        flex : 1
    }
})