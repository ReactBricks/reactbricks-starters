import { Column, Img, Row, Section } from '@react-email/components'
import {
  Image,
  Repeater,
  RichText,
  Text,
  types,
  useAdminContext,
} from 'react-bricks/frontend'

//=============================
// Local Types
//=============================

interface HeaderProps {
  logo: types.IImageSource
  title: types.TextValue
  description: types.TextValue
  address: types.TextValue
  icons: types.RepeaterItems
  layout: string
}

//=============================
// Component to be rendered
//=============================
const Footer: types.Brick<HeaderProps> = ({
  logo,
  title,
  description,
  icons,
  address,
  layout = '1',
}) => {
  const { isAdmin } = useAdminContext()

  return (
    <Section className="text-center my-8">
      {layout === '1' ? (
        <table className="w-full">
          <tbody>
            <tr className="w-full">
              <td align="center">
                {isAdmin ? (
                  <Image
                    propName="logo"
                    source={logo}
                    alt="Logo"
                    aspectRatio={1}
                    imageClassName="w-20 h-[42px] mb-4"
                  />
                ) : (
                  <Img
                    src={logo?.src}
                    srcSet={logo?.srcSet}
                    alt="Logo"
                    height={42}
                    className="w-20 h-[42px] mb-4"
                  />
                )}
              </td>
            </tr>
            <tr className="w-full">
              <td align="center">
                <Text
                  propName="title"
                  value={title}
                  renderBlock={(props) => (
                    <div className="mb-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]">
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
                    <div className="mt-[4px] mb-0 text-[16px] text-gray-500 leading-[24px]">
                      {props.children}
                    </div>
                  )}
                  renderPlaceholder={(props) => (
                    <span className="opacity-30">{props.children}</span>
                  )}
                  placeholder="Type a text..."
                />
              </td>
            </tr>
            <tr>
              <Column>
                <Repeater
                  items={icons}
                  propName="icons"
                  renderWrapper={(props) => <div className="my-4">{props}</div>}
                />
              </Column>
            </tr>
            <tr>
              <td align="center">
                <RichText
                  propName="address"
                  value={address}
                  renderBlock={(props) => (
                    <div className="my-[8px] font-bold text-[16px] text-gray-500 leading-[24px]">
                      {props.children}
                    </div>
                  )}
                  renderPlaceholder={(props) => (
                    <span className="opacity-30">{props.children}</span>
                  )}
                  placeholder="Type a text..."
                />
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <Row>
          <Column valign="bottom" colSpan={4}>
            {isAdmin ? (
              <Image
                propName="logo"
                source={logo}
                alt="Logo"
                aspectRatio={1}
                imageClassName="w-20 h-[42px]"
                containerClassName="text-left"
              />
            ) : (
              <Img
                src={logo?.src}
                srcSet={logo?.srcSet}
                alt="Logo"
                height={42}
                className="w-20 h-[42px] mb-4"
              />
            )}
            <Text
              propName="title"
              value={title}
              renderBlock={(props) => (
                <div className="my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px] text-left">
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
              multiline
              value={description}
              renderBlock={(props) => (
                <div className="mt-[4px] mb-0 text-[16px] text-gray-500 leading-[24px] text-left">
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
            valign="bottom"
            align="left"
            className="table-cell align-bottom"
          >
            <Section className="mb-3">
              <Repeater
                items={icons}
                propName="icons"
                // renderItemWrapper={(props) => (
                //   <Column className="pr-[8px]">{props}</Column>
                // )}
              />
            </Section>
            <Row>
              <Column className="my-8">
                <Text
                  propName="address"
                  value={address}
                  renderBlock={(props) => (
                    <div className="font-semibold text-[16px] text-gray-500 leading-[24px]">
                      {props.children}
                    </div>
                  )}
                  renderPlaceholder={(props) => (
                    <span className="opacity-30">{props.children}</span>
                  )}
                  placeholder="Type a text..."
                  multiline
                />
              </Column>
            </Row>
          </Column>
        </Row>
      )}
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
Footer.schema = {
  name: 'email-footer',
  label: 'Email footer',
  getDefaultProps: () => ({
    title: 'Acme corporation',
    description: 'Think different',
    address: '123 Main Street Anytown, CA 12345\n mail@example.com +123456789',
    icons: [
      {
        linkUrl: '#',
      },
      {
        linkUrl: '#',
      },
      {
        linkUrl: '#',
      },
    ],
    layout: '1',
  }),
  repeaterItems: [
    {
      name: 'icons',
      itemType: 'email-footer-icon',
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [
    {
      name: 'layout',
      label: 'Layotu',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '1', label: '1 column' },
          { value: '2', label: '2 column' },
        ],
      },
    },
  ],
}

export default Footer
