import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IconS } from "../types";

const Icon = ({ color, name, size, style }: IconS) => (
  <Ionicons name={name} size={size} color={color} style={style} />
);

export default Icon;
