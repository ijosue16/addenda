import { View, Text, Image } from "react-native";
import React, { useCallback } from "react";
import { Tabs } from "expo-router";
import BellSvg from "../../assets/svgs/bellSvg";
import HomeSvg from "../../assets/svgs/homeSvg";
import ProfileSvg from "../../assets/svgs/profileSvg";
import FileSvg from "../../assets/svgs/fileSvg";
import FileUplaodSvg from "../../assets/svgs/fileUploadSvg";
import ChatSvg from "../../assets/svgs/chatSvg";

// TODO1: change tabs to Stack for screen animations

const TabIcon = ({ icon, color, name, focused, renderIcon }) => {
  return (
    <View className="flex flex-col items-center justify-center ">
      {renderIcon()}

      {/* <Text className={` text-center text-xs mt-1 ${focused ? "font-semibold" : ""}`}>{name}</Text> */}
    </View>
  );
};

const TabsLayout = () => {
  const renderIcon = useCallback((IconComponent, color, property) => {
    const iconProps = {
      height: 25,
      width: 25,
      [property]: color,
    };
    return <IconComponent {...iconProps} />;
  }, []);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#0d0446",
          headerShadowVisible:false,
          tabBarStyle: {
            backgroundColor: "#d1c2c2",
            height: 80,
          },
          contentStyle:{
            backgroundColor: '#d1c2c2',
          },
        }}
      >
       <Tabs.Screen
              name={'home'}
              options={{
                title:'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    name={'home'}
                    //   children={tab.icon}
                    focused={focused}
                    renderIcon={() => renderIcon(HomeSvg, color, 'fill')}
                  />
                ),
              }}
            />
       <Tabs.Screen
              name={'proposals'}
              options={{
                title:'Proposals',
                headerShown: true,
                headerBackTitleVisible:false,
                headerStyle:{
                backgroundColor:"#d1c2c2",
                },
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    name={'proposals'}
                    //   children={tab.icon}
                    focused={focused}
                    renderIcon={() => renderIcon(FileSvg, color, 'fill')}
                  />
                ),
              }}
            />
       <Tabs.Screen
              name={'case-upload'}
              options={{
                title:'Case upload',
                headerShown: true,
                headerStyle:{
                  backgroundColor:"#d1c2c2",
                  },
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    name={'case upload'}
                    //   children={tab.icon}
                    focused={focused}
                    renderIcon={() => renderIcon(FileUplaodSvg, color,'fill')}
                  />
                ),
              }}
            />
       <Tabs.Screen
              name={'chat'}
              options={{
                title:'Chat',
                headerShown: true,
                headerStyle:{
                  backgroundColor:"#d1c2c2",
                  },
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    name={'chat'}
                    //   children={tab.icon}
                    focused={focused}
                    renderIcon={() => renderIcon(ChatSvg, color, 'fill')}
                  />
                ),
              }}
            />
       <Tabs.Screen
              name={'notification'}
              options={{
                title:'Notification',
                headerShown: true,
                headerStyle:{
                  backgroundColor:"#d1c2c2",
                  },
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    name={'notification'}
                    //   children={tab.icon}
                    focused={focused}
                    renderIcon={() => renderIcon(BellSvg, color,'fill')}
                  />
                ),
              }}
            />
       <Tabs.Screen
              name={'profile'}
              options={{
                title:'Profile',
                headerShown: true,
                headerStyle:{
                  backgroundColor:"#d1c2c2",
                  },
                tabBarIcon: ({ color, focused }) => (
                  <TabIcon
                    name={'profile'}
                    //   children={tab.icon}
                    focused={focused}
                    renderIcon={() => renderIcon(ProfileSvg, color, 'fill')}
                  />
                ),
              }}
            />
      </Tabs>
      {/* <Toast config={toastConfig} swipeable="true" visibilityTime="1200" autoHide="true" /> */}
    </>
  );
};

export default TabsLayout;
