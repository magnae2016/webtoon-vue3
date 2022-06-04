<template>
  <div id="container">
    <div id="content" class="webtoon">
      <router-view></router-view>
    </div>
    <webtoon-aside />
  </div>
</template>

<script lang="ts">
import WebtoonAside from "./aside/index.vue";
export default {
  components: { WebtoonAside },
};
</script>

<style></style>
