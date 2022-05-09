import React , {useState , useEffect} from "react";
import {View , StyleSheet} from 'react-native';
import { Switch , Divider } from "react-native-paper";

const ChangeTheme = () => {
    const [isSwitchOn , setIsSwitchOn] = useState(false);

     toggleSwitch = () => {
         setIsSwitchOn(!isSwitchOn);
     }
    return(
        <View>
            <Switch value ={isSwitchOn} onValueChange={toggleSwitch} />
        </View>
    )
}

