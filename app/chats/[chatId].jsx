import {
    View,
    Text,
    FlatList,
    Pressable,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ImageBackground,
    StyleSheet,
  } from "react-native";
  import React, { useState, useCallback, useEffect } from "react";
  import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
  import { router, useLocalSearchParams } from "expo-router";
  import {
    GiftedChat,
    Bubble,
    InputToolbar,
    Send,
    SystemMessage,
    IMessage,
  } from "react-native-gifted-chat";
//   import icons from "../../constants/icons";
//   import Toast from "react-native-toast-message";
//   import { toastConfig } from "../../components/toasts";
import LeftArrowSvg from "../../assets/svgs/left-arrow";
import AddSvg from "../../assets/svgs/add";
import { fakeChat } from "../../constants/fakedata";
//   import LeftArrowSvg from "../../assets/icons/svgs/left-arrow";
//   import AddSvg from "../../assets/icons/svgs/add";
  
  const Chat = () => {
    const insets = useSafeAreaInsets();
    const { chatId } = useLocalSearchParams();
    const showToast = () => {
      Toast.show({
        type: "fail",
        swipeable: true,
        visibilityTime: 1200,
        autoHide: true,
      });
    };
    // const messagesData = [
    //   {
    //     id: 1,
    //     text: "Hello! How are you?",
    //     isSender: true,
    //   },
    //   {
    //     id: 2,
    //     text: "I'm good, thank you! How about you?",
    //     isSender: false,
    //   },
    //   {
    //     id: 3,
    //     text: "I'm doing well too. What are you up to?",
    //     isSender: true,
    //   },
    //   {
    //     id: 4,
    //     text: "Just working on a project. You?",
    //     isSender: false,
    //   },
    //   {
    //     id: 5,
    //     text: "Same here. Got a deadline coming up.",
    //     isSender: true,
    //   },
    // ];
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
  
    useEffect(() => {
      setMessages([
        ...fakeChat.map((message) => {
          return {
            _id: message.id,
            text: message.msg,
            createdAt: new Date(message.date),
            user: {
              _id: message.from,
              name: message.from ? "You" : "Bob",
            },
          };
        }),
        {
          _id: 0,
          system: true,
          text: "All your messages are encrypted and secured.",
          createdAt: new Date(),
          user: {
            _id: 0,
            name: "Bot",
          },
        },
      ]);
    }, []);
  
    const onSend = useCallback((messages) => {
      setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    }, []);
  
    return (
      <>
        <View style={{marginTop:insets.top}} className="w-full flex flex-row justify-between items-center border-b-[0.25px] border-slate-400 py-3 px-4 ">
          <Pressable onPress={() => router.back()}>
            {/* <Image
              source={icons.arrowLeave}
              resizeMethod="contain"
              tintColor="black"
              className="w-[30px] h-[25px]"
            /> */}
            <LeftArrowSvg width={30} height={25} />
          </Pressable>
  
          <View className="flex flex-row items-center justify-start flex-1 gap-4 px-6 ">
            <View className="flex items-center justify-center rounded-full w-9 h-9 bg-slate-700">
              <Text className="text-white">EN</Text>
            </View>
            <View className='gap-0 '>
            <Text className="text-lg font-bold ">Ethan</Text>
            <Text className=''>active 2h ago</Text>
            </View>
          </View>
        
            <AddSvg width={20} height={20}/>
          
        </View>
        <KeyboardAvoidingView
          style={{ flex: 1}}
        >
        <View
          style={{ flex: 1,marginBottom:Platform.OS ==='ios'? insets.bottom:10 }}
          // source={require("../../assets/chat-wallpaper.jpeg")}
        >
          <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: 1,
            }}
            scrollToBottom
            isKeyboardInternallyHandled={true}
            onInputTextChanged={setText}
            renderSystemMessage={(props) => (
              <SystemMessage
                {...props}
                textStyle={{ color: "gray", fontSize: 14, fontWeight: "bold" }}
              />
            )}
            bottomOffset={insets.bottom}
            renderAvatar={null}
            maxComposerHeight={100}
            renderBubble={(props) => {
              return (
                <Bubble
                  {...props}
                  textStyle={{
                    right: {
                      color: "#201E43",
                    },
                    left:{
                      color: "#201E43",
                    },
                  }}
                  wrapperStyle={{
                    left: {
                      backgroundColor: "#b5b7a0",
                      borderBottomLeftRadius:0
                    },
                    right: {
                      backgroundColor: "#a88ba3",
                      borderBottomRightRadius:0
                    },
                  }}
  
                  tickStyle={{color:"#201E43"}}
                />
              );
            }}
            renderSend={(props) => (
              <View
                style={{
                  height: 44,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 14,
                  paddingHorizontal: 14,
                  backgroundColor:'#d1c2c2'
                }}>
                {text === '' && (
                  <>
                  {/* <Image 
                  source={icons.add}
                  
                  className="w-8 h-8"/> */}
                  {/* <AddSvg width={30} height={30} /> */}
                  </>
                )}
                {text !== '' && (
                  <Send
                    {...props}
                    containerStyle={{
                      justifyContent: 'center',
                    }}>
                    <Text className="p-4 bg-red-500 ">Send</Text>
                  </Send>
                )}
              </View>
            )}
            // renderUsernameOnMessage={true}
            textInputProps={styles.textField}
              renderInputToolbar={(props) => (
              <InputToolbar
                {...props}
                containerStyle={{
                  backgroundColor: '#d1c2c2',
             
                }}
                renderActions={()=>(
                  <AddSvg width={30} height={30} />
                )}
                />
              )}
          
          />
        </View>
        </KeyboardAvoidingView>
        {/* <Toast config={toastConfig} /> */}
      </>
    );
  };
  
  const styles = StyleSheet.create({
    textField:{
      backgroundColor:'#d9d9d9',
      borderRadius:15,
      paddingHorizontal:10,
      // paddingTop:10,
      // marginVertical:5,
      // justifyContent:'center',
      // alignItems:'center',
      fontSize:16,
    }
  })
  export default Chat;