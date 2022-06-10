<template>
  <div class="view_type">
    <sub-title
      >{{ titleText }} 웹툰<em>총 {{ webtoonsByGenre.length }}</em></sub-title
    >
    <ul class="listby">
      <li class="on">
        <a href="#" class="thumb"
          ><img
            src="https://ssl.pstatic.net/static/comic/images/migration/webtoon/b.gif"
            width="19"
            height="19"
            title="썸네일형"
            alt="썸네일형"
        /></a>
      </li>
      <li class="last">
        <a href="#" class="list"
          ><img
            src="https://ssl.pstatic.net/static/comic/images/migration/webtoon/b.gif"
            width="19"
            height="19"
            title="리스트형"
            alt="리스트형"
        /></a>
      </li>
    </ul>
    <ul class="sortby">
      <li class="sel">
        <a href="#"><span class="Ntxt_popular">인기순</span></a>
      </li>
      <li>
        <a href="#"><span class="Ntxt_update">업데이트순</span></a>
      </li>
      <li>
        <a href="#"><span class="Ntxt_count">조회순</span></a>
      </li>
      <li>
        <a href="#"><span class="Ntxt_star_rate">별점순</span></a>
      </li>
    </ul>
  </div>
  <div class="list_area">
    <ul class="img_list">
      <li v-for="webtoon in webtoonsByGenre" :key="webtoon.id">
        <img-list-item :webtoon="webtoon"></img-list-item>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import SubTitle from "@/components/ui/SubTitle.vue";
import ImgListItem from "@/components/ui/ImgListItem.vue";
import { Genres } from "@/types/webtoon";

export default defineComponent({
  name: "GenreView",
  components: { SubTitle, ImgListItem },
  setup() {
    const store = useStore();
    const route = useRoute();

    const genre = computed(() => route.query.genre || "episode");

    return {
      webtoonsByGenre: computed(
        () =>
          store.state.webtoon.webtoonsByGenre[
            genre.value as keyof typeof Genres
          ]
      ),
      Genres,
      genre,
      titleText: computed(() => Genres[genre.value as keyof typeof Genres]),
    };
  },
});
</script>

<style></style>
