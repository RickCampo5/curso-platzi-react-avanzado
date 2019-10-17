import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Home = ({ id }) => (
  // eslint-disable-next-line react/jsx-fragments
  <Fragment>
    <ListOfCategories />
    <ListOfPhotoCards categoryId={id} />
  </Fragment>
)
