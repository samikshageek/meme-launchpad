import  React, {useState,useEffect} from 'react';
import { View ,Text, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph ,ActivityIndicator} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

    

const CardComponent = (props) =>{
    
    const navigation = useNavigation();
    let currentItem = Object.keys( props.category);
    let indexOfSpace = currentItem[0].indexOf(' ') ;
    const [animating , setAnimating] = useState(true);
    
   useEffect(() =>{
    
    setTimeout(()=> setAnimating(false),7500)
  },[])

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };
  
    return(

    <View>
         {/* {console.log("props.Item", props.Item)} */}
         {/* {console.log("props.temp", props.category[Object.keys(props.category)], Object.keys(props.category) , currentItem) } */}
         
         <Card style={{ marginBottom: "7%",borderRadius:30, backgroundColor:generateColor()}}>
          <Card.Content>
          <Title style={{color:"white"}}>{Object.keys(props.category)}</Title>
          
          </Card.Content>
          { animating?  <ActivityIndicator  animating={animating} color="blue" size="large" /> : 
          <Card.Cover source={{ uri: props.category[ Object.keys( props.category ) ] }} />}
          <Card.Actions>
           <Button onPress={() => navigation.navigate('Memes', {memeSelected: currentItem[0].substring(0 , indexOfSpace) })}>Select</Button>
        
          </Card.Actions>
           </Card>

   
    </View>
    )
}

export default CardComponent