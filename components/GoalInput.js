import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput({
  text,
  inputHandler,
  onPressHandler,
  visible,
  onCancel,
  ...otherProps
}) {
  const [goalText, setGoalText] = useState("");

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal_image.png")}
        />
        <TextInput
          value={goalText}
          onChangeText={(text) => setGoalText(text)}
          style={styles.input}
          placeholder="pls input the text"
          placeholderTextColor="rgba(0, 0,0, 0.5)"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              disabled={!goalText}
              onPress={() => {
                onPressHandler(goalText);
                setGoalText("");
              }}
              title="add goal"
            />
          </View>

          <View style={styles.button}>
            <Button color="#f31282" title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  input: {
    padding: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#b3b3b3",
    backgroundColor: "#b3b3b3",
    borderRadius: 6,
    marginBottom: 16,
    color: "rgb(0, 0, 0)",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 8,
  },
  image: {
    height: 100,
    width: 100,
    alignSelf: "center",
    margin: 16,
  },
});
