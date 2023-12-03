import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: '/teams', component: TeamsList, alias: '/' },
    { name: 'teams', path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      name: 'users',
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('Global beforeEnter(): ');
        console.log(to, from);
        next();
      },
    },
    {
      name: 'error-page',
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach(): ');
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log('Needs Auth!!!');
    next();
  } else {
    next();
  }

  //   if (to.name === 'team-members') {
  //     next();
  //   } else {
  //     next({ name: 'team-members', params: { teamId: 't2' } });
  //   }
});

router.afterEach(function (to, from) {
  // sending analytics data
  console.log('Global afterEach(): ');
  console.log(to, from);
});

export default router;
