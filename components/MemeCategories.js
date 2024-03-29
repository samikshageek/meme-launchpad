import React , {useState, useEffect} from 'react';
import {Button , Text , View , SafeAreaView , ScrollView , StyleSheet , Image , ImageBackground, Dimensions} from 'react-native';
import ImgLayout from './MemeImageLayout';

const background = { uri: "https://reactjs.org/logo-og.png" };
const screenWidth = Dimensions.get('window').width ;
const screenHeight = Dimensions.get('window').height ;



const MemeCategory = (props) => {
  
  // const [category, setCategory]= useState([
  //   {"Trending Now": "working-from-home-wfh.gif"},
  // {"Popular Templates": "sleepy-tired.gif"},
  //  {"Wedding Templates": "crayon-shinchan.gif"},
  //  {"Classic Templates": "tkthao219-bubududu.gif"},
  //  {"Birthday Templates": "appy-birthday-sparkle.gif"}])


   const [category, setCategory]= useState([])

   const requestOptions={
     method:"POST",
     headers: { 'Content-Type': 'application/json' },
   }

   let templates = [];
   let fetchedCatgory=[]

   const fetchCategoriesTemplate = async(item) => {
     let currentItem = Object.keys( item);
     let indexOfSpace = currentItem[0].indexOf(' ') ;

    
     //console.log("memeTypeToFetch ",currentItem[0] , currentItem[0].indexOf(' '), currentItem[0].substring(0 , indexOfSpace) )

       await fetch("https://fun-meme-api.herokuapp.com/memes/ExploreTemplate", {
         method:"POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify( {memeType: currentItem[0].substring(0 , indexOfSpace) + "Template"} )
         
       }).then(response => {
         response.json()
         .then(data => {
           //console.log("d",data);
           templates.push({[currentItem[0]] : data.url});

           if(templates.length === 5){
             setCategory(templates)
           }
          })})
         
   }

   const fetchCategoriesDynamically = () => {

    fetch("http://fun-meme-api.herokuapp.com/allTemplates")
    .then(response =>{
        response.json().then(data =>{
             

            data.forEach(item => {
               if(item.templateName.includes("Category") || item.templateName.includes("category")){
              
                let obj ={}
                obj[item.text] = item.url
                fetchedCatgory.push(obj)

               }
                
            })

            
            if(fetchedCatgory.length > 0){
              setCategory(fetchedCatgory)
            }
                 
        })
        
    })




   }

   useEffect(() =>{
     
    fetchCategoriesDynamically() //Version 1.3 making categories Dynamic
    //category.map(fetchCategoriesTemplate); //v1.3 commented this line

   },[])

    return(
      
 <SafeAreaView > 
     <ScrollView >
  <View style={styles.container}>
  <Text style={styles.text}>Select Template</Text>
    
    <ImageBackground source={ require('../components/stars.png')} >
    

      <ImgLayout categories={category}/>

    </ImageBackground>
    
    
  </View>
    </ScrollView>
  </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1 
    },
      image: {
       
        width: screenWidth,
        height : screenHeight
    
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "black"
      }
    ,
    ScrollView : {
      
        marginHorizontal : 20
   },
    tinyLogo: {
        width:100,
        height:100,
   },
})

export default MemeCategory ;