import Main from '../views/Main.vue';
export const routes = [
  {
    path: '/:person*',
    name: 'Main',
    component: Main,
  },
];
