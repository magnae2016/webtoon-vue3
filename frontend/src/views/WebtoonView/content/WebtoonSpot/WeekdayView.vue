<template>
  <div class="webtoon_spot2">
    <subTitle>이달의 신규 웹툰</subTitle>
    <ul>
      <li v-for="item in items" :key="item.randId">
        <div class="thumb7">
          <a href="#">
            <img
              src="https://shared-comic.pstatic.net/thumb/webtoon/794423/thumbnail/thumbnail_IMAG04_da93d1ce-b945-4858-935f-293b7b6e594b.jpg"
              width="218"
              height="120"
              :alt="item.titleName"
              :title="item.titleName"
            />
            <span class="mask"></span>
          </a>
          <span v-if="item.newYN === 'Y'" class="ico_new2">NEW</span>
        </div>
        <a href="#">
          <strong :title="item.titleName">{{ item.titleName }}</strong>
        </a>
        <p class="author2">
          <a href="#" :title="item.writer">{{ item.writer }}</a>
        </p>
        <p>{{ item.copy }}</p>
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
      items: computed(() => store.state.webtoon.monthNewWebtoon),
    };
  },
});
</script>

<style></style>
