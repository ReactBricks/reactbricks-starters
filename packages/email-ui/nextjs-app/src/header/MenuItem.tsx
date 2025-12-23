import { Img } from '@react-email/components'
import { Text, types, Link, isAdmin, Image } from 'react-bricks/rsc'

//=============================
// Local Types
//=============================

export interface MenuItemProps {
  text: types.TextValue
  linkUrl: string
  withIcons: boolean
  icon: types.IImageSource
}

//=============================
// Component to be rendered
//=============================
const MenuItem: types.Brick<MenuItemProps> = ({
  text,
  linkUrl,
  withIcons,
  icon,
}) => {
  return (
    <td className="px-[8px]">
      <Link className="text-gray-600 [text-decoration:none]" href={linkUrl}>
        {withIcons ? (
          isAdmin() ? (
            <Image
              propName="icon"
              source={icon}
              alt="Icon"
              aspectRatio={1}
              aria-hidden="true"
              imageClassName="mx-[4px] w-[36px] h-[36px]"
            />
          ) : (
            <Img
              src={icon?.src}
              srcSet={icon?.srcSet}
              alt="Icon"
              width={36}
              height={36}
              className="mx-[4px]"
            />
          )
        ) : (
          <Text
            propName="text"
            value={text}
            renderBlock={(props) => <span>{props.children}</span>}
            renderPlaceholder={(props) => (
              <span className="opacity-30">{props.children}</span>
            )}
            placeholder="Type a text..."
          />
        )}
      </Link>
    </td>
  )
}

//=============================
// Brick Schema
//=============================
MenuItem.schema = {
  name: 'email-header-menu-item',
  label: 'Email header menu item',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/nextjs-app/src/header/MenuItem.tsx',
  hideFromAddMenu: true,
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: 'linkUrl',
      label: 'Link url',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default MenuItem
