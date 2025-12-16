import { Image, RichText, Text, types } from 'react-bricks/astro'

//=============================
// Local Types
//=============================
type Padding = 'big' | 'small'

interface HeroUnitProps {
  padding: Padding
  title: types.TextValue
  text: types.TextValue
  icon: types.IImageSource
}

//=============================
// Component to be rendered
//=============================
const MyHeroUnit: types.Brick<HeroUnitProps> = ({
  padding,
  text,
  title,
  icon,
}) => {
  return (
    <div
      className={`max-w-2xl mx-auto px-6 ${
        padding === 'big' ? 'py-20' : 'py-12'
      }`}
    >
      <div>
        <Image
          source={icon}
          propName="icon"
          alt="Icon"
          maxWidth={600}
          aspectRatio={1}
          imageClassName="aspect-square object-cover w-40 mb-6 mx-auto"
        />
        <Text
          value={title}
          propName="title"
          renderBlock={(props) => (
            <h1 className="text-center text-black dark:text-white text-4xl sm:text-5xl md:text-6xl text-pretty font-semibold tracking-tight leading-[1.15]">
              {props.children}
            </h1>
          )}
          placeholder="Type a title..."
        />
        <RichText
          value={text}
          propName="text"
          renderBlock={(props) => (
            <p className="mt-6 text-center text-xl text-gray-600 dark:text-gray-300 text-pretty">
              {props.children}
            </p>
          )}
          placeholder="Type a text..."
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Link,
            // types.RichTextFeatures.Italic,
          ]}
          // renderBold={({ children }) => (
          //   <b className="text-pink-500">{children}</b>
          // )}
          renderLink={(props) => (
            <a
              href={props.href}
              target={props.target}
              rel={props.rel}
              className="text-sky-500 hover:text-sky-600 transition-colors"
            >
              {props.children}
            </a>
          )}
        />
      </div>
    </div>
  )
}

//=============================
// Brick Schema
//=============================
MyHeroUnit.schema = {
  name: 'my-hero-unit',
  label: 'Custom Hero Unit',
  previewImageUrl: `https://assets.reactbricks.com/ArwnB1ZXskHEy-R/images/master/WXphNrxFgHGeMqc.png`,
  getDefaultProps: () => ({
    padding: 'big',
    title: 'Simple. Custom. Hero Unit.',
    text: 'Experience seamless content creation with our visual editor. Build stunning pages effortlessly using drag-and-drop components while maintaining brand consistency and design integrity.',
  }),
  sideEditProps: [
    {
      name: 'padding',
      label: 'Padding',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big Padding' },
          { value: 'small', label: 'Small Padding' },
        ],
      },
    },
  ],
}

export default MyHeroUnit
