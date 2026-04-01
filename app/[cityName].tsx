import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const CityDetails = () => {
  const searchParams = useLocalSearchParams();
  const [cityDetails, setCityDetails] = useState(null);

  const handleData = async () => {
    try {
      const response = await fetch("https://climapp-api.vercel.app/api");
      const responseJSON = await response.json();

      const city = responseJSON.find(
        (cityData) => cityData.city === searchParams.cityName,
      );

      setCityDetails(city);
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.headerTitle}>{cityDetails.city}</Text>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Montserrat_500Medium",
  },
});

export default CityDetails;
