import { types, Text, Repeater } from 'react-bricks/astro'
import { Section } from '@react-email/components'

//=============================
// Local Types
//=============================

interface ListProps {
  title: types.TextValue
  listItems: types.RepeaterItems
  withImage: boolean
}

//=============================
// Component to be rendered
//=============================
const EmailList: types.Brick<ListProps> = ({ title, listItems, withImage }) => {
  return (
    <Section>
      <Text
        propName="title"
        value={title}
        renderBlock={(props) => (
          <h1 className="mb-[42px] text-center text-[24px] font-bold leading-[32px]">
            {props.children}
          </h1>
        )}
        renderPlaceholder={(props) => (
          <span className="opacity-30">{props.children}</span>
        )}
        placeholder="Type a text..."
      />

      <Repeater
        items={listItems}
        propName="listItems"
        itemProps={{ withImage }}
      />
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
EmailList.schema = {
  name: 'email-list',
  label: 'Email list',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/astro/src/list/List.tsx',
  getDefaultProps: () => ({
    title: 'How Our Service Works: 5 Simple Steps',
    withImage: true,
    listItems: [
      {
        title: 'Start Your Search',
        description:
          'Search for the products you need or upload your list of requirements.',
        withImage: true,
        linkHref: '/',
        linkText: 'Learn more',
      },
      {
        title: 'Compare & Save',
        description:
          'Compare prices and offers from different suppliers to find the best deals.',
        withImage: true,
        linkHref: '/',
        linkText: 'Learn more',
      },
      {
        title: 'Build Your Cart',
        description:
          'Select your desired items and add them to your shopping cart.',
        withImage: true,
        linkHref: '/',
        linkText: 'Learn more',
      },
      {
        title: 'Enjoy The Benefits',
        description:
          'Receive your products and enjoy the savings and convenience of our service.',
        withImage: true,
        linkHref: '/',
        linkText: 'Learn more',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'listItems',
      itemType: 'email-list-item',
      min: 0,
      max: 8,
    },
  ],
  sideEditProps: [
    {
      name: 'withImage',
      label: 'With image',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default EmailList
