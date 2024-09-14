import React from 'react'

import style from './Comments.module.css'
import imagePerfil from '../../../public/imagePerfil.jpg'
import { FaTrash } from 'react-icons/fa6'
import { SlLike } from "react-icons/sl";
import Avatar from './Avatar';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

const Comments = ({ content, onDeleteComment }: CommentProps) => {

  const [likeCount, setLikeCount] = React.useState(0) 

  function handleDeleteMessage() {
    onDeleteComment(content)
  }
  
  return (
    <div className={style.comment}>
      <div className={style.perfil}>
        <Avatar src={imagePerfil} border={false} />
      </div>
      <div className={style.commentContent}>
        <header className='flex justify-between items-start'>
          <div className="flex flex-col">
            <strong>Yuuta Kinoshi <span className='text-gray-500 font-medium'>(você)</span></strong> 
            <time className='text-gray-500' dateTime="Quarta-feira, 11 de setembro de 2024, 19:56">Cerca de 2h</time>
          </div>
          <div className={style.trash}>
            <FaTrash onClick={handleDeleteMessage} />
          </div>
        </header>
        <ul>
          <li className='my-7 bg-gray-800 text-ellipsis'>{content}</li>
        </ul>
        <button onClick={() => setLikeCount(likeCount + 1)} className={style.buttonLike}>{<SlLike />} Aplaudir • <span className={style.buttonLike}>{likeCount}</span></button>
      </div>
    </div>
  )
}

export default Comments
