import Loading from 'Components/Loading'
import Loadable from 'react-loadable'

export const Home = Loadable({
  loader: () => import('Containers/Home/Home'),
  loading: Loading
})

export const Login = Loadable({
  loader: () => import('Containers/Login/Login'),
  loading: Loading
})

export const NotFound404 = Loadable({
  loader: () => import('Containers/404/404'),
  loading: Loading
})