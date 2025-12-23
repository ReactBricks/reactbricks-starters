import { fetchForms, types, wrapClientComponent } from 'react-bricks/rsc'
import {
  RegisterComponent,
  useReactBricksContext,
} from 'react-bricks/rsc/client'

import {
  backgroundColorsEditProps,
  sectionBordersEditProps,
  sectionDefaults,
  textGradientEditProps,
} from '../../LayoutSideProps'
import blockNames from '../../blockNames'
import { gradients } from '../../colors'
import NewsletterHeroClient, {
  NewsletterHeroProps,
} from './NewsletterHeroClient'

const schema: types.IBlockType<NewsletterHeroProps> = {
  name: blockNames.NewsletterHero,
  label: 'Newsletter hero',
  playgroundLinkLabel: 'View source code on Github',
  category: 'call to action',
  tags: ['newsletter', 'subscribe', 'hero'],
  previewImageUrl: `/bricks-preview-images/${blockNames.NewsletterHero}.png`,
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/reactbricks-ui/nextjs-app/src/cta/NewsletterHero/NewsletterHero.tsx',

  getDefaultProps: () => ({
    ...sectionDefaults,
    paddingTop: '12',
    paddingBottom: '12',
    title: 'Stay in the loop with our newsletter!',
    textGradient: gradients.NONE.value,
    description: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Sent every ',
          },
          {
            text: '2 weeks',
            bold: true,
          },
          {
            text: ', no spam.',
          },
        ],
      },
    ],
    text: 'Join thousands of developers who want to change the way people edit website.',
    privacy: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'By submitting the form you accept our ',
          },
          {
            type: 'link',
            url: 'https://reactbricks.com/legal/privacy',
            children: [
              {
                text: 'Privacy policy',
              },
            ],
          },
        ],
      },
    ],
    buttonText: 'Subscribe',
  }),
  sideEditProps: [
    {
      groupName: 'Form data',
      defaultOpen: true,
      props: [
        {
          name: 'formId',
          label: 'Form',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            getOptions: async () => {
              const apiPrefix = useReactBricksContext().apiPrefix
              const items = await fetchForms({ apiPrefix })

              return [
                { value: '', label: '--Select Form--' },
                ...items.map((item) => ({
                  value: item.id,
                  label: item.name,
                })),
              ]
            },
          },
        },
      ],
    },
    {
      groupName: 'Title',
      defaultOpen: true,
      props: [textGradientEditProps],
    },
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [backgroundColorsEditProps, ...sectionBordersEditProps],
    },
  ],
}

export default wrapClientComponent({
  ClientComponent: NewsletterHeroClient,
  RegisterComponent,
  schema,
})
