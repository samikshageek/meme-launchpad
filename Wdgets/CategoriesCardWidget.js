import * as React from 'react';
import { View ,Text, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


    

const CardComponent = (props) =>{
    return(

    <View>
         {/* {console.log("props.Item", props.Item)} */}
         {console.log("props.temp", props.category[Object.keys(props.category)], Object.keys(props.category) ) }
          
         <Card style={{ marginBottom: "5%"}}>
          <Card.Content>
          <Title>{Object.keys(props.category)}</Title>
          
          </Card.Content>
          <Card.Cover source={{ uri: props.category[ Object.keys( props.category ) ] }} />
          <Card.Actions>
           <Button>Select</Button>
        
          </Card.Actions>
           </Card>
   
   
    </View>
    )
}

export default CardComponent