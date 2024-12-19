import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface PasswordCrackingTimeProps {
  password: string;
}

const PasswordCrackingTime: React.FC<PasswordCrackingTimeProps> = ({ password }) => {
  const calculateCrackingTime = (password: string) => {
    const length = password.length;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"; // Caracteres posibles
    const charsetLength = charset.length;

    // Calcular el número de combinaciones posibles
    const possibleCombinations = Math.pow(charsetLength, length);

    // Estimar el tiempo en segundos (asumiendo 1 millón de intentos por segundo)
    const attemptsPerSecond = 1000000;
    const secondsToCrack = possibleCombinations / attemptsPerSecond;

    // Convertir los segundos a un formato más legible
    const years = Math.floor(secondsToCrack / (60 * 60 * 24 * 365));
    const months = Math.floor((secondsToCrack % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30)); // Aproximación de meses
    const days = Math.floor((secondsToCrack % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    const hours = Math.floor((secondsToCrack % (60 * 60 * 24)) / (60 * 60));
    const remainingSeconds = Math.floor((secondsToCrack % (60 * 60)) / 1);

    return { years, months, days, hours, remainingSeconds };
  };

  const { years, months, days, hours, remainingSeconds } = calculateCrackingTime(password);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estimated Cracking Time:</Text>
      <Text style={styles.text}>
        {years > 0 ? `${years} years, ` : ""}
        {months > 0 ? `${months} months, ` : ""}
        {days > 0 ? `${days} days, ` : ""}
        {hours > 0 ? `${hours} hours, ` : ""}
        {remainingSeconds > 0 ? `${remainingSeconds} seconds` : "Instant (very weak password)"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});

export default PasswordCrackingTime;
