import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import { ChatCard, ProposalCard } from '../../components/cards'
import SearchFilterSvg from '../../assets/svgs/search-filter'

const Proposals = () => {
  return (
    <>
    <View className="w-full px-6 py-2">
     <Text className='px-4 pt-8 text-lg font-semibold'>Lawyer proposals</Text>
    </View>
    <FlashList
      data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
      keyExtractor={(item) => item.id}
      horizontal={false}
      estimatedItemSize={250}
      contentContainerStyle={{ padding: 18 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ProposalCard item={item.id} />}
      // ListHeaderComponent={() => (

      // )}
    />
  </>
  )
}

export default Proposals