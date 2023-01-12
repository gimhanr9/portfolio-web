import MainPage from '../pages/main';
import ContactPage from '../pages/contact';

const routes = [
  { path: '/', component: <MainPage /> },
  { path: 'message', component: <ContactPage /> },
];

export { routes };
