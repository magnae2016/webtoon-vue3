<template>
  <img
    v-if="type === ArrowType.arrow_up"
    src="@/assets/arrow_up.gif"
    :title="title"
    :alt="title"
    width="7"
    height="10"
  />
  <img
    v-else-if="type === ArrowType.arrow_down"
    src="@/assets/arrow_down.gif"
    :title="title"
    :alt="title"
    width="7"
    height="10"
  />
  <img
    v-else
    src="@/assets/arrow_no.gif"
    :title="title"
    :alt="title"
    width="7"
    height="10"
  />
</template>

<script lang="ts">
import { ArrowType } from "@/types/webtoon";
import { defineComponent } from "vue";

export default defineComponent({
  props: ["type"],
  setup(props) {
    return {
      ArrowType,
      title: props.type,
    };
  },
});
</script>
