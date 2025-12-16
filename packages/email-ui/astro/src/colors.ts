//====================
// TAILWIND COLORS
//====================

type TailwindColor = {
  name: string
  label: string
  color500: string
}
type TailwindColors = Record<string, TailwindColor>

const tailwindColors = {
  WHITE: {
    name: 'white',
    label: 'White',
    color500: '#ffffff',
  },
  GRAY: {
    name: 'gray',
    label: 'Gray',
    color500: '#6b7280',
  },
  RED: {
    name: 'red',
    label: 'Red',
    color500: '#ef4444',
  },
  ORANGE: {
    name: 'orange',
    label: 'Orange',
    color500: '#f97316',
  },
  AMBER: {
    name: 'amber',
    label: 'Amber',
    color500: '#f59e0b',
  },
  YELLOW: {
    name: 'yellow',
    label: 'Yellow',
    color500: '#eab308',
  },
  LIME: {
    name: 'lime',
    label: 'Lime',
    color500: '#84cc16',
  },
  GREEN: {
    name: 'green',
    label: 'Green',
    color500: '#22c55e',
  },
  EMERALD: {
    name: 'emerald',
    label: 'Emerald',
    color500: '#10b981',
  },
  TEAL: {
    name: 'teal',
    label: 'Teal',
    color500: '#14b8a6',
  },
  CYAN: {
    name: 'cyan',
    label: 'Cyan',
    color500: '#06b6d4',
  },
  SKY: {
    name: 'sky',
    label: 'Sky',
    color500: '#0ea5e9',
  },
  BLUE: {
    name: 'blue',
    label: 'Blue',
    color500: '#3b82f6',
  },
  INDIGO: {
    name: 'indigo',
    label: 'Indigo',
    color500: '#6366f1',
  },
  VIOLET: {
    name: 'violet',
    label: 'Violet',
    color500: '#8b5cf6',
  },
  PURPLE: {
    name: 'purple',
    label: 'Purple',
    color500: '#a855f7',
  },
  FUCHSIA: {
    name: 'fuchsia',
    label: 'Fuchsia',
    color500: '#d946ef',
  },
  PINK: {
    name: 'pink',
    label: 'Pink',
    color500: '#ec4899',
  },
  ROSE: {
    name: 'rose',
    label: 'Rose',
    color500: '#f43f5e',
  },
} as const satisfies TailwindColors

//====================
// TEXT COLORS
//====================
export const textColors = {
  GRAY_900: 'text-gray-900 dark:text-white',
  GRAY_800: 'text-gray-800 dark:text-white',
  GRAY_700: 'text-gray-700 dark:text-white',
  GRAY_600: 'text-gray-600 dark:text-white',
  GRAY_500: 'text-gray-500 dark:text-white',
  GRAY_400: 'text-gray-400 dark:text-gray-100',
} as const satisfies Record<string, string>

//====================
// TYPE COLORS
//====================
type Color = {
  label: string
  value: {
    color: string
    className: string
  }
}

type Colors = Record<string, Color>

//====================
// BG COLORS
//====================
export const bgColors = {
  WHITE: {
    label: tailwindColors.WHITE.label,
    value: {
      color: tailwindColors.WHITE.color500,
      className: 'bg-white dark:bg-gray-900',
    },
  },
  LIGHT_GRAY: {
    label: `Light ${tailwindColors.GRAY.label}`,
    value: {
      color: '#f9fafb',
      className: 'bg-gray-50 dark:bg-gray-900',
    },
  },
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: '#f3f4f6',
      className: 'bg-gray-100 dark:bg-gray-900',
    },
  },
  DARK_GRAY: {
    label: `Dark ${tailwindColors.GRAY.label}`,
    value: {
      color: '#1f2937',
      className: 'dark bg-gray-800 dark:bg-gray-900',
    },
  },
  ORANGE: {
    label: tailwindColors.ORANGE.label,
    value: {
      color: '#ffedd5',
      className: 'bg-orange-100 dark:bg-gray-900',
    },
  },
  AMBER: {
    label: tailwindColors.AMBER.label,
    value: {
      color: '#fef3c7',
      className: 'bg-amber-100 dark:bg-gray-900',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: '#fef9c3',
      className: 'bg-yellow-100 dark:bg-gray-900',
    },
  },
  LIME: {
    label: tailwindColors.LIME.label,
    value: {
      color: '#ecfccb',
      className: 'bg-lime-100 dark:bg-gray-900',
    },
  },
  GREEN: {
    label: tailwindColors.GREEN.label,
    value: {
      color: '#dcfce7',
      className: 'bg-green-100 dark:bg-gray-900',
    },
  },
  EMERALD: {
    label: tailwindColors.EMERALD.label,
    value: {
      color: '#d1fae5',
      className: 'bg-emerald-100 dark:bg-gray-900',
    },
  },
  TEAL: {
    label: tailwindColors.TEAL.label,
    value: {
      color: '#ccfbf1',
      className: 'bg-teal-100 dark:bg-gray-900',
    },
  },
  CYAN: {
    label: tailwindColors.CYAN.label,
    value: {
      color: '#cffafe',
      className: 'bg-cyan-100 dark:bg-gray-900',
    },
  },
  SKY: {
    label: tailwindColors.SKY.label,
    value: {
      color: '#e0f2fe',
      className: 'bg-sky-100 dark:bg-gray-900',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: '#dbeafe',
      className: 'bg-blue-100 dark:bg-gray-900',
    },
  },
  DARK_BLUE: {
    label: 'Dark ' + tailwindColors.BLUE.label,
    value: {
      color: '#dbeafe',
      className: 'dark bg-blue-900 dark:bg-blue-900',
    },
  },
  INDIGO: {
    label: tailwindColors.INDIGO.label,
    value: {
      color: '#e0e7ff',
      className: 'bg-indigo-100 dark:bg-gray-900',
    },
  },
  VIOLET: {
    label: tailwindColors.VIOLET.label,
    value: {
      color: '#ede9fe',
      className: 'bg-violet-100 dark:bg-gray-900',
    },
  },
  PURPLE: {
    label: tailwindColors.PURPLE.label,
    value: {
      color: '#f3e8ff',
      className: 'bg-purple-100 dark:bg-gray-900',
    },
  },
  FUCHSIA: {
    label: tailwindColors.FUCHSIA.label,
    value: {
      color: '#fae8ff',
      className: 'bg-fuchsia-100 dark:bg-gray-900',
    },
  },
  ROSE: {
    label: tailwindColors.ROSE.label,
    value: {
      color: '#ffe4e6',
      className: 'bg-rose-100 dark:bg-gray-900',
    },
  },
} as const satisfies Colors

