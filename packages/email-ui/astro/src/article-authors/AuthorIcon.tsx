import { Img } from '@react-email/components'
import { types, Link, isAdmin, Image } from 'react-bricks/astro'

//=============================
// Local Types
//=============================

interface AuthorIconProps {
  linkUrl: string
  icon: types.IImageSource
}

//=============================
// Component to be rendered
//=============================
const AuthorIcon: types.Brick<AuthorIconProps> = ({ linkUrl, icon }) => {
  return (
    <Link href={linkUrl} className="inline-block">
      {isAdmin() ? (
        <Image
          propName="icon"
          source={icon}
          alt="Icon"
          aspectRatio={1}
          aria-hidden="true"
          imageClassName="mr-[8px] w-[12px] h-[12px]"
        />
      ) : (
        <Img
          src={icon?.src}
          srcSet={icon?.srcSet}
          alt="Icon"
          width={12}
          height={12}
          className="mr-[8px]"
        />
      )}
    </Link>
  )
}

//=============================
// Brick Schema
//=============================
AuthorIcon.schema = {
  name: 'email-author-icon',
  label: 'Email author icon',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/astro/src/article-authors/AuthorIcon.tsx',
  getDefaultProps: () => ({}),
  sideEditProps: [
    {
      name: 'linkUrl',
      label: 'Link url',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default AuthorIcon
