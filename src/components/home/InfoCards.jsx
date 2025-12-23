import React, { useEffect } from 'react'
import Magnet from '../effects/Magnet'
import { Link } from 'react-router'
import { AiOutlineApi } from "react-icons/ai";
import { SlGlobe } from "react-icons/sl";
import { FaFigma } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";

const InfoCards = () => {
  useEffect(() => {
    const { ScrollObserver, valueAtPercentage } = aat

    const cardsContainer = document.querySelector('.cards')
    const cards = document.querySelectorAll('.card')

    if (!cardsContainer || cards.length === 0) return

    cardsContainer.style.setProperty('--cards-count', cards.length)
    cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`)

    Array.from(cards).forEach((card, index) => {
      const offsetTop = 15 + index * 15
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
      <section id='ScrollCards'>
        <div className="cards">
          <div className="card" data-index="0">
            <div className="card__inner" id='ServicesBG'>
              <div className="card__content">
                <div className="card__title font-soldier text-brand text-5xl flex items-center justify-between uppercase"><span className='flex items-center gap-2.5'><SlGlobe />Web development</span> <span className='text-brand'>01</span></div>
                <p className="card__description text-brand">I specialize in creating modern, responsive, and user-friendly websites using the latest frontend technologies. From clean UI design to smooth functionality, I build web experiences that are fast, scalable, and optimized for all devices.</p>
                <Magnet magnetStrength={4} padding={20}>
                  <div className="magnetic-btn">
                    <Link to={'/about'} className='ReadMoreButton transition-trigger font-poppins font-medium px-[24px] py-[8px] text-base hover-this' aria-label="view projects">VIEW PROJECTS</Link>
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
                <div className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase"><span className='flex items-center gap-2.5'><AiOutlineApi />Api integration</span> <span className='text-second'>02</span></div>
                <p className="card__description">I integrate powerful APIs to connect frontend apps with real-time data and dynamic features. Whether it's fetching content, handling user inputs, or syncing services, I ensure seamless communication between the client and backend.</p>
                <Magnet magnetStrength={4} >
                  <div className="magnetic-btn">
                    <Link to={'/about'} className='ContactButton font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this' aria-label="view projects">VIEW PROJECTS</Link>
                  </div>
                </Magnet>
              </div>
            </div>
          </div>

          <div className="card" data-index="2">
            <div className="card__inner" id='ServicesBG'>
              <div className="card__image-container">
              </div>
              <div className="card__content">
                <div className="card__title font-soldier text-brand text-5xl flex items-center justify-between uppercase"><span className='flex items-center gap-2.5'><FaFigma />figma to website</span> <span className='text-brand'>03</span></div>
                <p className="card__description text-brand">I convert Figma designs into fully responsive and functional websites with clean code and pixel-perfect accuracy. Every section is optimized for speed, usability, and smooth performance across all screen sizes.</p>
                <Magnet magnetStrength={4} padding={20}>
                  <div className="magnetic-btn">
                    <Link to={'/about'} className='ReadMoreButton transition-trigger font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this' aria-label="view projects">VIEW PROJECTS</Link>
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
                <div className="card__title font-soldier text-second text-5xl flex items-center justify-between uppercase"><span className='flex items-center gap-2.5'><MdManageHistory />Web management</span> <span className='text-second'>04</span></div>
                <p className="card__description">Web Management services that keep your site running smoothly — from regular updates, security monitoring, and speed optimization to content management and backups. I ensure your website stays secure, fast, and user-friendly so you can focus on growing your business without worries.
                </p>
                <Magnet magnetStrength={4}>
                  <div className="magnetic-btn">
                    <Link to={'/about'} className='ContactButton transition-trigger font-poppins font-medium px-[24px] py-[8px] text-base text-Primary hover-this' aria-label="view projects">VIEW PROJECTS</Link>
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