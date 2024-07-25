import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
  <SafeAreaView className="bg-primary h-full">
    <ScrollView contentContainerStyle={{height: '100%',}}>
        <View className="w-full min-h-[85vh] justify-center items-center px-4 ">
            <Image 
            source={images.logo}
            className="w-[115px] h-[34.07px]"
            resizeMode='contain'
            />
            <Image 
            source={images. cards}
            className="m-w-[3800px] w-full h-[298px]"
            resizeMode='contain'
            />

            <View className="relative mt-5">
                <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with {" "}
                <Text className="text-secondary-200" >Aora</Text>
                </Text>
                <Image 
                source={images.path}
                className="w-[65.03px] h-[13.69px] absolute -bottom-1 -right-1"
                resizeMode='contain'
                />
            </View>

            <Text className="text-sm text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
            </Text>

            <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('/home')}
            containerStyles= "w-full mt-7"
            /> 
        </View>
    </ScrollView>

    <StatusBar 
    backgroundColor='#161622'
    style='light'
    />

  </SafeAreaView>
  );
}

