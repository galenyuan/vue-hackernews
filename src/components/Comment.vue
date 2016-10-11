<template>
  <li v-show="comment.text">
    <div class="comhead subtext">
      <a href="javascript:;" class="toggle" @click="open = !open">{{open ? '[-]' : '[+]'}}</a>
      <router-link :to="{ name: 'user', params: { id: comment.by } }">{{comment.by}}</router-link>
      {{comment.time | fromNow}} ago
    </div>
    <p class="comment-content" v-show="open" v-html="comment.text">
    </p>
    <ul class="child-comments" v-if="comment.kids" v-show="open">
      <comment v-for="childComment in childComments" v-if="!childComment.deleted && !childComment.dead" :comment="childComment"></comment>
    </ul>
  </li>
</template>

<script>
import { fetchNewsList } from '../services/News'

export default {
  name: 'Comment',
  props: ['comment'],
  data () {
    return {
      childComments: [],
      open: true
    }
  },
  created () {
    fetchNewsList(this.comment.kids).then((comments) => {
      this.childComments = comments
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/sass/utils/variables";
  .comhead {
    margin-bottom: 10px;
    .toggle {
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .comment-content {
    margin-left: 20px;
  }
  .child-comments {
    padding-left: 15px;
  }
</style>