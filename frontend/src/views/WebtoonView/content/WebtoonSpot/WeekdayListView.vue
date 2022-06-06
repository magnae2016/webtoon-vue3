<template>
  <div class="webtoon_spot">
    <subTitle
      >{{ titleText }} 추천 웹툰
      <template v-slot:TODAY><span>TODAY : 2022.06.05</span></template>
    </subTitle>
    <ul>
      <li v-for="item in items" :key="item.randId">
        <div class="thumb">
          <a href="#" :title="item.titleName"
            ><img
              src="https://shared-comic.pstatic.net/thumb/webtoon/794671/thumbnail/thumbnail_IMAG04_39a756a1-3a29-41c7-815c-731a886d240e.jpg"
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
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import SubTitle from "@/components/ui/SubTitle.vue";
import { Weekday } from "@/types/webtoon";

export default defineComponent({
  components: { SubTitle },
  setup() {
    const store = useStore();
    const route = useRoute();

    const weekdayTitleText = {
      mon: "월요",
      tue: "화요",
      wed: "수요",
      thu: "목요",
      fri: "금요",
      sat: "토요",
      sun: "일요",
    };

    const routeWeek = computed(() => route.query.week);
    const titleText = computed(
      () => weekdayTitleText[routeWeek.value as Weekday]
    );

    return {
      items: computed(() => store.state.webtoon.weekdayRecommendWebtoon),
      titleText,
    };
  },
});
</script>

<style></style>
