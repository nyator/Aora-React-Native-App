import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'


import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'


const SignUp = () => {

const [form, setForm] = useState({
  username:'',
  email: '',
  password: ''
})
const [isSubmitting, setIsSubmitting] = useState(false)

const submit = () => {
  // TODO: Implement authentication logic here.
}

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
          source={images.logo}
          resizeMode='contain'
          className="w-[115px] h-[34.07px] mt-[50px]" />

          <Text className="text-2xl text-white font-psemibold mt-10">
            Sign Up to Aora
          </Text>

          <FormField 
          title='Username'
          value={form.username}
          handleChangeText={(e) =>setForm({ ...form,
          username: e })}
          otherStyles='mt-10'
          placholder='Your unique username'
          keyboardType='email-address'
          />

          <FormField 
          title='Email'
          value={form.email}
          handleChangeText={(e) =>setForm({ ...form,
          email: e })}
          otherStyles='mt-7'
          placholder='Enter Email'
          keyboardType='email-address'
          />

          <FormField 
          title='Password'
          value={form.password}
          handleChangeText={(e) =>setForm({ ...form,
          password: e })}
          otherStyles='mt-7'
          placholder='Enter Password'
          />
          <CustomButton
          title='Sign Up'
          containerStyles='mt-7'
          handlePress={submit}
          isLoading={isSubmitting }/>

        <View className='justify-center pt-5 flex-row gap-2'>
          <Text className="text-lg text-gray-100 font-pregular text-center">
          Already have an account? {' '}
          <Link 
          href='/sign-in' 
          className='text-lg font-psemibold text-secondary '
          >
            Sign In 
          </Link>
          </Text>
        </View>
        </View>

      </ScrollView> 
    </SafeAreaView>
  )
}

export default SignUp