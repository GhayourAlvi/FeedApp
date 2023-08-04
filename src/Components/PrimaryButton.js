import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {COLORS} from '../Utils/COLORS';

const PrimaryButton = ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: COLORS.primary,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginTop: 15,
        },
      ]}>
      <Text
        style={[
          styles.textButton,
          {
            color: 'white',
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  button: {
    width: '90%',

    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#043f97',
  },

  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
