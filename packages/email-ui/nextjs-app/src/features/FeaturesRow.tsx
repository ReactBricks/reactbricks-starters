import { types, Text, isAdmin, Image } from 'react-bricks/rsc'
import { Row, Column, Img } from '@react-email/components'

//=============================
// Local Types
//=============================

interface FeatureRowProps {
  featureStyle: string
  index: string
  icon: types.IImageSource
  icon2: types.IImageSource
  icon3: types.IImageSource
  title: types.TextValue
  description: types.TextValue
  title2: types.TextValue
  description2: types.TextValue
  title3: types.TextValue
  description3: types.TextValue
  iconBgColor?: {
    value: string
    label: string
    className: string
    color: string
  }
  centered: boolean
}

//=============================
// Component to be rendered
//=============================
const FeatureRow: types.Brick<FeatureRowProps> = ({
  title,
  description,
  icon,
  icon2,
  featureStyle = '3',
  iconBgColor,
  title2,
  description2,
  centered = false,
  title3,
  description3,
  icon3,
}) => {
  return (
    <Row className="mt-[16px]">
      <Column
        className={`align-baseline `}
        colSpan={1}
        align={centered ? 'center' : 'left'}
        width={featureStyle === '4' ? '33%' : '50%'}
      >
        <table className={'rounded-full size-10  ' + iconBgColor?.className}>
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
                    imageClassName="w-[24px] h-[24px] mx-auto"
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

        <Text
          propName="title"
          value={title}
          renderBlock={(props) => (
            <div className="m-0 mt-[16px] font-semibold text-[20px] text-gray-900 leading-[28px]">
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
            <div className="mt-[8px] mb-0 text-[16px] text-gray-500 leading-[24px]">
              {props.children}
            </div>
          )}
          renderPlaceholder={(props) => (
            <span className="opacity-30">{props.children}</span>
          )}
          placeholder="Type a text..."
        />
      </Column>
      <Column
        className={`align-baseline`}
        colSpan={1}
        align={centered ? 'center' : 'left'}
        width={featureStyle === '4' ? '33%' : '50%'}
      >
        <table className={'rounded-full size-10  ' + iconBgColor?.className}>
          <tbody>
            <tr>
              <td align="center" valign="middle">
                {isAdmin() ? (
                  <Image
                    propName="icon2"
                    source={icon2}
                    alt="Icon"
                    aspectRatio={1}
                    aria-hidden="true"
                    imageClassName="w-[24px] h-[24px] mx-auto"
                  />
                ) : (
                  <Img
                    src={icon2?.src}
                    srcSet={icon2?.srcSet}
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
        <Text
          propName="title2"
          value={title2}
          renderBlock={(props) => (
            <div className="m-0 mt-[16px] font-semibold text-[20px] text-gray-900 leading-[28px]">
              {props.children}
            </div>
          )}
          renderPlaceholder={(props) => (
            <span className="opacity-30">{props.children}</span>
          )}
          placeholder="Type a text..."
        />

        <Text
          propName="description2"
          value={description2}
          renderBlock={(props) => (
            <div className="mt-[8px] mb-0 text-[16px] text-gray-500 leading-[24px]">
              {props.children}
            </div>
          )}
          renderPlaceholder={(props) => (
            <span className="opacity-30">{props.children}</span>
          )}
          placeholder="Type a text..."
        />
      </Column>
      {featureStyle === '4' && (
        <Column
          className={'w-1/3 align-baseline'}
          colSpan={1}
          align={centered ? 'center' : 'left'}
          width={'33%'}
        >
          <table className={'rounded-full size-10  ' + iconBgColor?.className}>
            <tbody>
              <tr>
                <td align="center" valign="middle">
                  {isAdmin() ? (
                    <Image
                      propName="icon3"
                      source={icon3}
                      alt="Icon"
                      aspectRatio={1}
                      aria-hidden="true"
                      imageClassName="w-[24px] h-[24px] mx-auto"
                    />
                  ) : (
                    <Img
                      src={icon3?.src}
                      srcSet={icon3?.srcSet}
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
          <Text
            propName="title3"
            value={title3}
            renderBlock={(props) => (
              <div className="m-0 mt-[16px] font-semibold text-[20px] text-gray-900 leading-[28px]">
                {props.children}
              </div>
            )}
            renderPlaceholder={(props) => (
              <span className="opacity-30">{props.children}</span>
            )}
            placeholder="Type a text..."
          />

          <Text
            propName="description3"
            value={description3}
            renderBlock={(props) => (
              <div className="mt-[8px] mb-0 text-[16px] text-gray-500 leading-[24px]">
                {props.children}
              </div>
            )}
            renderPlaceholder={(props) => (
              <span className="opacity-30">{props.children}</span>
            )}
            placeholder="Type a text..."
          />
        </Column>
      )}
    </Row>
  )
}

//=============================
// Brick Schema
//=============================
FeatureRow.schema = {
  name: 'email-feature-row',
  label: 'Email feature row',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: 'Luxurius Retreat',
    description:
      'Transform your space into a haven of relaxation with our indulgent furniture collection.',
    title2: 'Versatile Comfort',
    description2:
      'Experience ultimate comfort and versatility with our furniture collection, designed to adapt to your ever-changing needs.',
    title3: 'Luxurius Retreat',
    description3:
      'Transform your space into a haven of relaxation with our indulgent furniture collection.',
    centered: false,
  }),
  sideEditProps: [],
}

export default FeatureRow
