import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import '../../../assets/css/style.css'
import { Main } from './MainElement'

const Layout = (props) => {
  return (
    <>
      <Header />
      <Main className='container-fluid'>
        {props.children}
      </Main>
      <Footer />
    </>
  )
}

export default Layout


