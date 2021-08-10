import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { DIMENSION_HEIGHT, DIMENSION_WIDTH } from "../assets/styles";
import City from "../components/City";
import Filters from "../components/Filters";
import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "../components/CardItem";
import DEMO from "../assets/data/demo";

const Home = () => {
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.homeContainer}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>
        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(newSwiper): void => setSwiper(newSwiper)}
        >
          {DEMO.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};
export default Home;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },

  homeContainer: {
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
