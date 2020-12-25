import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [
    searchApi,
    costEffective,
    pricier,
    bigSpender,
    errorMessage,
  ] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results.</Text> */}

      <ScrollView>
        <ResultsList results={costEffective} title="Cost Effective" />
        <ResultsList results={pricier} title="Bit Pricier" />
        <ResultsList results={bigSpender} title="Big Spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
