import LinkCardExternal from './LinkCardExternal.astro';

export default { title: 'Components/LinkCardExternal', component: LinkCardExternal, tags: ['autodocs'] };

export const Default = {
  args: { href: 'https://example.com', title: 'Example Domain', description: 'Storybook用の外部リンクカードです。' },
};
