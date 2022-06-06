<template>
  <div>GenreView</div>
  <p>{{ $route.query.genre }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "GenreView",
});
</script>

<style></style>
