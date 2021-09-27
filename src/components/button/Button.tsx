import React from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import styles from './style.module.css'

interface ButtonProps {
  children: React.ReactNode
  type?: 'primary' | 'text'
  icon?: string
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  icon,
  className,
  onClick,
}) => {
  console.log(children, type, icon)
  return (
    <button
      className={classNames(className, styles.button, {
        // [styles[type]]: type,
      })
      }
      onClick={onClick}
    >
      {icon && <Icon icon={icon} style={{fontSize: 'inherit'}} />}
      {children}
    </button>
  )
}

export default Button
