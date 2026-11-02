import CategoryTabs from './CategoryTabs.astro';

export default { title: 'Components/CategoryTabs', component: CategoryTabs };

export const All = { args: { current: 'all' } };
export const Tech = { args: { current: 'tech' } };
