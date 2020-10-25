import React from "react";
import { Image } from "react-native";

const Sponsor = ({ src }) => {
  return (
    <Image
      resizeMode="contain"
      source={src}
      style={{ width: "30%", height: 100, marginRight: 10 }}
    />
  );
};

export default Sponsor;
