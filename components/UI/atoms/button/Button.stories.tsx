import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Sizes, ThemeColors } from '../../../../consts/theme'
import Button from './Button'
import Image from './../imagen/Imagen'

export default {
  title: 'Atomos/Boton',
  component: Button,
  subcomponent: Image,
  argTypes: {
    size: {
      control: 'radio',
      options: Sizes,
    },
    variant: {
      control: 'select',
      options: ThemeColors,
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Guardar',
  size: 'medium',
  type: 'button',
  classname: '',
  variant: 'primary',
}

export const Secundary = Template.bind({})

Secundary.args = {
  children: 'Volver',
  size: 'medium',
  type: 'button',
  classname: '',
  variant: 'secondary',
}

export const ButtonTypes = () => {
  return ThemeColors.map((variant, index) => (
    <React.Fragment key={index}>
      <Button
        variant={variant}
        type="button"
        classname="m-1"
      >
        {'btn-' + variant}
      </Button>
    </React.Fragment>
  ))
}

export const ButtonSizes = () => {
  return ThemeColors.map((variant, index) => (
    <div
      className="mt-3"
      key={index}
    >
      <span className={`lead d-block text-${variant}`}>{'btn-' + variant}</span>
      {Sizes.map((size, index) => {
        return (
          <React.Fragment key={index}>
            <Button
              variant={variant}
              type="button"
              classname="m-1"
              size={size}
            >
              {size}
            </Button>
          </React.Fragment>
        )
      })}
      <br />
      <hr />
    </div>
  ))
}
