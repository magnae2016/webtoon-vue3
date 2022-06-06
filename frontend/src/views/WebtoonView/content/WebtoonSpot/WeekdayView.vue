<template>
  <div class="webtoon_spot2">
    <subTitle>이달의 신규 웹툰</subTitle>
    <ul>
      <li v-for="item in items" :key="item.randId">
        <div class="thumb7">
          <a href="#">
            <img
              src="https://shared-comic.pstatic.net/thumb/webtoon/794161/thumbnail/thumbnail_IMAG04_3a84d478-d17f-46f6-844b-f7faaadb1675.jpg"
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
        <span
          v-if="item.webtoonViewerType === WebtoonViewerType.CUTTOON"
          class="ico_cut"
          >컷툰</span
        >
        <p class="author2">
          <a href="#" :title="item.writer">{{ item.writer }}</a>
        </p>
        <p>{{ makeEllipsis(item.copy) }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import SubTitle from "@/components/ui/SubTitle.vue";
import { WebtoonViewerType } from "@/types/webtoon";

export default defineComponent({
  components: { SubTitle },
  setup() {
    const store = useStore();
    const makeEllipsis = (copy: string) => {
      const MAX_LENGTH = 40;
      const split: string[] = copy.split(" ");
      const chars: string[] = [];
      let len = 0;

      while (len < MAX_LENGTH) {
        const char = split.shift();
        if (!char) break;
        len += char.length;
        len += 1;
        chars.push(char);

        if (len >= MAX_LENGTH) {
          chars.push("...");
          break;
        }
      }
      return chars.join(" ");
    };

    return {
      items: computed(() => store.state.webtoon.monthNewWebtoon),
      makeEllipsis,
      WebtoonViewerType,
    };
  },
});
</script>

<style></style>
