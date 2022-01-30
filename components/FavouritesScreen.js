import React , {useState, useEffect} from "react";
import {View , Text , StyleSheet } from 'react-native';
import { FlatGrid } from "react-native-super-grid";

const Favourites = () => {
  return(
      <View>
          <Text>Favourites</Text>
          <FlatGrid
            itemDimension={130}
            data={[1,2,3,4,5,6,7,8,9,10]}
            renderItem={({ item }) => (<Text>{item}</Text>)}
          />
      </View>
  )
}
export default Favourites;