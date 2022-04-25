import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const deleteItemHandler = (id) => {
    setGoalsList((prevList) => prevList.filter((el) => el.key !== id));
  };
  const onPressHandler = (goalText) => {
    setGoalsList((prevGoalsList) => [
      ...prevGoalsList,
      { text: goalText, key: Math.random().toString() },
    ]);
    closeModal();
  };
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Add Goal" onPress={openModal} />
      </View>
      <GoalInput
        visible={modalVisible}
        onPressHandler={onPressHandler}
        onCancel={closeModal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteItemHandler}
                id={itemData.item.key}
              />
            );
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 48,
    flex: 1,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },

  goalsContainer: {
    flex: 4,
  },
  button: {
    width: "50%",
    alignSelf: "center",
  },
});
