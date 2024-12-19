import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  password: string;
}

const PasswordStrengthIndicator: React.FC<Props> = ({ password }) => {
  const calculateStrength = () => {
    if (password.length < 6) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[@#$%^&*()]/)) {
      return "Strong";
    }
    return "Medium";
  };

  const strength = calculateStrength();

  return (
    <View style={styles.container}>
      <Text>Password Strength:</Text>
      <Text style={[styles.strength, { color: strength === "Strong" ? "green" : strength === "Medium" ? "orange" : "red" }]}>
        {strength}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    alignItems: "center",
  },
  strength: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 4,
  },
});

export default PasswordStrengthIndicator;
