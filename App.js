import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TaskCard from './TaskCard';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>App de Tarefas</Text>
      <TextInput style={styles.input}
        placeholder='Nome da Tarefa' />

      <Text style={styles.label}>Descrição da Tarefa:</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder='Descrição da tarefa' 
        multiline/>

      <View style={styles.buttonContainer}>
        <Button title='Salvar' 
          style={styles.buttonblue}
          color = 'deepskyblue'
          onPress={() => {
          alert("TESTADO")
          }
        }/> 
        </View>

        <TaskCard 
        title={"Teste"}
        desc={"Descrição Teste"}
        status={"Done"}
        onClick={()=>{
          alert("Deletar")
        }} />
      </View>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },

  input: {
    borderWidth: 3,
    borderColor: 'fuchsia',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: 'lightskyblue',
    marginBottom: 16
  },

  textArea: {
    height: 200,
    textAlignVertical:'top'
  },

  buttonContainer: {
    marginTop: 16,
    borderColor: 'fuchsia',
    borderWidth: 3,
    borderRadius: 8
  },
  buttonblue:{
    backgroundColor: 'deepskyblue'
  }

});
