import { Hub } from '@babel/traverse';
import React, { useState } from 'react';
import {Text , View, Button , TouchableOpacity,StyleSheet} from 'react-native';

const ImgLayout = (props) => {

    const [selectedTemplate, setTemplate] = useState('');
    return(
        <View style={styles.mainStyle}>
            <View style ={styles.row}> 
        
            {props.category.map(item => (
                <TouchableOpacity key={item} style={[styles.button, selectedTemplate === item && styles.selected]}  onPress ={() => {
                    setTemplate(item)
                }}>
                <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            )
           
             )}
        

            </View>
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
    }

})

export default ImgLayout;