import React from 'react'
import { ListOfFavPhotoCards } from '../components/ListOfFavPhotoCards'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    // eslint-disable-next-line react/jsx-fragments
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <ListOfFavPhotoCards />
    </Layout>
  )
}
