<template>
  <div id="app-comment">
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
  name: 'app-comment',
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