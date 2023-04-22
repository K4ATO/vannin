import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { vansLoader } from './pages/Vans/Vans';
import VanDetail, { vanLoader } from './pages/Vans/VanDetail';
import './server';
import Layout from './Layout/Layout';
import Host from './pages/Host/Host';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVansDetail, {
    hostVansDetailLoader,
} from './pages/Host/HostVansDetail';
import HostVans, { hostVansLoader } from './pages/Host/HostVans';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login, { loginLoader, loginAction } from './pages/Login';
import { requireAuth } from './utility/requireAuth';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route
                path='login'
                element={<Login />}
                loader={loginLoader}
                action={loginAction}
            />
            <Route
                path='/vans'
                element={<Vans />}
                errorElement={<Error />}
                loader={vansLoader}
            />
            <Route
                path='/vans/:id/'
                element={<VanDetail />}
                errorElement={<Error />}
                loader={vanLoader}
            />
            <Route path='/about' element={<About />} />
            <Route path='host' element={<Host />}>
                <Route
                    index
                    element={<Dashboard />}
                    loader={async ({ request }) => await requireAuth(request)}
                />
                <Route
                    path='income'
                    element={<Income />}
                    loader={async ({ request }) => await requireAuth(request)}
                />
                <Route
                    path='reviews'
                    element={<Reviews />}
                    loader={async ({ request }) => await requireAuth(request)}
                />
                <Route
                    path='vans'
                    element={<HostVans />}
                    errorElement={<Error />}
                    loader={hostVansLoader}
                />
                <Route
                    path='vans/:id'
                    element={<HostVansDetail />}
                    errorElement={<Error />}
                    loader={hostVansDetailLoader}
                >
                    <Route
                        index
                        element={<HostVanInfo />}
                        loader={async ({ request }) =>
                            await requireAuth(request)
                        }
                    />
                    <Route
                        path='pricing'
                        element={<HostVanPricing />}
                        loader={async ({ request }) =>
                            await requireAuth(request)
                        }
                    />
                    <Route
                        path='photos'
                        element={<HostVanPhotos />}
                        loader={async ({ request }) =>
                            await requireAuth(request)
                        }
                    />
                </Route>
            </Route>

            <Route path='*' element={<NotFound />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
