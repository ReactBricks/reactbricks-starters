import { types } from 'react-bricks/astro'

// import emailUITheme from '@reactbricks/email-ui-astro' <<EMAIL_BRICKS>>
import reactBricksUITheme from '@reactbricks/reactbricks-ui-astro'
import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  // emailUITheme, // React Bricks Email UI <<EMAIL_BRICKS>>
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom bricks',
        bricks: [HeroUnit, Pokemon], // Custom Bricks
      },
    ],
  },
]

export default bricks
