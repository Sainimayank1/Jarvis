import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../Components/Features';
import {dummyMessages} from '../Constants';

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

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
        {messages.length > 0 ? (
          <View className="flex-1 space-y-2">
            <Text
              style={{fontSize: wp(6.5)}}
              className="text-gray-700 font-semibold tracking-widest ml-1">
              Assistent
            </Text>
            <View
              style={{height: hp(58)}}
              className="rounded-3xl p-4 bg-neutral-200 flex-col items-center">
              <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                className="space-y-2">
                {messages.map((item, index) => {
                  if (item.role == 'assistent') {
                    if (item.content.includes('https')) {
                      return (
                        <View
                          key={index}
                          style={{width: wp(80)}}
                          className="flex-row justify-start">
                          <View className="bg-emerald-200 p-2 rounded-xl rounded-tl-none">
                            <Image
                              source={{uri: item.content}}
                              resizeMode="contain"
                              style={{width: wp(60), height: wp(60)}}
                              className="rouned-2xl"></Image>
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View
                          key={index}
                          style={{width: wp(80)}}
                          className="flex-row justify-start">
                          <View className="bg-emerald-200 p-2 rounded-xl rounded-tl-none">
                            <Text>{item.content}</Text>
                          </View>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View
                        key={index}
                        style={{width: wp(80)}}
                        className="flex-row justify-end">
                        <View className="bg-white p-2 rounded-xl rounded-tr-none">
                          <Text>{item.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        {/* Recoding button */}
        <View className="flex justify-center items-center">
          {recording ? (
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/voiceLoading.gif')}
                className="rounded-full"
                style={{height: hp(10), width: hp(10)}}></Image>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setRecording(!recording)}>
              <Image
                source={require('../../assets/images/recordingIcon.png')}
                className="rounded-full"
                style={{height: hp(10), width: hp(10)}}></Image>
            </TouchableOpacity>
          )}

          {/* Clear Button */}
          {messages.length > 0 && (
            <TouchableOpacity
              onPress={() => setMessages([])}
              className="bg-neutral-400 rounded-3xl p-2 absolute right-10">
              <Text className="text-white font-semibold">Clear</Text>
            </TouchableOpacity>
          )}

          {/* Stop Button */}
          {recording && (
            <TouchableOpacity
              onPress={() => setRecording(!recording)}
              className="bg-red-400 rounded-3xl p-2 absolute left-10">
              <Text className="text-white font-semibold">Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
