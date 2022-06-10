/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  ancho?: boolean;
  action: (value: string) => void;
}

export const BotonCalc = ({ancho = false, color = '#2D2D2D', text, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{
        ...styles.boton,
        backgroundColor: color,
        width: ancho ? 180 : 80,
      }}>
        <Text style={{
          ...styles.botonTexto,
          color: (color === '#9B9B9B') ? 'black' : 'white',
        }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
