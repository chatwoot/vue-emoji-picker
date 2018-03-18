<template>
  <div>
    <vue-emoji-picker :on-click="clicked"/>
  </div>
</template>

<script>
import VueEmojiPicker from '../../components/VueEmojiPicker.vue'

export default {
  components: {
    VueEmojiPicker
  },
  methods: {
    clicked (helloText) {
      console.log('click', helloText)
    }
  }
}
</script>
