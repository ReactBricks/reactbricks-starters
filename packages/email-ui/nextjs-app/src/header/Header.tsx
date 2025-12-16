import { Image, Repeater, types, isAdmin } from 'react-bricks/rsc'
import { Section, Row, Column, Img } from '@react-email/components'

//=============================
// Local Types
//=============================

interface HeaderProps {
  logo: types.IImageSource
  menuItems: types.RepeaterItems
  centered: boolean
  withIcons: boolean
}

//=============================
// Component to be rendered
//=============================
const Header: types.Brick<HeaderProps> = ({
  logo,
  menuItems,
  centered = false,
  withIcons,
}) => {
  return centered ? (
    <Section className="my-[40px] px-[32px] py-[40px]">
      <Row>
        <Column align="center">
          {isAdmin() ? (
            <Image
              propName="logo"
              source={logo}
              alt="Logo"
              aspectRatio={1}
              imageClassName="w-20"
            />
          ) : (
            <Img src={logo?.src} srcSet={logo?.srcSet} className="w-20" />
          )}
        </Column>
      </Row>
      <Row className="mt-[40px]">
        <Column align="center">
          <table>
            <tbody>
              <Repeater
                items={menuItems}
                propName="menuItems"
                renderWrapper={(props) => <tr>{props}</tr>}
                itemProps={{ withIcons: withIcons }}
              />
            </tbody>
          </table>
        </Column>
      </Row>
    </Section>
  ) : (
    <Section className="my-[40px] px-[32px] py-[40px]">
      <Row>
        <Column className="w-[80%]">
          {isAdmin() ? (
            <Image
              propName="logo"
              source={logo}
              alt="Logo"
              aspectRatio={1}
              imageClassName="w-20"
            />
          ) : (
            <Img
              src={logo?.src}
              srcSet={logo?.srcSet}
              alt="Logo"
              className="w-20"
            />
          )}
        </Column>
        <Column align="right">
          <Row align="right">
            <Column className="px-[8px]">
              <table>
                <tbody>
                  <Repeater
                    items={menuItems}
                    propName="menuItems"
                    renderWrapper={(props) => <tr>{props}</tr>}
                    itemProps={{ withIcons: withIcons }}
                  />
                </tbody>
              </table>
            </Column>
          </Row>
        </Column>
      </Row>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
Header.schema = {
  name: 'email-header',
  label: 'Email header',
  getDefaultProps: () => ({
    centered: false,
    menuItems: [
      {
        text: 'About',
        linkUrl: '/',
        withIcons: false,
      },
      {
        text: 'Blog',
        linkUrl: '/',
        withIcons: false,
      },
      {
        text: 'Company',
        linkUrl: '/',
        withIcons: false,
      },
      { text: 'Features', linkUrl: '/', withIcons: false },
    ],
  }),
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: 'email-header-menu-item',
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [
    {
      name: 'centered',
      label: 'Centered',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'withIcons',
      label: 'With icons',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default Header
