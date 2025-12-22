import { fetchForms, types, wrapClientComponent } from 'react-bricks/rsc'
import {
  RegisterComponent,
  useReactBricksContext,
} from 'react-bricks/rsc/client'

import {
  containerSizeEditProps,
  neutralBackgroundColorsEditProps,
  sectionDefaults,
} from '../../LayoutSideProps'
import blockNames from '../../blockNames'
import NewsletterSubscribeClient, {
  NewsletterProps,
} from './NewsletterSubscribeClient'

const schema: types.IBlockType<NewsletterProps> = {
  name: blockNames.NewsletterSubscribe,
  label: 'Newsletter subscribe',
  category: 'call to action',
  hideFromAddMenu: false,
  previewImageUrl: `/bricks-preview-images/${blockNames.NewsletterSubscribe}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    title: 'Join our newsletter',
    text: 'Never miss our release and new blog articles.',
    text2: '6,500 developers and counting',
    buttonText: 'Join',
    resultOkText: '',
  }),
  sideEditProps: [
    {
      groupName: 'Form data',
      defaultOpen: true,
      props: [
        neutralBackgroundColorsEditProps,
        containerSizeEditProps,
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
  ],
}

export default wrapClientComponent({
  ClientComponent: NewsletterSubscribeClient,
  RegisterComponent,
  schema,
})
