import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { SketchCanvas, SketchCanvasRef } from "rn-perfect-sketch-canvas";
import * as FileSystem from "expo-file-system";
import MlkitOcr from "react-native-mlkit-ocr";
import { btoa, atob } from "react-native-quick-base64";

export default function Drawing() {
  const canvasRef = useRef();
  const [result, setResult] = useState();

  const base64ToArrayBuffer = (base64String) => {
    const binaryString = atob(base64String);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  const saveBase64Image = async (base64String, filename) => {
    console.log(base64String);
    const callback = (downloadProgress) => {
      const progress =
        downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite;
      this.setState({
        downloadProgress: progress,
      });
    };

    try {
      const downloadResumable = FileSystem.createDownloadResumable(
        "https://clipart-library.com/images/8cGbedjKi.jpg",
        FileSystem.documentDirectory + "323.jpg",
        {},
        callback
      );

      try {
        const { uri } = await downloadResumable.downloadAsync();
        console.log("Finished downloading to ", uri);
        // Create file object
        const fileUri = FileSystem.cacheDirectory + filename;

        // Write base64 string to file
        await FileSystem.writeAsStringAsync(fileUri, base64String, {
          encoding: FileSystem.EncodingType.Base64,
        });

        // File saved successfully
        console.log("Image saved successfully!");
        setResult(await MlkitOcr.detectFromUri(uri));
        return fileUri;
      } catch (error) {
        // Handle errors
        console.error("Error saving image:", error);
        return null;
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SketchCanvas
        ref={canvasRef}
        strokeColor={"black"}
        strokeWidth={8}
        containerStyle={styles.container}
      />
      <Button onPress={canvasRef.current?.reset} title="Reset" />
      <Button
        onPress={() =>
          saveBase64Image(
            canvasRef.current.toImage().encodeToBase64(),
            "test.png"
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
  },
});
