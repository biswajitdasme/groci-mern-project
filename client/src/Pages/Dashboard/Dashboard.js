import { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

function Dashboard() {
    const [toggle, setToggle] = useState(false);
  const sidebar = useRef();
  
  const { admin,logout } = useAuth();

    useEffect(() => {
        sidebar.current.classList.toggle("-translate-x-full");
        
    }, [toggle]);

    return <div className="relative min-h-screen md:flex">
  {/* <!-- mobile menu bar --> */}
  <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
    {/* <!-- logo --> */}
    <Link to="/" className="block p-4 text-white font-bold"><img src="/images/logo.webp" alt="" /></Link>

    {/* <!-- mobile menu button --> */}
    <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700" onClick={()=>setToggle(!toggle)}>
      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  {/* <!-- sidebar --> */}
  <div ref={sidebar} className="sidebar bg-gray-800 text-gray-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

    {/* <!-- logo --> */}
    <Link to="/" className="text-white flex items-center space-x-2 px-4">
      {/* <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
      <span className="text-2xl font-extrabold">Dashboard</span> */}
                <img src="/images/logo.webp" alt="" />
    </Link>

    {/* <!-- nav --> */}
    <nav>
      <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
        Manage Orders
      </Link>
          {admin && <Link to="/dashboard/manageproducts" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
            Manage Products
          </Link>}
    
      <button onClick={logout} className="inline-block text-left w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 hover:text-white">
       Logout
      </button>
    </nav>
  </div>

  {/* <!-- content --> */}
  <div className="flex-1 p-5 min-h-screen">
    <Outlet/>
  </div>

</div>
}

export default Dashboard;
