<template>
  <div>
    <header>
      <div class="header-logo">
        <a href="http://www.ycombinator.com"><img src="https://news.ycombinator.com/y18.gif"></a>
        <h1><a href="/">Hacker News</a></h1>
      </div>
      <div class="header-description">
        <span>Built with Vue.js</span>
        |
        <a href="#">Source</a></h1>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  @import './assets//sass/global';
  @import './assets/sass/utils/flexbox';
  @import './assets/sass/utils/variables';
  
  header {
    @include flexbox();
    @include justify-content(space-between);
    @include align-items(center);
    background-color: $orange;
    padding: 3px 5px;
    a {
      color: $black;
    }
    .header-logo {
      @include flexbox();
      @include align-items(center);
      & > a {
        width: 20px;
        height: 20px;
        margin: 2px;
        border: 1px solid $white;
      }
      h1 {
        margin: 0;
        font-size: 1rem;
        a {
          font-weight: 700;
        }
      }
    }
    .header-description {
      color: $white;
      a {
        color: $white;
      }
    }
  }
</style>
