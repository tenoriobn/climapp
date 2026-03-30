import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const CityDetails = () => {
  const searchParams = useLocalSearchParams();
  console.log(searchParams);

  return (
    <View>
      <Text>{searchParams.cityName}</Text>
    </View>
  );
};

export default CityDetails;
