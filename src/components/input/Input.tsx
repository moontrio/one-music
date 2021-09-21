import React from 'react';

export type SizeType = 'small' | 'middle' | 'large';

export interface InputProps {
    size?: SizeType;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}

export default function Input() {}
