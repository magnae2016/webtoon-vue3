<template>
  <div class="webtoon_spot">
    <subTitle
      >일요 추천 웹툰
      <template v-slot:TODAY><span>TODAY : 2022.06.05</span></template>
    </subTitle>
    <ul>
      <li v-for="item in items" :key="item.randId">
        <div class="thumb">
          <a href="#" :title="item.titleName"
            ><img
              src="https://shared-comic.pstatic.net/thumb/webtoon/776092/thumbnail/thumbnail_IMAG04_96f47e9d-9811-4917-b973-e75704372975.jpg"
              :title="item.titleName"
              :alt="item.titleName"
              width="218"
              height="120"
            />
            <span class="mask"></span>
          </a>
        </div>
        <dl>
          <dt>
            <a href="#"
              ><strong :title="item.titleName">{{ item.titleName }}</strong>
            </a>
          </dt>
          <dd class="desc">
            <a href="#" class="subtitle" title="49화"> 49화 </a>
            <p>
              <a href="#" class="author" :title="item.writer">
                {{ item.writer }}</a
              >
            </p>
          </dd>
          <dd>
            <div class="rating_type2">
              <span class="star"
                ><em :style="`width: ${item.starscoreToPercent}%`"
                  >평점</em
                ></span
              >
              <strong>{{ item.starscoreViewFormat }}</strong>
            </div>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import SubTitle from "@/components/ui/SubTitle.vue";

export default defineComponent({
  components: { SubTitle },
  setup() {
    const store = useStore();

    return {
      items: computed(() => store.state.webtoon.weekdayRecommendWebtoon),
    };
  },
});
</script>

<style></style>