export const emailBgColors = {
  WHITE: {
    label: tailwindColors.WHITE.label,
    value: {
      color: tailwindColors.WHITE.color500,
      className: 'bg-white dark:bg-gray-900 dark:text-white',
    },
  },
  LIGHT_GRAY: {
    label: `Light ${tailwindColors.GRAY.label}`,
    value: {
      color: '#f9fafb',
      className: 'bg-gray-50 dark:bg-gray-900 dark:text-white',
    },
  },
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: '#f3f4f6',
      className: 'bg-gray-100 dark:bg-gray-900 dark:text-white',
    },
  },
  DARK_GRAY: {
    label: `Dark ${tailwindColors.GRAY.label}`,
    value: {
      color: '#1f2937',
      className: 'dark bg-gray-800 dark:bg-gray-900 text-white',
    },
  },
  ORANGE: {
    label: tailwindColors.ORANGE.label,
    value: {
      color: '#ffedd5',
      className: 'bg-orange-100 dark:bg-gray-900 dark:text-white',
    },
  },
  AMBER: {
    label: tailwindColors.AMBER.label,
    value: {
      color: '#fef3c7',
      className: 'bg-amber-100 dark:bg-gray-900 dark:text-white',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: '#fef9c3',
      className: 'bg-yellow-100 dark:bg-gray-900 dark:text-white',
    },
  },
  LIME: {
    label: tailwindColors.LIME.label,
    value: {
      color: '#ecfccb',
      className: 'bg-lime-100 dark:bg-gray-900 dark:text-white',
    },
  },
  GREEN: {
    label: tailwindColors.GREEN.label,
    value: {
      color: '#dcfce7',
      className: 'bg-green-100 dark:bg-gray-900 dark:text-white',
    },
  },
  EMERALD: {
    label: tailwindColors.EMERALD.label,
    value: {
      color: '#d1fae5',
      className: 'bg-emerald-100 dark:bg-gray-900 dark:text-white',
    },
  },
  TEAL: {
    label: tailwindColors.TEAL.label,
    value: {
      color: '#ccfbf1',
      className: 'bg-teal-100 dark:bg-gray-900 dark:text-white',
    },
  },
  CYAN: {
    label: tailwindColors.CYAN.label,
    value: {
      color: '#cffafe',
      className: 'bg-cyan-100 dark:bg-gray-900 dark:text-white',
    },
  },
  SKY: {
    label: tailwindColors.SKY.label,
    value: {
      color: '#e0f2fe',
      className: 'bg-sky-100 dark:bg-gray-900 dark:text-white',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: '#dbeafe',
      className: 'bg-blue-100 dark:bg-gray-900 dark:text-white',
    },
  },
  DARK_BLUE: {
    label: 'Dark ' + tailwindColors.BLUE.label,
    value: {
      color: '#dbeafe',
      className: 'dark bg-blue-900 dark:bg-blue-900 dark:text-white',
    },
  },
  INDIGO: {
    label: tailwindColors.INDIGO.label,
    value: {
      color: '#e0e7ff',
      className: 'bg-indigo-100 dark:bg-gray-900 dark:text-white',
    },
  },
  VIOLET: {
    label: tailwindColors.VIOLET.label,
    value: {
      color: '#ede9fe',
      className: 'bg-violet-100 dark:bg-gray-900 dark:text-white',
    },
  },
  PURPLE: {
    label: tailwindColors.PURPLE.label,
    value: {
      color: '#f3e8ff',
      className: 'bg-purple-100 dark:bg-gray-900 dark:text-white',
    },
  },
  FUCHSIA: {
    label: tailwindColors.FUCHSIA.label,
    value: {
      color: '#fae8ff',
      className: 'bg-fuchsia-100 dark:bg-gray-900 dark:text-white',
    },
  },
  ROSE: {
    label: tailwindColors.ROSE.label,
    value: {
      color: '#ffe4e6',
      className: 'bg-rose-100 dark:bg-gray-900 dark:text-white',
    },
  },
} as const satisfies Colors

