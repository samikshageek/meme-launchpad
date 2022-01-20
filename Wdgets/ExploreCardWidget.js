import  React,{useEffect , useState} from 'react';
import { View , Text , StyleSheet ,SafeAreaView ,FlatList , Dimensions, Pressable } from 'react-native';
import {Button , Card , Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ExploreCardComponent = (props) =>{
  

    const navigation = useNavigation();
      const [DATA, setDATA]= useState([
          {
              id : 1 ,
              url : "ve-veranda.gif",
              text:"reaction",
              requestOptions :{
                  body:"",
                  method: "POST",
                  headers:{'Content-Type': "application/json"}
                }
          },
          {
              id: 2 ,
              url: "ve-veranda.gif",
              text : "wfh",
              requestOptions :{
                  body:"",
              method: "POST",
              headers:{'Content-Type': "application/json"}
            }
          },
          {
              id:3 ,
              url : "ve-veranda.gif",
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
      );
      
      let  template=[]; 
      
      const fetchTemplate = (element) => {
         
        fetch("https://fun-meme-api.herokuapp.com/memes/ExploreTemplate",element.requestOptions)
        .then(response =>{
            response.json().then(data =>{
                console.log("fetchedTemplate", data);
                element.url = data.url;
                template.push({ 
                    url : data.url,
                    text: element.text,
                    requestOptions :{
                        body:JSON.stringify({memeType :element.text +"Template"}),
                        method: "POST",
                        headers:{'Content-Type': "application/json"}
                      }});
                      
                      if(template.length === 4)
                       setDATA(template);
            })
            
        })
       
      }

      useEffect(() =>{
        

         DATA.forEach(element => {
            element.requestOptions.body = JSON.stringify({
                memeType :element.text+"Template"
            })
              
         });
        
       

        DATA.map(fetchTemplate);
       
     
      },[])
      const renderItem = ({item}) =>(
             <View style = {styles.container} >
                 <Pressable onPress={() => navigation.navigate('Memes')}> 
                   <Card>
                <Card.Content>
                   
                    <Title> {item.text} </Title>
                    <Card.Cover source={ { uri : item.url}} />
                </Card.Content>
            </Card> 
            </Pressable>
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