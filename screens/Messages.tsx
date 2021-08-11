import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";

import DEMO from "../assets/data/demo";
import { DARK_GRAY, DIMENSION_HEIGHT, DIMENSION_WIDTH } from "../assets/styles";
import Icon from "../components/Icon";
import Message from "../components/Message";

const Messages = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.messageContainer}>
      <View style={styles.top}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
      data={DEMO}
      keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Message
              image={item.image}
              name={item.name}
              lastMessage={item.message}
            />
          </TouchableOpacity>
        )}
      />

      </View>
    </ImageBackground>
  );
};

export default Messages;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
 title: {

 },
  messageContainer: {
    marginHorizontal: 10,
  },
  top: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});
