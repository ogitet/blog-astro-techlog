import Breadcrumb from './Breadcrumb.astro';

export default { title: 'Components/Breadcrumb', component: Breadcrumb, tags: ['autodocs'] };

export const Default = {
  args: { items: [{ label: 'ホーム', href: '/' }, { label: 'Tech', href: '/category/tech/' }, { label: 'Astroで技術ブログを始める' }] },
};
