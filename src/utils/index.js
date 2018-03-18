import emojione from 'emojione'
/* eslint-disable */
export default function (value, method = 'shortnameToImage') {
  return emojione[method](value)
}

export function getEmojiUnicode(value) {
  return emojione.shortnameToUnicode(value)
}

export const categoryList = [
  {
    key: 'people',
    title: 'People',
    emoji: 'smile'
  },
  {
    key: 'nature',
    title: 'Nature',
    emoji: 'hamster'
  },
  {
    key: 'food',
    title: 'Food & Drink',
    emoji: 'pizza'
  },
  {
    key: 'activity',
    title: 'Activity',
    emoji: 'soccer'
  },
  {
    key: 'travel',
    title: 'Travel & Places',
    emoji: 'earth_americas'
  },
  {
    key: 'objects',
    title: 'Objects',
    emoji: 'bulb'
  },
  {
    key: 'symbols',
    title: 'Symbols',
    emoji: 'clock9'
  },
  {
    key: 'flags',
    title: 'Flags',
    emoji: 'flag_gb'
  }
]