//====================
// HIGHLIGHT TEXT COLORS
//====================
export const highlightTextColors = {
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: tailwindColors.GRAY.color500,
      className: 'text-gray-500 dark:text-white',
    },
  },
  RED: {
    label: tailwindColors.RED.label,
    value: {
      color: tailwindColors.RED.color500,
      className: 'text-red-500 dark:text-red-400',
    },
  },
  ORANGE: {
    label: tailwindColors.ORANGE.label,
    value: {
      color: tailwindColors.ORANGE.color500,
      className: 'text-orange-500 dark:text-orange-400',
    },
  },
  AMBER: {
    label: tailwindColors.AMBER.label,
    value: {
      color: tailwindColors.AMBER.color500,
      className: 'text-amber-500 dark:text-amber-400',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: tailwindColors.YELLOW.color500,
      className: 'text-yellow-500 dark:text-yellow-400',
    },
  },
  LIME: {
    label: tailwindColors.LIME.label,
    value: {
      color: tailwindColors.LIME.color500,
      className: 'text-lime-500 dark:text-lime-400',
    },
  },
  GREEN: {
    label: tailwindColors.GREEN.label,
    value: {
      color: tailwindColors.GREEN.color500,
      className: 'text-green-500 dark:text-green-400',
    },
  },
  EMERALD: {
    label: tailwindColors.EMERALD.label,
    value: {
      color: tailwindColors.EMERALD.color500,
      className: 'text-emerald-500 dark:text-emerald-400',
    },
  },
  TEAL: {
    label: tailwindColors.TEAL.label,
    value: {
      color: tailwindColors.TEAL.color500,
      className: 'text-teal-500 dark:text-teal-400',
    },
  },
  CYAN: {
    label: tailwindColors.CYAN.label,
    value: {
      color: tailwindColors.CYAN.color500,
      className: 'text-cyan-500 dark:text-cyan-400',
    },
  },
  SKY: {
    label: tailwindColors.SKY.label,
    value: {
      color: tailwindColors.SKY.color500,
      className: 'text-sky-500 dark:text-sky-400',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: tailwindColors.BLUE.color500,
      className: 'text-blue-500 dark:text-blue-400',
    },
  },
  INDIGO: {
    label: tailwindColors.INDIGO.label,
    value: {
      color: tailwindColors.INDIGO.color500,
      className: 'text-indigo-500 dark:text-indigo-400',
    },
  },
  VIOLET: {
    label: tailwindColors.VIOLET.label,
    value: {
      color: tailwindColors.VIOLET.color500,
      className: 'text-violet-500 dark:text-violet-400',
    },
  },
  PURPLE: {
    label: tailwindColors.PURPLE.label,
    value: {
      color: tailwindColors.PURPLE.color500,
      className: 'text-purple-500 dark:text-purple-400',
    },
  },
  FUCHSIA: {
    label: tailwindColors.FUCHSIA.label,
    value: {
      color: tailwindColors.FUCHSIA.color500,
      className: 'text-fuchsia-500 dark:text-fuchsia-400',
    },
  },
  PINK: {
    label: tailwindColors.PINK.label,
    value: {
      color: tailwindColors.PINK.color500,
      className: 'text-pink-500 dark:text-pink-400',
    },
  },
  ROSE: {
    label: tailwindColors.ROSE.label,
    value: {
      color: tailwindColors.ROSE.color500,
      className: 'text-rose-500 dark:text-rose-400',
    },
  },
} as const satisfies Colors

//====================
// HIGHLIGHT BG COLORS
//====================
export const highlightBgColors = {
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: tailwindColors.GRAY.color500,
      className: 'bg-gray-500 text-white',
    },
  },
  RED: {
    label: tailwindColors.RED.label,
    value: {
      color: tailwindColors.RED.color500,
      className: 'bg-red-500 text-white',
    },
  },
  ORANGE: {
    label: tailwindColors.ORANGE.label,
    value: {
      color: tailwindColors.ORANGE.color500,
      className: 'bg-orange-500 text-white',
    },
  },
  AMBER: {
    label: tailwindColors.AMBER.label,
    value: {
      color: tailwindColors.AMBER.color500,
      className: 'bg-amber-500 text-white',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: tailwindColors.YELLOW.color500,
      className: 'bg-yellow-500 text-white',
    },
  },
  LIME: {
    label: tailwindColors.LIME.label,
    value: {
      color: tailwindColors.LIME.color500,
      className: 'bg-lime-500 text-white',
    },
  },
  GREEN: {
    label: tailwindColors.GREEN.label,
    value: {
      color: tailwindColors.GREEN.color500,
      className: 'bg-green-500 text-white',
    },
  },
  EMERALD: {
    label: tailwindColors.EMERALD.label,
    value: {
      color: tailwindColors.EMERALD.color500,
      className: 'bg-emerald-500 text-white',
    },
  },
  TEAL: {
    label: tailwindColors.TEAL.label,
    value: {
      color: tailwindColors.TEAL.color500,
      className: 'bg-teal-500 text-white',
    },
  },
  CYAN: {
    label: tailwindColors.CYAN.label,
    value: {
      color: tailwindColors.CYAN.color500,
      className: 'bg-cyan-500 text-white',
    },
  },
  SKY: {
    label: tailwindColors.SKY.label,
    value: {
      color: tailwindColors.SKY.color500,
      className: 'bg-sky-500 text-white',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: tailwindColors.BLUE.color500,
      className: 'bg-blue-500 text-white',
    },
  },
  INDIGO: {
    label: tailwindColors.INDIGO.label,
    value: {
      color: tailwindColors.INDIGO.color500,
      className: 'bg-indigo-500 text-white',
    },
  },
  VIOLET: {
    label: tailwindColors.VIOLET.label,
    value: {
      color: tailwindColors.VIOLET.color500,
      className: 'bg-violet-500 text-white',
    },
  },
  PURPLE: {
    label: tailwindColors.PURPLE.label,
    value: {
      color: tailwindColors.PURPLE.color500,
      className: 'bg-purple-500 text-white',
    },
  },
  FUCHSIA: {
    label: tailwindColors.FUCHSIA.label,
    value: {
      color: tailwindColors.FUCHSIA.color500,
      className: 'bg-fuchsia-500 text-white',
    },
  },
  PINK: {
    label: tailwindColors.PINK.label,
    value: {
      color: tailwindColors.PINK.color500,
      className: 'bg-pink-500 text-white',
    },
  },
  ROSE: {
    label: tailwindColors.ROSE.label,
    value: {
      color: tailwindColors.ROSE.color500,
      className: 'bg-rose-500 text-white',
    },
  },
} as const satisfies Colors

//====================
// BUTTON COLORS
//====================
type ButtonColor = {
  label: string
  value: {
    color: string
    classNameSolid: string
    classNameOutline: string
  }
}

type ButtonColors = Record<string, ButtonColor>

