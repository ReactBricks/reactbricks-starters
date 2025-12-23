import { types, Image, Text, Repeater, isAdmin } from 'react-bricks/astro'
import { Section, Column, Row, Img } from '@react-email/components'

//=============================
// Local Types
//=============================

interface ArticleAuthorProps {
  image: types.IImageSource
  name: types.TextValue
  title: types.TextValue
  icons: types.RepeaterItems
  index: number
  authorsLength?: number
}

//=============================
// Component to be rendered
//=============================
const ArticleAuthor: types.Brick<ArticleAuthorProps> = ({
  image,
  name,
  title,
  icons,
  index,
  authorsLength,
}) => {
  return (
    <Section
      width={'100%'}
      className={`max-w-full ${index !== 0 && authorsLength && index < authorsLength ? 'ml-4' : ''}`}
      align="center"
    >
      <Row
        width={'100%'}
        className="max-w-full min-h-[100px]"
        style={{ tableLayout: 'fixed' }}
        align="center"
      >
        <Column
          valign="middle"
          width="48px"
          className="inline-block max-w-[48px] text-left ml-[18px] md:ml-0 mb-1 md:mb-0 mr-[18px]"
        >
          {isAdmin() ? (
            <Image
              propName="image"
              source={image}
              alt="Logo"
              aspectRatio={1}
              imageClassName="block rounded-full object-cover object-center h-[48px] w-[48px]"
            />
          ) : (
            <Img
              src={image?.src}
              srcSet={image?.srcSet}
              alt="Logo"
              height={48}
              width={48}
              className="block rounded-full object-cover object-center h-[48px] w-[48px]"
            />
          )}
        </Column>
        <Column
          valign="middle"
          width="calc(100% - 48px)"
          className="inline-block text-left align-top max-w-[200px] w-full"
        >
          <Text
            propName="name"
            value={name}
            renderBlock={(props) => (
              <h3 className="m-0 font-semibold text-[14px] text-gray-900 leading-[20px]">
                {props.children}
              </h3>
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
              <p className="m-0 text-[12px] text-gray-500 leading-[14px]">
                {props.children}
              </p>
            )}
            renderPlaceholder={(props) => (
              <span className="opacity-30">{props.children}</span>
            )}
            placeholder="Type a text..."
          />

          <Section className="my-[8px]">
            <Repeater propName="icons" items={icons} />
          </Section>
        </Column>
      </Row>
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
ArticleAuthor.schema = {
  name: 'email-article-author',
  label: 'Email article author',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/reactbricks-starters/blob/main/packages/email-ui/astro/src/article-authors/Author.tsx',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    name: 'Jon Doe',
    title: 'Software engineer',
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
  }),
  repeaterItems: [
    {
      name: 'icons',
      itemType: 'email-author-icon',
      min: 1,
      max: 4,
    },
  ],
  sideEditProps: [],
}

export default ArticleAuthor
