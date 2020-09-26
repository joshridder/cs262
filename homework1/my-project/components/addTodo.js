import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

  return (
    <View>
      <TextInput 
        placeholder='new todo...'
        value={text}
        onChangeText={(val) => changeHandler(val)}
        style={styles.input}
      />
      <Button 
        title='add todo'
        onPress={() => submitHandler(text)}
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})