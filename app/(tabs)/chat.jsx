import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
// import icons from "../../constants/icons";
import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ChatCard } from "../../components/cards";
import ChatSvg from "../../assets/svgs/chatSvg";
import SearchFilterSvg from "../../assets/svgs/search-filter";
const Chats = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View className="w-full px-4 py-2">
        <View className="flex-row items-center justify-center w-full h-10 px-2 border shadow-sm rounded-2xl bg-slate-100">
          <TouchableOpacity>
            <SearchFilterSvg width={20} height={20} />
          </TouchableOpacity>

          <TextInput className="flex-1 h-10 text-base " placeholder="Search" />
        </View>
      </View>
      <FlashList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        keyExtractor={(item) => item.id}
        horizontal={false}
        estimatedItemSize={250}
        contentContainerStyle={{ padding: 15 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ChatCard item={item.id} />}
        // ListHeaderComponent={() => (

        // )}
      />
    </>
  );
};

export default Chats;
