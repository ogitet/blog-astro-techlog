import TocItem from './TocItem.astro';

export default { title: 'Components/TocItem', component: TocItem, tags: ['autodocs'] };

export const WithChildren = {
  args: { item: { depth: 2, slug: 'introduction', text: 'はじめに', children: [{ depth: 3, slug: 'requirements', text: '前提条件', children: [] }] } },
};
