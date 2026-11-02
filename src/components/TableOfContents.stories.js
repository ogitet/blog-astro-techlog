import TableOfContents from './TableOfContents.astro';

const toc = [
  { depth: 2, slug: 'introduction', text: 'はじめに', children: [{ depth: 3, slug: 'requirements', text: '前提条件', children: [] }] },
  { depth: 2, slug: 'setup', text: 'セットアップ', children: [] },
];

export default { title: 'Components/TableOfContents', component: TableOfContents };

export const Default = { args: { toc } };
