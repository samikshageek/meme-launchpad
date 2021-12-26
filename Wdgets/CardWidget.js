import * as React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


    

const CardComponent = (props) =>{
    return(

    <View>
         {console.log("props.Item", props.Item)}
         
            <Card>
          <Card.Content>
          <Title>{props.Item}</Title>
          <Paragraph>Card content</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://c.tenor.com/RKxRzqKF_U4AAAAC/live-live-stream.gif' }} />
          <Card.Actions>
          <Button>Cancel</Button>
         <Button>Ok</Button>
          </Card.Actions>
           </Card>
  
   
   
    </View>
    )
}

export default CardComponent