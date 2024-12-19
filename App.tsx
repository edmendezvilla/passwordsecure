import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, ScrollView, View } from "react-native";
import AdvancedPasswordGenerator from "./components/AdvancedPasswordGenerator";
import PasswordStrengthIndicator from "./components/PasswordStrengthIndicator";
import PasswordCrackingTime from "./components/PasswordCrackingTime";

export default function App() {
  const [password, setPassword] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🎉 Password Generator 🎉</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          {}
          <AdvancedPasswordGenerator onPasswordGenerated={setPassword} />
        </View>

        {password.length > 0 && (
          <View style={[styles.card, styles.resultCard]}>
            <Text style={styles.label}>Generated Password:</Text>
            <Text style={styles.password}>{password}</Text>
          </View>
        )}

        {password.length > 0 && (
          <View style={styles.card}>
            <PasswordStrengthIndicator password={password} />
            <PasswordCrackingTime password={password} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A90E2", // Fondo azul llamativo
  },
  scrollContainer: {
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  resultCard: {
    borderColor: "#4A90E2",
    borderWidth: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A90E2",
    textAlign: "center",
  },
  password: {
    fontSize: 20,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
});
