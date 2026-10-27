import React from 'react';

// Define Props type
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  align?: 'left' | 'center' | 'right';
  size?: 'small' | 'large' | 'full';
  color?: 'blue' | 'red' | 'white';
  outline?: 'primary' | 'default';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  align = 'center',
  size = 'small',
  color = 'blue',
  outline = 'default',
  children,
  style,
  ...rest
}) => {
  // Make style object according Props
  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
    width: size === 'full' ? '100%' : 'auto',
    padding: size === 'small' ? '6px 12px' : '12px 24px',
    fontSize: size === 'small' ? '14px' : '16px',
    border: outline === 'primary' ? '2px solid #007bff' : '1px solid #ccc',
    backgroundColor: color === 'blue' ? '#007bff' : color === 'red' ? '#dc3545' : '#ffffff',
    color: color === 'white' ? '#000000' : '#ffffff',
    cursor: 'pointer',
    borderRadius: '4px',
    ...style, // style pass from user
  };

  return (
    <button style={buttonStyle} {...rest}>
      {children}
    </button>
  );
};