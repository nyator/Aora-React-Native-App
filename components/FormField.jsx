import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const FormField = ({title, value, placholder, handleChangeText, otherStyles, ...props }) => {
const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles }`}>
      <Text className="text-base font-pregular text-white">{title}</Text>
      <View className='border-2 border-black-200  w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
        <TextInput 
          className='flex-1 text-white font-semibold '
          placeholder={placholder}
          keyboardType={title === 'Email' ? "email-address" : "default"}
          placeholderTextColor='#7d7d8d'
          selectionColor="#FF9C01"
          value={value}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          />

          {title === "Password" && (
            <TouchableOpacity onPress={() => 
            setShowPassword(!showPassword)}>
                <Image 
                source={!showPassword ? icons.eye : icons.eyeHide }
                className='w-6 h-6'/>
            </TouchableOpacity>
          )}
      </View>
    </View>
  )
}

export default FormField 