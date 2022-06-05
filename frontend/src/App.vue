<template>
  <div id="wrap">
    {{ realTimeRankChoiceFavorite }}
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import AppHeader from "@/components/layout/AppHeader.vue";

export default defineComponent({
  components: { AppHeader },
  setup() {
    const store = useStore();

    store.dispatch("webtoon/getRealTimeRankChoiceFavorite");

    return {
      realTimeRankChoiceFavorite: computed(
        () => store.state.webtoon.realTimeRankChoiceFavorite
      ),
    };
  },
});
</script>

<style>
@import "@/assets/comic.css";
</style>
