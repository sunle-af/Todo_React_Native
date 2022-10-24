import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([]);
  
  function addGoalHandler(enteredGoalText){
   setCourseGoals(currentCourseGoals => [
    ...currentCourseGoals ,
    {text:enteredGoalText,id:Math.random().toString()}, 
    ]);
  }
  function DeleteHandler(id){
    setCourseGoals(currentCourseGoals=>
     { return currentCourseGoals.filter( ()=>
      enteredGoalText.id !== id
      );
    
    }
      )
  }
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler}/>
   
      <View  style={{padding:10}}>
      <FlatList data={courseGoals}
      renderItem={(itemData)=>{
        return <GoalItem onDelete ={DeleteHandler}  text={itemData.item.text} />;
        
      }}
      keyExtractor= {(item,index) =>{
        return item.id;
      }}
      />
         
      </View>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:24,
  },
});
