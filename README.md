# @chatwoot/vue-emoji-picker

> An emoji picker for Vue.js, built with EmojiOne

<!-- Use https://github.com/phw/peek or https://github.com/ShareX/ShareX to record your component in action as gif -->
<!-- ![](./static/screenplay.gif) waiting https://github.com/tuchk4/storybook-readme/issues/51 to resolve -->

## Installation

### via NPM

```bash
npm install --save @chatwoot/vue-emoji-picker
# or if you use yarn
yarn add @chatwoot/vue-emoji-picker
```

then you can import it

```js
import ChatwootVueEmojiPicker from '@chatwoot/vue-emoji-picker'
```

### via CDN

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@chatwoot/vue-emoji-picker"></script>
```

## Usage

### Example

```html
<@chatwoot/vue-emoji-picker hello="Hello world!!!" @click="clicked">
</@chatwoot/vue-emoji-picker>
```

```js
export default {
  components: {
    ChatwootVueEmojiPicker
  },
  methods: {
    clicked (helloText) {
      console.log(helloText)
    }
  }
}
```

> For more comprehensive example, open one of `<story>/<scenario>.vue` in [./src/stories](./src/stories)

### Props

| Prop name | Description | Type | Required | Default value |
|---------- |-------- |---------- |---------- |---------- |
| `hello` | set hello text | `String` | no | `''` |

### Events

| Event name | Description | Parameters |
|---------- |-------- |---------- |
| `click` | fire when hello text is clicked | helloText: `String` |

### Slots

| Slot name | Description | Accepted Element | Slot scope |
|---------- |-------- |---------- |---------- |
| `default` | slot without name are placed in default | `any` | `NaN` |

---

## Extending @chatwoot/vue-emoji-picker

In case if you want to extend and/or override @chatwoot/vue-emoji-picker basic functionality.

### Example

```js
export default {
  extends: ChatwootVueEmojiPicker,
  methods: {
    clicked (helloText) {
      console.log('this execute first', helloText)
    }
  }
}
```

### Methods

| Method name | Description | Parameters |
|---------- |-------- |---------- |
| `clicked` | execute when button is clicked | helloText: `String` |

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guide.

---
<sup>This library was generated with [vue-authoring-template](https://github.com/DrSensor/vue-authoring-template) using [vue-cli](https://github.com/vuejs/vue-cli).</sup>
