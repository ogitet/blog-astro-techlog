import Main from './Main.astro';

export default { title: 'Components/Main', component: Main };

export const Default = { args: { slots: { default: '<h1>ページタイトル</h1><p>メインコンテンツをここに表示します。</p>' } } };
