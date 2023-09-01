import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white justify-around">
      {/* Text */}
      <View className="space-y-3">
        <Text
          style={{fontSize: wp(10)}}
          className="text-center  text-gray-700 font-bold">
          Jarvis
        </Text>
        <Text
          style={{fontSize: wp(3.5)}}
          className="text-center  text-gray-500 font-semibold tracking-widest">
          The Future is here, powered by AI
        </Text>
      </View>

      {/* Image */}
      <View className="items-center">
        <Image
          source={require('../../assets/images/welcome.png')}
          style={{height: wp(75), width: wp(75)}}></Image>
      </View>

      {/* Button */}
      <TouchableOpacity
        className="bg-emerald-600 rounded-2xl mx-5 p-4"
        onPress={() => navigation.push('Home')}>
        <Text
          style={{fontSize: wp(5)}}
          className="text-center text-white font-bold ">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
