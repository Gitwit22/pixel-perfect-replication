import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'adBlock',
  title: 'Ad Block',
  type: 'object',
  fields: [
    defineField({
      name: 'slot',
      title: 'Ad Slot ID',
      type: 'string',
      initialValue: '4144893944',
    }),
  ],
  preview: {
    prepare() {
      return {title: '📢 Google Ad'}
    },
  },
})

