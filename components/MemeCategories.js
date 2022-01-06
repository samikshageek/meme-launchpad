import React , {useState} from 'react';
import {Button , Text , View , SafeAreaView , ScrollView , StyleSheet , Image , ImageBackground, Dimensions} from 'react-native';
import ImgLayout from './MemeImageLayout';

const background = { uri: "https://reactjs.org/logo-og.png" };
const screenWidth = Dimensions.get('window').width ;
const screenHeight = Dimensions.get('window').height ;

let category=[{"Trending Now": "https://c.tenor.com/olNJM0xe5oAAAAAC/working-from-home-wfh.gif"},
              {"Popular Templates": "https://c.tenor.com/uPUduP9YZegAAAAC/sleepy-tired.gif"},
               {"Blank Templates": "https://c.tenor.com/s8JMqoY6-CoAAAAi/crayon-shinchan.gif"},
               {"Classic Templates": "https://c.tenor.com/OQJmvVwLZ5YAAAAi/tkthao219-bubududu.gif"}]

const MemeCategory = (props) => {
  
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