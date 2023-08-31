import React, { Fragment } from 'react';
import {
  HeaderArea,
  TitleAndLogo,
  HeaderTitle,
  Image,
  UsefulLinks,
  Link
} from './styleHeader';
import driva_logo from '../../assets/image/driva_logo.png'
import { 
  BsFillSunFill, 
  BsGithub, 
  BsFillCloudFill 
} from 'react-icons/bs';

function Header() {
  return (
    <Fragment>
      <HeaderArea>
        <TitleAndLogo>
          <HeaderTitle>Driva</HeaderTitle>
          <Image src={driva_logo} />
        </TitleAndLogo>

        <UsefulLinks>
            <Link href='/'>
              <BsFillCloudFill className='icon'/>
            </Link>
            <Link href='/'>
              <BsFillSunFill className='icon'/>
            </Link>
            <Link href='https://github.com/lucassouzafranco/desafio-driva'>
              <BsGithub className='icon' />
            </Link>
        </UsefulLinks>
        
      </HeaderArea>
    </Fragment>
  )
}

export default Header;