export const buttonColors = {
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: tailwindColors.GRAY.color500,
      classNameSolid: 'bg-gray-500 text-white hover:bg-gray-600',
      classNameOutline:
        'border border-gray-600 text-gray-600 dark:border-white dark:text-white',
    },
  },
  RED: {
    label: tailwindColors.RED.label,
    value: {
      color: tailwindColors.RED.color500,
      classNameSolid: 'bg-red-500 text-white hover:bg-red-600',
      classNameOutline:
        'border border-red-600 text-red-600 dark:border-white dark:text-white',
    },
  },
  ORANGE: {
    label: tailwindColors.ORANGE.label,
    value: {
      color: tailwindColors.ORANGE.color500,
      classNameSolid: 'bg-orange-500 text-white hover:bg-orange-600',
      classNameOutline:
        'border border-orange-600 text-orange-600 dark:border-white dark:text-white',
    },
  },
  AMBER: {
    label: tailwindColors.AMBER.label,
    value: {
      color: tailwindColors.AMBER.color500,
      classNameSolid: 'bg-amber-500 text-white hover:bg-amber-600',
      classNameOutline:
        'border border-amber-600 text-amber-600 dark:border-white dark:text-white',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: tailwindColors.YELLOW.color500,
      classNameSolid: 'bg-yellow-500 text-white hover:bg-yellow-600',
      classNameOutline:
        'border border-yellow-600 text-yellow-600 dark:border-white dark:text-white',
    },
  },
  LIME: {
    label: tailwindColors.LIME.label,
    value: {
      color: tailwindColors.LIME.color500,
      classNameSolid: 'bg-lime-500 text-white hover:bg-lime-600',
      classNameOutline:
        'border border-lime-600 text-lime-600 dark:border-white dark:text-white',
    },
  },
  GREEN: {
    label: tailwindColors.GREEN.label,
    value: {
      color: tailwindColors.GREEN.color500,
      classNameSolid: 'bg-green-500 text-white hover:bg-green-600',
      classNameOutline:
        'border border-green-600 text-green-600 dark:border-white dark:text-white',
    },
  },
  EMERALD: {
    label: tailwindColors.EMERALD.label,
    value: {
      color: tailwindColors.EMERALD.color500,
      classNameSolid: 'bg-emerald-500 text-white hover:bg-emerald-600',
      classNameOutline:
        'border border-emerald-600 text-emerald-600 dark:border-white dark:text-white',
    },
  },
  TEAL: {
    label: tailwindColors.TEAL.label,
    value: {
      color: tailwindColors.TEAL.color500,
      classNameSolid: 'bg-teal-500 text-white hover:bg-teal-600',
      classNameOutline:
        'border border-teal-600 text-teal-600 dark:border-white dark:text-white',
    },
  },
  CYAN: {
    label: tailwindColors.CYAN.label,
    value: {
      color: tailwindColors.CYAN.color500,
      classNameSolid: 'bg-cyan-500 text-white hover:bg-cyan-600',
      classNameOutline:
        'border border-cyan-600 text-cyan-600 dark:border-white dark:text-white',
    },
  },
  SKY: {
    label: tailwindColors.SKY.label,
    value: {
      color: tailwindColors.SKY.color500,
      classNameSolid: 'bg-sky-500 text-white hover:bg-sky-600',
      classNameOutline:
        'border border-sky-600 text-sky-600 dark:border-white dark:text-white',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: tailwindColors.BLUE.color500,
      classNameSolid: 'bg-blue-500 text-white hover:bg-blue-600',
      classNameOutline:
        'border border-blue-600 text-blue-600 dark:border-white dark:text-white',
    },
  },
  INDIGO: {
    label: tailwindColors.INDIGO.label,
    value: {
      color: tailwindColors.INDIGO.color500,
      classNameSolid: 'bg-indigo-500 text-white hover:bg-indigo-600',
      classNameOutline:
        'border border-indigo-600 text-indigo-600 dark:border-white dark:text-white',
    },
  },
  VIOLET: {
    label: tailwindColors.VIOLET.label,
    value: {
      color: tailwindColors.VIOLET.color500,
      classNameSolid: 'bg-violet-500 text-white hover:bg-violet-600',
      classNameOutline:
        'border border-violet-600 text-violet-600 dark:border-white dark:text-white',
    },
  },
  PURPLE: {
    label: tailwindColors.PURPLE.label,
    value: {
      color: tailwindColors.PURPLE.color500,
      classNameSolid: 'bg-purple-500 text-white hover:bg-purple-600',
      classNameOutline:
        'border border-purple-600 text-purple-600 dark:border-white dark:text-white',
    },
  },
  FUCHSIA: {
    label: tailwindColors.FUCHSIA.label,
    value: {
      color: tailwindColors.FUCHSIA.color500,
      classNameSolid: 'bg-fuchsia-500 text-white hover:bg-fuchsia-600',
      classNameOutline:
        'border border-fuchsia-600 text-fuchsia-600 dark:border-white dark:text-white',
    },
  },
  PINK: {
    label: tailwindColors.PINK.label,
    value: {
      color: tailwindColors.PINK.color500,
      classNameSolid: 'bg-pink-500 text-white hover:bg-pink-600',
      classNameOutline:
        'border border-pink-600 text-pink-600 dark:border-white dark:text-white',
    },
  },
  ROSE: {
    label: tailwindColors.ROSE.label,
    value: {
      color: tailwindColors.ROSE.color500,
      classNameSolid: 'bg-rose-500 text-white hover:bg-rose-600',
      classNameOutline:
        'border border-rose-600 text-rose-600 dark:border-white dark:text-white',
    },
  },
} as const satisfies ButtonColors

//====================
// GRADIENTS
//====================
type Gradient = {
  label: string
  value: any
  className: string
}

