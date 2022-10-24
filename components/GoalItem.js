import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

function GoalItem(props) {
   return (
    <TouchableOpacity>
        <View style={{fontSize:15,margin:8,textAlign:'center', borderRadius:8,color:'white',padding:8, backgroundColor:'#5E0acc'}} > 
                <Text style={{color:'white'}}> {props.text}</Text>
            </View>
    </TouchableOpacity>
   
   );
};
export default GoalItem;