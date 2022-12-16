import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [valid, setValid] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChange={(e) => setUsername(e.nativeEvent.text)}
          testID="usernameInput"
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChange={(e) => setPassword(e.nativeEvent.text)}
          testID="passwordInput"
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (username.length > 0 && password.length > 0) {
            setValid(true);
          } else {
            setValid(false);
          }
        }}
        testID="signInButton"
      >
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
      {valid ? <Text style={styles.successText}>Sign in successfully</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    padding: 12,
    width: "100%",
    fontSize: 18,
  },
  button: {
    borderRadius: 8,
    padding: 12,
    backgroundColor: "black",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  successText: {
    fontSize: 16,
    color: "green",
    alignSelf: 'center',
  },
});
