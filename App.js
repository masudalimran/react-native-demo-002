import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import sample1 from "./assets/sample1.jpg";
import sample2 from "./assets/sample2.jpg";
import sample3 from "./assets/sample3.jpg";
import sample4 from "./assets/sample4.png";

export default function App() {
  // Use State
  const [picArr, setPicArr] = useState([]);
  const [pic, setPic] = useState(null);
  const [picCounter, setPicCounter] = useState(0);
  // Use Effect
  useEffect(() => {
    setPicArr([sample1, sample2, sample3, sample4]);
    setPic(picArr[0]);
    setPicCounter(1);
  }, []);

  // Functions
  const handleChangeImage = () => {
    if (picCounter + 1 > picArr.length) {
      setPicCounter(1);
      setPic(picArr[0]);
    } else {
      setPicCounter(picCounter + 1);
      setPic(picArr[picCounter]);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={pic} style={{ width: 305, height: 159 }} />
      <Text style={styles.head1}>Masud Al Imran {picCounter}</Text>
      <Text style={styles.para}>
        {" "}
        I am a dedicated web developer & software engineer, Specializing in
        LARAVEL FRAMEWORK & DATABASE DESIGN, WordPress web design, SEO &
        deployment With the following skills in the arsenal.
      </Text>
      <Text style={styles.para}>
        ✅Education: B.Sc. In CSE (BRAC UNIVERSITY)
      </Text>
      <Text style={styles.para}>
        -------------------------------------------------------------------------------------------------------
      </Text>
      <Text style={styles.para}>
        I have the following PHP/ Database skills:
      </Text>
      <Text style={styles.para}>
        ✅ Programming Languages:⭐PHP, ⭐Blade Template ✅ Database: ⭐MySQL ✅
        Framework: ⭐LARAVEL
      </Text>
      <Text style={styles.para}>
        ✅ Frontend: ⭐Bootstrap, ⭐Email & PDF Formatting,⭐Font Awsome
      </Text>
      <Text style={styles.para}>
        ✅ Backend: ⭐Jquery, Ajax, ⭐JWT⭐Rest API
      </Text>

      <TouchableOpacity onPress={handleChangeImage} style={styles.btn}>
        <Text style={{ fontSize: 20, color: "#fff" }}>Change Image</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellowgreen",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    fontSize: 30,
    textAlign: "center",
    textDecorationLine: "underline",
  },
  para: {
    alignSelf: "flex-start",
    marginHorizontal: 20,
    fontSize: 10,
    textAlign: "left",
  },
  btn: {
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    marginVertical: 30,
  },
});
