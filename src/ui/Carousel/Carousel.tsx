import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import type { CarouselProps } from './types'
import styles from './Carousel.module.scss'

export const Carousel: React.FC<CarouselProps> = ({
  items,
  defaultActiveIndex = 0,
  autoPlay = false,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  itemsPerView = 1,
  gap = 16,
  swipeable = true,
  className = ''
}) => {
  const maxIndex = Math.max(0, items.length - itemsPerView)
  const positions = maxIndex + 1

  const [activeIndex, setActiveIndex] = useState(Math.min(defaultActiveIndex, maxIndex))
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStartX = useRef<number | null>(null)

  const goTo = (index: number) => {
    setActiveIndex(((index % positions) + positions) % positions)
  }

  useEffect(() => {
    if (!autoPlay || positions <= 1) return

    const timer = setInterval(() => {
      setActiveIndex(current => (current + 1) % positions)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [autoPlay, autoPlayInterval, positions])

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!swipeable) return
    const target = event.target as HTMLElement
    if (target.closest('video, button, a, input, textarea, select')) return

    dragStartX.current = event.clientX
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return
    setDragOffset(event.clientX - dragStartX.current)
  }

  const endDrag = () => {
    if (dragStartX.current === null) return

    const threshold = 50
    if (dragOffset < -threshold) goTo(activeIndex + 1)
    else if (dragOffset > threshold) goTo(activeIndex - 1)

    dragStartX.current = null
    setIsDragging(false)
    setDragOffset(0)
  }

  const slideBasis = `calc((100% - ${gap * (itemsPerView - 1)}px) / ${itemsPerView})`
  const trackTransform = `translateX(calc(-1 * (${slideBasis} + ${gap}px) * ${activeIndex} + ${dragOffset}px))`

  return (
    <div className={`${styles['carousel']}${className ? ` ${className}` : ''}`}>
      <div
        className={`${styles['carousel-viewport']}${swipeable ? ` ${styles['is-swipeable']}` : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className={styles['carousel-track']}
          style={{
            transform: trackTransform,
            gap: `${gap}px`,
            transition: isDragging ? 'none' : undefined
          }}
        >
          {items.map(item => (
            <div key={item.id} className={styles['carousel-slide']} style={{ flex: `0 0 ${slideBasis}` }}>
              {item.content}
            </div>
          ))}
        </div>

        {showArrows && positions > 1 && (
          <>
            <button
              type="button"
              className={`${styles['carousel-arrow']} ${styles['is-prev']}`}
              aria-label="Slide anterior"
              onClick={() => goTo(activeIndex - 1)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              type="button"
              className={`${styles['carousel-arrow']} ${styles['is-next']}`}
              aria-label="Próximo slide"
              onClick={() => goTo(activeIndex + 1)}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>

      {showDots && positions > 1 && (
        <div className={styles['carousel-dots']} role="tablist" aria-label="Slides do carrossel">
          {Array.from({ length: positions }).map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Ir para o slide ${index + 1}`}
              className={`${styles['carousel-dot']}${index === activeIndex ? ` ${styles['is-active']}` : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
