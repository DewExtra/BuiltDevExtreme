import { HomePage, DisplayDataPage, ProfilePage } from './pages';
import formOne from './pages/main/formOne/formOne';
import formTwo from './pages/main/formTwo/formTwo';
export default [
  {
    path: '/display-data',
    component: DisplayDataPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/formOne',
    component: formOne
  },
  {
    path: '/formTwo',
    component: formTwo
  }
  ];
