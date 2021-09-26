import React from 'react';
import './index.css';

/**
 * type: 'icon-home' for IconFont
 * type: 'http://demo.com/icon.png for remote url
 * type: '/favicon.png' for static url
 */
export interface IconProps {
  type: string;
  className?: string | undefined;
}

const Icon: React.FC<IconProps> = ({ type, className = '' }) => {
  if (type.startsWith('icon')) {
    return <i className={`${type} ${className}`.trim()} />;
  }
  return <img src={type} className={className} />;
};

export default Icon;
