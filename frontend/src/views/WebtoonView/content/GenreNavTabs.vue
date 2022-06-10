<template>
  <div class="snb">
    <ul class="spot">
      <nav-tabs :routes="routes">
        <template v-slot="slotProps">
          <li :class="[genre === slotProps.item.genre && linkActiveClass]">
            <a :href="slotProps.href" @click="slotProps.navigate">{{
              slotProps.item.text
            }}</a>
            <span v-if="slotProps.item.hasDivider" class="bar"></span>
          </li>
        </template>
      </nav-tabs>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";
import NavTabs from "@/components/ui/NavTabs.vue";
import { Genres } from "@/types/webtoon";
export default defineComponent({
  components: { NavTabs },
  data() {
    return {
      linkActiveClass: "on",
    };
  },
  setup() {
    const route = useRoute();
    const genre = computed(() => route.query.genre || "episode");
    const routes = [];
    for (const genre in Genres) {
      const text: Genres = Genres[genre as keyof typeof Genres];
      routes.push({
        to: { name: "genre", query: { genre } },
        genre,
        text,
      });
    }

    return { genre, routes };
  },
});
</script>

<style></style>