export const gradients = {
  CARIBBEAN_BLUE: {
    label: 'Caribbean Blue',
    value: 'CARIBBEAN_BLUE',
    className: 'from-blue-500 to-teal-400 dark:from-blue-400 dark:to-teal-300',
  },
  PURPLE_PINK: {
    label: 'Purple Pink',
    value: 'PURPLE_PINK',
    className:
      'from-purple-700 to-pink-500 dark:from-purple-500 dark:to-pink-300',
  },
  SUN: {
    label: 'Sun',
    value: 'SUN',
    className:
      'from-red-500 to-yellow-400 dark:from-red-400 dark:to-yellow-400',
  },
  DAWN: {
    label: 'Dawn',
    value: 'DAWN',
    className:
      'from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-300 dark:via-purple-400 dark:to-pink-400',
  },
  EVENING: {
    label: 'Evening',
    value: 'EVENING',
    className:
      'from-purple-800 via-fuchsia-500 to-amber-400 dark:from-purple-600 via-fuchsia-400 to-amber-400',
  },
  FRESH_LIME: {
    label: 'Fresh lime',
    value: 'FRESH_LIME',
    className:
      'from-sky-800 via-lime-500 to-amber-400 dark:from-sky-600 via-lime-400 to-amber-400',
  },
  MUSIC: {
    label: 'Music',
    value: 'MUSIC',
    className:
      'from-rose-500 via-cyan-500 to-blue-500 dark:from-rose-500 dark:via-cyan-400 dark:to-blue-400',
  },
  MORNING_LIGHT: {
    label: 'Morning light',
    value: 'MORNING_LIGHT',
    className: 'from-purple-700 via-fuchsia-400 to-cyan-500',
  },
  OCEAN: {
    label: 'Ocean',
    value: 'OCEAN',
    className: 'from-indigo-700 via-sky-600 to-teal-400',
  },
  MANGO: {
    label: 'Mango',
    value: 'MANGO',
    className: 'from-teal-600 via-yellow-500 to-orange-500',
  },
  MINT_GREEN: {
    label: 'Mint green',
    value: 'MINT_GREEN',
    className: 'from-cyan-700 via-teal-500 to-emerald-500',
  },
  FLASH_NEON: {
    label: 'Flash Neon',
    value: 'FLASH_NEON',
    className: 'from-purple-500 via-fuchsia-400 to-violet-500',
  },
  LIGHTHOUSE: {
    label: 'Lighthouse',
    value: 'LIGHTHOUSE',
    className: 'from-purple-500 via-yellow-600 to-purple-500',
  },
  NONE: { label: 'None', value: 'NONE', className: '' },
} as const satisfies Record<string, Gradient>

//====================
// PRICING COLORS
//====================

export type PricingColorValue = {
  color: string
  mainDivClassName: string
  popularTagClassName: string
  planNameClassName: string
  buttonClassName: string
  featureTagClassName: string
}

type PricingColor = {
  label: string
  value: PricingColorValue
}

type PricingColors = Record<string, PricingColor>

