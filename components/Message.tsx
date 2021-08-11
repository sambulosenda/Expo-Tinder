import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { DIMENSION_WIDTH, GRAY } from "../assets/styles";
import { MessageS } from "../types";

const Message = ({ image, lastMessage, name }: MessageS) => (
  <View style={styles.messageContainer}>
    <Image source={image} style={styles.avatar} />
    <View>
      <Text>{name}</Text>
      <Text style={styles.message}>{lastMessage}</Text>
    </View>
  </View>
);

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: DIMENSION_WIDTH - 100,

  },
  avatar: {
      width: 60, 
      height: 60, 
      marginRight: 20, 
      marginVertical: 15, 
      borderRadius: 30, 
  },

  message: {
    color: GRAY,
    fontSize: 12,
    paddingTop: 5,
  },
});
