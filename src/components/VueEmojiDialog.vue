<template>
  <div role="dialog" class="emoji-dialog emoji--top-right">
    <ul class="emoji-dialog-header" role="menu">
      <li
        v-bind:class="{ 'active': selectedKey === category.key }"
        v-for="category in categoryList"
        @click="changeCategory(category)"
        v-bind:key="category.key"
      >
        <div
          @click="changeCategory(category)"
          role="menuitem"
          class="emojione"
          v-html="getEmojiUnicode(`:${category.emoji}:`)"
        />
      </li>
    </ul>
    <div class="emoji-row">
      <h5 class="emoji-category-title">{{selectedKey}}</h5>
      <div
        v-for="(emoji, key) in selectedEmojis"
        role="menuitem"
        :class="`emojione`"
        v-html="getEmojiUnicode(emoji[emoji.length - 1].shortname)"
        v-if="filterEmoji(emoji[emoji.length - 1].shortname)"
        v-bind:key="key"
        @click="onClick(emoji[emoji.length - 1])"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import './styles/main.scss';
</style>

<script>
import emojiMap from 'emojione/emoji.json';
import { getEmojiUnicode, categoryList } from '../utils/index.js';

export default {
  props: ['dialogPosition', 'onClick'],
  data() {
    return {
      selectedKey: 'people',
      categoryList,
      selectedEmojis: [],
    };
  },
  computed: {
    emojis() {
      const keys = Object.keys(emojiMap);
      return keys.reduce((map, key) => {
        const value = emojiMap[key];
        const { category } = value;
        // Skip if category is modifier
        if (category !== 'modifier') {
          if (!map[category]) {
            map[category] = {};
          }
          map[value.category][key] = [value];
        }
        return map;
      }, {});
    },
  },
  // On mount render initial emoji
  mounted() {
    this.getInitialEmoji();
  },
  methods: {

    // Change category and associated emojis
    changeCategory(category) {
      this.selectedKey = category.key;
      this.selectedEmojis = this.emojis[this.selectedKey];
    },

    // Filter non-existant or irregular unicode characters
    filterEmoji(shortName) {
      return shortName !== ':relaxed:' && shortName !== ':frowning2:';
    },
    // Get inital emojis
    getInitialEmoji() {
      this.selectedEmojis = this.emojis.people;
    },
    getEmojiUnicode,
  },
};
</script>
