import React from 'react';

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
  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center',
    marginBottom: '16px',
  };

  const buttonStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size === 'full' ? '100%' : 'auto',
    padding: size === 'small' ? '6px 12px' : '12px 24px',
    fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
    border: outline === 'primary' ? '2px solid #007bff' : '1px solid #ccc',
    backgroundColor: color === 'blue' ? '#007bff' : color === 'red' ? '#dc3545' : '#ffffff',
    color: color === 'white' ? '#000000' : '#ffffff',
    cursor: 'pointer',
    borderRadius: '4px',
    ...style,
  };

  return (
    <div style={wrapperStyle}>
      <button style={buttonStyle} {...rest}>
        {children}
      </button>
    </div>
  );
};