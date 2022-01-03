import * as React from 'react';
import { View ,Text, Image} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


    

const CardComponent = (props) =>{
    return(

    <View>
         {console.log("props.Item", props.Item)}
         <Image source={{uri:'https://media.giphy.com/media/gZEBpuOkPuydi/giphy.gif' }}  style={{ resizeMode: 'cover', width: '100%', height: '40%' }}/>
          
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