import Link from "next/link";

import PrimaryButton from "../Button/PrimaryButton";

const Header = (menuHandler = null) => {
  return (
    <div className='flex flex-row justify-between lg:justify-between items-center'>
      <span className='hidden lg:block prose-sm font-semibold'>
        23 January 2023
      </span>
      <h1 className='prose-2xl underline font-[600] tracking-wider'>
        <Link href={'#'}>news.tv</Link>
      </h1>
      <PrimaryButton className='hidden lg:block border-accent-color text-accent-color hover:bg-accent-color hover:text-white duration-100'>
        Subscribe
      </PrimaryButton>
      <PrimaryButton onClick={menuHandler} className='flex lg:hidden justify-items-center items-center'>
        <ion-icon
          name='menu-outline'
          class='prose-2xl'></ion-icon>
      </PrimaryButton>
    </div>
  );
};

export default Header;
