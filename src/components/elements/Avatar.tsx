import { ImgHTMLAttributes } from 'react'
import style from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  border?: boolean;
}

const Avatar = ({ border = true, width = '80px', ...props }: AvatarProps) => {
  if (border) {
    return <img
            style={{ width: width }}
            className={style.avatarBorder}
            {...props}
          />
  } else {
    return <img
            style={{ width: width }}
            className={style.avatarBorder}
            {...props}
          />
  }
}

export default Avatar
