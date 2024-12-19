import React from "react";
import { View, Button, StyleSheet } from "react-native";

interface Props {
  onPasswordGenerated: (password: string) => void;
}

const PasswordGenerator: React.FC<Props> = ({ onPasswordGenerated }) => {
  const generatePassword = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < 12; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    onPasswordGenerated(password);
  };

  return (
    <View style={styles.container}>
      <Button title="Generate Password" onPress={generatePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

export default PasswordGenerator;
