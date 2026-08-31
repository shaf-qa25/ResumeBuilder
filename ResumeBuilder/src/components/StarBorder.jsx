import React from 'react';
import './StarBorder.css';

const StarBorder = ({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  backgroundColor = '#000000',
  textColor = '#ffffff',
  borderColor = '#222222',
  children,
  ...rest
}) => {
  const Component = as || 'button';

  return (
    <Component
      className={`star-border-container ${className}`}
      {...rest}
      style={{
        padding: `${thickness}px`,
        ...rest.style
      }}
    >
      <div
        className="star-movement-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 30%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="star-movement-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 30%)`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="star-border-inner"
        style={{
          background: backgroundColor,
          color: textColor,
          borderColor: borderColor,
          padding: '30px' // padding for the inner card surface
        }}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
