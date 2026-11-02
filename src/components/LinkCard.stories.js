import LinkCard from './LinkCard.astro';

export default { title: 'Components/LinkCard', component: LinkCard };

export const Internal = { args: { href: 'astro-blog-overview', type: 'internal' } };

export const External = {
  args: { href: 'https://example.com', type: 'external', title: 'Example Domain', description: 'Storybook用の外部リンクカードです。' },
};
