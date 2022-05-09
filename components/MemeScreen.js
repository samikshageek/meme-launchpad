import React ,{useState, useEffect} from "react";
import { Text ,View , StyleSheet ,SafeAreaView, ScrollView, Dimensions ,Pressable} from 'react-native'
import { Card , Avatar ,Button ,Title, FAB , ActivityIndicator} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";

const screenWidth= Dimensions.get('window').width;
const screenHeight= Dimensions.get('window').height ;
const MemesDisplayScreen = (props)=>{

  const navigation = useNavigation();
  const selectedMeme = props.navigation.route.params.memeSelected;
  const [markAsFavourite, setMarkAsFavourite] = useState('white');
  const [fetchedMemes , setFetchedMemes] = useState([]);
  const [animating , setAnimating] = useState(true);
  const requestOptions ={
    method:"POST",
    headers:{ 'Content-Type': 'application/json' },
    body: JSON.stringify({memeType: selectedMeme})
  }
  const fetchMemes = () => {
     fetch("https://fun-meme-api.herokuapp.com/memes/ExploreMemes",requestOptions)
     .then(response =>{
       //console.log(response);
       response.json().then(data => {
         //console.log("data",data);

        let fetchedMemes =[];
         data.forEach(element => {
           fetchedMemes.push(element.url);
         });
         
          
           if(fetchedMemes.length === data.length)
           setFetchedMemes(fetchedMemes)

        });
     })
  }

   useEffect(() =>{
     fetchMemes();
     setTimeout(()=> setAnimating(false),1600)
   },[])

   return(
     <SafeAreaView >
       {/* {console.log(selectedMeme)} */}
       
      { animating?  <ActivityIndicator  animating={animating} color="blue" size="large" /> : 
      <ScrollView>
           <View style={Styles.safeArea}>
       <View style={Styles.container}>

       {fetchedMemes.map(item => (
           <Card style={Styles.card} key={item}>
             <Pressable onPress={()=> navigation.navigate("Preview", {pickedMeme: item})}>
             <Card.Cover source={{uri: item}} />
             </Pressable>
           </Card>
         ))}
         </View>
       </View>
      </ScrollView>  }

      
       {/* <ScrollView >
         <View style={Styles.safeArea}>
       <View style={Styles.container}>
       
         {fetchedMemes.map(item => (
           <Card style={Styles.card}>
             <Card.Actions>
              <FAB style={Styles.fab} small icon="heart" color={markAsFavourite}  onPress={() => setMarkAsFavourite('red') }/>
             </Card.Actions>
             <Card.Cover source={{uri: item}} />
           </Card>
         ))} */}

         {/* <Card style={Styles.card}>
          <Card.Actions>
             <FAB style={Styles.fab} small icon ="heart" color= {markAsFavourite} onPress={() => setMarkAsFavourite('red') } />
         </Card.Actions>
           <Card.Cover source={{ uri : "https://c.tenor.com/gjS0GNgAeM4AAAAC/stay-home-home.gif"}} />
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
         </Card> */}
         
       {/* </View>
       </View>
       </ScrollView> */}
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
    //height: screenHeight/4,
    height: screenHeight-500,
    width: "50%",
    position:"relative",
    borderColor:"green",
    borderWidth:2.5,
   borderTopColor:"#9EFD38",
    borderBottomColor:"#9EFD38",
   marginBottom:20
   
  }
 
})