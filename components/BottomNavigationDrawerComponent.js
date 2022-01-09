import * as React from 'react';
import { BottomNavigation , Text } from 'react-native-paper';
import { View , StyleSheet , Dimensions} from'react-native' ;
import MemeCategory from './MemeCategories';


const homeRoute = () => (
    <MemeCategory />
);

const favouritesRoute = () => (
    <Text> Favourites </Text>
)

const settingsRoute = () => (
    <Text> Settings </Text>
)

const screenWidth = Dimensions.get('window').width ;
const screenHeight = Dimensions.get('window').height ;

const BottomDrawerNavigator = () => {
   
    const [index ,  setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key : "home", title:"Home" , icon : 'access-point-network' ,  color: '#3F51B5'  },
        { key : "favourites", title : "Favourites" ,icon : 'history' ,  color: '#795548'},
        { key : "settings", title : 'Settings' , icon : 'settings-helper' , color :  '#607D8B' }
    ]);

    const renderScene = BottomNavigation.SceneMap({
        'home': homeRoute ,
        'favourites' : favouritesRoute,
        'settings' : settingsRoute
    })
  
    return(
    <View style ={{ height: screenHeight, paddingBottom : 8} }>
        <BottomNavigation 
         navigationState = {{ index , routes}}
         onIndexChange = { setIndex }
         renderScene={ renderScene}
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