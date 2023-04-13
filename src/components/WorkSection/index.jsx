import { WorkDiv } from './style'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import img1 from '../../assets/work1.png'
import img2 from '../../assets/work2.png'
import img3 from '../../assets/work3.png'
import img4 from '../../assets/work4.png'
import img5 from '../../assets/work5.png'
import img6 from '../../assets/work6.png'

const WorkSection = ({ language }) => {
  return (
    <WorkDiv id='work'>
      {language === 'en' ? <h1>Works:</h1> : <h1>Projetos:</h1>}
      <div className='div-carrousel'>
        <Swiper
          className='swiper'
          modules={[Navigation, Pagination, EffectFade]}
          effect={'fade'}
          grabCursor={true}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide className='swiper-slide'>
            <img
              src={img1}
              alt='seu-pet'
              onClick={() => {
                window.open('https://projeto-frontend-m3.vercel.app/')
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt='nu-kenzie'
              onClick={() => {
                window.open(
                  'https://react-entrega-s1-nu-kenzie-axeellima.vercel.app/'
                )
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt='kenziehub'
              onClick={() => {
                window.open(
                  'https://react-entrega-s2-formulario-de-cadastro-axeellima.vercel.app/'
                )
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img4}
              alt='burguer-kenzie'
              onClick={() => {
                window.open(
                  'https://react-entrega-s1-hamburgueria-da-kenzie-axeellima.vercel.app/'
                )
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img5}
              alt='smartdevs'
              onClick={() => {
                window.open('https://smartdevs.vercel.app/')
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt='motorshop' />
          </SwiperSlide>
        </Swiper>
      </div>
    </WorkDiv>
  )
}

export default WorkSection
