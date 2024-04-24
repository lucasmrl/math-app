import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Button, View } from "react-native";
import { SketchCanvas, SketchCanvasRef } from "rn-perfect-sketch-canvas";
import * as FileSystem from "expo-file-system";
import MlkitOcr from "react-native-mlkit-ocr";
import { btoa, atob } from "react-native-quick-base64";
import {
  Canvas,
  Group,
  RoundedRect,
  Fill,
  Path,
  Circle,
  Pat,
  vec,
} from "@shopify/react-native-skia";

export default function Drawing() {
  const canvasRef = useRef();

  const saveBase64Image = async (base64String, filename) => {
    try {
      const fileUri = FileSystem.cacheDirectory + filename;
      await FileSystem.writeAsStringAsync(fileUri, base64String, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log("Image saved successfully!" + fileUri);
      const sample_image = `data:image/jpeg;base64,${base64String}`;

      //   await new Promise((resolve) => setTimeout(resolve, 5000));

      const resposta = await MlkitOcr.detectFromUri(sample_image);
      console.log(resposta);
      return "fileUri";
    } catch (error) {
      // Handle errors
      console.error("Error saving image:", error);
      return null;
    }
  };

  const whiteContent = <View style={{ backgroundColor: "white", flex: 1 }} />;

  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={"black"}
        strokeWidth={20}
        bottomChildren={
          <Path path="M 0 0 H 200 V 380 H 0 L 0 0" color="white" />
        }
        containerStyle={styles.container2}
      />
      <Button onPress={canvasRef.current?.reset} title="Reset" />
      <Button
        onPress={() =>
          console.log(
            saveBase64Image(
              canvasRef.current.toImage().encodeToBase64(),
              "myDesenho.jpg"
            )
          )
        }
        title="Get Image"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    width: "50%",
    height: "50%",
    borderColor: "black",
    borderWidth: 1,
  },
});
