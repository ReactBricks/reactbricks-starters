import { types, Text, Image, useAdminContext } from 'react-bricks/frontend'
import { Row, Column, Img } from '@react-email/components'

//=============================
// Local Types
//=============================

interface ArticleCardsRowProps {
  eyebrow: types.TextValue
  title: types.TextValue
  description: types.TextValue
  eyebrow2: types.TextValue
  title2: types.TextValue
  description2: types.TextValue
  image: types.IImageSource
  image2: types.IImageSource
}

//=============================
// Component to be rendered
//=============================
const ArticleCardsRow: types.Brick<ArticleCardsRowProps> = ({
  title,
  image,
  image2,
  eyebrow,
  description,
  eyebrow2,
  title2,
  description2,
}) => {
  const { isAdmin } = useAdminContext()

  return (
    <Row className="mt-[16px]">
      <Column
        className="box-border w-[50%] pr-[8px] align-baseline"
        colSpan={1}
      >
        {isAdmin ? (
          <Image
            propName="image"
            source={image}
            alt="Logo"
            aspectRatio={1}
            imageClassName="w-full rounded-[8px] object-cover h-[180px]"
          />
        ) : (
          <Img
            src={image?.src}
            srcSet={image?.srcSet}
            alt="Logo"
            height={180}
            className="w-full rounded-[8px] object-cover h-[180px]"
          />
        )}

        <Text
          propName="eyebrow"
          value={eyebrow}
          renderBlock={(props) => (
            <div className="font-semibold text-[16px] text-indigo-600 leading-[24px] mt-5">
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
            <div className="m-0 font-semibold text-[20px] text-gray-900 leading-[28px] mt-2">
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
        className="box-border w-[50%] pl-[8px] align-baseline"
        colSpan={1}
      >
        {isAdmin ? (
          <Image
            propName="image2"
            source={image2}
            alt="Logo"
            aspectRatio={1}
            imageClassName="w-full rounded-[8px] object-cover h-[180px]"
          />
        ) : (
          <Img
            src={image2?.src}
            srcSet={image2?.srcSet}
            alt="Logo"
            height={180}
            className="w-full rounded-[8px] object-cover h-[180px]"
          />
        )}

        <Text
          propName="eyebrow2"
          value={eyebrow2}
          renderBlock={(props) => (
            <div className="font-semibold text-[16px] text-indigo-600 leading-[24px] mt-5">
              {props.children}
            </div>
          )}
          renderPlaceholder={(props) => (
            <span className="opacity-30">{props.children}</span>
          )}
          placeholder="Type a text..."
        />

        <Text
          propName="title2"
          value={title2}
          renderBlock={(props) => (
            <div className="m-0 font-semibold text-[20px] text-gray-900 leading-[28px] mt-2">
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
    </Row>
  )
}

//=============================
// Brick Schema
//=============================
ArticleCardsRow.schema = {
  name: 'email-article-cards-row',
  label: 'Email article cards row',
  hideFromAddMenu: true,
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default ArticleCardsRow
