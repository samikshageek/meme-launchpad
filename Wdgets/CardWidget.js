import * as React from 'react';
import { View ,Text, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


    

const CardComponent = (props) =>{
    return(

    <View>
         {/* {console.log("props.Item", props.Item)} */}
         {console.log("props.temp", props.temp[Object.keys(props.temp)], Object.keys(props.temp) ) }
          
         <Card>
          <Card.Content>
          <Title>{Object.keys(props.temp)}</Title>
          
          </Card.Content>
          <Card.Cover source={{ uri: props.temp[ Object.keys( props.temp ) ] }} />
          <Card.Actions>
          <Button>Cancel</Button>
         <Button>Ok</Button>
          </Card.Actions>
           </Card>
   
   
    </View>
    )
}

export default CardComponent