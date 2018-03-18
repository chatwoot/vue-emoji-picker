<template>
  <div>
    <emoji-dialog
      :on-click="onEmojiInput"
      v-show="isActive"
      dialogPosition=""
    />
    <i class="icon-emoji--opener icon ion-happy-outline" @click="toggleEmojiPicker()"></i>
  </div>
</template>

<script>
import EmojiDialog from './VueEmojiDialog.vue'
import util from '../utils/index.js'
export default {
  props: ['dialogPosition', 'onClick'],
  components: {
    EmojiDialog,
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleEmojiPicker() {
      this.isActive = !this.isActive;
    },
    onEmojiInput(emoji) {
      this.onClick(util(emoji.shortname, 'shortnameToUnicode'));
    }
  }
}
</script>



<style scoped>
@import 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';
.icon-emoji--opener {
  font-size: 24px;
  color: #1f93ff;
  margin: 0 16px;
}
</style>