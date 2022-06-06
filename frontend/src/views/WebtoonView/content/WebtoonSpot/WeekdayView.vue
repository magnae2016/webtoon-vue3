<template>
  <div class="webtoon_spot2">
    <subTitle>이달의 신규 웹툰</subTitle>
    <ul>
      <li>
        <div class="thumb7">
          <a href="/webtoon/detail?titleId=794423&amp;no=6">
            <img
              src="https://shared-comic.pstatic.net/thumb/webtoon/794423/thumbnail/thumbnail_IMAG04_da93d1ce-b945-4858-935f-293b7b6e594b.jpg"
              width="218"
              height="120"
              alt="너의 키스씬"
              title="너의 키스씬"
            />
            <span class="mask"></span>
          </a>
          <span class="ico_new2">NEW</span>
        </div>
        <a
          onclick="nclk_v2(event,'mom.title','794423','1')"
          href="/webtoon/list?titleId=794423"
        >
          <strong title="너의 키스씬">너의 키스씬</strong>
        </a>
        <p class="author2"><a href="#" title="조니조"> 조니조</a></p>
        <p>
          예능작가 이슬, 새로 담당한 예능프로그램에 최애 아이돌인 블록슛 승찬...
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubTitle from "@/components/ui/SubTitle.vue";

export default defineComponent({
  components: { SubTitle },
});
</script>

<style></style>
