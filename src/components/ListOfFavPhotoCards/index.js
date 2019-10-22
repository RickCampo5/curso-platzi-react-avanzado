import React from 'react'
import { Image, Grid, Link } from './styles'
import { useQuery } from '@apollo/react-hooks'
import { GET_FAVS } from '../../hoc/getFavs'

export const ListOfFavPhotoCards = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
    fetchPolicy: 'network-only'
  })
  if (loading) return 'Cargando...'
  if (error) return `${error}`
  return (
    <Grid>
      {
        data.favs.map(fav => (
          <Link key={fav.id} to={`/detail/${fav.id}`}>
            <Image src={fav.src} />
          </Link>
        ))
      }
    </Grid>
  )
}
