import styled from 'styled-components'

export const SCard = styled.div`
  width: 18rem;
  min-height: 16rem;
  border: 1px solid #dcdcdc;
  padding: 7px 7px 20px;
  position: relative;
  background-color: #fff;
  box-shadow: -1px 1px 0 #dcdcdc;
  text-align: justify;
  margin: 50px 160px;
  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
  @media screen and (max-width: 1700px) {
    margin: 50px 120px;
  }

  @media screen and (max-width: 1500px) {
    margin: 50px 70px;
  }

  @media screen and (max-width: 1240px) {
    margin: 50px 60px;
  }

  @media screen and (max-width: 1200px) {
    margin: 50px 140px;
  }

  @media screen and (max-width: 1100px) {
    margin: 50px 115px;
  }

  @media screen and (max-width: 1000px) {
    margin: 50px 85px;
  }

  @media screen and (max-width: 930px) {
    margin: 50px 70px;
  }

  @media screen and (max-width: 860px) {
    margin: 50px 50px;
  }

  @media screen and (max-width: 770px) {
    margin: 50px 230px;
  }

  @media screen and (max-width: 625px) {
    margin: 50px 150px;
  }

  @media screen and (max-width: 525px) {
    margin: 50px 80px;
  }

  @media screen and (max-width: 487px) {
    margin: 50px 45px;
  }

  @media screen and (max-width: 380px) {
    margin: 50px 30px;
  }
`

export const StyleImg = styled.img`
  background-position: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 550px;
`

export const ContainerCards = styled.div`
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`

export const ContainerImage = styled.div`
  margin-bottom: 100px;
`

export const TextTitle = styled.div`
  font-weight: 500;
  word-wrap: break-word;
  margin-bottom: 50px;
  color: #ebebeb;
  text-align: center;
`

export const SButtonTitle = styled.button`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  background-color: #c79c60;
  line-height: 38px;
  padding: 0 18px;
  border: none;
  font-weight: 500;
  font-size: 12px;
  display: inline-flex;
  align-items: center;

  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }
`

export const ContainerTitle = styled.div`
  width: 100%;
  top: 14%;
  position: absolute;
  z-index: 100;
  @media screen and (max-width: 770px) {
    top: 7%;
  }
`

export const STextInvest = styled.div`
  text-align: center;
`
