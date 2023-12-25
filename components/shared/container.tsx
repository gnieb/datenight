import { Dimensions } from "react-native";
import styled from "styled-components/native";
import {colors} from "./colors"

export const Container = styled.View`
background-color: ${colors.base};
width: 100%;
flex:1;
justify-content:center;
`

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;
