import React from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.MEDIUM,
  link,
  disabled = false,
  onClick,
  children,
  width = 'max-content'
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${disabled ? styles.disabled : ''} ${width ? styles.full : ''}`;

  const buttonStyle = {
    width,
  };

  const buttonContent = (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      style={buttonStyle}
    >
      {children}
    </button>
  );

  return link ? (
    <Link to={link}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
};

export default Button;
