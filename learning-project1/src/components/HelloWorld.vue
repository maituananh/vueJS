<template>
  <div class="hello">
    <!-- <button v-on:click="title = 'tôi đã thay đổi title'">Change Title</button> -->

    <comp-header
      v-bind:title="title"
      v-on:changeTitleFromHeader="changeTitle"
    />

    <!-- <category v-bind:categories="categories" /> -->

    <h3>DEMO REF</h3>
    <ref />

    <h3>DEMO SLOT</h3>
    <button v-on:click='clickTab(1)'>home</button>
    <button v-on:click='clickTab(2)'>about</button>
    <button v-on:click='clickTab(3)'>contract</button>

    <comp-slot>
      <div v-if="displayTab === 1">đây là trang home</div>
      <div v-if="displayTab === 2">đây là trang about</div>
      <div v-if="displayTab === 3">đây là trang contract</div>
    </comp-slot>
  </div>
</template>

<script>
import CompHeader from "./Comp-Header.vue";
import Category from "./Category.vue";
import Ref from "./Ref.vue";
import CompSlot from "./Slot.vue";

export default {
  name: "hello",
  data() {
    return {
      title: "đây là title",
      displayTab: 1,
      categories: [
        { id: 1, name: "category 1" },
        { id: 2, name: "category 2" },
        { id: 3, name: "category 3" },
        { id: 4, name: "category 4" },
        { id: 5, name: "category 5" },
        { id: 6, name: "category 6" },
        { id: 7, name: "category 7" },
      ],
    };
  },
  components: {
    CompHeader,
    Category,
    Ref,
    CompSlot,
  },
  methods: {
    changeTitle(data) {
      console.log(data);
      this.title = data.title1;
    },
    clickTab(index) {
      console.log(index);
      this.displayTab = index;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
