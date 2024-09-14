import Posts from '../elements/Posts'
import style from './Home.module.css'
import Sidebar from '../elements/Sidebar'
import { PostType } from '../elements/Posts'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/153693994?v=4',
      name: 'Taki',
      role: 'Back-end'
    },
    content: [
      { type: 'paragraph', content: 'Ola, pessoal!' },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa. É um projeto que estou desenvolvendo em PHP!' },
      { type: 'link', content: 'https://github.com/Takikyun2' }
    ],
    publishedAt: new Date()
  },
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

const Home = () => {
  return (
    <div className={style.wrapper}>
      <Sidebar user='Yuuta Kinoshi' profission='Developer' />
      <main className='flex flex-col gap-5'>
        {posts.map((post) => {
          return (
            <Posts
              key={post.id}
              post={post}
            />
          )
        })}
      </main>
    </div>
  )
}

export default Home
