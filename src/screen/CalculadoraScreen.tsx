import React from 'react';
import {Text, View} from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculator } from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {

  const {
    number,
    beforeNumber,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnSum,
    buildNumber,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      {
        beforeNumber !== '0' && <Text style={styles.resultadoPequeno}>{beforeNumber}</Text>
      }

      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >
        {number}
      </Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9B9B9B" action={clean}/>
        <BotonCalc text="+/-" color="#9B9B9B" action={positiveNegative}/>
        <BotonCalc text="del" color="#9B9B9B" action={btnDelete}/>
        <BotonCalc text="/" color="#FF9427" action={btnDivide}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" action={buildNumber}/>
        <BotonCalc text="8" action={buildNumber}/>
        <BotonCalc text="9" action={buildNumber}/>
        <BotonCalc text="X" color="#FF9427" action={btnMultiply}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" action={buildNumber}/>
        <BotonCalc text="5" action={buildNumber}/>
        <BotonCalc text="6" action={buildNumber}/>
        <BotonCalc text="-" color="#FF9427" action={btnSubstract}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" action={buildNumber}/>
        <BotonCalc text="2" action={buildNumber}/>
        <BotonCalc text="3" action={buildNumber}/>
        <BotonCalc text="+" color="#FF9427" action={btnSum}/>
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" ancho action={buildNumber}/>
        <BotonCalc text="." action={buildNumber}/>
        <BotonCalc text="=" color="#FF9427" action={calculate}/>
      </View>
    </View>
  );
};
