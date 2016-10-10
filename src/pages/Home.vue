<template>
  <div class="news-list">
    
  </div>
</template>

<script>
import { fetchNewsIdList } from '../services/News'

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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
