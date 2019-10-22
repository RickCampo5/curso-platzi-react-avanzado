import React, { Fragment } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'
import { LIKE_PHOTO } from '../../hoc/likePhoto'
import { useMutation } from '@apollo/react-hooks'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518001589401-1743b61d1def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [setLiked] = useMutation(LIKE_PHOTO)
  const [show, element] = useNearScreen()
  const handleFavClick = () => { setLiked({ variables: { input: { id } } }) }

  return (
    <Article ref={element}>
      {
        show &&
        // eslint-disable-next-line react/jsx-fragments
          <Fragment>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
          </Fragment>
      }
    </Article>
  )
}
