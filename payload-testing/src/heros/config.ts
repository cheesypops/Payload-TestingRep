import type { Field } from 'payload'


import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Tipo de Hero',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Medium Impact Alternative',
          value: 'mediumImpactAlt',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: false,
      admin: {
        condition: (_, { type } = {}) => type !== 'none',
      },
      label: 'Título',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        condition: (_, { type } = {}) => type !== 'none',
      },
      label: 'Descripción',
    },
    linkGroup({ // creado en el ejemplo
       overrides: {
        maxRows: 2,  // {type === ‘highImpact ? 2 : 1}
        admin: {
          condition: (_, { type } = {}) => type !== 'none',
        },
      },
     }),
    {
      name: 'media1',
      type: 'upload',
      label: 'Imagen 1',
      admin: {
        condition: (_, { type } = {}) => type !== 'none' && type !== 'lowImpact',
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'media2',
      type: 'upload',
      label: 'Imagen 2',
      admin: {
        condition: (_, { type } = {}) => type !== 'none' && type === 'highImpact',
      },
      relationTo: 'media',
      required: true, // ???
    },
    {
      name: 'media3',
      type: 'upload',
      label: 'Imagen 3',
      admin: {
        condition: (_, { type } = {}) => type !== 'none' && type === 'highImpact',
      },
      relationTo: 'media',
      required: true, // ???
    },
    {
      name: 'primaryColor',
      type: 'select',
      defaultValue: 'yellow',
      admin: {
        condition: (_, { type } = {}) => type !== 'none' ,
      },
      options: [
            {
              label: 'Amarillo',
              value: 'yellow',
            },
            {
              label: 'Azul',
              value: 'blue',
            },
            {
              label: 'Verde',
              value: 'green',
            },
            {
              label: 'Crema',
              value: 'cream',
            },
          ],
     label: 'Color Primario'
    },
    {
      name: 'secondaryColor2',
      type: 'select',
      defaultValue: 'yellow',
      admin: {
        condition: (_, { type } = {}) => type !== 'none' ,
      },
      options: [
            {
              label: 'Amarillo',
              value: 'yellow',
            },
            {
              label: 'Azul',
              value: 'blue',
            },
            {
              label: 'Verde',
              value: 'green',
            },
            {
              label: 'Crema',
              value: 'cream',
            },
          ],
     label: 'Color Secundario'
    },
    {
      name: 'backgroundMark', // no se como se llama la marca de color de fondo
      type: 'select',
      defaultValue: 'none',
      admin: {
        condition: (_, { type } = {}) => type === 'mediumImpact',
      },
      options: [
             {
               label: 'Ninguno',
               value: 'none',
             },
             {
               label: 'Tipo 1',
               value: 'type1',
             },
             {
               label: 'Tipo 2',
               value: 'type2',
             },
           ],
      label: 'Marca de fondo',
     },
     {
      name: 'enableBackgroundMark2', // no se como se llama la marca de color de fondo
      type: 'checkbox', // supongo que puede o no estar, asi que checkbox
      defaultValue: 'true',
      admin: {
        condition: (_, { type } = {}) => type === 'mediumImpactAlt',
      },
      label: 'Marca de fondo',
     },
  ],
  label: false,
}
