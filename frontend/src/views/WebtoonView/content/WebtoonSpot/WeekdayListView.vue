<template>
  <div>
    <div class="webtoon_spot">
      <subTitle
        >일요 추천 웹툰
        <template v-slot:TODAY><span>TODAY : 2022.06.05</span></template>
      </subTitle>
      <ul>
        <li>
          <div class="thumb">
            <a
              href="/webtoon/detail?titleId=776092&amp;no=49&amp;weekday=sun"
              title="어느날 갑자기 서울은"
              ><img
                src="https://shared-comic.pstatic.net/thumb/webtoon/776092/thumbnail/thumbnail_IMAG04_96f47e9d-9811-4917-b973-e75704372975.jpg"
                title="어느날 갑자기 서울은"
                alt="어느날 갑자기 서울은"
                width="218"
                height="120"
              />
              <span class="mask"></span>
            </a>
          </div>
          <dl>
            <dt>
              <a href="/webtoon/list?titleId=776092&amp;weekday=sun"
                ><strong title="어느날 갑자기 서울은"
                  >어느날 갑자기 서울은</strong
                >
              </a>
            </dt>
            <dd class="desc">
              <a
                onclick="nclk_v2(event,'pop.num','776092','1')"
                href="/webtoon/detail?titleId=776092&amp;no=49&amp;weekday=sun"
                class="subtitle"
                title="49화"
              >
                49화
              </a>
              <p>
                <a
                  href="#"
                  onclick="return artistAction.viewArtist('776092', this);"
                  class="author"
                  title="박창근"
                >
                  박창근</a
                >
              </p>
            </dd>
            <dd>
              <div class="rating_type2">
                <span class="star"><em style="width: 99.44%">평점</em></span>
                <strong>9.94</strong>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
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
