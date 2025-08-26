import React, { useEffect } from 'react'
import Magnet from './common/Magnet'
import { Link } from 'react-router'

const InfoCards = () => {
    useEffect(() => {
        const { ScrollObserver, valueAtPercentage } = aat
    
        const cardsContainer = document.querySelector('.cards')
        const cards = document.querySelectorAll('.card')
    
        if (!cardsContainer || cards.length === 0) return
    
        cardsContainer.style.setProperty('--cards-count', cards.length)
        cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`)
    
        Array.from(cards).forEach((card, index) => {
          const offsetTop = 20 + index * 20
          card.style.paddingTop = `${offsetTop}px`
    
          if (index === cards.length - 1) return
    
          const toScale = 1 - (cards.length - 1 - index) * 0.1
          const nextCard = cards[index + 1]
          const cardInner = card.querySelector('.card__inner')
    
          ScrollObserver.Element(nextCard, {
            offsetTop,
            offsetBottom: window.innerHeight - card.clientHeight
          }).onScroll(({ percentageY }) => {
            cardInner.style.scale = valueAtPercentage({
              from: 1,
              to: toScale,
              percentage: percentageY
            })
            cardInner.style.filter = `brightness(${valueAtPercentage({
              from: 1,
              to: 0.6,
              percentage: percentageY
            })})`
          })
        })
    }, [])
  return (
    <>
    <section id='ScrollCards' className='container'>
      <div className="cards">
        <div className="card" data-index="0">
          <div className="card__inner">
            <div className="card__content">
              <h1 className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase">Web development <span className='text-second'>01</span></h1>
              <p className="card__description">I specialize in creating modern, responsive, and user-friendly websites using the latest frontend technologies. From clean UI design to smooth functionality, I build web experiences that are fast, scalable, and optimized for all devices.</p>
              <Magnet magnetStrength={4}>
                <div className="magnetic-btn">
                  <Link className='ContactButton font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this'>READ MORE</Link>
                </div>
              </Magnet>
            </div>
          </div>
        </div>

        <div className="card" data-index="1">
          <div className="card__inner">
            <div className="card__image-container">
            </div>
            <div className="card__content">
              <h1 className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase">Api integration <span className='text-second'>02</span></h1>
              <p className="card__description">I integrate powerful APIs to connect frontend apps with real-time data and dynamic features. Whether it's fetching content, handling user inputs, or syncing services, I ensure seamless communication between the client and backend.</p>
              <Magnet magnetStrength={4} >
                <div className="magnetic-btn">
                  <Link className='ContactButton font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this'>READ MORE</Link>
                </div>
              </Magnet>
            </div>
          </div>
        </div>

        <div className="card" data-index="2">
          <div className="card__inner">
            <div className="card__image-container">
            </div>
            <div className="card__content">
              <h1 className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase">figma to responsive website <span className='text-second'>03</span></h1>
              <p className="card__description">I convert Figma designs into fully responsive and functional websites with clean code and pixel-perfect accuracy. Every section is optimized for speed, usability, and smooth performance across all screen sizes.</p>
              <Magnet magnetStrength={4}>
                <div className="magnetic-btn">
                  <Link className='ContactButton font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this'>READ MORE</Link>
                </div>
              </Magnet>
            </div>
          </div>
        </div>

        <div className="card" data-index="3">
          <div className="card__inner">
            <div className="card__image-container">
            </div>
            <div className="card__content">
              <h1 className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase">Web management <span className='text-second'>04</span></h1>
              <p className="card__description">I convert Figma designs into fully responsive and functional websites with clean code and pixel-perfect accuracy. Every section is optimized for speed, usability, and smooth performance across all screen sizes.</p>
              <Magnet magnetStrength={4}>
                <div className="magnetic-btn">
                  <Link className='ContactButton font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this'>READ MORE</Link>
                </div>
              </Magnet>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default InfoCards