import React,{useState, useEffect} from "react";
import { Text , View ,StyleSheet , Dimensions, ScrollView} from 'react-native';
import { Card , Title, TextInput, ToggleButton , Button} from 'react-native-paper';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width ;
const AddText = (props) =>{

    const pickedMeme = props.navigation.route.params.pickedMeme;
    const [topText , setTopText] = useState("");
    const [bottomText , setBottomText] = useState("");
    const [toggleValue , setToggleValue] = useState('left')

    return(
        <>
        {console.log("pickedMeme", pickedMeme)}
        <ScrollView style = {Styles.container}>
        <TextInput type="outlined" label ="Enter Top Text" value={topText} onChangeText={text => setTopText(text)} style={{marginBottom:20}} s/>
        <View style={{flexDirection:"row"}}> 
           <Card style={Styles.card}>
              <Card.Cover source={{ uri : pickedMeme}} />
           </Card>
          <View style={Styles.toggleButtons} >
           <ToggleButton.Group value={toggleValue} onValueChange={value => setToggleValue(value)}>
             <ToggleButton icon ="share" value="left" />
             <ToggleButton icon ="download" value="right" />
             <ToggleButton icon="star" value="" />
           </ToggleButton.Group>
           </View>
        </View>
        <TextInput type ="outlined" label ="Enter Bottom Text" value={bottomText} onChangeText={text => setBottomText(text)} style={{marginTop:20}} />
         <View style={Styles.buttons}>
         <Button icon="plus" mode="outlined">Add Text </Button>
         <Button icon="eye" mode="outlined">Preview</Button>
         </View>
         </ScrollView>
        </>
    )

}

export default AddText;

const Styles= StyleSheet.create({
    card:{
       width: screenWidth - (screenWidth/3),
       height: screenHeight/4,
       
       
    },
    container :{
        flex:1,
        margin:10
    },
    toggleButtons:{
        paddingLeft:20,
        paddingRight:10
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:20
    }
    
})