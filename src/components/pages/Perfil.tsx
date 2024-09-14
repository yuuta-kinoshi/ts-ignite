import style from './Perfil.module.css'
import Sidebar from '../elements/Sidebar'
import Posts from '../elements/Posts'
import { PostType } from '../elements/Posts'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const posts: PostType[] = [
  {
    id: 2,
    author: {
      avatarUrl: 'http://localhost:5173/public/imagePerfil.jpg',
      name: 'Yuuta Kinoshi',
      role: 'Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Ola, pessoal!' },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa. É um projeto que estou desenvolvendo em React Native!' },
      { type: 'link', content: 'https://github.com/yuuta-kinoshi' }
    ],
    publishedAt: new Date('08-11-2024 20:00:00')
  },
]

const Perfil = () => {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }
  return (
    <div>
      <header onClick={handleGoBack} className={`${style.title} flex items-center gap-3 cursor-pointer font-bold text-3xl`}>
        <IoIosArrowBack />
        <h1>Meu Perfil</h1>
      </header>
      <div className={style.container}>
        <Sidebar user='Yuuta Kinoshi' profission='Developer' />
        {posts.map((post) => {
          return (
            <Posts
              key={post.id}
              post={post}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Perfil
