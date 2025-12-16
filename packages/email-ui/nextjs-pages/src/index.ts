import { types } from 'react-bricks/frontend'

import ArticleAuthors from './article-authors/ArticleAuthors'
import ArticleAuthor from './article-authors/Author'
import ArticleCards from './article-cards/ArticleCards'
import ArticleCardsRow from './article-cards/ArticleCardsRow'
import ArticleImage from './article-image/ArticleImage'
import EmailButton from './button/Button'
import Dividier from './dividier/Dividier'
import Features from './features/Features'
import FeatureItem from './features/FeatureItem'
import FeatureRow from './features/FeaturesRow'
import Footer from './footer/Footer'
import FooterIcon from './footer/FooterIcon'
import Gallery from './gallery/Gallery'
import GalleryRow from './gallery/GalleryRow'
import Header from './header/Header'
import MenuItem from './header/MenuItem'
import HeadingBrick from './heading/Heading'
import EmailImage from './image/Image'
import EmailList from './list/List'
import EmailListItem from './list/ListItem'
import EmailMarkdown from './markdown/Markdown'
import EmailText from './text/Text'
import TextContainer from './text-container/TextContainer'
import AuthorIcon from './article-authors/AuthorIcon'

const allBricks: types.Theme = {
  themeName: 'React Bricks Email',
  categories: [
    {
      categoryName: 'Main content',
      bricks: [
        ArticleAuthors,
        ArticleAuthor,
        AuthorIcon,
        ArticleCards,
        ArticleCardsRow,
        ArticleImage,
        EmailButton,
        Dividier,
        Features,
        FeatureItem,
        FeatureRow,
        Footer,
        FooterIcon,
        Gallery,
        GalleryRow,
        Header,
        MenuItem,
        HeadingBrick,
        EmailImage,
        EmailList,
        EmailListItem,
        EmailMarkdown,
        EmailText,
        TextContainer,
      ],
    },
  ],
}

// Single bricks
export {
  ArticleAuthors,
  ArticleAuthor,
  ArticleCards,
  ArticleCardsRow,
  ArticleImage,
  EmailButton,
  Dividier,
  Features,
  FeatureItem,
  FeatureRow,
  Footer,
  FooterIcon,
  Gallery,
  GalleryRow,
  Header,
  MenuItem,
  HeadingBrick,
  EmailImage,
  EmailList,
  EmailListItem,
  EmailMarkdown,
  EmailText,
  TextContainer,
}

export default allBricks
