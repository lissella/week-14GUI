import React from 'react'
import {View,Text} from 'react-native'

const FlexDirection=()=>{
   return(
    <View style={{flex:1,alignItems:'center'}}>
    <View style={{width:50,height:50,backgroundColor:'#daa520'}}></View>
    <View style={{width:100,height:100,backgroundColor:'#808000'}}></View>
    </View>
   )
}

const App=()=>{
  return(
    <View>
        <FlexDirection />
    </View>
  )
}
export default App