<template>
	<section class="comments">
		<div class="news-info">
			<a :href="news.url">{{news.title}}</a><span class="news-domain">({{news.url | domain}})</span>
			<p class="subtext">{{news.score}} points by <router-link :to="{ name:'user', params: { id: news.by } }">{{news.by}}</router-link> {{news.time | fromNow}} ago | {{news.descendants}} comments</p>
		</div>
		<ul class="comments-list">
			<comment v-for="comment in comments" v-if="!comment.deleted && !comment.dead" track-by="id" :comment="comment"></comment>
		</ul>
	</section>
</template>

<script>
	import Comment from '../components/Comment'
	import { fetchNews, fetchNewsList } from '../services/News'

	export default {
		data () {
			return {
				news: {},
				comments: [],
				open: true
			}
		},
		created () {
			fetchNews(this.$route.params.id).then((news) => {
				Object.assign(this.news, news)
				fetchNewsList(news.kids).then((comments) => {
					this.comments = comments
				})
			})
		},
		methods: {
			toggleComment (comment) {
				this.open = !this.open
			}
		},
		components: {
			Comment
		}
	}
</script>

<style lang="scss">
	@import '../assets/sass/utils/variables';

	.comments {
		padding: 10px;
		background-color: $backgroundColor;
		.news-info {
			a {
				color: $black;
			}
		}
		ul {
			list-style: none;
			padding: 0;
			&.comments-list {
				margin-top: 40px;
			}
		}
	}
</style>