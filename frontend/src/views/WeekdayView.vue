<template>
  <div class="view_type">
    <sub-title>요일별 전체 웹툰</sub-title>
    <ul class="sortby">
      <li class="sel">
        <a href=""><span class="Ntxt_popular">인기순</span></a>
      </li>
      <li>
        <a href=""><span class="Ntxt_update">업데이트순</span></a>
      </li>
      <li>
        <a href=""><span class="Ntxt_count">조회순</span></a>
      </li>
      <li>
        <a href=""><span class="Ntxt_star_rate">별점순</span></a>
      </li>
    </ul>
  </div>
  <div class="list_area daily_all">
    <div class="col col_selected">
      <div class="col_inner">
        <h4 class="mon"><span>월요 웹툰</span></h4>
        <ul>
          <li>
            <div class="thumb">
              <a href="#">
                <img
                  src="https://shared-comic.pstatic.net/thumb/webtoon/758037/thumbnail/thumbnail_IMAG10_a2297504-4912-4c7e-a5a8-524d6fc77103.jpg"
                  width="83"
                  height="90"
                  title="참교육"
                  alt="참교육"
                /><span class="mask"></span>
                <em class="ico_updt"></em>
              </a>
            </div>
            <a href="#" class="title" title="참교육">참교육</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="col_inner">
        <h4 class="tue"><span>화요 웹툰</span></h4>
        <ul>
          <li>
            <div class="thumb">
              <a href="#">
                <img
                  src="https://shared-comic.pstatic.net/thumb/webtoon/783053/thumbnail/thumbnail_IMAG10_7e1a48d2-11e0-4455-a668-fff349d8b3f3.jpg"
                  width="83"
                  height="90"
                  title="김부장"
                  alt="김부장"
                /><span class="mask"></span>
                <em class="ico_updt"></em>
              </a>
            </div>
            <a href="#" class="title" title="김부장">김부장</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="col_inner">
        <h4 class="wed"><span>수요 웹툰</span></h4>
        <ul>
          <li>
            <div class="thumb">
              <a href="#">
                <img
                  src="https://shared-comic.pstatic.net/thumb/webtoon/769209/thumbnail/thumbnail_IMAG10_13ff2e28-686a-42de-890e-9289550978bc.jpg"
                  width="83"
                  height="90"
                  title="화산귀환"
                  alt="화산귀환"
                /><span class="mask"></span>
              </a>
            </div>
            <a href="#" class="title" title="화산귀환">화산귀환</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="col_inner">
        <h4 class="thu"><span>목요 웹툰</span></h4>
        <ul>
          <li>
            <div class="thumb">
              <a href="#">
                <img
                  src="https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG10_becd3e24-cc09-4243-a1c9-646270f4a8db.jpg"
                  width="83"
                  height="90"
                  title="독립일기"
                  alt="독립일기"
                /><span class="mask"></span>
                <span class="ico_cut">컷툰</span>
              </a>
            </div>
            <a href="#" class="title" title="독립일기">독립일기</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="col_inner">
        <h4 class="fri"><span>금요 웹툰</span></h4>
        <ul>
          <li>
            <div class="thumb">
              <a href="#">
                <img
                  src="https://shared-comic.pstatic.net/thumb/webtoon/641253/thumbnail/thumbnail_IMAG10_d4d1a799-d193-4e5a-9b46-6dffcead862a.jpg"
                  width="83"
                  height="90"
                  title="외모지상주의"
                  alt="외모지상주의"
                /><span class="mask"></span>
              </a>
            </div>
            <a href="#" class="title" title="외모지상주의">외모지상주의</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="col_inner">
        <h4 class="sat"><span>토요 웹툰</span></h4>
        <ul>
          <li>
            <div class="thumb">
              <a href="#">
                <img
                  src="https://shared-comic.pstatic.net/thumb/webtoon/792651/thumbnail/thumbnail_IMAG10_8c733a14-32cb-4350-8ec5-231e713cdf42.jpg"
                  width="83"
                  height="90"
                  title="99강화나무몽둥이"
                  alt="99강화나무몽둥이"
                /><span class="mask"></span>
              </a>
            </div>
            <a href="#" class="title" title="99강화나무몽둥이"
              >99강화나무몽둥이</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="col">
      <div class="col_inner">
        <h4 class="sun"><span>일요 웹툰</span></h4>
        <ul>
          <li>
            <div class="thumb">
              <a href="#">
                <img
                  src="https://shared-comic.pstatic.net/thumb/webtoon/748105/thumbnail/thumbnail_IMAG10_becd3e24-cc09-4243-a1c9-646270f4a8db.jpg"
                  width="83"
                  height="90"
                  title="독립일기"
                  alt="독립일기"
                /><span class="mask"></span>
                <span class="ico_cut">컷툰</span>
              </a>
            </div>
            <a href="#" class="title" title="독립일기">독립일기</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SubTitle from "@/components/ui/SubTitle.vue";
export default defineComponent({
  name: "WeekdayView",
  components: { SubTitle },
});
</script>

<style></style>
