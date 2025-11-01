import React, { useRef, useEffect } from "react";
import {
  Animated,
  FlatList,
} from "react-native";

export function FadeInFlatList({
  itemsToFadeIn = 10,
  initialDelay = 0,
  durationPerItem = 100,
  renderItem,
  ...rest
}) {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: itemsToFadeIn + 1,
      duration: itemsToFadeIn * durationPerItem,
      delay: initialDelay,
      useNativeDriver: true,
    }).start();
  }, [itemsToFadeIn, durationPerItem, initialDelay]);

  const fadeInRenderItem = ({ item, index }) => {
    const opacity = animatedValue.interpolate({
      inputRange: [index - 1, index, index + 1],
      outputRange: [0, 1, 1],
      extrapolate: "clamp",
    });

    return (
      <Animated.View style={{ opacity }}>
        {renderItem ? renderItem({ item, index }) : null}
      </Animated.View>
    );
  };

  return <FlatList {...rest} renderItem={fadeInRenderItem} />;
} 