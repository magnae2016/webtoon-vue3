<template>
  <ul class="category_tab">
    <router-link
      to="/webtoon/weekday"
      custom
      v-slot="{ href, navigate, isExactActive }"
    >
      <li :class="[isExactActive && 'on']">
        <a :href="href" @click="navigate">요일전체</a>
      </li>
    </router-link>
    <router-link
      to="/webtoon/weekdayList?week=mon"
      custom
      v-slot="{ href, navigate }"
    >
      <li :class="[$route.query.week === 'mon' && 'on']">
        <a :href="href" @click="navigate">월요웹툰</a>
      </li>
    </router-link>
    <router-link
      to="/webtoon/weekdayList?week=tue"
      custom
      v-slot="{ href, navigate }"
    >
      <li :class="[$route.query.week === 'tue' && 'on']">
        <a :href="href" @click="navigate">화요웹툰</a>
      </li>
    </router-link>
    <router-link
      to="/webtoon/weekdayList?week=wed"
      custom
      v-slot="{ href, navigate }"
    >
      <li :class="[$route.query.week === 'wed' && 'on']">
        <a :href="href" @click="navigate">수요웹툰</a>
      </li>
    </router-link>
    <router-link
      to="/webtoon/weekdayList?week=thu"
      custom
      v-slot="{ href, navigate }"
    >
      <li :class="[$route.query.week === 'thu' && 'on']">
        <a :href="href" @click="navigate">목요웹툰</a>
      </li>
    </router-link>
    <router-link
      to="/webtoon/weekdayList?week=fri"
      custom
      v-slot="{ href, navigate }"
    >
      <li :class="[$route.query.week === 'fri' && 'on']">
        <a :href="href" @click="navigate">금요웹툰</a>
      </li>
    </router-link>
    <router-link
      to="/webtoon/weekdayList?week=sat"
      custom
      v-slot="{ href, navigate }"
    >
      <li :class="[$route.query.week === 'sat' && 'on']">
        <a :href="href" @click="navigate">토요웹툰</a>
      </li>
    </router-link>
    <router-link
      to="/webtoon/weekdayList?week=sun"
      custom
      v-slot="{ href, navigate }"
    >
      <li :class="[$route.query.week === 'sun' && 'on']">
        <a :href="href" @click="navigate">일요웹툰</a>
      </li>
    </router-link>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style></style>
