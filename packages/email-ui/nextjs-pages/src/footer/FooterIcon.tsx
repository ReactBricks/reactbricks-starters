import { Img, Link } from '@react-email/components'
import { Image, types, useAdminContext } from 'react-bricks/frontend'

//=============================
// Local Types
//=============================

interface FooterIconProps {
  linkUrl: string
  icon: types.IImageSource
}

//=============================
// Component to be rendered
//=============================
const FooterIcon: types.Brick<FooterIconProps> = ({ linkUrl, icon }) => {
  const { isAdmin } = useAdminContext()

  return (
    <Link href={linkUrl} className="inline-flex">
      {isAdmin ? (
        <Image
          propName="icon"
          source={icon}
          alt="Icon"
          aspectRatio={1}
          aria-hidden="true"
          imageClassName="mx-[4px] w-[32px] h-[32px]"
        />
      ) : (
        <Img
          src={icon?.src}
          srcSet={icon?.srcSet}
          alt="Icon"
          width={24}
          height={24}
          className="mx-[4px]"
        />
      )}
    </Link>
  )
}

//=============================
// Brick Schema
//=============================
FooterIcon.schema = {
  name: 'email-footer-icon',
  label: 'Email footer icon',
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

export default FooterIcon
