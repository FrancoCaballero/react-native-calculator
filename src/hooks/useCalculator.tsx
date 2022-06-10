import { useRef, useState } from 'react';

enum Operators {
  SUM,
  SUB,
  MUL,
  DIV,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('100');
  const [beforeNumber, setBeforeNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setBeforeNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') {return;}

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const btnDelete = () => {
    let negative = '';
    let numberAux = number;

    if (number.includes('-')) {
      negative = '-';
      numberAux = number.substring(1);
    }

    if (numberAux.length > 1) {
      setNumber(negative + numberAux.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberToPrevious = () => {
    if (number.endsWith('.')) {
      setBeforeNumber(number.slice(0, -1));
    } else {
      setBeforeNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.DIV;
  };

  const btnMultiply = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.MUL;
  };

  const btnSubstract = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.SUB;
  };

  const btnSum = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.SUM;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(beforeNumber);
    switch (lastOperation.current) {
      case Operators.SUM:
        setNumber(String(num1 + num2));
        break;
      case Operators.SUB:
        setNumber(String(num2 - num1));
        break;
      case Operators.MUL:
        setNumber(String(num1 * num2));
        break;
      case Operators.DIV:
        setNumber(String(num2 / num1));
        break;
      default:
        break;
    }
    setBeforeNumber('0');
  };

  return {
    number,
    beforeNumber,
    lastOperation,
    clean,
    buildNumber,
    positiveNegative,
    btnDelete,
    btnDivide,
    btnMultiply,
    btnSubstract,
    btnSum,
    calculate,
  };
};
