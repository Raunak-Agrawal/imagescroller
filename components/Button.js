import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({buttonText, onPress, moreStyles}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.buttonContainer, moreStyles]}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#146af5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Button;
