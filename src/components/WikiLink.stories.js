import WikiLink from './WikiLink.astro';

export default { title: 'Components/WikiLink', component: WikiLink };

export const Default = { args: { slug: 'astro-blog-overview' } };
export const WithCustomText = { args: { slug: 'astro-blog-overview', text: 'Astroブログの概要' } };
