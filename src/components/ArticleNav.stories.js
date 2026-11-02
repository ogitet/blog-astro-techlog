import ArticleNav from './ArticleNav.astro';

export default { title: 'Components/ArticleNav', component: ArticleNav };

export const BothDirections = {
  args: {
    prev: { id: 'tech/astro-blog-overview', title: 'Astroで技術ブログを始める' },
    next: { id: 'tech/mdx-extensions', title: 'MDX拡張の使い方' },
  },
};

export const NextOnly = { args: { next: { id: 'tech/mdx-extensions', title: 'MDX拡張の使い方' } } };
