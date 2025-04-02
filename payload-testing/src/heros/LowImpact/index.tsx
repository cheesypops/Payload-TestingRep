import React from 'react'

import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'


export const LowImpactHero: React.FC<Page['hero']> = ({ 
  title,
  description,
  links,
  primaryColor,
  secondaryColor2,
 }) => {
  return (
    <div className="container mt-16">
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
            
    </div>
  )
}
