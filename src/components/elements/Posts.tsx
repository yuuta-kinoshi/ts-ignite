import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import React, { FormEvent } from 'react'
import Button from './Button'
import { IoSend } from "react-icons/io5";
import style from './Focus.module.css'
import Comments from './Comments';
import Avatar from './Avatar';

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostsProps {
  post: PostType
}

const Posts = ({ post }: PostsProps) => {

  const [message, setMessage] = React.useState<string[]>([])

  const [newComment, setNewComment] = React.useState('')

  const publishedDateFomatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const formatDateToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function hadnleSubmitMessage(e: FormEvent) {
    e.preventDefault()
    if (newComment !== '') {
      setMessage([...message, newComment])
      setNewComment('')
    } else {
      alert('Fill the input')
    }
  }

  function deleteMessage(commentToDelete: string) {
    const commentsWithoutDeletedOn = message.filter(comment => {
      return comment !== commentToDelete
    })

    setMessage(commentsWithoutDeletedOn)
  }

  function handleNewCommentInvalid() {

  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <div className='bg-gray-900 p-5 md:p-10 rounded-md'>
      <header className='flex justify-between items-center'>
        <div className="left flex items-center gap-4">
          <Avatar src={post.author.avatarUrl} border={true} />
          <div className="info">
            <i className='text-lg'>{post.author.name}</i>
            <p className='text-gray-400'>{post.author.role}</p>
          </div>
        </div>
        <div className="right">
          <time className='text-gray-400' title={publishedDateFomatted} dateTime={post.publishedAt.toISOString()}>{formatDateToNow}</time>
        </div>
      </header>
      <div className='flex flex-col gap-10 mt-10'>
        {post.content.map(line => (
          line.type === 'paragraph'
            ? <p key={line.content}>{line.content}</p>
            : <a key={line.content} href={line.content} target='_blank' style={{ color: 'var(--purple)' }}>{line.content}</a>
        ))}
      </div>
      <hr className='my-5 w-full' />
      <form onSubmit={hadnleSubmitMessage} className={style.commentForm}>
        <p className='font-bold my-6'>Deixe seu feedback</p>
        <input
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className='w-full h-15 rounded-lg p-5 text-purple-950 mb-3'
          placeholder="Deixe um comentário..."
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <Button disabled={isNewCommentEmpty} text='Enviar' iconright={<IoSend />} />
        </footer>
      </form>
      {message.map(comment => {
        return (
          <Comments
            onDeleteComment={deleteMessage}
            key={comment}
            content={comment}
          />
        )
      })}
    </div>
  )
}

export default Posts
