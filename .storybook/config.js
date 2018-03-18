import { configure, addDecorator } from '@storybook/vue'
import { setOptions as masterOptions } from '@storybook/addon-options'

import { withReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs/dist/vue'

import Readme from '../README.md'

addDecorator(withReadme(Readme))

addDecorator(withKnobs)

masterOptions({
  name: '@chatwoot/vue-emoji-picker',
  url: '#',
  showLeftPanel: true,
  downPanelInRight: true,
  hierarchySeparator: /\/|\./
})


configure(() => require('../src/stories'), module)
