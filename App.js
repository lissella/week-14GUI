import React from 'react'
import {View,Text} from 'react-native'

 const App=()=>{
   return(
     <View>
       <image
       style={{width:450,height:150}}
       source={require('./images/mydrams.jpg')} 
       />
      <image
      style={{width:100,height:150}}
      source={{uri:'https://images.unsplash.com/photo-1593938740948-2f3e070242d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80'}}
    />
     </View>
   )
 }
 export default App