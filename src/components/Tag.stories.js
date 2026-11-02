import Tag from './Tag.astro';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    href: { control: 'text' },
  },
};

export const Default = {
  args: {
    slots: {
      default: 'Astro',
    },
  },
};

export const Link = {
  args: {
    href: '/tags/astro/',
    slots: {
      default: 'Astro',
    },
  },
};
