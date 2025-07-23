import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Cursor = () => {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const hoverEls = document.querySelectorAll('.hover-this')
    const brownEls = document.querySelectorAll('.hover-brown')

    const moveCursor = (e) => {
      gsap.to(cursor, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        ease: 'power3.out',
      })
    }

    const handleMouseEnter = () => {
       gsap.to(cursor, {
         duration: 0.3,
        scale: 2.5,
        ease: 'power3.out',
        mixBlendMode: 'difference',
        background: 'white'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 1,
        ease: 'power3.out',
        mixBlendMode: 'normal',
        background: 'transparent'
      })
    }
    const handleBrownEnter = () => {
    gsap.to(cursor, {
      duration: 0.3,
      scale: 1.5,
      ease: 'power3.out',
      borderColor: '#BF4A1A',
      background: 'transparent'
    })
  }

  const handleBrownLeave = () => {
    gsap.to(cursor, {
      duration: 0.3,
      scale: 1,
      ease: 'power3.out',
      borderColor: '#adadace3',
      background: 'transparent'
    })
  }

    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
      brownEls.forEach(el => {
    el.addEventListener('mouseenter', handleBrownEnter)
    el.addEventListener('mouseleave', handleBrownLeave)
  })
    window.addEventListener('mousemove', moveCursor)

    return () => {
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
       brownEls.forEach(el => {
      el.removeEventListener('mouseenter', handleBrownEnter)
      el.removeEventListener('mouseleave', handleBrownLeave)
    })

      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none rounded-full bg-transparent border-1 border-[#adadace3] z-[9999] transition-transform duration-300 ease-out"
      style={{ width: 35, height: 35, transform: 'translate(-50%, -50%) scale(1)' }}
    />
  )
}

export default Cursor

