import React from 'react';
import {Link} from 'react-router-dom';
import Button from "../card/button";

class Header extends React.Component<any, any> {

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number 
  | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
    return(
      <header>
        <nav className={'flex justify-between items-center bg-white-100 p-5 font-bold text-amber-950 italic'}>
          <h2 className={'w-[50px] text-2xl font-bold text-amber-950 italic'}>Cake</h2>
          <ul className={'flex gap-[4vw] font-bold text-amber-950'}>
            <li><Link to={'/'}>HOME</Link></li>
            <li><Link to={'/AboutPage'}>ABOUT US</Link></li>
            <li><Link to={'/menu'}>MENU</Link></li>
            <li><Link to={'/review'} >REVIEW</Link></li>
           </ul>

          <div className={'px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full'}>
            <button ><Link to={'/signin'} >Login</Link></button>
          </div>
        </nav>
      </header>
    );
  }

}

export default Header;