export const pricingColors = {
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: tailwindColors.GRAY.color500,
      mainDivClassName: 'border-t-gray-500',
      popularTagClassName: 'bg-gray-500',
      planNameClassName: 'text-gray-500',
      buttonClassName:
        'text-gray-600 dark:text-gray-500 border-gray-500 hover:bg-gray-500',
      featureTagClassName:
        'bg-gray-200 dark:bg-gray-200/30 text-gray-800 dark:text-white',
    },
  },
  RED: {
    label: tailwindColors.RED.label,
    value: {
      color: tailwindColors.RED.color500,
      mainDivClassName: 'border-t-red-500',
      popularTagClassName: 'bg-red-500',
      planNameClassName: 'text-red-500',
      buttonClassName:
        'text-red-600 dark:text-red-500 border-red-500 hover:bg-red-500',
      featureTagClassName:
        'bg-red-200 dark:bg-red-200/30 text-red-800 dark:text-white',
    },
  },
  ORANGE: {
    label: tailwindColors.ORANGE.label,
    value: {
      color: tailwindColors.ORANGE.color500,
      mainDivClassName: 'border-t-orange-500',
      popularTagClassName: 'bg-orange-500',
      planNameClassName: 'text-orange-500',
      buttonClassName:
        'text-orange-600 dark:text-orange-500 border-orange-500 hover:bg-orange-500',
      featureTagClassName:
        'bg-orange-200 dark:bg-orange-200/30 text-orange-800 dark:text-white',
    },
  },
  AMBER: {
    label: tailwindColors.AMBER.label,
    value: {
      color: tailwindColors.AMBER.color500,
      mainDivClassName: 'border-t-amber-500',
      popularTagClassName: 'bg-amber-500',
      planNameClassName: 'text-amber-500',
      buttonClassName:
        'text-amber-600 dark:text-amber-500 border-amber-500 hover:bg-amber-500',
      featureTagClassName:
        'bg-amber-200 dark:bg-amber-200/30 text-amber-800 dark:text-white',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: tailwindColors.YELLOW.color500,
      mainDivClassName: 'border-t-yellow-500',
      popularTagClassName: 'bg-yellow-500',
      planNameClassName: 'text-yellow-500',
      buttonClassName:
        'text-yellow-600 dark:text-yellow-500 border-yellow-500 hover:bg-yellow-500',
      featureTagClassName:
        'bg-yellow-200 dark:bg-yellow-200/30 text-yellow-800 dark:text-white',
    },
  },
  LIME: {
    label: tailwindColors.LIME.label,
    value: {
      color: tailwindColors.LIME.color500,
      mainDivClassName: 'border-t-lime-500',
      popularTagClassName: 'bg-lime-500',
      planNameClassName: 'text-lime-500',
      buttonClassName:
        'text-lime-600 dark:text-lime-500 border-lime-500 hover:bg-lime-500',
      featureTagClassName:
        'bg-lime-200 dark:bg-lime-200/30 text-lime-800 dark:text-white',
    },
  },
  GREEN: {
    label: tailwindColors.GREEN.label,
    value: {
      color: tailwindColors.GREEN.color500,
      mainDivClassName: 'border-t-green-500',
      popularTagClassName: 'bg-green-500',
      planNameClassName: 'text-green-500',
      buttonClassName:
        'text-green-600 dark:text-green-500 border-green-500 hover:bg-green-500',
      featureTagClassName:
        'bg-green-200 dark:bg-green-200/30 text-green-800 dark:text-white',
    },
  },
  EMERALD: {
    label: tailwindColors.EMERALD.label,
    value: {
      color: tailwindColors.EMERALD.color500,
      mainDivClassName: 'border-t-emerald-500',
      popularTagClassName: 'bg-emerald-500',
      planNameClassName: 'text-emerald-500',
      buttonClassName:
        'text-emerald-600 dark:text-emerald-500 border-emerald-500 hover:bg-emerald-500',
      featureTagClassName:
        'bg-emerald-200 dark:bg-emerald-200/30 text-emerald-800 dark:text-white',
    },
  },
  TEAL: {
    label: tailwindColors.TEAL.label,
    value: {
      color: tailwindColors.TEAL.color500,
      mainDivClassName: 'border-t-teal-500',
      popularTagClassName: 'bg-teal-500',
      planNameClassName: 'text-teal-500',
      buttonClassName:
        'text-teal-600 dark:text-teal-500 border-teal-500 hover:bg-teal-500',
      featureTagClassName:
        'bg-teal-200 dark:bg-teal-200/30 text-teal-800 dark:text-white',
    },
  },
  CYAN: {
    label: tailwindColors.CYAN.label,
    value: {
      color: tailwindColors.CYAN.color500,
      mainDivClassName: 'border-t-cyan-500',
      popularTagClassName: 'bg-cyan-500',
      planNameClassName: 'text-cyan-500',
      buttonClassName:
        'text-cyan-600 dark:text-cyan-500 border-cyan-500 hover:bg-cyan-500',
      featureTagClassName:
        'bg-cyan-200 dark:bg-cyan-200/30 text-cyan-800 dark:text-white',
    },
  },
  SKY: {
    label: tailwindColors.SKY.label,
    value: {
      color: tailwindColors.SKY.color500,
      mainDivClassName: 'border-t-sky-500',
      popularTagClassName: 'bg-sky-500',
      planNameClassName: 'text-sky-500',
      buttonClassName:
        'text-sky-600 dark:text-sky-500 border-sky-500 hover:bg-sky-500',
      featureTagClassName:
        'bg-sky-200 dark:bg-sky-200/30 text-sky-800 dark:text-white',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: tailwindColors.BLUE.color500,
      mainDivClassName: 'border-t-blue-500',
      popularTagClassName: 'bg-blue-500',
      planNameClassName: 'text-blue-500',
      buttonClassName:
        'text-blue-600 dark:text-blue-500 border-blue-500 hover:bg-blue-500',
      featureTagClassName:
        'bg-blue-200 dark:bg-blue-200/30 text-blue-800 dark:text-white',
    },
  },
  INDIGO: {
    label: tailwindColors.INDIGO.label,
    value: {
      color: tailwindColors.INDIGO.color500,
      mainDivClassName: 'border-t-indigo-500',
      popularTagClassName: 'bg-indigo-500',
      planNameClassName: 'text-indigo-500',
      buttonClassName:
        'text-indigo-600 dark:text-indigo-500 border-indigo-500 hover:bg-indigo-500',
      featureTagClassName:
        'bg-indigo-200 dark:bg-indigo-200/30 text-indigo-800 dark:text-white',
    },
  },
  VIOLET: {
    label: tailwindColors.VIOLET.label,
    value: {
      color: tailwindColors.VIOLET.color500,
      mainDivClassName: 'border-t-violet-500',
      popularTagClassName: 'bg-violet-500',
      planNameClassName: 'text-violet-500',
      buttonClassName:
        'text-violet-600 dark:text-violet-500 border-violet-500 hover:bg-violet-500',
      featureTagClassName:
        'bg-violet-200 dark:bg-violet-200/30 text-violet-800 dark:text-white',
    },
  },
  PURPLE: {
    label: tailwindColors.PURPLE.label,
    value: {
      color: tailwindColors.PURPLE.color500,
      mainDivClassName: 'border-t-purple-500',
      popularTagClassName: 'bg-purple-500',
      planNameClassName: 'text-purple-500',
      buttonClassName:
        'text-purple-600 dark:text-purple-500 border-purple-500 hover:bg-purple-500',
      featureTagClassName:
        'bg-purple-200 dark:bg-purple-200/30 text-purple-800 dark:text-white',
    },
  },
  FUCHSIA: {
    label: tailwindColors.FUCHSIA.label,
    value: {
      color: tailwindColors.FUCHSIA.color500,
      mainDivClassName: 'border-t-fuchsia-500',
      popularTagClassName: 'bg-fuchsia-500',
      planNameClassName: 'text-fuchsia-500',
      buttonClassName:
        'text-fuchsia-600 dark:text-fuchsia-500 border-fuchsia-500 hover:bg-fuchsia-500',
      featureTagClassName:
        'bg-fuchsia-200 dark:bg-fuchsia-200/30 text-fuchsia-800 dark:text-white',
    },
  },
  PINK: {
    label: tailwindColors.PINK.label,
    value: {
      color: tailwindColors.PINK.color500,
      mainDivClassName: 'border-t-pink-500',
      popularTagClassName: 'bg-pink-500',
      planNameClassName: 'text-pink-500',
      buttonClassName:
        'text-pink-600 dark:text-pink-500 border-pink-500 hover:bg-pink-500',
      featureTagClassName:
        'bg-pink-200 dark:bg-pink-200/30 text-pink-800 dark:text-white',
    },
  },
  ROSE: {
    label: tailwindColors.ROSE.label,
    value: {
      color: tailwindColors.ROSE.color500,
      mainDivClassName: 'border-t-rose-500',
      popularTagClassName: 'bg-rose-500',
      planNameClassName: 'text-rose-500',
      buttonClassName:
        'text-rose-600 dark:text-rose-500 border-rose-500 hover:bg-rose-500',
      featureTagClassName:
        'bg-rose-200 dark:bg-rose-200/30 text-rose-800 dark:text-white',
    },
  },
} as const satisfies PricingColors

export type IconAccentColor = {
  value: string
  label: string
  className: string
  color: string
}

