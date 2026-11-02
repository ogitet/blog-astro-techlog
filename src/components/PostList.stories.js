import PostList from './PostList.astro';

const posts = [
  { id: 'tech/astro-blog-overview', data: { title: 'Astroで技術ブログを始める', excerpt: 'Astroを使った技術ブログ構築の概要です。', date: '2026-05-01', tags: ['Astro', 'ブログ'] } },
  { id: 'tech/mdx-extensions', data: { title: 'MDX拡張の使い方', excerpt: 'MDXでコンテンツを拡張する方法を紹介します。', date: '2026-04-20', tags: ['MDX'] } },
];

export default { title: 'Components/PostList', component: PostList };

export const Default = { args: { posts } };
export const WithoutCategory = { args: { posts, showCategory: false } };
