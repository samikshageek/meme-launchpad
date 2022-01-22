import React from "react";
import { Text ,View , StyleSheet ,SafeAreaView, ScrollView, Dimensions} from 'react-native'
import { Card , Avatar ,Button ,Title} from 'react-native-paper';


const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height ;
const MemesDisplayScreen = (props)=>{


   return(
     <SafeAreaView >
       <ScrollView >
         <View style={Styles.safeArea}>
       <View style={Styles.container}>
         
         <Card style={Styles.card}>
           <Card.Cover source={{ uri : "https://c.tenor.com/ZDM5ya38ckcAAAAd/golden-girls-weekend.gif"}} />
         </Card>
         
         
         <Card style={Styles.card}>
            <Card.Cover source={{uri : "https://c.tenor.com/DAwDaIviK6AAAAAC/yeah-baby-funny.gif"}} />
         </Card>

           
         <Card style={Styles.card}>
           <Card.Cover source={{ uri : "https://c.tenor.com/ZDM5ya38ckcAAAAd/golden-girls-weekend.gif"}} />
         </Card>

         <Card style={Styles.card}>
            <Card.Cover source={{uri : "https://c.tenor.com/DAwDaIviK6AAAAAC/yeah-baby-funny.gif"}} />
         </Card>
         
         <Card style={Styles.card}>
           <Card.Cover source={{ uri : "https://c.tenor.com/ZDM5ya38ckcAAAAd/golden-girls-weekend.gif"}} />
         </Card>

         <Card style={Styles.card}>
            <Card.Cover source={{uri : "https://c.tenor.com/DAwDaIviK6AAAAAC/yeah-baby-funny.gif"}} />
         </Card>

         <Card style={Styles.card}>
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
  scrollView: {
   
    backgroundColor: 'green',
    marginHorizontal: 5,
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