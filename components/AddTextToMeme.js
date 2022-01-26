import React,{useState, useEffect} from "react";
import { Text , View ,StyleSheet , Dimensions} from 'react-native';
import { Card , Title, TextInput} from 'react-native-paper';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width ;
const AddText = (props) =>{

    const pickedMeme = props.navigation.route.params.pickedMeme;
    const [topText , setTopText] = useState("");
    const [bottomText , setBottomText] = useState("");

    return(
        <>
        {console.log("pickedMeme", pickedMeme)}
        <View style = {Styles.container}>
        <TextInput type="outlined" label ="Enter Top Text" value={topText} onChangeText={text => setTopText(text)} style={{marginBottom:20}} s/>
        <Card style={Styles.card}>
           <Card.Cover source={{ uri : pickedMeme}} />
        </Card>
        <TextInput type ="outlined" label ="Enter Bottom Text" value={bottomText} onChangeText={text => setBottomText(text)} style={{marginTop:20}} />
        </View>
        </>
    )

}

export default AddText;

const Styles= StyleSheet.create({
    card:{
        height: screenHeight/4,
        width: screenWidth /2,
        
    },
    container :{
        flex:1,
        margin:20,
        
    }
    
})