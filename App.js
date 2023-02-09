import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import Plitka from './components/Plitka';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.Title}>Задачи</Text>
           <View style={styles.Items}>
            <Task text={'Дописать приложение'}/>
            <Task text={'Закрыть все задачи'}/>
            <Task text={'Придумать новую идею'}/>  
          </View>
      </View>

      <View style={styles.taskwrap}>
          <View style={styles.tyask}>
            <Plitka text={'Погода'} balance={'+10'} subtitle={'Небольшой снег'}/>
            <Plitka text={'Ваш баланс: '} balance={'2453'} subtitle={'Вы увеличили свой баланс!'}/>
          </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? "padding" : "height" }
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Напиши задачу:'}/>
            <TouchableOpacity>
              <View style={styles.addWrapper}>
                <Text>?123npm </Text>
              </View>
            </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 30,
  
  },

  taskwrap: {
    paddingHorizontal: 30
  },

  tyask: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
 
  Title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'white'
  },

  Items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: 'absolute',
    paddingHorizontal: 5,
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'purple',
    borderWidth: 1,
    width: 250,
    fontSize: 15,
    
  },

  addWrapper: {
    width: 57,
    height: 57,
    backgroundColor: 'white',
    borderRadius: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'purple',
    borderWidth: 1
  },

 
});
