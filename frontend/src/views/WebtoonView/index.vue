<template>
  <div id="container">
    <div id="content" class="webtoon">
      <webtoon-content></webtoon-content>
      <router-view></router-view>
    </div>
    <webtoon-aside />
  </div>
</template>

<script lang="ts">
import WebtoonAside from "./aside/index.vue";
import WebtoonContent from "./content/index.vue";
export default {
  components: { WebtoonAside, WebtoonContent },
};
</script>

<style></style>
