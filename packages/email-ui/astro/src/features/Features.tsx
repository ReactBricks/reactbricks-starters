import { Column, Hr, Row, Section } from '@react-email/components'
import { Repeater, Text, types } from 'react-bricks/astro'

import { iconAccentColors, iconBgAccentColors } from '../colors'
import { iconColorsSideEditProps } from '../LayoutSideProps'

//=============================
// Local Types
//=============================

interface FeaturesProps {
  title: types.TextValue
  description: types.TextValue
  features: types.RepeaterItems
  featureStyle: string
  iconBgColor: string
  centeredCards: boolean
  featureRows: types.RepeaterItems
}

//=============================
// Component to be rendered
//=============================
const Features: types.Brick<FeaturesProps> = ({
  title,
  description,
  features,
  featureStyle = '1',
  iconBgColor,
  centeredCards = false,
  featureRows,
}) => {
  const getIconColor = (iconColor: string) => {
    return iconAccentColors.find(
      (option) => option?.value?.toLowerCase() === iconColor?.toLowerCase()
    )
  }

  const getBgIconColor = (bgIconColor: string) => {
    return iconBgAccentColors.find(
      (option) => option?.value?.toLowerCase() === bgIconColor?.toLowerCase()
    )
  }
  return (
    <Section className="my-[16px]">
      <Section>
        <Row>
          <Column>
            <Text
              propName="title"
              value={title}
              renderBlock={(props) => (
                <div className="m-0 font-semibold text-[24px] text-gray-900 leading-[32px]">
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
                <div className="mt-[8px] text-[16px] text-gray-500 leading-[24px]">
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
      </Section>
      <Section>
        {featureStyle === '1' || featureStyle === '2' ? (
          <Repeater
            propName="features"
            items={features}
            itemProps={{
              featureStyle,
              iconBgColor: getBgIconColor(iconBgColor),
            }}
            renderItemWrapper={(props, index) =>
              featureStyle === '1' || featureStyle === '2' ? (
                <span key={index}>
                  {index === 0 && (
                    <Hr className="!border-gray-300 mx-0 my-[32px] w-full border border-solid" />
                  )}
                  <Section>{props}</Section>
                  <Hr className="!border-gray-300 mx-0 my-[32px] w-full border border-solid" />
                </span>
              ) : (
                <span key={index}>{props}</span>
              )
            }
          />
        ) : (
          <Repeater
            propName="featureRows"
            itemProps={{
              centered: centeredCards,
              featureStyle: featureStyle,
              iconBgColor: getBgIconColor(iconBgColor),
            }}
            items={featureRows}
          />
        )}
      </Section>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
Features.schema = {
  name: 'email-features',
  label: 'Email features',
  getDefaultProps: () => ({
    title: 'Functional Style',
    description:
      'Combine practicality and style effortlessly with our furniture, offering functional designs that enhance your living space.',
    features: [
      {
        title: 'Versatile Comfort',
        description:
          'Experience ultimate comfort and versatility with our furniture collection, designed to adapt to your ever-changing needs.',
      },
      {
        title: 'Luxurious Retreat',
        description:
          'Transform your space into a haven of relaxation with our indulgent furniture collection.',
      },
      {
        title: 'Versatile Comfort',
        description:
          'Experience ultimate comfort and versatility with our furniture collection, designed to adapt to your ever-changing needs.',
      },
    ],
    featureStyle: '1',
    iconBgColor: 'blue-light',
    iconColor: 'blue',
    centeredCards: false,
    featureRows: [
      {
        title: 'Luxurious Retreat',
        description:
          'Transform your space into a haven of relaxation with our indulgent furniture collection.',
        title2: 'Versatile Comfort',
        description2:
          'Experience ultimate comfort and versatility with our furniture collection, designed to adapt to your ever-changing needs.',
        title3: 'Luxurious Retreat',
        description3:
          'Transform your space into a haven of relaxation with our indulgent furniture collection.',
        centered: false,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'features',
      itemType: 'email-feature-item',
      min: 0,
      max: 6,
      show: (props) => props.featureStyle === '1' || props.featureStyle === '2',
    },
    {
      name: 'featureRows',
      itemType: 'email-feature-row',
      min: 0,
      max: 6,
      show: (props) => props.featureStyle === '3' || props.featureStyle === '4',
    },
  ],
  sideEditProps: [
    iconColorsSideEditProps[0],
    {
      name: 'featureStyle',
      label: 'Features style',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: '1', label: 'Rows' },
          { value: '2', label: 'Numbered rows' },
          { value: '3', label: 'Cards' },
          { value: '4', label: '3 cards' },
        ],
      },
    },
    {
      name: 'centeredCards',
      label: 'Centered cards',
      type: types.SideEditPropType.Boolean,
      show: (props) => props.featureStyle === '3' || props.featureStyle === '4',
    },
  ],
}

export default Features
