import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import citiesData from "../data/cities.json";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useEffect, useState } from "react";

const Cities = () => {
  const [search, setSearch] = useState("");
  const [filteredCities, setFilteredCities] = useState(citiesData);

  useEffect(() => {
    const newFilteredCites = citiesData.filter((city) =>
      city.city.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
    );

    setFilteredCities(newFilteredCites);
  }, [search]);

  useEffect(() => {
    console.log({ filteredCities });
  }, [filteredCities]);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder="Digite a cidade"
          placeholderTextColor={"#fff"}
          value={search}
          onChangeText={(value) => setSearch(value)}
          style={style.input}
        />
        <MaterialIcons name="search" size={18} color={"#fff"} />
      </View>

      <ScrollView>
        <View style={style.scrollList}>
          {filteredCities.map((city) => (
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
    paddingTop: 40,
  },
  inputContainer: {
    height: 50,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat_500Medium",
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
