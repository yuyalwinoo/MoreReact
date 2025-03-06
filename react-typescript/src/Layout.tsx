import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
const Layout = () => {
  return (
    <section className='w-11/12 lg:max-w-5xl mx-auto '>
        <Header />
        <div className='my-10'>
          <Outlet/>
        </div>
        <Footer />
    </section>
  )
}

export default Layout