'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'

export const HighImpactHero: React.FC<Page['hero']> = (
  { links, 
    title, 
    description,
    media1,
    media2,
    media3,
    primaryColor,
    secondaryColor2
  }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[10.4rem] flex items-center justify-center text-white"
      data-theme="dark"
    >
      <div className="container mb-8 z-10 relative flex items-center justify-center">
        <div className="max-w-[36.5rem] md:text-center">
          {title && (
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl"
            style={{color: primaryColor || 'white'}}
            >
              {title}
            </h1>
          )}
          <div className="mb-4">
            <p
            style={{color: secondaryColor2 || 'white'}}
            >{description}</p>
          </div>
          <ul className="flex md:justify-center gap-4">
              {links && links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media1 && typeof media1 === 'object' && (
        <Media fill imgClassName="-z-10 object-cover" priority resource={media1} />
        )}
        {media2 && typeof media2 === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media2} />
        )}
        {media3 && typeof media3 === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media3} />
        )}
      </div>
    </div>
  )
}
