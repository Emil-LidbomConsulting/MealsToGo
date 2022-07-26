import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
} from "react-native";
import Search from "../../searchbar";
import colors from "../../../components/colors";
import Cards from "../components/restaurantInfo";
import styled from "styled-components";

const SafeView = styled.SafeAreaView`
  flex: 1;
  margintop: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background-color: ${colors.lightGrey};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  justifycontent: "center";
`;

const ResaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const isAndroid = Platform.OS === "android";
const RestaurantScreen = () => (
  <>
    <SafeView>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <ResaurantListContainer>
        <Cards />
      </ResaurantListContainer>
    </SafeView>
  </>
);

export default RestaurantScreen;
