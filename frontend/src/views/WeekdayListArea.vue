<template>
  <ul :class="{ img_list: $route.name === 'weekdayList' }">
    <li v-for="webtoon in webtoons" :key="webtoon.id">
      <slot :webtoon="webtoon"></slot>
    </li>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { useStore } from "@/store";
import { Weekday } from "@/types/webtoon";

export default defineComponent({
  props: {
    week: {
      type: String as PropType<Weekday>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    return {
      webtoons: computed(() => store.state.webtoon.allWebtoons[props.week]),
    };
  },
});
</script>

<style></style>
