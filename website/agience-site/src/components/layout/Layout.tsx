import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout; 