export const iconAccentColors: IconAccentColor[] = [
  {
    value: 'red',
    label: 'Red',
    className: 'text-red-500',
    color: '#fb2c36', // oklch(0.637 0.237 25.331)
  },
  {
    value: 'orange',
    label: 'Orange',
    className: 'text-orange-500',
    color: '#ff6900', // oklch(0.705 0.213 47.604)
  },
  {
    value: 'amber',
    label: 'Amber',
    className: 'text-amber-500',
    color: '#fd9a00', // oklch(0.769 0.188 70.08)
  },
  {
    value: 'yellow',
    label: 'Yellow',
    className: 'text-yellow-500',
    color: '#efb100', // oklch(0.795 0.184 86.047)
  },
  {
    value: 'lime',
    label: 'Lime',
    className: 'text-lime-500',
    color: '#7ccf00', // oklch(0.768 0.233 130.85)
  },
  {
    value: 'green',
    label: 'Green',
    className: 'text-green-500',
    color: '#00c950', // oklch(0.723 0.219 149.579)
  },
  {
    value: 'emerald',
    label: 'Emerald',
    className: 'text-emerald-500',
    color: '#00bc7d', // oklch(0.696 0.17 162.48)
  },
  {
    value: 'teal',
    label: 'Teal',
    className: 'text-teal-500',
    color: '#00bba7', // oklch(0.704 0.14 182.503)
  },
  {
    value: 'cyan',
    label: 'Cyan',
    className: 'text-cyan-500',
    color: '#00b8db', // oklch(0.715 0.143 215.221)
  },
  {
    value: 'sky',
    label: 'Sky',
    className: 'text-sky-500',
    color: '#00a6f4', // oklch(0.685 0.169 237.323)
  },
  {
    value: 'blue',
    label: 'Blue',
    className: 'text-blue-500',
    color: '#2b7fff', // oklch(0.623 0.214 259.815)
  },
  {
    value: 'indigo',
    label: 'Indigo',
    className: 'text-indigo-500',
    color: '#615fff', // oklch(0.585 0.233 277.117)
  },
  {
    value: 'violet',
    label: 'Violet',
    className: 'text-violet-500',
    color: '#8e51ff', // oklch(0.606 0.25 292.717)
  },
  {
    value: 'purple',
    label: 'Purple',
    className: 'text-purple-500',
    color: '#ad46ff', // oklch(0.627 0.265 303.9)
  },
  {
    value: 'fuchsia',
    label: 'Fuchsia',
    className: 'text-fuchsia-500',
    color: '#e12afb', // oklch(0.667 0.295 322.15)
  },
  {
    value: 'pink',
    label: 'Pink',
    className: 'text-pink-500',
    color: '#f6339a', // oklch(0.656 0.241 354.308)
  },
  {
    value: 'rose',
    label: 'Rose',
    className: 'text-rose-500',
    color: '#ff2056', // oklch(0.645 0.246 16.439)
  },
  {
    value: 'white',
    label: 'White',
    className: 'text-white',
    color: '#FFFFFF',
  },
]

export type IconBgAccentColor = {
  value: string
  label: string
  className: string
  color: string
}

export const iconBgAccentColors: IconBgAccentColor[] = [
  {
    value: 'red',
    label: 'Red',
    className: 'bg-red-600 text-white',
    color: '#e7000b', // oklch(0.577 0.245 27.325)
  },
  {
    value: 'red-light',
    label: 'Red Light',
    className: 'bg-red-100 text-red-600 dark:bg-white/40 dark:text-white',
    color: '#ffe2e2', // oklch(0.936 0.032 17.717)
  },
  {
    value: 'orange',
    label: 'Orange',
    className: 'bg-orange-600 text-white',
    color: '#f54900', // oklch(0.646 0.222 41.116)
  },
  {
    value: 'orange-light',
    label: 'Orange Light',
    className: 'bg-orange-100 text-orange-600 dark:bg-white/40 dark:text-white',
    color: '#ffedd4', // oklch(0.954 0.038 75.164)
  },
  {
    value: 'amber',
    label: 'Amber',
    className: 'bg-amber-600 text-white',
    color: '#e17100', // oklch(0.666 0.179 58.318)
  },
  {
    value: 'amber-light',
    label: 'Amber Light',
    className: 'bg-amber-100 text-amber-600 dark:bg-white/40 dark:text-white',
    color: '#fef3c6', // oklch(0.962 0.059 95.617)
  },
  {
    value: 'yellow',
    label: 'Yellow',
    className: 'bg-yellow-600 text-white',
    color: '#d08700', // oklch(0.681 0.162 75.834)
  },
  {
    value: 'yellow-light',
    label: 'Yellow Light',
    className: 'bg-yellow-100 text-yellow-600 dark:bg-white/40 dark:text-white',
    color: '#fef9c2', // oklch(0.973 0.071 103.193)
  },
  {
    value: 'lime',
    label: 'Lime',
    className: 'bg-lime-600 text-white',
    color: '#5ea500', // oklch(0.648 0.2 131.684)
  },
  {
    value: 'lime-light',
    label: 'Lime Light',
    className: 'bg-lime-100 text-lime-600 dark:bg-white/40 dark:text-white',
    color: '#ecfcca', // oklch(0.967 0.067 122.328)
  },
  {
    value: 'green',
    label: 'Green',
    className: 'bg-green-600 text-white',
    color: '#00a63e', // oklch(0.627 0.194 149.214)
  },
  {
    value: 'green-light',
    label: 'Green Light',
    className: 'bg-green-100 text-green-600 dark:bg-white/40 dark:text-white',
    color: '#dcfce7', // oklch(0.962 0.044 156.743)
  },
  {
    value: 'emerald',
    label: 'Emerald',
    className: 'bg-emerald-600 text-white',
    color: '#096', // oklch(0.596 0.145 163.225)
  },
  {
    value: 'emerald-light',
    label: 'Emerald Light',
    className:
      'bg-emerald-100 text-emerald-600 dark:bg-white/40 dark:text-white',
    color: '#d0fae5', // oklch(0.95 0.052 163.051)
  },
  {
    value: 'teal',
    label: 'Teal',
    className: 'bg-teal-600 text-white',
    color: '#009689', // oklch(0.6 0.118 184.704)
  },
  {
    value: 'teal-light',
    label: 'Teal Light',
    className: 'bg-teal-100 text-teal-600 dark:bg-white/40 dark:text-white',
    color: '#cbfbf1', // oklch(0.953 0.051 180.801)
  },
  {
    value: 'cyan',
    label: 'Cyan',
    className: 'bg-cyan-600 text-white',
    color: '#0092b8', // oklch(0.609 0.126 221.723)
  },
  {
    value: 'cyan-light',
    label: 'Cyan Light',
    className: 'bg-cyan-100 text-cyan-600 dark:bg-white/40 dark:text-white',
    color: '#cefafe', // oklch(0.956 0.045 203.388)
  },
  {
    value: 'sky',
    label: 'Sky',
    className: 'bg-sky-600 text-white',
    color: '#0084d1', // oklch(0.588 0.158 241.966)
  },
  {
    value: 'sky-light',
    label: 'Sky Light',
    className: 'bg-sky-100 text-sky-600 dark:bg-white/40 dark:text-white',
    color: '#dff2fe', // oklch(0.951 0.026 236.824)
  },
  {
    value: 'blue',
    label: 'Blue',
    className: 'bg-blue-600 text-white',
    color: '#155dfc', // oklch(0.546 0.245 262.881)
  },
  {
    value: 'blue-light',
    label: 'Blue Light',
    className: 'bg-blue-100 text-blue-600 dark:bg-white/40 dark:text-white',
    color: '#dbeafe', // oklch(0.932 0.032 255.585)
  },
  {
    value: 'indigo',
    label: 'Indigo',
    className: 'bg-indigo-600 text-white',
    color: '#4f39f6', // oklch(0.511 0.262 276.966)
  },
  {
    value: 'indigo-light',
    label: 'Indigo Light',
    className: 'bg-indigo-100 text-indigo-600 dark:bg-white/40 dark:text-white',
    color: '#e0e7ff', // oklch(0.93 0.034 272.788)
  },
  {
    value: 'violet',
    label: 'Violet',
    className: 'bg-violet-600 text-white',
    color: '#8023ff', //'#7f22fe', // oklch(0.541 0.281 293.009)
  },
  {
    value: 'violet-light',
    label: 'Violet Light',
    className: 'bg-violet-100 text-violet-600 dark:bg-white/40 dark:text-white',
    color: '#ede9fe', // oklch(0.943 0.029 294.588)
  },
  {
    value: 'purple',
    label: 'Purple',
    className: 'bg-purple-600 text-white',
    color: '#9810fa', // oklch(0.558 0.288 302.321)
  },
  {
    value: 'purple-light',
    label: 'Purple Light',
    className: 'bg-purple-100 text-purple-600 dark:bg-white/40 dark:text-white',
    color: '#f3e8ff', // oklch(0.946 0.033 307.174)
  },
  {
    value: 'fuchsia',
    label: 'Fuchsia',
    className: 'bg-fuchsia-600 text-white',
    color: '#c800df', //'#7f22fe', // oklch(0.541 0.281 293.009)
  },
  {
    value: 'fuchsia-light',
    label: 'Fuchsia Light',
    className:
      'bg-fuchsia-100 text-fuchsia-600 dark:bg-white/40 dark:text-white',
    color: '#fae8ff', // oklch(0.952 0.037 318.852)
  },
  {
    value: 'pink',
    label: 'Pink',
    className: 'bg-pink-600 text-white',
    color: '#e60076', // oklch(0.558 0.288 302.321)
  },
  {
    value: 'pink-light',
    label: 'Pink Light',
    className: 'bg-pink-100 text-pink-600 dark:bg-white/40 dark:text-white',
    color: '#fce7f4', // oklch(0.952 0.037 318.852)
  },
  {
    value: 'rose',
    label: 'Rose',
    className: 'bg-rose-600 text-white',
    color: '#e7000b', // oklch(0.577 0.245 27.325)
  },
  {
    value: 'rose-light',
    label: 'Rose Light',
    className: 'bg-rose-100 text-rose-600 dark:bg-white/40 dark:text-white',
    color: '#ffe2e2', // oklch(0.936 0.032 17.717)
  },
]

