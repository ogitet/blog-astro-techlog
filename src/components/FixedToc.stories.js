import FixedToc from './FixedToc.astro';

export default { title: 'Components/FixedToc', component: FixedToc, tags: ['autodocs'] };

export const Default = { args: { slots: { default: '<nav><ol><li><a href="#introduction">はじめに</a></li><li><a href="#setup">セットアップ</a></li></ol></nav>' } } };
