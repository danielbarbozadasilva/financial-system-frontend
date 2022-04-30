import React from 'react'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'
import '../../assets/css/style.css'

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

const Main = styled.main`
    width: 85%;
    flex: 1;
`
