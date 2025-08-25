import React, { useEffect } from 'react'

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
    <section id='ScrollCards'>
      <div className="space space--small"></div>
      <div className="cards">
        <div className="card" data-index="0">
          <div className="card__inner">
            <div className="card__image-container">
            </div>
            <div className="card__content">
              <h1 className="card__title">Card Title</h1>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. 
                Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate?
                Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>

        <div className="card" data-index="1">
          <div className="card__inner">
            <div className="card__image-container">
            </div>
            <div className="card__content">
              <h1 className="card__title">Card Title</h1>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. 
                Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate?
                Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>

        <div className="card" data-index="2">
          <div className="card__inner">
            <div className="card__image-container">
            </div>
            <div className="card__content">
              <h1 className="card__title">Card Title</h1>
              <p className="card__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. 
                Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate?
                Reprehenderit, harum!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space"></div>
    </section>
    </>
  )
}

export default InfoCards