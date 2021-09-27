import React from 'react';
import './index.css';

/**
 * type: 'icon-home' for IconFont
 * type: 'http://demo.com/icon.png for remote url
 * type: '/favicon.png' for static url
 */
export interface IconProps {
  icon: string;
  style?: React.CSSProperties
  className?: string | undefined;
}

const Icon: React.FC<IconProps> = ({
  icon,
  style,
  className = '',
}) => {
  if (icon.startsWith('icon')) {
    return (
      <i
        style={style}
        className={`${icon} ${className}`.trim()}
      />
    );
  }

  return (
    <img
      src={icon}
      style={style}
      className={className}
    />
  );
};

export default Icon;
