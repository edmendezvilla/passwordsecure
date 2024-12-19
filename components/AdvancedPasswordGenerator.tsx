import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, StyleSheet } from "react-native";

interface Props {
  onPasswordGenerated: (password: string) => void;
}

const AdvancedPasswordGenerator: React.FC<Props> = ({ onPasswordGenerated }) => {
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSpecial, setIncludeSpecial] = useState<boolean>(true);

  const generatePassword = () => {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    if (includeSpecial) characters += "!@#$%^&*()";

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    onPasswordGenerated(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password Length:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={length.toString()}
        onChangeText={(value) => setLength(Number(value))}
      />

      <View style={styles.option}>
        <Text>Include Uppercase:</Text>
        <Switch value={includeUppercase} onValueChange={setIncludeUppercase} />
      </View>

      <View style={styles.option}>
        <Text>Include Numbers:</Text>
        <Switch value={includeNumbers} onValueChange={setIncludeNumbers} />
      </View>

      <View style={styles.option}>
        <Text>Include Special Characters:</Text>
        <Switch value={includeSpecial} onValueChange={setIncludeSpecial} />
      </View>

      <Button title="Generate Password" onPress={generatePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 3,
    width: "90%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
});

export default AdvancedPasswordGenerator;
