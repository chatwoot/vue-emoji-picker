# @chatwoot/vue-emoji-picker

> An emoji picker for Vue.js, built with EmojiOne

## Installation

### via NPM

```bash
npm install --save @chatwoot/vue-emoji-picker
# or if you use yarn
yarn add @chatwoot/vue-emoji-picker
```

then you can import it

```js
import VueEmojiPicker from '@chatwoot/vue-emoji-picker'
```

### via CDN

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@chatwoot/vue-emoji-picker"></script>
```

## Usage

### Example

```html
<vue-emoji-picker :on-click="clicked"/>
```

```js
export default {
  components: {
    VueEmojiPicker
  },
  methods: {
    clicked (helloText) {
      console.log(helloText)
    }
  }
}
```

> For more comprehensive example, open one of `<story>/<scenario>.vue` in [./src/stories](./src/stories)


### Events

| Event name | Description | Parameters |
|---------- |-------- |---------- |
| `click` | fire when hello text is clicked | helloText: `String` |

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guide.
