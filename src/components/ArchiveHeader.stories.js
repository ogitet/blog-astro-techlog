import ArchiveHeader from './ArchiveHeader.astro';

export default { title: 'Components/ArchiveHeader', component: ArchiveHeader, tags: ['autodocs'] };

export const Default = {
  args: { eyebrow: 'ARCHIVE', title: '2026年5月', slots: { default: 'この月に公開した記事です。' } },
};

export const WithoutDescription = { args: { eyebrow: 'CATEGORY', title: 'Tech' } };
