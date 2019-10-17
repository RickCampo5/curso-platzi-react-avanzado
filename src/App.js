import React, { Fragment } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <h1>DetailId</h1>
          // eslint-disable-next-line react/jsx-fragments
          : <Fragment><ListOfCategories /><ListOfPhotoCards categoryId={1} /></Fragment>
      }
    </div>
  )
}
