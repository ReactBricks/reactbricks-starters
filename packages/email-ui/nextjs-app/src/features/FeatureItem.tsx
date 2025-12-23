import { types, Text, isAdmin, Image } from 'react-bricks/rsc'
import { Row, Column, Img } from '@react-email/components'

//=============================
// Local Types
//=============================

interface FeatureItemProps {
  featureStyle: string
  index: number
  icon: types.IImageSource
  title: types.TextValue
  description: types.TextValue
  iconBgColor?: {
    value: string
    label: string
    className: string
    color: string
  }
}

//=============================
// Component to be rendered
//=============================
const FeatureItem: types.Brick<FeatureItemProps> = ({
  title,
  description,
  icon,
  featureStyle,
  iconBgColor,
  index,
}) => {
  return (
    <Row>
      <Column className="align-baseline">
        {featureStyle === '2' ? (
          <table className="text-center">
            <tbody>
              <tr>
                <td
                  align="center"
                  className={`h-[40px] w-[40px] rounded-full bg-indigo-200 text-center ${iconBgColor?.className}`}
                >
                  <span className={`font-semibold text-indigo-600`}>
                    {index + 1}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className={'rounded-full size-12  ' + iconBgColor?.className}>
            <tbody>
              <tr>
                <td align="center" valign="middle">
                  {isAdmin() ? (
                    <Image
                      propName="icon"
                      source={icon}
                      alt="Icon"
                      aspectRatio={1}
                      aria-hidden="true"
                      imageClassName="w-[24px] h-[24px] mx-auto align-middle"
                    />
                  ) : (
                    <Img
                      src={icon?.src}
                      srcSet={icon?.srcSet}
                      alt="Icon"
                      width={24}
                      height={24}
                      className="mx-auto"
                    />
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </Column>
      <Column className="w-[90%]">
        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <div className="m-0 font-semibold text-[20px] text-gray-900 leading-[28px]">
              {props.children}
            </div>
          )}
          renderPlaceholder={(props) => (
            <span className="opacity-30">{props.children}</span>
          )}
          placeholder="Type a text..."
        />

        <Text
          propName="description"
          value={description}
          renderBlock={(props) => (
            <div className="m-0 mt-[8px] text-[16px] text-gray-500 leading-[24px]">
              {props.children}
            </div>
          )}
          renderPlaceholder={(props) => (
            <span className="opacity-30">{props.children}</span>
          )}
          placeholder="Type a text..."
        />
      </Column>
    </Row>
  )
}

//=============================
// Brick Schema
//=============================
FeatureItem.schema = {
  name: 'email-feature-item',
  label: 'Email feature item',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/nextjs-app/src/features/FeatureItem.tsx',
  getDefaultProps: () => ({
    title: 'Versatile Comfort',
    description:
      'Experience ultimate comfort and versatility with our furniture collection, designed to adapt to your ever-changing needs.',
  }),
  sideEditProps: [
    {
      name: 'icon',
      label: 'Icon',
      type: types.SideEditPropType.IconSelector,
    },
  ],
}

export default FeatureItem
