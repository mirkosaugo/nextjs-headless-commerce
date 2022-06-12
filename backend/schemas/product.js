export default {
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('slug is required'),
    },
    {
      name: 'designer',
      title: 'Designer',
      type: 'reference',
      to: {type: 'designer'},
    },
    // {
    //   title: 'Default variant',
    //   name: 'defaultProductVariant',
    //   type: 'productVariant',
    // },
    // {
    //   title: 'Variants',
    //   name: 'variants',
    //   type: 'array',
    //   of: [
    //     {
    //       title: 'Variant',
    //       type: 'productVariant',
    //     },
    //   ],
    // },
    // {
    //   title: 'Tags',
    //   name: 'tags',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'string',
    //     },
    //   ],
    //   options: {
    //     layout: 'tags',
    //   },
    // },

    // {
    //   name: 'blurb',
    //   title: 'Blurb',
    //   type: 'localeString',
    // },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'dimension',
      title: 'Dimension (cm)',
      type: 'string',
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },
    {
      name: 'body',
      title: 'Details',
      type: 'localeBlockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'designer.name',
      media: 'images[0]',
    },
  },
}
