import React from 'react'
import {View,Text} from 'react-native'

 const App=()=>{
   return(
     <View style={{
       flex:1,
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'stertch',
     }}>
    
     <View style={{width:50,height:50,backgroundColor:'#daa520'}}></View>
     <View style={{width:50,height:100,backgroundColor:'#808000'}}></View>
     <View style={{width:50,height:150,backgroundColor:'#ba55d3'}}></View>
     </View>
   )
 }
 export default App