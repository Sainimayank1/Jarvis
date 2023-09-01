import {View, Text, Image} from 'react-native';
import React,{useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../Components/Features';

export default function HomeScreen() {
    const [messages,setMessages] = useState("");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-1 mx-5">

        {/* Bot Image */}
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/bot.png')}
            style={{height: hp(15), width: hp(15)}}></Image>
        </View>

        {/* Messages */}
        {
            messages.length > 0 ?
            <View></View>
            :
            <Features/>

        }
      </View>
    </SafeAreaView>
  );
}
