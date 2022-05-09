import React,{useState, useEffect} from "react";
import { Text , View ,StyleSheet , Dimensions, ScrollView,Image , Platform, PermissionsAndroid} from 'react-native';
import { Card , Title, TextInput, ToggleButton , Button} from 'react-native-paper';
import Share from 'react-native-share';
import RNFetchBlob from "rn-fetch-blob";
import CameraRoll from "@react-native-community/cameraroll";
import { useNavigation } from "@react-navigation/native";

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width ;

const AddText = (props) =>{
    
  const navigation= useNavigation();
    const fs = RNFetchBlob.fs;
    const [base64encodedString, setBase64String] = useState("");
    const pickedMeme = props.navigation.route.params.pickedMeme;

    const customShare = async() =>{

    //     let imagePath ="";
    // RNFetchBlob.config({

    //     fileCache: true
      
    //   }).fetch("GET", pickedMeme)       // the file is now downloaded at local storage
      
    //   .then(resp => {
      
    //   imagePath = resp.path();                // to get the file path
      
    //   return resp.readFile("base64");      // to get the base64 string
      
    //   })
      
    //   .then(base64 => {
      
    //   // here base64 encoded file data is returned
      
    //   setBase64String('data:image/gif;base64,'+ base64)
    //   return fs.unlink(imagePath);          // to remove the file from local storage
      
    //   });

      const shareOptions = {
          
          url : base64encodedString
      }
      
      try{
        if(base64encodedString !== ""){
          const shareResponse = await Share.open(shareOptions);
          //console.log(JSON.stringify(shareResponse))
        }
     
      }
      catch(error){
          //console.log("error");
      }
    };
    
    const hasAndroidPermission = async() => {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return true;
        }
      
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
      
    }

    const saveToGallery = async() => {
      //console.log("Platform",Platform.OS);
     

      let newImgUri = pickedMeme.lastIndexOf('/');
      let imageName = pickedMeme.substring(newImgUri);

      let dirs = RNFetchBlob.fs.dirs;
      let path = Platform.OS === 'ios' ? dirs['MainBundleDir'] + imageName : dirs.PictureDir + imageName;

      if (Platform.OS == 'android' && !(await hasAndroidPermission()) ) {
           return;
        } 
        else {
          

          RNFetchBlob.config({
            fileCache: true,
            appendExt: 'png',
            indicator: true,
            IOSBackgroundTask: true,
            path: path,
            addAndroidDownloads: {
              useDownloadManager: true,
              notification: true,
              path: path,
              description: 'Image'
            },
      
          }).fetch("GET", pickedMeme).then(res => {
           // console.log(res, 'end downloaded')
          });
        }
          
    // if (Platform.OS === "android" && !(await hasAndroidPermission())) {
    //     return;
    //   }
    
    //   CameraRoll.save(path, { type, album })
    }
    
    const [topText , setTopText] = useState("");
    const [bottomText , setBottomText] = useState("");
    const [toggleValue , setToggleValue] = useState('left');

    useEffect(() => {
        
      let isMounted= true;
      let  imagePath ="";
        RNFetchBlob.config({
    
            fileCache: true
          
          }).fetch("GET", pickedMeme)       // the file is now downloaded at local storage
          
          .then(resp => {
          
          imagePath = resp.path();                // to get the file path
          
          return resp.readFile("base64");      // to get the base64 string
          
          })
          
          .then(base64 => {
          
          // here base64 encoded file data is returned
          if(isMounted)
          setBase64String('data:image/gif;base64,'+ base64)
          return fs.unlink(imagePath);          // to remove the file from local storage
          
          });
          return () => { isMounted = false }; 
          
    },[])

    return(
        <>
        {/* {console.log("pickedMeme", pickedMeme)} */}
        <ScrollView style = {Styles.container}>
        {/* <TextInput type="outlined" label ="Enter Text" value={topText} onChangeText={text => setTopText(text)} style={{marginBottom:20}} s/> */}
        <View style={{flexDirection:"column", paddingTop:10}}> 
           {/* <Card style={Styles.card}> */}
           {/* <Card.Content>
               <Title>{topText}</Title>
           </Card.Content> */}
              {/* <Card.Cover source={{ uri : pickedMeme}} /> */}
           {/* </Card>  */}
           <View style={Styles.image}>
             <Image source={{uri : pickedMeme}} style={{width:screenWidth, height:screenHeight/2}} />
           </View>
          <View style={Styles.toggleButtons} >
           <ToggleButton.Group value={toggleValue} onValueChange={value => setToggleValue(value)}>
             <ToggleButton icon ="share" value="left" onPress={customShare}/>
             <ToggleButton icon ="download" value="right" onPress={saveToGallery}/>
             {/* <ToggleButton icon="heart" value="" /> */}
           </ToggleButton.Group>
           </View>
        </View>
        {/* <TextInput type ="outlined" label ="Enter Bottom Text" value={bottomText} onChangeText={text => setBottomText(text)} style={{marginTop:70}} /> */}
         <View style={Styles.buttons}>
         {/* <Button icon="plus" mode="outlined">Add Text </Button> */}
         {/* <Button icon="eye" mode="outlined">Preview</Button> */}
         <Button icon="arrow-left" mode="outlined" onPress={() => navigation.navigate("🚀  Meme Launchpad 🚀 ")}>Back To Home</Button>
         </View>
         </ScrollView>
        </>
    )

}

export default AddText;

const Styles= StyleSheet.create({
    card:{
       width: screenWidth - (screenWidth/4),
       height: screenHeight/4     
       
       
    },
    container :{
        flex:1,
        margin:10
    },
    toggleButtons:{
        margin:10,
        // paddingLeft:20,
        // paddingRight:10
    },
    buttons:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:30,
        justifyContent:"center"
    },
    text:{
        fontSize:25
    },
    image :{ 
       borderWidth:2,
       borderColor:"#0000FF"
      }
    
})