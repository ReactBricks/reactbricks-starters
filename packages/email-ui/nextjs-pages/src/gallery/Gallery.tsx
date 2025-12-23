import { Column, Row, Section } from '@react-email/components'
import { Repeater, types } from 'react-bricks/frontend'

import { titleSideEditProps } from '../LayoutSideProps'
import Title, { TitleProps } from '../shared/components/Title'

//=============================
// Local Types
//=============================

interface GalleryProps extends TitleProps {
  galleryRows: types.RepeaterItems
  title: types.TextValue
  eyebrow: types.TextValue
  subtitle: types.TextValue
}

//=============================
// Component to be rendered
//=============================
const Gallery: types.Brick<GalleryProps> = ({
  title,
  eyebrow,
  subtitle,
  galleryRows,
  withEyebrow,
  withSubtitle,
  titleHeadingLevel,
  titleSize,
  titleAccentColor,
}) => {
  return (
    <Section className="my-[16px]">
      <Section className="mt-[42px]">
        <Row>
          <Column>
            {/* <Text
              propName="eyebrow"
              value={eyebrow}
              renderBlock={(props) => (
                <div className="m-0 font-semibold text-[16px] text-indigo-600 leading-[24px]">
                  {props.children}
                </div>
              )}
              renderPlaceholder={(props) => (
                <span className="opacity-30">{props.children}</span>
              )}
              placeholder="Type a text..."
            />

            <Text
              propName="title"
              value={title}
              renderBlock={(props) => (
                <div className="m-0 mt-[8px] font-semibold text-[24px] text-gray-900 leading-[32px]">
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
                <p className="mt-[16px] text-[16px] text-gray-500 leading-[24px]">
                  {props.children}
                </p>
              )}
              renderPlaceholder={(props) => (
                <span className="opacity-30">{props.children}</span>
              )}
              placeholder="Type a text..."
            /> */}
            <Title
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              withEyebrow={withEyebrow}
              withSubtitle={withSubtitle}
              titleAccentColor={titleAccentColor}
              titleHeadingLevel={titleHeadingLevel}
              titleSize={titleSize}
            />
          </Column>
        </Row>
      </Section>
      <Section className="mt-[16px]">
        <Repeater items={galleryRows} propName="galleryRows" />
      </Section>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
Gallery.schema = {
  name: 'email-gallery',
  label: 'Email gallery',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/nextjs-pages/src/gallery/Gallery.tsx',
  getDefaultProps: () => ({
    eyebrow: 'Our products',
    title: 'Elegant Style',
    subtitle:
      'We spent two years in development to bring you the next generation of our award-winning home brew grinder. From the finest pour-overs to the coarsest cold brews, your coffee will never be the same again.',
    galleryRows: [
      {
        rowStyle: '4',
        rounded: true,
      },
    ],
    withEyebrow: true,
    withSubtitle: true,
  }),
  repeaterItems: [
    {
      name: 'galleryRows',
      itemType: 'email-gallery-row',
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [...titleSideEditProps],
}

export default Gallery
