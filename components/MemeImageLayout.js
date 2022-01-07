import { Hub } from '@babel/traverse';
import React, { useState } from 'react';
import {Text , View, Button , TouchableOpacity,StyleSheet ,AccessibilityActionEvent, Alert} from 'react-native';
import { Card } from 'react-native-paper';
import CardComponent from '../Wdgets/CategoriesCardWidget';
import ExploreCardComponent from '../Wdgets/ExploreCardWidget';
import SearchBoxComponent from './searchbarComponent';



const ImgLayout = (props) => {

    const [selectedTemplate, setTemplate] = useState('');

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ title: 'React POST Request Example' })
    };

    callMemeApi = (item) =>{
        Alert.alert(item + " pressed");
    
       fetch("https://fun-meme-api.herokuapp.com/trending", requestOptions)
        .then(response => {
            console.log(response);
            response.json().then(data => {
                console.log(data);
            })
        })

        
        

        
    }
   
    

    return(
        <View style={styles.mainStyle}>
            <View style ={styles.row}> 
        
            {/* {props.category.map(item => (
                <TouchableOpacity key={item} style={[styles.button, selectedTemplate === item && styles.selected]}  onPress ={() => {
                    setTemplate(item);
                    //Alert.alert(item + " pressed");
                   {this.callMemeApi(item)};
                }}>
                <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            )
           
             )} */}
        

            </View>
            <View style={styles.searchbar}>
               <SearchBoxComponent />
            </View>

            <ExploreCardComponent />
            
            {props.categories.map(item => (
                 <CardComponent category ={item} key={Object.keys(item)}/>
            ))}
        
        </View>
    )
}

const styles = StyleSheet.create({
    mainStyle :{
      
      flex: 1,
      padding:10
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
      },
    text:{
        color : 'black',
        fontSize: 42
    },
    row:{
        flexDirection:'row',
        flexWrap : 'wrap'
    },
    selected : {
        backgroundColor : 'coral',
        borderWidth : 0
    },
    searchbar:{
        marginBottom :"5%"
    }

})

export default ImgLayout;