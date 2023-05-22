import { useState } from "react";
import Header from "../Header/Header";

import Link from "next/link";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMobileMenuHandler = () => setIsOpened(!isOpened);

  return (
    <nav className='bg-primary-color px-7 py-5'>
      <Header menuHandler={toggleMobileMenuHandler} />
      <ul
        className={` ${true ? 'h-[100px]' : 'h-0'} hidden lg:flex lg:flex-row lg:gap-x-16 lg:justify-center lg:items-center mt-3 overflow-y-hidden duration-75`}>
        <li className='prose-sm tracking-wide'>
          <Link href={'#'}>Economics</Link>
        </li>
        <li className='prose-sm tracking-wide'>
          <Link href={'#'}>Politics</Link>
        </li>
        <li className='prose-sm tracking-wide'>
          <Link href={'#'}>Entertainment</Link>
        </li>
        <li className='prose-sm tracking-wide'>
          <Link href={'#'}>Sports</Link>
        </li>
      </ul>

      {/* MOBILE MENU */}
      <ul
        className={`hidden flex-col gap-y-4 justify-center items-center mt-3`}>
        <li className='prose-sm tracking-wide'>
          <Link href={'#'}>Economics</Link>
        </li>
        <li className='prose-sm tracking-wide'>
          <Link href={'#'}>Politics</Link>
        </li>
        <li className='prose-sm tracking-wide'>
          <Link href={'#'}>Entertainment</Link>
        </li>
        <li className='prose-sm tracking-wide'>
          <Link href={'#'}>Sports</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
