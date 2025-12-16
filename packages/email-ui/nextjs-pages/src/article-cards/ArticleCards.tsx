import { types, Text, Repeater } from 'react-bricks/frontend'
import { Column, Row, Section } from '@react-email/components'

//=============================
// Local Types
//=============================

interface ArticleCardsProps {
  title: types.TextValue
  description: types.TextValue
  cards: types.RepeaterItems
}

//=============================
// Component to be rendered
//=============================
const ArticleCards: types.Brick<ArticleCardsProps> = ({
  title,
  description,
  cards,
}) => {
  return (
    <Section className="my-[16px]">
      <Row>
        <Column>
          <Section>
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
          </Section>

          <Section>
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
          </Section>
        </Column>
      </Row>

      <Repeater items={cards} propName="cards" />
    </Section>
  )
}

//=============================
// Brick Schema
//=============================
ArticleCards.schema = {
  name: 'email-article-cards',
  label: 'Email article cards',
  getDefaultProps: () => ({
    title: 'Elevate Outdoor Living',
    description:
      'Take your outdoor space to new heights with our premium outdoor furniture, designed to elevate your alfresco experience.',
    cards: [
      {
        eyebrow: "What's new",
        title: 'Multifunctional Marvels',
        description:
          'Discover the innovative world of multifunctional furniture, where style meets practicality, offering creative solutions for maximizing space and enhancing functionality in your home',
        eyebrow2: "What's new",
        title2: 'Timeless Classics',
        description2:
          'Step into the world of timeless classics as we explore iconic furniture pieces that have stood the test of time, adding enduring elegance and sophistication to any interior',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'cards',
      itemType: 'email-article-cards-row',
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [],
}

export default ArticleCards
