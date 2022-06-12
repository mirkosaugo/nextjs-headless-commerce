export default {
  name: 'designer',
  title: 'Designers',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().error('name is required'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error('slug is required'),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeBlockContent',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profilePicture',
    },
  },
}
