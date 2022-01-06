import React, {useState} from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBoxComponent = () =>{
    const [searchQuery , setSearchQuery] = useState('');

    const setsearchString = (query) =>{
       setSearchQuery(query);
    }
    return(
        <Searchbar 
          placeholder='Search Gifs'
          placeholderTextColor={"green"}
          value={ searchQuery }
          onChangeText={ setsearchString }
        />
    )
}


export default SearchBoxComponent;