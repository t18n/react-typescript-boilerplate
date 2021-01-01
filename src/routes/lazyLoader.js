import Loading from 'src/components/Loading';
import Loadable from 'react-loadable';

export const Home = Loadable({
  loader: () => import('src/pagess/Home/Home'),
  loading: Loading,
});

export const Login = Loadable({
  loader: () => import('src/pagess/Login/Login'),
  loading: Loading,
});

export const NotFound404 = Loadable({
  loader: () => import('src/pagess/404/404'),
  loading: Loading,
});
