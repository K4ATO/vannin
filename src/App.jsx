import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import './server';
import Layout from './Layout/Layout';
import Host from './pages/Host/Host';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/host' element={<Host />}>
                        <Route index element={<Dashboard />} />
                        <Route path='income' element={<Income />} />
                        <Route path='reviews' element={<Reviews />} />
                    </Route>
                    <Route path='/vans' element={<Vans />} />
                    <Route path='/vans/:id/' element={<VanDetail />} />
                    <Route path='/about' element={<About />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
