import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
export default function GoalInput(props){
  const [enteredGoalText,setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText);
      }
      function addGoalHandler(){
        props.onAddGoal((enteredGoalText));
        setEnteredGoalText('');
      }
    return(
        <View style ={{paddingTop:20, borderBottomWidth:0.5,paddingBottom:20, flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <TextInput placeholder= "Your Course Goal!"
          onChangeText={goalInputHandler} 
          value={enteredGoalText}
          style={{borderColor:'grey', width:'70%',padding:8, borderWidth:1,}}
        />
        <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    );
}