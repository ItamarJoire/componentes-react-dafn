import React from 'react'
import type { SkeletonProps } from './types'
import styles from './Skeleton.module.scss'

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width,
  height,
  count = 1,
  className = '',
  style
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => {
        const isLastOfMany = count > 1 && index === count - 1

        return (
          <span
            key={index}
            aria-hidden="true"
            className={`${styles['skeleton']} ${styles[`skeleton-${variant}`]}${className ? ` ${className}` : ''}`}
            style={{ width: width ?? (isLastOfMany ? '60%' : undefined), height, ...style }}
          />
        )
      })}
    </>
  )
}
