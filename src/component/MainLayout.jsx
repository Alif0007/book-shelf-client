import { Outlet } from 'react-router';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16 bg-base-100">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;