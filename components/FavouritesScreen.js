import React , {useState, useEffect} from "react";
import {View , Text , StyleSheet, Image , Dimensions, Pressable} from 'react-native';
import { FlatGrid } from "react-native-super-grid";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height
const Favourites = () => {

  const [Data, setData] = useState([
    {
      
      url : "https://c.tenor.com/FLiOgvNDxz4AAAAi/take-care-flowers.gif",
      favourite: true
    },
    {
     
      url : "https://c.tenor.com/YVLHwJrBkq0AAAAi/stay-home-stay-safe.gif",
      favourite:true
    },
    {
      
      url : "https://c.tenor.com/LjhaLjAdrQgAAAAC/winnie-the-pooh-hungry.gif",
      favourite:true
    },
    {
      
      url :"https://c.tenor.com/-ezRhDTRAbwAAAAi/foodbyjag-jagyasini-singh.gif",
      favourite:true
    }

  ]);

  const renderItem = (item) => {
          return(
            <Pressable onPress={() => console.log("Radhe Radhe")}>
            <Image source={{uri : item.item.url}}  style={{width: "50%", height: "50%" ,paddingBottom:60}} />
            </Pressable>
          )
          

        
       
  }

  return(
      <View>
          <FlatGrid
            itemDimension={130}
            data={Data}
            renderItem={renderItem}
          />
      </View>
  )
}
export default Favourites;