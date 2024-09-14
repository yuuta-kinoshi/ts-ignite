import React from 'react'

import Logo from '../../../public/ignitesimbol.png'

import pefilImage from '../../../public/imagePerfil.jpg'
import { Link } from 'react-router-dom'
import {
  FaQuestion,
  FaUser
} from 'react-icons/fa6'

import style from './Header.module.css'
import Avatar from '../elements/Avatar'

const Header = () => {

  const [modal, setModal] = React.useState(false)

  function handleModal() {
    setModal(modal => !modal)
  }

  return (
    <header className='py-5 bg-gray-900'>
      <div className="wrapper flex items-center gap-5 justify-between">
        <div className="hidden md:block"></div>
        <div className="flex items-center gap-5 justify-center">
          <img src={Logo} alt="Logo" />
          <h1 className='text-white font-bold text-xl'>Ignite Feed</h1>
        </div>
        <div className="relative" onClick={handleModal}>
          <Avatar src={pefilImage} border={false} width='63px' />
          {modal && (
            <div className={style.perfilMenu}>
              <ul className='mt-3'>
                <li><Link to='/perfil' className='flex items-center gap-3 p-2 px-8 rounded-sm mb-3'><FaUser /> Perfil</Link></li>
                <li><Link to='/' className='flex items-center gap-3 p-2 px-8 rounded-sm'><FaQuestion /> Ajuda</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
