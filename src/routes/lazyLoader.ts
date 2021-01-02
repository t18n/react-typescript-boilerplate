import { Loading } from 'src/components/Loading';
import Loadable from 'react-loadable';

export const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: Loading,
});

export const Login = Loadable({
  loader: () => import('../pages/Login'),
  loading: Loading,
});

export const NotFound404 = Loadable({
  loader: () => import('../pages/404'),
  loading: Loading,
});
