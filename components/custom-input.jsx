import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
// import EyeSvg from "../assets/icons/svgs/eyeSvg";
import { Controller } from "react-hook-form";
import EyeSvg from "../assets/svgs/eyeSvg";
import EyeCrosedSvg from "../assets/svgs/eye-cross";
// import EyeCrosedSvg from "../assets/icons/svgs/eye-cross";

const CustomInput = ({ password, placeholder, name, control, rules={required:'filed must be field'},multi,header }) => {
  return (
    <View className="w-full">
      <Text className='m-1 font-medium'>{header}</Text>
        <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
          <>
            <View className="flex flex-row items-center justify-between px-4 text-lg rounded-lg border-[1.5px] bg-slate-100 border-zinc-400">
              <TextInput
              
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                inputMode={name === "phoneNumber" ? "tel" : "text"}
                secureTextEntry={password ? true : false}
                className="items-center justify-center flex-1 m-0 text-base h-11"
                placeholder={placeholder}
                placeholderTextColor={"#858181"}
              />

              {password ? (
                <TouchableOpacity className="">
                  <EyeCrosedSvg stroke={"#A02334"} width={20} height={20} />
                </TouchableOpacity>
              ) : null}
               {multi ? (
                <TouchableOpacity className="">
                  <EyeSvg stroke={"#A02334"} width={20} height={20} />
                </TouchableOpacity>
              ) : null}
            </View>
            {error ? <Text className="ml-1 text-xs text-red-500">{error?.message}</Text> : null}
          </>
        )}
      />
    </View>
  );
};

export default CustomInput;
