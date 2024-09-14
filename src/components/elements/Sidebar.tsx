import style from './Sidebar.module.css'
import perfilImage from '../../../public/imagePerfil.jpg'
import bunner from '../../../public/bunnerPerfil.gif'
import Button from './Button'

import {
  FaPen
} from 'react-icons/fa6'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

interface SidebarProps {
  user: string;
  profission: string;
}

const Sidebar = ({ user, profission }: SidebarProps) => {
  return (
    <aside className={style.sidebar}>
      <div className={style.perfil}>
        <img style={{
          width: '100%',
          height: '120px',
          objectFit: 'cover'
        }} src={bunner} />
        <div style={{ transform: 'translateY(-50px)' }} className="flex flex-col items-center justify-center">
          <Avatar src={perfilImage} />
          <strong className='mt-2'>{user}</strong>
          <span className='text-gray-400'>{profission}</span>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center pt-5">
        <Link to='/perfil'>
          <Button iconleft={<FaPen />} text='Editar perfil' />
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
