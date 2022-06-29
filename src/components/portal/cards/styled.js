import styled from 'styled-components'

export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ]
}

export const SCard = styled.div`
  border: 1px solid #dcdcdc;
  padding: 7px 7px 45px;
  position: relative;
  background-color: #fff;
  box-shadow: -1px 1px 0 #dcdcdc;
  height: 480px;
  width: 310px;
  text-align: center;
  margin: 50px 100px;
  :hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
    transition: 1s;
    opacity: 0.5;
  }

  @media screen and (max-width: 1700px) {
    margin: 50px 70px;
  }

  @media screen and (max-width: 1500px) {
    margin: 50px 30px;
  }

  @media screen and (max-width: 1240px) {
    margin: 50px 20px;
  }

  @media screen and (max-width: 1150px) {
    margin: 50px 85px;
  }

  @media screen and (max-width: 780px) {
    margin: 50px 155px;
  }

  @media screen and (max-width: 700px) {
    margin: 50px 125px;
  }

  @media screen and (max-width: 625px) {
    margin: 50px 75px;
  }

  @media screen and (max-width: 525px) {
    margin: 50px 55px;
  }

  @media screen and (max-width: 487px) {
    margin: 50px 25px;
  }
`

export const SCardImg = styled.img`
  width: 293px;
  height: 150px;
  object-fit: cover;
`

export const SButton = styled.button`
  position: absolute;
  bottom: -18px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #fff;
  background-color: #c79c60;
  line-height: 38px;
  text-transform: uppercase;
  padding: 0 15px;
  border-radius: 5px;
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

export const StyleImg = styled.img`
  background-position: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 550px;
  margin-bottom: 100px;
`

export const SContainer = styled.div`
  font-family: 'Nunito', Helvetica, Arial, Lucida, sans-serif;
  width: 85%;
  margin: 60px auto;
`

export const SText = styled.div`
  width: 100%;
  top: 18%;
  position: absolute;
  z-index: 100;
`

export const Sh2 = styled.h2`
  font-weight: 500;
  font-family: 'Great Vibes', handwriting;
  word-wrap: break-word;
  margin-top: 0;
  font-size: 65px;
  color: #ebebeb;
  text-align: center;
`

export const STextInvest = styled.div`
  margin-left: 45px;
  margin-bottom: 50px;
`