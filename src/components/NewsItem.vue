<template>
	<div class="news-item">
		<span class="news-item-index">{{index}}.</span>
		<p>
			<a class="news-item-title" :href="news.url" target="_blank">{{news.title}}</a>
			<span class="news-item-url">({{news.url | domain}})</span>
		</p>
		<p class="subtext">
			{{news.score}} points by <router-link :to="{ name: 'user', params: {id: news.by} }">{{news.by}}</router-link>
			{{news.time | fromNow}} ago | <router-link :to="{ name: 'comments', params: { id: news.id } }">{{news.descendants}} comments</router-link>
		</p>
	</div>
</template>

<script>
	export default {
		props: ['news', 'index']
	}
</script>

<style lang="scss">
	@import '../assets/sass/utils/variables';

	.news-item {
		position: relative;
		padding-left: 40px;
		.news-item-index {
			position: absolute;
			left: 0;
			top: 0;
			width: 30px;
			text-align: right;
		}
		p {
			.news-item-title {
				color: $black;
			}
			.news-item-url {
				color: $greyFontColor;
			}
		}
	}
</style>