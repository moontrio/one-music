import React from 'react';
import classNames from 'classnames';

import './button.css';
import Icon from '../icon';
import { tuple } from '@/utils/type';

const prefixCls = 'one-button';

const ButtonTypes = tuple('default', 'primary', 'text');
type ButtonType = typeof ButtonTypes[number];

interface ButtonProps {
  type?: ButtonType;
  icon?: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = (props: ButtonProps) => {
  const { type, icon, className, disabled, children, onClick } = props;
  console.log(children, type, icon);

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
    },
    className,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  return (
    <button className={classes} onClick={handleClick}>
      {icon && <Icon icon={icon} style={{ fontSize: 'inherit' }} />}
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'default',
};

console.log(Button);

export default Button;
