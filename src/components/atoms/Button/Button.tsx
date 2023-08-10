import React from 'react'
import './Button.css'

export interface ButtonProps {
  inverse?: boolean
  status?: 'primary' | 'secondary' | 'danger' | 'dark' | 'inverse'
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  styles?: React.CSSProperties
  label: string
  onClick?: any
  onMouseOver?: any
  // onFocus?: any
  // onBlur?: any
  birthday?: Date
  counter?: number
}

const Button = ({ ...buttonProps }: ButtonProps) => {
  const mode = buttonProps.inverse ? 'storybook-button-inverse' : ''

  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${buttonProps.status}`,
        `storybook-button--${buttonProps.size}`,
        mode,
      ].join(' ')}
      style={buttonProps.styles}
      {...buttonProps}
    >
      {buttonProps.label}
    </button>
  )
}

export default Button
