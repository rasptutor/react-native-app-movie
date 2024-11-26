import { Text } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

export default function bookmark() {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-white font-psemibold">Bookmark</Text>
    </SafeAreaView>
  )
}