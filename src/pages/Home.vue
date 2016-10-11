<template>
  <div class="news-list">
    <news :page="this.$route.params.page"></news>
    <router-link v-show="$route.params.page > 1" :to="{ name:'news', params: { page: parseInt($route.params.page) - 1 } }">&lt; Prev</router-link>
    <router-link :to="{ name:'news', params: { page: parseInt($route.params.page) + 1 } }">Next &gt;</router-link>
  </div>
</template>

<script>
import { fetchNewsIdList } from '../services/News'
import News from '../components/News'
import store from '../store'

export default {
  created () {
    this.$store.dispatch('FETCH_ID_DATA').then(() => {
      this.$store.dispatch('FETCH_ACTIVE_NEWS', this.$route.params.page)
    })
  },
  watch: {
    '$route.params.page' (val) {
      this.$store.dispatch('FETCH_ACTIVE_NEWS', val)
    }
  },

  components: {
    News
  }
}
</script>

<style lang="scss">
</style>
