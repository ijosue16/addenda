import { View, Text } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { NotificationCard } from '../../components/cards'

const Unread = () => {
  return (
    <>
    <FlashList
      data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
      keyExtractor={(item) => item.id}
      horizontal={false}
      estimatedItemSize={250}
      contentContainerStyle={{ padding: 18 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <NotificationCard item={item.id} />}
      // ListHeaderComponent={() => (

      // )}
    />
  </>
  )
}

export default Unread