<template>
  <div id="app">
    <!-- <button v-on:click="getData">GetData</button> -->
    <div class="container-fluid-half">
      <div class="col-12 m-lr-a">
        <div class="tab" v-for="item in posts" :key="item.index">
          <a class="a-link" href="#">{{ item.title }}</a>
          <div class="a-body">{{ item.body }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default {
  name: 'app',
  data () {
    return {
      posts: []
    }
  },
  created () {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data)
        this.posts = response.data

      })
      console.log(this.posts)
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  transition: all .2s;
}

#app {
  display: flex;
}

.m-lr-a {
  margin-left: auto;
  margin-right: auto;
}

.t-a-center {
  text-align: center
}

/* flex-box grid classes */

.col-12 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 12);
}

.col-11 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 11)
}

.col-10 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 10);
}

.col-9 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 9);
}

.col-8 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 8);
}

.col-7 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 7);
}

.col-6 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 6);
}

.col-5 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 5);
}

.col-4 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 4);
}

.col-3 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 3);
}

.col-2 {
  margin: 2.5px;
  flex-basis: calc(8.3333333333% * 2);
}

.col-1 {
  margin: 2.5px;
  flex-basis: 8,5%;
}

.tab {
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  padding: 10px;
  font-size: 20px;
  white-space: nowrap;
  margin-bottom: 5px;
}

/* Containers classes */

.container {
  padding: 5px;
  flex-basis: 100%;
  display: flex;
}

.container-fluid {
  padding: 5px;
  display: flex;
  flex-basis: 50%;
  margin-left: auto;
  margin-right: auto;
}

.container-fluid-half {
  padding: 5px;
  display: flex;
  flex-basis: 75%;
  margin-left: auto;
  margin-right: auto;
}

.a-link {
  text-decoration: none;
  color: #232323
}

.a-link:hover {
  text-decoration: underline;
  color: #4171b8
}

.a-body {
  width: 80%;
  margin: 5px;
  margin-top: 20px;
  padding: 5px;
  white-space: normal;
  border-left: 2px solid #aaaaaa
}

@media screen and (orientation: portrait) {

  .container-fluid-half, .container-fluid {
    display: flex;
    flex-basis: 100%;
  }

  .tab {
    font-size: 40px;
  }
}


</style>
