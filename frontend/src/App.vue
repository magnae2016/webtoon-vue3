<template>
  <div id="wrap">
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import AppHeader from "@/components/layout/AppHeader.vue";

export default defineComponent({
  components: { AppHeader },
  setup() {
    const store = useStore();
    console.log(store.state.count);
    console.log(store.state.webtoon.all.length);
  },
});
</script>

<style>
@import "@/assets/comic.css";
</style>
