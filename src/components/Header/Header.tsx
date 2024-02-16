import React from "react";
import { View, Text, Image ,StyleSheet} from "react-native";

const Header = () => {
  return (
    <View style={styles.container} >
      <View style={styles.leftContainter}>
        <Text style={styles.title} >Explore</Text>
      </View>
      <View style={styles.rightContainter}>
        <Image style={styles.image} source={require('../../../assets/nasa-logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
    },
    leftContainter: {
        flex: 1,
        alignItems: "flex-start",
    },
    title : {
        fontSize: 20,
        color: "#fff"
    },
    rightContainter: {
        flex: 1,
        alignItems:"flex-end",
    },
    image: {
        width: 60,
        height: 60
    }
});

export default Header;
