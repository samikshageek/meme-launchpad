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
              text:"reaction",
              requestOptions :{
                  body:"",
                  method: "POST",
                  headers:{'Content-Type': "application/json"}
                }
          },
          {
              id: 2 ,
              url: "https://c.tenor.com/j__DWnP3UAIAAAAS/ve-veranda.gif",
              text : "wfh",
              requestOptions :{
                  body:"",
              method: "POST",
              headers:{'Content-Type': "application/json"}
            }
          },
          {
              id:3 ,
              url : "https://c.tenor.com/j__DWnP3UAIAAAAS/ve-veranda.gif",
              text : "stayHome",
              requestOptions :{
                  body:"",
                  method: "POST",
                  headers:{'Content-Type': "application/json"}
             }
          },
          {
              id : 4 ,
              url : "https://c.tenor.com/j__DWnP3UAIAAAAS/ve-veranda.gif",
              text :"foodie",
              requestOptions :{
                  body:"",
                  method: "POST",
                  headers:{'Content-Type': "application/json"}
              }
          }
      ]
     
     
      useEffect(() =>{
        

         DATA.forEach(element => {
            element.requestOptions.body = JSON.stringify({
                memeType :element.text+"Template"
            })
              
         });
        
        DATA.forEach(element =>{
            fetch("https://fun-meme-api.herokuapp.com/memes/ExploreTemplate",element.requestOptions)
            .then(response =>{
                    response.json().then(data => console.log("data",data));
                })
             
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