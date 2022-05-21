import React from 'react';
import { tuple } from '@/utils/type';

const SizeTypes = tuple('small', 'middle', 'large');

type SizeType = typeof SizeTypes[number];

export interface InputProps {
  size?: SizeType;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const Input= () => {
  return <input />;
};

export default Input;
