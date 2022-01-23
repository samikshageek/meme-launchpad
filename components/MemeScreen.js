import React ,{useState} from "react";
import { Text ,View , StyleSheet ,SafeAreaView, ScrollView, Dimensions ,Pressable} from 'react-native'
import { Card , Avatar ,Button ,Title, FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height ;
const MemesDisplayScreen = (props)=>{

  const [markAsFavourite, setMarkAsFavourite] = useState('white');

   return(
     <SafeAreaView >
       <ScrollView >
         <View style={Styles.safeArea}>
       <View style={Styles.container}>
         
         <Card style={Styles.card}>
          <Card.Actions>
             <FAB style={Styles.fab} small icon ="heart" color= {markAsFavourite} onPress={() => setMarkAsFavourite('red') } />
         </Card.Actions>
           <Card.Cover source={{ uri : "https://c.tenor.com/ZDM5ya38ckcAAAAd/golden-girls-weekend.gif"}} />
         </Card>
         
         
         <Card style={Styles.card}>
          <Card.Actions>
            <FAB style={Styles.fab} small icon ="heart" color= {markAsFavourite} onPress={() => setMarkAsFavourite('red') } />
          </Card.Actions>
            <Card.Cover source={{uri : "https://c.tenor.com/DAwDaIviK6AAAAAC/yeah-baby-funny.gif"}} />
         </Card>

           
         <Card style={Styles.card}>
          <Card.Actions>
            <FAB style={Styles.fab} small icon ="heart" color= {markAsFavourite} onPress={() => setMarkAsFavourite('red')}  />
          </Card.Actions>
           <Card.Cover source={{ uri : "https://c.tenor.com/ZDM5ya38ckcAAAAd/golden-girls-weekend.gif"}} />
         </Card>

         <Card style={Styles.card}>
          <Card.Actions>
            <FAB style={Styles.fab} small icon ="heart" color= {markAsFavourite} onPress={() => setMarkAsFavourite('red')}  />
          </Card.Actions>
            <Card.Cover source={{uri : "https://c.tenor.com/DAwDaIviK6AAAAAC/yeah-baby-funny.gif"}} />
         </Card>
         
         <Card style={Styles.card}>
          <Card.Actions>
            <FAB style={Styles.fab} small icon ="heart" color= {markAsFavourite} onPress={() => setMarkAsFavourite('red') } />
          </Card.Actions>
           <Card.Cover source={{ uri : "https://c.tenor.com/ZDM5ya38ckcAAAAd/golden-girls-weekend.gif"}} />
         </Card>

         <Card style={Styles.card}>
         <Card.Actions>
           <FAB style={Styles.fab} small icon ="heart" color= {markAsFavourite} onPress={() => setMarkAsFavourite('red') } />
         </Card.Actions>
            <Card.Cover source={{uri : "https://c.tenor.com/DAwDaIviK6AAAAAC/yeah-baby-funny.gif"}} />
         </Card>

         <Card style={Styles.card}>
          <Card.Actions>
            <FAB style={Styles.fab} small icon ="heart" color= {markAsFavourite} onPress={() => setMarkAsFavourite('red') } />
          </Card.Actions>
           <Card.Cover source={{ uri : "https://c.tenor.com/ZDM5ya38ckcAAAAd/golden-girls-weekend.gif"}} />
         </Card>
         
       </View>
       </View>
       </ScrollView>
    </SafeAreaView>
   )
}

export default MemesDisplayScreen ;

const Styles = StyleSheet.create({
  safeArea:{
   flex:1
  },
  fab:{
   position : "absolute",
   top:0,
   right :0,
   
   backgroundColor:"blue"

  },
  container:{
   display:"flex",
   flexDirection:"row",
   flexWrap:"wrap",
   margin : 10,
   
  },
  card:{
    height: screenHeight/4,
    width: "50%",
    position:"relative",
    borderColor:"orange",
   borderWidth:5
  }
 
})