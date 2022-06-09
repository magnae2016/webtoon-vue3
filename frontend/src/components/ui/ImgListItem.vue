<template>
  <div class="thumb">
    <a href="#" :title="webtoon.titleName">
      <img
        :src="`https://shared-comic.pstatic.net/thumb/webtoon/${webtoon.titleId}/thumbnail/${webtoon.thumbnailFilename}`"
        width="83"
        height="90"
        :title="webtoon.titleName"
        :alt="webtoon.titleName"
      />
      <span class="mask"></span>
    </a>
  </div>
  <dl>
    <dt>
      <a href="#" :title="webtoon.titleName">{{ webtoon.titleName }}</a>
    </dt>
    <dd class="desc">
      <a href="#">{{ webtoon.writer }}</a>
    </dd>
    <dd>
      <div class="rating_type">
        <span class="star"
          ><em :style="`width: ${webtoon.starscoreToPercent}%`">평점</em></span
        >
        <strong>{{ webtoon.starscoreViewFormat }}</strong>
      </div>
    </dd>
    <dd class="more"><a href="#">전체보기</a></dd>
  </dl>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["webtoon"],
});
</script>

<style></style>
