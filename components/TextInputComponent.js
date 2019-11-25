import React from 'react';
import {View, Text, TextInput} from 'react-native';

const TextInputComponent = ({value, onChangeText, ...otherProps}) => {
  return (
    <TextInput
      style={{
        height: 40,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        color: 'gray',
        letterSpacing: 0.8,
        fontSize: 16,
      }}
      onChangeText={onChangeText}
      value={value}
      {...otherProps}
    />
  );
};

export default TextInputComponent;
