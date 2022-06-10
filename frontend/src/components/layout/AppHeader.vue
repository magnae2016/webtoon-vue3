<template>
  <div id="header_wrap">
    <div id="header">
      <div id="gnb" class="">
        <strong class="blind">사용자 링크</strong>
        <ul class="gnb_lst" id="gnb_lst">
          <li
            class="gnb_login_li"
            id="gnb_login_layer"
            style="display: inline-block"
          >
            <router-link to="#" id="gnb_login_button" class="gnb_btn_login"
              ><span class="gnb_bg"></span><span class="gnb_bdr"></span
              ><span class="gnb_txt">로그인</span></router-link
            >
          </li>
          <li
            class="gnb_service_li"
            id="gnb_service_layer"
            style="display: inline-block"
          >
            <router-link to="#" class="gnb_service"
              ><span class="blind">서비스 더보기</span
              ><span class="gnb_icon"></span><span class="ico_arrow"></span
            ></router-link>
          </li>
        </ul>
      </div>
      <div id="snb_wrap">
        <h1>
          <a
            href="https://www.naver.com"
            title="NAVER"
            class="gnb_naver"
            target="_blank"
            >NAVER</a
          >
          <router-link to="/webtoon" title="웹툰" class="gnb_comic"
            >웹툰</router-link
          >
          <em class="bar">|</em>
          <router-link to="#" title="웹소설" class="gnb_novel"
            >웹소설</router-link
          >
          <em class="bar">|</em>
          <router-link to="#" title="시리즈" class="gnb_series"
            >시리즈</router-link
          >
        </h1>
        <form id="searchForm" name="search" method="get">
          <fieldset>
            <legend>검색</legend>
            <div class="snb_search_box">
              <label class="ph" for="gnb.keyword" style="display: inline"
                >제목 / 작가로 검색할 수 있습니다.</label
              >
              <input
                type="text"
                id="gnb.keyword"
                name="keyword"
                value=""
                title="검색어 입력"
                maxlength="18"
                class="snb_search_text"
              />
              <button
                type="button"
                class="btn_search"
                id="search_bar_button"
                title="검색"
              >
                <span class="Nico_search">검색</span>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <div class="notice_info">
        <span class="blind">공지사항</span>
        <div class="rolling">
          <div class="notice_rolling">
            <li>
              <router-link
                to="#"
                title="짝사랑의 짝사랑 <이 짝사랑은 억울하다!>"
              >
                <span class="Nico_notice"></span>
                짝사랑의 짝사랑 &lt;이 짝사랑은 억울하다!&gt;
              </router-link>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div id="menu">
      <ul class="menu">
        <router-link to="/" custom v-slot="{ href, navigate, isExactActive }">
          <li :class="[isExactActive && 'current']">
            <a :href="href" @click="navigate">
              <span class="Ntxt_home">웹툰 홈</span>
            </a>
          </li>
        </router-link>
        <router-link to="/webtoon" custom v-slot="{ href, navigate, isActive }">
          <li :class="[isActive && 'current']">
            <a :href="href" @click="navigate">
              <span class="Ntxt_webtoon">웹툰</span>
            </a>
          </li>
        </router-link>
        <li>
          <router-link to="#">
            <span class="Ntxt_best_challenge">베스트 도전</span>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <span class="Ntxt_best_challenge">도전만화</span>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <span class="Ntxt_best_challenge">마이페이지</span>
          </router-link>
        </li>
      </ul>
      <h2 class="blind">웹툰</h2>
    </div>
    <div id="submenu">
      <ul class="submenu">
        <router-link
          to="/webtoon/weekday"
          custom
          v-slot="{ href, navigate, isExactActive }"
        >
          <li
            :class="[
              (isExactActive && 'on') ||
                ($route.path.includes('weekdayList') && 'on'),
            ]"
          >
            <a :href="href" @click="navigate">
              <span class="Ntxt_menu_date">요일별</span>
            </a>
          </li>
        </router-link>
        <router-link
          :to="{ name: 'genre' }"
          custom
          v-slot="{ href, navigate, isExactActive }"
        >
          <li :class="[isExactActive && 'on']">
            <a :href="href" @click="navigate">
              <span class="Ntxt_menu_genre">장르별</span>
            </a>
          </li>
        </router-link>
        <li>
          <router-link to="#">
            <span class="Ntxt_menu_art">작품별</span>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <span class="Ntxt_menu_author">작가별</span>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <span class="Ntxt_menu_year">연도별</span>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <span class="Ntxt_menu_theme">테마웹툰</span>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <span class="Ntxt_menu_end">완결웹툰</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppHeader",
});
</script>

<style>
@import "@/assets/gnb_style.css";
</style>
