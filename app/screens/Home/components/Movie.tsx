import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Color } from "@src/styles";
import defaultImage from "@assets/images/default.png";

interface IMovie {
  name?: string;
  img?: string;
  genre?: string;
  rating: number;
  onPress?: () => void
}

function Movie({ name, img, genre, rating, onPress }: IMovie) {
  const [imageSrc, setImageSrc] = useState(img);
  const handleErrorImage = () => {
    setImageSrc(Image.resolveAssetSource(defaultImage).uri);
  };
  return (
    <TouchableOpacity style={styles.movie} activeOpacity={0.8} onPress={onPress}>
      <View style={{ position: "relative", marginBottom: 8 }}>
        <Image
          source={{ uri: imageSrc }}
          style={styles.image}
          onError={handleErrorImage}
        />
        <View
          style={[
            styles.rating,
            { backgroundColor: rating >= 6.0 ? Color.primary : Color.gray2 },
          ]}
        >
          <Text
            style={{
              fontSize: 12,
              lineHeight: 14,
              fontWeight: "500",
              color: Color.white,
            }}
          >
            {rating}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{genre}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(Movie);

const styles = StyleSheet.create({
  movie: { width: "48%", marginBottom: 16 },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 8,
  },
  rating: {
    width: 32,
    height: 22,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    margin: 8,
  },
  name: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    color: Color.white,
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    lineHeight: 16,
    color: Color.gray,
  },
});
