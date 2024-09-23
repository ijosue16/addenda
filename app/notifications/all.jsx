import { View, Text } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { NotificationCard } from '../../components/cards'
import { fakeNotifications } from '../../constants/fakeNotifications'

const All = () => {
  return (
    <>
    <FlashList
      data={fakeNotifications}
      keyExtractor={(item) => item.id}
      horizontal={false}
      estimatedItemSize={250}
      contentContainerStyle={{ padding: 18 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <NotificationCard item={item.id} title={item.title} message={item.message} time={item.time} />}
      // ListHeaderComponent={() => (

      // )}
    />
  </>
  )
}

export default All