import  React,{useEffect , useState} from 'react';
import { View , Text , StyleSheet ,SafeAreaView ,FlatList , Dimensions } from 'react-native';
import {Button , Card , Title } from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ExploreCardComponent = () =>{
  


      const DATA= [
          {
              id : 1 ,
              url : "https://c.tenor.com/j__DWnP3UAIAAAAS/ve-veranda.gif",
              text:"Reaction"
          },
          {
              id: 2 ,
              url: "https://c.tenor.com/j__DWnP3UAIAAAAS/ve-veranda.gif",
              text : "WFH"
          },
          {
              id:3 ,
              url : "https://c.tenor.com/j__DWnP3UAIAAAAS/ve-veranda.gif",
              text : "Everything is fine"
          },
          {
              id : 4 ,
              url : "https://c.tenor.com/j__DWnP3UAIAAAAS/ve-veranda.gif",
              text :"Sips Tea"
          }
      ]
     
      const requestOptions ={
          method: "POST",
          headers:{'Content-Type': "application/json"},
          body :JSON.stringify({ memeType : "reactionTemplate", "url" : "https://c.tenor.com/l_2ceqoufGoAAAAC/monsters-inc-boo.gif"})
      }
      useEffect(() =>{
         fetch("https://fun-meme-api.herokuapp.com/memes/ExploreTemplate", requestOptions)
         .then(response =>{
             console.log(response)
             response.json().then(data =>console.log(data));
         })
      })
      const renderItem = ({item}) =>(
             <View style = {styles.container} >
                   <Card>
                <Card.Content>
                   
                    <Title> {item.text} </Title>
                    <Card.Cover source={ { uri : item.url}} />
                </Card.Content>
            </Card> 
             </View>
      )

    return(
        <View>
         

            <SafeAreaView> 
                <FlatList data={DATA}
                 renderItem={renderItem} horizontal= {true} />
            </SafeAreaView>
        </View>
    )
}


const styles = StyleSheet.create({

    container : {
        width: screenWidth- (screenWidth / 3) ,
        marginBottom: 20,
        marginEnd : 10
        
    }
    
})
export default ExploreCardComponent;