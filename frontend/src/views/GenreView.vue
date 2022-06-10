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
    const genreTitleText: { [key in Genres]: string } = {
      episode: "에피소드",
      omnibus: "옴니버스",
      story: "스토리",
      daily: "일상",
      comic: "개그",
      fantasy: "판타지",
      action: "액션",
      drama: "드라마",
      pure: "순정",
      sensibility: "감성",
      thrill: "스릴러",
      historical: "무협/사극",
      sports: "스포츠",
    };

    return {
      webtoonsByGenre: computed(
        () => store.state.webtoon.webtoonsByGenre[genre.value as Genres]
      ),
      Genres,
      genre,
      titleText: computed(() => genreTitleText[genre.value as Genres]),
    };
  },
});
</script>

<style></style>
