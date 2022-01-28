import React,{useState, useEffect} from "react";
import { Text , View ,StyleSheet , Dimensions, ScrollView,Image} from 'react-native';
import { Card , Title, TextInput, ToggleButton , Button} from 'react-native-paper';
import Share from 'react-native-share';
import RNFetchBlob from "rn-fetch-blob";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width ;

const AddText = (props) =>{
    
    const fs = RNFetchBlob.fs;
    const [base64encodedString, setBase64String] = useState("");
    const pickedMeme = props.navigation.route.params.pickedMeme;

    const customShare = async() =>{

        let imagePath ="";
    RNFetchBlob.config({

        fileCache: true
      
      }).fetch("GET", pickedMeme)       // the file is now downloaded at local storage
      
      .then(resp => {
      
      imagePath = resp.path();                // to get the file path
      
      return resp.readFile("base64");      // to get the base64 string
      
      })
      
      .then(base64 => {
      
      // here base64 encoded file data is returned
      
      setBase64String('data:image/gif;base64,'+ base64)
      return fs.unlink(imagePath);          // to remove the file from local storage
      
      });

      const shareOptions = {
          
          url : base64encodedString
      }
      
      try{
          const shareResponse = await Share.open(shareOptions);
          console.log(JSON.stringify(shareResponse))
      }
      catch(error){
          console.log("error");
      }
    };

    
    const [topText , setTopText] = useState("");
    const [bottomText , setBottomText] = useState("");
    const [toggleValue , setToggleValue] = useState('left');

    useEffect(() => {
        
        RNFetchBlob.config({
    
            fileCache: true
          
          }).fetch("GET", pickedMeme)       // the file is now downloaded at local storage
          
          .then(resp => {
          
          imagePath = resp.path();                // to get the file path
          
          return resp.readFile("base64");      // to get the base64 string
          
          })
          
          .then(base64 => {
          
          // here base64 encoded file data is returned
          
          setBase64String('data:image/gif;base64,'+ base64)
          return fs.unlink(imagePath);          // to remove the file from local storage
          
          });
    
          
    },[])

    return(
        <>
        {console.log("pickedMeme", pickedMeme, base64encodedString)}
        <ScrollView style = {Styles.container}>
        <TextInput type="outlined" label ="Enter Text" value={topText} onChangeText={text => setTopText(text)} style={{marginBottom:20}} s/>
        <View style={{flexDirection:"row"}}> 
           <Card style={Styles.card}>
           <Card.Content>
               <Title>{topText}</Title>
           </Card.Content>
              <Card.Cover source={{ uri : pickedMeme}} />
           </Card>
          <View style={Styles.toggleButtons} >
           <ToggleButton.Group value={toggleValue} onValueChange={value => setToggleValue(value)}>
             <ToggleButton icon ="share" value="left" onPress={customShare}/>
             <ToggleButton icon ="download" value="right" />
             <ToggleButton icon="heart" value="" />
           </ToggleButton.Group>
           </View>
        </View>
        {/* <TextInput type ="outlined" label ="Enter Bottom Text" value={bottomText} onChangeText={text => setBottomText(text)} style={{marginTop:70}} /> */}
         <View style={Styles.buttons}>
         {/* <Button icon="plus" mode="outlined">Add Text </Button> */}
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
        marginTop:100,
        justifyContent:"center"
    },
    text:{
        fontSize:25
    }
    
})