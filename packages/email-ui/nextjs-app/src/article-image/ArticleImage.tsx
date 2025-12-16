import { Column, Img, Row, Section } from '@react-email/components'
import { Image, Link, Repeater, Text, isAdmin, types } from 'react-bricks/rsc'

import { buttonColors } from '../colors'
import { titleSideEditProps } from '../LayoutSideProps'
import Title, { TitleProps } from '../shared/components/Title'

//=============================
// Local Types
//=============================

interface ArticleImageProps extends TitleProps {
  eyebrow: types.TextValue
  title: types.TextValue
  subtitle: types.TextValue
  imagePosition: string
  image: types.IImageSource
  button: types.RepeaterItems
  withLink: boolean
  linkUrl: string
  linkText: types.TextValue
}

//=============================
// Component to be rendered
//=============================
const ArticleImage: types.Brick<ArticleImageProps> = ({
  title,
  imagePosition = 'right',
  image,
  eyebrow,
  subtitle,
  button,
  withLink,
  linkUrl,
  linkText,
  withEyebrow,
  withSubtitle,
  titleAccentColor,
  titleHeadingLevel,
  titleSize,
}) => {
  return (
    <Section className="my-[16px]">
      {imagePosition === 'top' &&
        (isAdmin() ? (
          <Image
            propName="image"
            source={image}
            alt="Logo"
            aspectRatio={1}
            imageClassName="w-full rounded-[12px] object-cover h-[320px]"
          />
        ) : (
          <Img
            src={image?.src}
            srcSet={image?.srcSet}
            alt="Logo"
            height={320}
            className="w-full rounded-[12px] object-cover h-[320px]"
          />
        ))}
      <Row
        className={
          imagePosition === 'top'
            ? 'mt-[32px] text-center'
            : 'inline-block text-left align-top'
        }
      >
        <Column
          width={'50%'}
          valign="middle"
          className={`${imagePosition === 'top' ? '' : 'max-w-[50%]'}`}
        >
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
          {/* <Text
            propName="eyebrow"
            value={eyebrow}
            renderBlock={(props) => (
              <div className="my-[8px] font-semibold text-[18px] text-indigo-600 leading-[28px]">
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
              <h1 className="m-0 mt-[8px] font-semibold text-[36px] text-gray-900 leading-[36px]">
                {props.children}
              </h1>
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
              <div
                className={`text-[16px] text-gray-500 leading-[24px] mt-5 mb-6 max-w-full`}
              >
                {props.children}
              </div>
            )}
            renderPlaceholder={(props) => (
              <span className="opacity-30">{props.children}</span>
            )}
            placeholder="Type a text..."
          /> */}

          {withLink ? (
            <Link
              className="text-indigo-600 underline cursor-pointer mt-4"
              href={linkUrl}
            >
              <Text
                propName="linkText"
                value={linkText}
                renderBlock={(props) => <span>{props.children}</span>}
                renderPlaceholder={(props) => (
                  <span className="opacity-30">{props.children}</span>
                )}
                placeholder="Type a text..."
              />
            </Link>
          ) : (
            <Repeater
              propName="button"
              items={button}
              renderWrapper={(props) => (
                <div
                  className={`max-w-[120px] ${imagePosition === 'top' ? 'mx-auto' : ''}`}
                >
                  {props}
                </div>
              )}
            />
          )}
        </Column>

        {imagePosition === 'right' && (
          <Column width={'50%'} valign="middle" className="my-[8px]">
            {isAdmin() ? (
              <Image
                propName="image"
                source={image}
                alt="Logo"
                aspectRatio={1}
                imageClassName="w-full rounded-[12px] object-cover"
              />
            ) : (
              <Img
                src={image?.src}
                srcSet={image?.srcSet}
                alt="Logo"
                className="w-full rounded-[12px] object-cover"
              />
            )}
          </Column>
        )}
      </Row>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
ArticleImage.schema = {
  name: 'email-article-image',
  label: 'Email article image',
  getDefaultProps: () => ({
    eyebrow: "What's new",
    title: 'Versatile Comfort',
    subtitle:
      'Experience ultimate comfort and versatility with our furniture collection, designed to adapt to your ever-changing needs.',

    withEyebrow: true,
    withSubtitle: true,
    imagePosition: 'right',
    withLink: true,
    linkUrl: '/',
    linkText: 'Read more',
    button: [
      {
        buttonHref: '/',
        buttonText: 'Read more',
        buttonColor: buttonColors.INDIGO.value,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'button',
      itemType: 'email-button',
      min: 1,
      max: 1,
    },
  ],
  sideEditProps: [
    ...titleSideEditProps,
    {
      name: 'imagePosition',
      label: 'Image position',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'right', label: 'On right' },
          { value: 'top', label: 'On top' },
        ],
      },
    },
    {
      name: 'withLink',
      label: 'With link',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkUrl',
      label: 'Link url',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default ArticleImage
