import { useEffect } from 'react';
import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Meta from './Meta.jsx';
import AOS from "aos";

const AppWrapper = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-sine',
    });
    return () => {
      AOS.refresh();
    }
    
  }, [])
  
  
  return (
      <div  id='contain' className='relative w-screen h-screen bg-gradient-to-b from-[#FFD749] via-white to-[#57ACED]  overflow-x-hidden overflow-y-auto'>
        <Meta/>
        <Nav />
        <Main/>
      </div>
  );
};

export default AppWrapper;