export const textAccentColorOptions = [
  {
    value: 'lime',
    label: 'Lime',
    className: 'text-[oklch(76%_0.21_133)]',
    color: '#78cb13', // oklch(0.76 0.21 133)
  },
  {
    value: 'green',
    label: 'Green',
    className: 'text-[oklch(71.511%_0.16249_149.97)]',
    color: '#46be6a', // oklch(0.71511 0.16249 149.97)
  },
  {
    value: 'emerald',
    label: 'Emerald',
    className: 'text-[oklch(68%_0.11746_166)]',
    color: '#3faf87', // oklch(0.68 0.11746 166)
  },
  {
    value: 'teal',
    label: 'Teal',
    className: 'text-[oklch(65.29%_0.10508_195.31)]',
    color: '#20a4a4', // oklch(0.6529 0.10508 195.31)
  },
  {
    value: 'cyan',
    label: 'Cyan',
    className: 'text-[oklch(71.994%_0.1299_218.65)]',
    color: '#00b7db', // oklch(0.71994 0.1299 218.65)
  },
  {
    value: 'indigo',
    label: 'Indigo',
    className: 'text-indigo-400',
    color: '#7c86ff', // oklch(0.673 0.182 276.935)
  },
  {
    value: 'violet',
    label: 'Violet',
    className: 'text-violet-400',
    color: '#a684ff', // oklch(0.702 0.183 293.541)
  },
  {
    value: 'purple',
    label: 'Purple',
    className: 'text-purple-400',
    color: '#c27aff', // oklch(0.714 0.203 305.504)
  },
  {
    value: 'fuchsia',
    label: 'Fuchsia',
    className: 'text-fuchsia-400',
    color: '#ed6aff', // oklch(0.74 0.238 322.16)
  },
  {
    value: 'pink',
    label: 'Pink',
    className: 'text-[oklch(70.991%_0.20102_352.2)]',
    color: '#fa61ae', // oklch(0.70991 0.20102 352.2)
  },
  {
    value: 'gradient-blue',
    label: 'Gradient Blue',
    className:
      'bg-clip-text text-transparent leading-normal bg-linear-to-b from-blue-900 to-sky-600',
    color: '#015eb1', // oklch(0.483 0.152 253.744)
    style: {
      backgroundImage:
        'linear-gradient(180deg in oklab, oklch(0.379 0.146 265.522) 0%, oklch(0.588 0.158 241.966) 100%)',
    },
  },
]

export type textAccentColorType =
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'gradient-blue'
