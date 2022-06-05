<template>
  <li :class="`rank${String(item.rank).padStart(2, '0')}`">
    <a
      href="/webtoon/detail?titleId={{ item.titleId }}&amp;no=11"
      :title="`${item.titleName}-${item.subtitle}`"
      >{{ item.titleName }}-{{ item.subtitle }}</a
    >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { RealTimeRankChoiceItem } from "@/types/webtoon";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<RealTimeRankChoiceItem>,
      required: true,
    },
  },
});
</script>

<style scoped>
ol.asideBoxRank li {
  padding-right: 65px;
}
</style>
