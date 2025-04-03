import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const MediumImpactHero: React.FC<Page['hero']> = ({ 
  links,
  title,
  description,
  media1,
  primaryColor,
  secondaryColor2,
  backgroundMark
 }) => {
  return (
    <div className="">
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
                        {backgroundMark && (
                          <div className="absolute inset-0 pointer-events-none">
                            <p>si hay backgroundMark</p>
                          </div>
                            )}
                          <Media
                            resource={media1}
                            className="mt-8 w-full max-w-[36.5rem] mx-auto"
                            loading="eager"
                            size="(max-width: 768px) 100vw, 50vw"
                            priority={true}
                          />
                    </div>
                  </div>
    </div>
  )
}
