// components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import SideNav from './SideNav/SideNav';
import useNavToggle from '../hooks/useNavToggle';
import './Layout.css'
import useLoginToggle from '../hooks/useLoginToggle';

export default function Layout() {
  const {isOpen, toggleNav} = useNavToggle();
  const {isLogin, toggleLogin} = useLoginToggle();

  if (isOpen == false) return (
        <div className='layout'>
      <div className='layoutHeader'>
        <Header isOpen={isOpen} toggleNav={toggleNav}/>
      </div>
      <main className='layoutMain'>
        <Outlet />
      </main>
    </div>

  )

  return (
    <div className='layout'>
      <div className='layoutHeader'>
        <Header isOpen={isOpen} toggleNav={toggleNav}/>
      </div>
      <div className='layoutSideNav'>
        <SideNav isLogin={isLogin} toggleLogin={toggleLogin}/>
      </div>
      <main className='layoutMain'>
        <Outlet />
      </main>
    </div>
  )
}
