<template>
  <div id="header_wrap">
    <div id="header">
      <div id="gnb" class="">
        <strong class="blind">사용자 링크</strong>
        <ul class="gnb_lst" id="gnb_lst" style="display: block">
          <li
            class="gnb_login_li"
            id="gnb_login_layer"
            style="display: inline-block"
          >
            <a
              class="gnb_btn_login"
              href="https://nid.naver.com/nidlogin.login?url=https%3A%2F%2Fcomic.naver.com%2Fwebtoon%2Fweekday"
              id="gnb_login_button"
              ><span class="gnb_bg"></span><span class="gnb_bdr"></span
              ><span class="gnb_txt">로그인</span></a
            >
          </li>
          <li
            class="gnb_service_li"
            id="gnb_service_layer"
            style="display: inline-block"
          >
            <a
              href="javascript:;"
              class="gnb_service"
              onclick="gnbMoreLayer.clickToggle(); return false;"
              ><span class="blind">서비스 더보기</span
              ><span class="gnb_icon"></span><span class="ico_arrow"></span
            ></a>
          </li>
        </ul>
      </div>
      <div id="snb_wrap">
        <h1>
          <a
            onclick="nclk_v2(event,'STA.naverlogo')"
            href="https://www.naver.com"
            title="NAVER"
            class="gnb_naver"
            >NAVER</a
          >
          <a
            onclick="nclk_v2(event,'STA.comic')"
            href="/index"
            title="웹툰"
            class="gnb_comic"
            >웹툰</a
          >
          <em class="bar">|</em>
          <a
            onclick="nclk_v2(event,'STA.novel')"
            href="https://novel.naver.com"
            title="웹소설"
            class="gnb_novel"
            >웹소설</a
          >
          <em class="bar">|</em>
          <a
            onclick="nclk_v2(event,'STA.series')"
            href="https://series.naver.com"
            title="시리즈"
            class="gnb_series"
            >시리즈</a
          >
        </h1>
        <form id="searchForm" name="search" method="get" action="/search">
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
                onclick="nclk_v2(event,'STA.search')"
                title="검색"
                alt="검색"
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
              <a
                onclick="nclk_v2(event,'STA.txt')"
                href="https://comic.naver.com/webtoon/list.nhn?titleId=795537"
                title="짝사랑의 짝사랑 <이 짝사랑은 억울하다!>"
              >
                <span class="Nico_notice"></span>
                짝사랑의 짝사랑 &lt;이 짝사랑은 억울하다!&gt;
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
    <div id="menu">
      <ul class="menu">
        <!-- [D] 선택된 li에 current 클래스 추가 -->
        <li>
          <a onclick="nclk_v2(event,'LNB.home');" href="/index"
            ><span class="Ntxt_home">웹툰 홈</span></a
          >
        </li>
        <li class="current">
          <a onclick="nclk_v2(event,'LNB.toon');" href="/webtoon/weekday"
            ><span class="Ntxt_webtoon">웹툰</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'LNB.best');" href="/genre/bestChallenge"
            ><span class="Ntxt_best_challenge">베스트 도전</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'LNB.chal');" href="/genre/challenge"
            ><span class="Ntxt_challenge_comic">도전만화</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'LNB.my');" href="/mypage/favorite"
            ><span class="Ntxt_mypage">마이페이지</span></a
          >
        </li>
      </ul>
      <h2 class="blind">웹툰</h2>
    </div>
    <!-- //상단 메뉴 /webtoon/weekday-->
    <div id="submenu">
      <!--서브메뉴-->
      <ul class="submenu">
        <!-- [D] 선택된 li에 on 클래스 추가 -->
        <li class="on">
          <a onclick="nclk_v2(event,'tab.weekday')" href="/webtoon/weekday"
            ><span class="Ntxt_menu_date">요일별</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'tab.genre')" href="/webtoon/genre"
            ><span class="Ntxt_menu_genre">장르별</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'tab.creation')" href="/webtoon/creation"
            ><span class="Ntxt_menu_art">작품별</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'tab.artist')" href="/webtoon/artist"
            ><span class="Ntxt_menu_author">작가별</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'tab.period')" href="/webtoon/period"
            ><span class="Ntxt_menu_year">연도별</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'tab.theme')" href="/webtoon/theme"
            ><span class="Ntxt_menu_theme">테마웹툰</span></a
          >
        </li>
        <li>
          <a onclick="nclk_v2(event,'tab.finish')" href="/webtoon/finish"
            ><span class="Ntxt_menu_end">완결웹툰</span></a
          >
        </li>
      </ul>
      <!--//서브메뉴-->
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
