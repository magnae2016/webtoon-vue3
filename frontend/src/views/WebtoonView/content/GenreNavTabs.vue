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
export default defineComponent({
  components: { NavTabs },
  data() {
    return {
      linkActiveClass: "on",
      routes: [
        {
          to: { name: "genre", query: { genre: "episode" } },
          genre: "episode",
          text: "에피소드",
        },
        {
          to: { name: "genre", query: { genre: "omnibus" } },
          genre: "omnibus",
          text: "옴니버스",
        },
        {
          to: { name: "genre", query: { genre: "story" } },
          genre: "story",
          text: "스토리",
          hasDivider: true,
        },
        {
          to: { name: "genre", query: { genre: "daily" } },
          genre: "daily",
          text: "일상",
        },
        {
          to: { name: "genre", query: { genre: "comic" } },
          genre: "comic",
          text: "개그",
        },
        {
          to: { name: "genre", query: { genre: "fantasy" } },
          genre: "fantasy",
          text: "판타지",
        },
        {
          to: { name: "genre", query: { genre: "action" } },
          genre: "action",
          text: "액션",
        },
        {
          to: { name: "genre", query: { genre: "drama" } },
          genre: "drama",
          text: "드라마",
        },
        {
          to: { name: "genre", query: { genre: "pure" } },
          genre: "pure",
          text: "순정",
        },
        {
          to: { name: "genre", query: { genre: "sensibility" } },
          genre: "sensibility",
          text: "감성",
        },
        {
          to: { name: "genre", query: { genre: "thrill" } },
          genre: "thrill",
          text: "스릴러",
        },
        {
          to: { name: "genre", query: { genre: "historical" } },
          genre: "historical",
          text: "무협/사극",
        },
        {
          to: { name: "genre", query: { genre: "sports" } },
          genre: "sports",
          text: "스포츠",
        },
      ],
    };
  },
  setup() {
    const route = useRoute();
    const genre = computed(() => route.query.genre || "episode");

    return { genre };
  },
});
</script>

<style></style>
