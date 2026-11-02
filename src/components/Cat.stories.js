import Cat from './Cat.astro';

export default { title: 'Components/Cat', component: Cat, tags: ['autodocs'] };

export const Default = { args: { slots: { default: 'Tech' } } };
export const Link = { args: { href: '/category/tech/', slots: { default: 'Tech' } } };
