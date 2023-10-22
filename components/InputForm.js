import { KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, textAlignVertical, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
    if (currentValue !== '') {
      dispatch(addTodo(currentValue));
      setCurrentValue('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addFormContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="새로운 할 일"
          value={currentValue}
          onChangeText={text => setCurrentValue(text)}
          onSubmitEditing={handleSubmit}  // Enter 키 눌렀을 때 호출
        />
        <Pressable style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FAF2D3',
  },
  inputField: {
    flex: 1,
    height: 42,
    padding: 10,
    marginRight: 23,
    borderRadius: 5,
    borderColor: '#EE9322',
    borderWidth: 1,
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 5,
    backgroundColor: '#EE9322',
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,

  }

})

