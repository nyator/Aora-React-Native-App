import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-3">
          <Text className=" text-gray-100">Welcome Back</Text>
          <Text className="text-white text-2xl font-pbold">Henry</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
