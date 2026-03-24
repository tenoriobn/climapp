import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import citiesData from "../data/cities.json";

const Cities = () => {
  console.log(citiesData);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      {citiesData.map((city, index) => (
        <View style={style.listItem} key={index}>
          <Text style={style.cityName}>{city.city}</Text>
        </View>
      ))}
    </LinearGradient>
  );
};

export default Cities;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  listItem: {
    height: 63,
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.15)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  cityName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
});
