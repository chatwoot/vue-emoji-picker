<template>
  <div>
    <emoji-dialog
      @click="onClick"
      v-show="isActive"
      dialogPosition=""
    />
    <i class="icon-emoji--opener icon ion-happy-outline" @click="toggleEmojiPicker()"></i>
    
  </div>
</template>

<style scoped>
@import 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css';
.icon-emoji--opener {
  font-size: 18px;
  color: #1f93ff;
}
</style>
<script>
import EmojiDialog from './VueEmojiDialog.vue'

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
    }
  }
}
</script>
