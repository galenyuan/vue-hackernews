<template>
  <div class="news-list">
    <news></news>
    <a href="javascript:;" @click="next">Next</a>
  </div>
</template>

<script>
import { fetchNewsIdList } from '../services/News'
import News from '../components/News'

export default {
  data () {
    return {
      msg: 'Home Page'
    }
  },

  created () {
  	this.$store.dispatch('FETCH_ID_DATA', () => {
      this.$store.dispatch('FETCH_ACTIVE_NEWS')
    })
  },

  computed: {
    currentPage () {
      return this.$store.state.currentPage
    }
  },

  watch: {
    currentPage (val) {
      this.$store.dispatch('FETCH_ACTIVE_NEWS')
    }
  },

  methods: {
    next () {
      this.$store.dispatch('GO_TO_PAGE', this.currentPage + 1)
    }
  },

  components: {
    News
  }
}
</script>

<style lang="scss">
</style>
