<template>
  <div class="asideBox">
    <h4 class="asideBoxTitle">
      <img
        src="https://ssl.pstatic.net/static/comic/images/migration/common/subtlt_r_best_v2.gif"
        title="인기급상승웹툰"
        alt="인기급상승웹툰"
        width="78"
        height="11"
      />
    </h4>
    <div>
      <ul class="asideBoxTab">
        <li
          id="realTimeRankChoiceTabFavorite"
          :class="{ choice: activeTab === Tabs.Favorite }"
        >
          <a
            id="realTimeRankChoiceTabFavoriteClick"
            href="#"
            @click.prevent="activeTab = Tabs.Favorite"
            ><img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_favor.gif"
              title="인기순"
              alt="인기순"
              width="31"
              height="12"
          /></a>
        </li>
        <li
          id="realTimeRankChoiceTabUpdate"
          :class="{ choice: activeTab === Tabs.Update }"
        >
          <a
            id="realTimeRankChoiceTabUpdateClick"
            href="#"
            @click.prevent="activeTab = Tabs.Update"
            ><img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_update.gif"
              title="업데이트순"
              alt="업데이트순"
              width="52"
              height="12"
          /></a>
        </li>
      </ul>
      <h3 id="realTimeRankBlindName" class="blind">인기순</h3>
      <ol id="realTimeRankFavorite" class="asideBoxRank">
        <li class="rank01">
          <a
            href="/webtoon/detail?titleId=792651&amp;no=11"
            title="99강화나무몽둥이-11화. 편돌이였던 내가 어느 날 갑자기 갑부가 된 썰 (1)"
            >99강화나무몽둥이-11화. 편돌이였던 내가 어느 날 갑자기 갑부가 된 썰
            (1)</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
              title="변동없음"
              alt="변동없음"
              width="7"
              height="10"
            />
            0
          </span>
        </li>
        <li class="rank07">
          <a
            href="/webtoon/detail?titleId=774831&amp;no=49"
            title="수희0(tngmlek0)-49화"
            >수희0(tngmlek0)-49화</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_up.gif"
              title="순위상승"
              alt="순위상승"
              width="7"
              height="10"
            />1
          </span>
        </li>
        <li class="rank08">
          <a
            href="/webtoon/detail?titleId=783051&amp;no=31"
            title="존망코인-31화 넣었어..?"
            >존망코인-31화 넣었어..?</a
          >
          <span class="rankBox">
            <img
              src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_down.gif"
              title="순위하락"
              alt="순위하락"
              width="7"
              height="10"
            />1
          </span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store";
import RankListItem from "./RankListItem.vue";
import ArrowIcon from "@/components/ui/ArrowIcon.vue";
import { ArrowType, RealTimeRankChoiceItem } from "@/types/webtoon";

enum Tabs {
  Favorite = "favorite",
  Update = "update",
}

export default defineComponent({
  components: { RankListItem, ArrowIcon },
  setup() {
    const store = useStore();
    store.dispatch("webtoon/getRealTimeRankChoice");

    const activeTab = ref<Tabs>(Tabs.Favorite);
    const getArrowTypeByChangeRank = (
      item: RealTimeRankChoiceItem
    ): ArrowType => {
      const diff = item.rank - item.beforeRank;
      if (diff > 0) return ArrowType.arrow_up;
      else if (diff < 0) return ArrowType.arrow_down;
      else return ArrowType.arrow_no;
    };

    const rankList = computed(() =>
      activeTab.value === Tabs.Favorite
        ? store.state.webtoon.realTimeRankChoice.user
        : store.state.webtoon.realTimeRankChoice.update
    );

    return {
      Tabs,
      ArrowType,
      activeTab,
      rankList,
      getArrowType: getArrowTypeByChangeRank,
    };
  },
});
</script>

<style></style>
