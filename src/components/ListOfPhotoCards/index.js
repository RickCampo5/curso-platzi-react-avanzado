import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const getPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const ListOfPhotoCards = () => {
  const { loading, data } = useQuery(getPhotos)
  if (loading) return ''
  return (
    <ul>
      {
        data.photos.map(photo => {
          <PhotoCard {...photo} />
        })
      }
    </ul>
  )
}
