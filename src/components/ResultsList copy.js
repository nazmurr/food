import React, { useEffect, useRef, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = memo(({ title, results, navigation }) => {
  useEffect(() => {
    console.log('updated child '+new Date());
  });
  if (!results.length) return null;

  const flatListRef = useRef(null);

  const getItemLayout = (data, index) => (
    { length: 250, offset: 250 * index, index }
  );

  const scrollToIndex = () => {
    flatListRef.current.scrollToIndex({animated: true, index: 0});
  };
  
  useEffect(() => {
    console.log('updated '+new Date());
    scrollToIndex();
  }, [results]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={getItemLayout}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id, title: item.name })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList);
