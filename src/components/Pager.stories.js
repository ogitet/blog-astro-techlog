import Pager from './Pager.astro';

export default { title: 'Components/Pager', component: Pager, tags: ['autodocs'] };

export const FirstPage = { args: { currentPage: 1, lastPage: 10 } };
export const MiddlePage = { args: { currentPage: 5, lastPage: 10 } };
export const LastPage = { args: { currentPage: 10, lastPage: 10 } };
