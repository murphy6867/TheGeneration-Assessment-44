import ReactDOM from 'react-dom/client'
import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from 'react-router-dom';
import Homepage from './pages/Home';
import Owner from './pages/Owner';
import User from './pages/User';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Homepage />} />
    <Route path='user' element={<User />} />
    <Route path='admin' element={<Admin />} />
    <Route path='owner' element={<Owner />} />
    <Route path='*' element={<NotFound />} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(<App />);
