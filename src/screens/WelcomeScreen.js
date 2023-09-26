import {  StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {withSpring, useSharedValue} from 'react-native-reanimated';


const WelcomeScreen = () => {

  const ring1padding = useSharedValue(0);
  const ring2padding = useSharedValue(0);

  useEffect(()=>{
    setTimeout(()=>ring1padding.value=withSpring(ring1padding.value+hp(5)), 100)
  },[])


  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-amber-500">
    <StatusBar style='light'/>

{/* logo image */}
<Animated.View className="bg-white/20 rounded-full" style={{padding:ring2padding}}>
  <Animated.View className="bg-white/20 rounded-full " style={{padding:ring1padding}}>
    <Image source={require('../../assets/images/welcome.png')} style={{height:hp(20), width:hp(20),}}/>
  </Animated.View>
</Animated.View>


{/* title and punch line */}
    <View className="flex items-center space-y-2 ">
      <Text style={{fontSize:hp(7)}} className="font-bold  text-white tracking-widest">Foody</Text>
      <Text  style={{fontSize:hp(2)}} className="font-medium text-white tracking-widest">Food is always right</Text>
    </View>

    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})