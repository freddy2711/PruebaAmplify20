import Imagen from './Imagen'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Atomos/Imagen',
  component: Imagen,
} as ComponentMeta<typeof Imagen>

const Template: ComponentStory<typeof Imagen> = (args) => <Imagen {...args} />

export const ImagenThumbnail = Template.bind({})

ImagenThumbnail.args = {
  src: 'https://via.placeholder.com/140',
  alt: 'test thumbnail',
  classname: 'img-thumbnail',
}
