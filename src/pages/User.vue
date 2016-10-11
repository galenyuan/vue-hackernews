<template>
	<section class="user">
		<ul>
			<li>user: {{user.id}}</li>
			<li>created: {{user.created | fromNow}} ago</li>
			<li>karma: {{user.karma}}</li>
			<li>
				<p>about: </p>
				<div v-html="user.about"></div>
			</li>
		</ul>
		<a :href="'https://news.ycombinator.com/submitted?id=' + user.id" target="_blank">submissions</a>
		<a :href="'https://news.ycombinator.com/threads?id=' + user.id" target="_blank">comments</a>
	</section>
</template>

<script>
	import { fetchUser } from '../services/User'

	export default {
		data () {
			return {
				user: {
					about: '',
					created: '',
					id: '',
					karma: '',
					submitted: []
				}
			}
		},
		created () {
			fetchUser(this.$route.params.id).then((user) => {
				Object.assign(this.user, user)
			})
		}
	}
</script>

<style lang="scss">
	@import '../assets/sass/utils/variables';

	.user {
		padding: 10px;
		color: $greyFontColor;
		background-color: $backgroundColor;
		ul {
			padding: 0;
			list-style: none;
			li {
				margin: 1em 0;
			}
		}
		a {
			display: block;
			color: $black;
			text-decoration: underline;
		}
	}
</style>