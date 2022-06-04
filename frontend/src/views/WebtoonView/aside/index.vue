<template>
  <div id="aside">
    <div class="asideButton upload">
      <router-link
        to="#"
        active-class=""
        exact-active-class=""
        class="Nbtn_upload"
        >웹툰 올리기</router-link
      >
    </div>
    <!-- 배너 -->
    <RightAd />
    <div class="asideRolling">
      <a href="#">
        <img
          src="https://naverwebtoon-phinf.pstatic.net/20220527_238/16536398740631Qhjo_JPEG/upload_7531656900592402652.JPEG?type=p100"
          width="240"
          height="97"
          alt="살인마 죽이기 <사형소년>"
        />
      </a>
    </div>
    <!-- 인기급상승웹툰 -->
    <realTime-rank-choice-tab />
    <!-- //인기급상승웹툰 -->
    <!-- 추천 웹툰 -->
    <recommand-webtoon-rank-tab />
    <!-- //추천 웹툰 -->
    <!-- 공지사항 -->
    <notice-list />
    <!-- //공지사항 -->
    <banner-list />
  </div>
</template>

<script lang="ts">
import RealTimeRankChoiceTab from "./realTimeRankChoiceTab/index.vue";
import RecommandWebtoonRankTab from "./recommandWebtoonRankTab/index.vue";
import NoticeList from "./NoticeList.vue";
import BannerList from "./BannerList.vue";
import RightAd from "./RightAd.vue";
export default {
  components: {
    RealTimeRankChoiceTab,
    RecommandWebtoonRankTab,
    NoticeList,
    BannerList,
    RightAd,
  },
};
</script>
<style></style>
