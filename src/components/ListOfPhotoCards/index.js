import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { GET_PHOTOS } from '../../hoc/getPhotos'

export const ListOfPhotoCards = categoryId => {
  const { loading, error, data } = useQuery(GET_PHOTOS, { variables: categoryId })
  if (loading) return 'Cargando...'
  if (error) return `${error}`
  return (
    <ul>
      {
        data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}
