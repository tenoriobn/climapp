import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import citiesData from "../data/cities.json";

const Cities = () => {
  console.log(citiesData);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      <ScrollView>
        <View style={style.scrollList}>
          {citiesData.map((city, index) => (
            <View style={style.listItem} key={city.city}>
              <Image
                source={require("../assets/images/clouds.png")}
                style={style.cityImage}
              />
              <Text style={style.cityName}>
                {city.city.replace(", ", " - ")}
              </Text>
              <Text style={style.cityTemp}>{city.temp}º</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default Cities;

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollList: {
    gap: 16,
  },
  listItem: {
    height: 63,
    width: "100%",
    backgroundColor: "rgba(255,255,255, 0.15)",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  cityName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
  },
  cityTemp: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
  },
  cityImage: {
    width: 27,
    height: 24,
  },
});
