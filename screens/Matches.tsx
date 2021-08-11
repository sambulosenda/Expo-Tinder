import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import DEMO from '../assets/data/demo'
import { DARK_GRAY, DIMENSION_HEIGHT, DIMENSION_WIDTH } from "../assets/styles";
import CardItem from "../components/CardItem";
import Icon from "../components/Icon";
const Matches = () => {
  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.matchContainer}>
        <View style={styles.top}>
          <Text style={styles.title}>Matches</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20} />
          </TouchableOpacity>
        </View>
        <FlatList
        numColumns={2}
        data={DEMO}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => (
            <TouchableOpacity>
                <CardItem   image={item.image}
              name={item.name}
              isOnline={item.isOnline}
              hasVariant />
            </TouchableOpacity>
        )}
        />

      </View>
    </ImageBackground>
  );
};

export default Matches;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },

  matchContainer: {
    marginHorizontal: 10,
  },
  title :{

  },

  top: {
    paddingTop: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});
