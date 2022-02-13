import Nav from './Nav.jsx';
import Main from './Main.jsx';
import Meta from './Meta.jsx';


const AppWrapper = () => {

  return (
      <div  id='contain' className='relative w-screen h-screen bg-gradient-to-b from-[#FFD749] via-white to-[#57ACED]  overflow-x-hidden overflow-y-scroll'>
        <Meta/>
        <Nav />
        <Main/>
      </div>
  ); 
};

export default AppWrapper;
