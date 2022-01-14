import React , {useState, useEffect} from "react";
import {View , Text , StyleSheet, ImageBackground} from 'react-native';
import { Switch , Card , Divider} from "react-native-paper";

const Settings = ()=>{
   
    const [isSwitchOn, setIsSwitchOn] = useState(false);
  
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn)
    }

   return(
       <View style={styles.container}>
          <Card style={styles.card}>
              
              <View  style={styles.mainView}>
            <Text style={styles.baseText}>Toggle Theme</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
          <Divider />
           <View style={styles.legal}>
               <Text style={styles.baseText}> Legal & About</Text>
               <Text>© 2022 Samiksha Ranjan. All rights reserved.</Text>
           </View>
          </Card>
          
       </View> 
   )
}

export default Settings ;

const styles = StyleSheet.create({
    baseText:{
        fontFamily: "Cochin",
        fontSize :20 ,
        fontWeight: "bold",
        paddingBottom: 20
    },
    mainView:{
     paddingTop:30,
     paddingLeft :30,
     paddingRight : 30,
     flexDirection: 'row',
     justifyContent :"space-between"
     
    },
    container:{
       flex:1
    },
    card:{
        margin:23,
        backgroundColor:"#D3D3D3",
        borderRadius: 10
    },
    legal:{
        paddingTop:30,
        paddingLeft :30,
        paddingBottom:10
    }
})