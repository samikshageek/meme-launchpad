import  React,{useEffect , useState} from 'react';
import { View , Text , StyleSheet ,SafeAreaView ,FlatList , Dimensions, Pressable } from 'react-native';
import {Button , Card , Title , ActivityIndicator} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ExploreCardComponent = (props) =>{
  

    const navigation = useNavigation();
    const [animating , setAnimating] = useState(true);
      const [DATA, setDATA]= useState([
          {
              id : 1 ,
              url : "ve-veranda.gif",
              text:"reaction",
              requestOptions :{
                  body:"",
                  method: "POST",
                  headers:{'Content-Type': "application/json"}
                },
                background:"white"
          },
          {
              id: 2 ,
              url: "ve-veranda.gif",
              text : "wfh",
              requestOptions :{
                  body:"",
              method: "POST",
              headers:{'Content-Type': "application/json"},
              background:"white"
            }
          },
          {
              id:3 ,
              url : "ve-veranda.gif",
              text : "stayHome",
              requestOptions :{
                  body:"",
                  method: "POST",
                  headers:{'Content-Type': "application/json"},
                  background:"white"
             }
          },
          {
              id : 4 ,
              url : "j__DWnP3UAIAAAAS/ve-veranda.gif",
              text :"foodie",
              requestOptions :{
                  body:"",
                  method: "POST",
                  headers:{'Content-Type': "application/json"} ,
                  background:"white"
              }
          }
      ]
      );
      
      let  template=[]; 
      
      const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
        return `#${randomColor}`;
      };


      const fetchTemplate = (element) => {
         
        fetch("https://fun-meme-api.herokuapp.com/memes/ExploreTemplate",element.requestOptions)
        .then(response =>{
            response.json().then(data =>{
                // console.log("fetchedTemplate", data);
                element.url = data.url;
                template.push({ 
                    url : data.url,
                    text: element.text,
                    requestOptions :{
                        body:JSON.stringify({memeType :element.text +"Template"}),
                        method: "POST",
                        headers:{'Content-Type': "application/json"}
                      },
                      background:generateColor()
                    });
                      
                      if(template.length === 4)
                       setDATA(template);
            })
            
        })
       
      }

      const fetchTemplateDynamically = () => {
         
        fetch("http://fun-meme-api.herokuapp.com/allTemplates")
        .then(response =>{
            response.json().then(data =>{
                // console.log("fetchedTemplate", data);

                data.forEach(item => {

                    template.push({
                        url : item.url,
                        text : item.text,
                        requestOptions :{
                            body:JSON.stringify({memeType :item.text+"Template"}),
                            method: "POST",
                            headers:{'Content-Type': "application/json"}
                          },
                        background:generateColor()
                    })
                })
 
                      
                      if(template.length > 2 )
                       setDATA(template);
            })
            
        })
       
      }

      useEffect(() =>{
        
        /*this code used in first and second version*/
        

        //  DATA.forEach(element => {
        //     element.requestOptions.body = JSON.stringify({
        //         memeType :element.text+"Template"
        //     })
              
        //  });
        

        // DATA.map(fetchTemplate);

        /*this code used in first and second version*/

        fetchTemplateDynamically() //Dynamically Fetch template Categories .Applicable from 3rd version onwards
       
        setTimeout(()=> setAnimating(false),7500)
      },[])
      const renderItem = ({item}) =>(
             <View style = {styles.container} >
                 <Pressable onPress={() => navigation.navigate('Memes',{ memeSelected : item.text})}> 
                   <Card>
                <Card.Content style={{ backgroundColor: item.background ,borderRadius:40}}>
                   
                    <Title style={{textTransform:"capitalize",color:"white"}}> {item.text} </Title>
                    { animating?  <ActivityIndicator  animating={animating} color="blue" size="large" /> : 
                    <Card.Cover source={ { uri : item.url}} /> }
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