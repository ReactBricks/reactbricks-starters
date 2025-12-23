import blockNames from '../blockNames'
import React from 'react'
import { Text, types, Link } from 'react-bricks/frontend'
import { textColors } from '../colors'

interface FooterLinkProps {
  linkPath: string
  linkText: types.TextValue
}

const FooterLink: types.Brick<FooterLinkProps> = ({ linkPath, linkText }) => {
  return (
    <Link href={linkPath}>
      <Text
        propName="linkText"
        placeholder="Link..."
        value={linkText}
        renderBlock={({ children }) => (
          <div
            className={`text-sm mb-3 ${textColors.GRAY_500} hover:text-gray-600 dark:hover:text-white transition-all ease-out duration-150 hover:-translate-y-px`}
          >
            {children}
          </div>
        )}
      />
    </Link>
  )
}

FooterLink.schema = {
  name: blockNames.FooterLink,
  label: 'Link',
  category: 'layout',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/reactbricks-ui/nextjs-pages/src/layout/FooterLink.tsx',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    linkText: 'Pricing',
    linkPath: '/',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default FooterLink
