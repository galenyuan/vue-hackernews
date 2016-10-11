<template>
	<section class="news">
		<news-item v-for="(news, index) in newsList" :news="news" :index="formatItemIndex(index)"></news-item>
	</section>
</template>

<script>
	import NewsItem from './NewsItem'

	export default {
		props: ['page'],

		computed: {
			newsList () {
				return this.$store.state.news
			},
			itemsPerPage () {
				return this.$store.state.itemsPerPage
			}
		},

		methods: {
	    formatItemIndex (index) {
	      return (this.page - 1) * this.itemsPerPage + index + 1
	    }
	  },

		components: {
			NewsItem
		}
	}
</script>

<style lang="scss">
	@import '../assets/sass/utils/variables';

	.news {
		background-color: $backgroundColor;
		padding: 10px;
	}
</style>