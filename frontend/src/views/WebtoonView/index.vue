<template>
  <div id="container">
    <div id="content" class="webtoon">
      <router-view></router-view>
    </div>
    <div id="aside">
      <div class="asideButton upload">
        <router-link
          to="#"
          active-class=""
          exact-active-class=""
          class="Nbtn_upload"
          >웹툰 올리기</router-link
        >
      </div>
      <!-- 배너 -->
      <div id="barAndRightAd" class="asideAd">
        <div
          style="
            width: 240px;
            height: 240px;
            margin: 0px auto;
            position: relative;
          "
        >
          <img
            src="https://ssl.pstatic.net/melona/libs/1393/1393271/ca5fe4b20668940d03ac_20220602112637060.png"
            width="240"
            height="240"
            title=""
            alt="광고 이미지"
            style="
              width: 240px;
              height: 240px;
              visibility: inherit;
              border: 0px;
              vertical-align: bottom;
              position: absolute;
            "
          />
        </div>
      </div>
      <div class="asideRolling">
        <a href="#">
          <img
            src="https://naverwebtoon-phinf.pstatic.net/20220527_238/16536398740631Qhjo_JPEG/upload_7531656900592402652.JPEG?type=p100"
            width="240"
            height="97"
            alt="살인마 죽이기 <사형소년>"
          />
        </a>
      </div>
      <!-- 인기급상승웹툰 -->
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
            <li id="realTimeRankChoiceTabFavorite" class="choice">
              <a id="realTimeRankChoiceTabFavoriteClick" href="#"
                ><img
                  src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_favor.gif"
                  title="인기순"
                  alt="인기순"
                  width="31"
                  height="12"
              /></a>
            </li>
            <li id="realTimeRankChoiceTabUpdate">
              <a id="realTimeRankChoiceTabUpdateClick" href="#"
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
                >99강화나무몽둥이-11화. 편돌이였던 내가 어느 날 갑자기 갑부가 된
                썰 (1)</a
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
          </ol>
        </div>
      </div>
      <!-- //인기급상승웹툰 -->
      <!-- 추천 웹툰 -->
      <div class="asideBox">
        <h4 class="asideBoxTitle">
          <img
            id="recommand_ageImg"
            src="https://ssl.pstatic.net/static/comic/images/migration/common/h_20_v2.gif"
            width="107"
            height="11"
            alt="20대 실시간 인기웹툰"
            title="20대 실시간 인기웹툰"
          />
          <div class="tab_nv">
            <a id="recommandWebtoonRankLeftTabClick" href="#" class="Nico_prv"
              >이전</a
            ><a id="recommandWebtoonRankRightTabClick" href="#" class="Nico_nxt"
              >다음</a
            >
          </div>
        </h4>
        <div>
          <ul class="asideBoxTab">
            <li id="recommandWebtoonRankMTabOver" class="choice">
              <a href="#">
                <img
                  src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_m.png"
                  width="21"
                  height="11"
                  alt="남자"
                  title="남자"
              /></a>
            </li>
            <li id="recommandWebtoonRankWTabOver">
              <a href="#">
                <img
                  src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_w.png"
                  width="21"
                  height="11"
                  alt="여자"
                  title="여자"
              /></a>
            </li>
          </ul>
          <h3 id="ageGenderRankBlindName" class="blind">남자</h3>
          <ol id="recommandWebtoonRank" class="asideBoxRank asideBoxRank2">
            <li id="recommandLi_0" class="rank01">
              <div class="thumb6">
                <a
                  id="recommand_link_0"
                  href="/webtoon/detail?titleId=792651&amp;no=11"
                  title="99강화나무몽둥이"
                >
                  <img
                    id="recommand_thumbnail_0"
                    src="https://shared-comic.pstatic.net/thumb/webtoon/792651/thumbnail/thumbnail_IMAG10_8c733a14-32cb-4350-8ec5-231e713cdf42.jpg"
                    width="30"
                    height="33"
                    alt="99강화나무몽둥이"
                  />
                  <span class="mask"></span>
                </a>
              </div>
              <div class="rc_info">
                <a
                  id="recommand_titleName_0"
                  href="/webtoon/detail?titleId=792651&amp;no=11"
                  class="tit"
                  title="99강화나무몽둥이"
                  >99강화나무몽둥이</a
                >
                <em
                  ><a id="recommand_painter_0" href="#" title="홍실 / 지페리"
                    >홍실 / 지페리</a
                  ></em
                >
                <span class="rankBox2">
                  <img
                    id="recommand_img_0"
                    src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
                    title="변동없음"
                    alt="변동없음"
                  /><em id="recommand_rank_0">0</em>
                </span>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <!-- //추천 웹툰 -->
      <!-- 공지사항 -->
      <div class="asideBox">
        <h4 class="asideBoxTitle">
          <img
            src="https://ssl.pstatic.net/static/comic/images/migration/common/subtlt_r_notice.gif"
            title="공지사항"
            alt="공지사항"
            width="43"
            height="12"
          />
        </h4>
        <ul class="asideBoxNotice">
          <li>
            <a
              href="/notice/detail?noticeId=1676"
              title="2022 지상최대공모전 웹툰 부문 상세 공지"
            >
              <strong> 2022 지상최대공모전 웹툰 부문 상세 공지 </strong>
            </a>
          </li>
          <li>
            <a
              href="/notice/detail?noticeId=1678"
              title="2022 모든웹툰 공모전 (레드아이스X부천시with네이버웹툰) 개최 안내"
            >
              <strong> 2022 모든웹툰 공모전 개최 안내 </strong>
            </a>
          </li>
          <li>
            <a
              href="/notice/detail?noticeId=535"
              title="(new) 웹소설원작 웹툰을 위한 각색/작화 작가를 모십니다!"
            >
              <strong>
                웹소설원작 웹툰을 위한 각색/작화 작가를 모십니다
              </strong>
            </a>
          </li>
          <li>
            <a
              href="/notice/detail?noticeId=521"
              title="[출시] 새로운 웹툰 라인업! <매일+>에서 만나보세요! "
            >
              <strong> [출시] 새로운 웹툰 라인업! &lt;매일+&gt; </strong>
            </a>
          </li>
          <li>
            <a
              href="/notice/detail?noticeId=495"
              title="(new) 네이버웹툰 연재 작가를 모십니다! "
            >
              <strong> 네이버웹툰 연재 작가를 모십니다 </strong>
            </a>
          </li>
          <li>
            <a
              href="/notice/detail?noticeId=526"
              title="#내돈내툰, 우리가 웹툰을 즐기는 방법"
            >
              #내돈내툰, 우리가 웹툰을 즐기는 방법
            </a>
          </li>
          <li>
            <a
              href="/notice/detail?noticeId=1685"
              title="2022년 6월 유료화 전환 작품 안내"
            >
              2022년 6월 유료화 전환 작품 안내
            </a>
          </li>
        </ul>
        <a href="/notice/list" class="asideBoxMore">
          <span class="blind">공지사항</span> 더보기
        </a>
      </div>
      <!-- //공지사항 -->
      <div class="asideBanner">
        <a href="/business/proposalGuide">
          <img
            src="https://ssl.pstatic.net/static/comic/images/bnr_partnership.jpg"
            width="240"
            height="86"
            alt="웹툰, 웹소설 온라인 광고 판권 사업"
          />
        </a>
      </div>
      <div class="asideBanner">
        <a href="https://joinus.comic.naver.com">
          <img
            src="https://ssl.pstatic.net/static/comic/images/bnr_joinus.jpg"
            width="240"
            height="86"
            alt="연재 경력 작가 웹툰 차기작 제안"
          />
        </a>
      </div>
      <div class="asideBanner">
        <a href="https://comic.naver.com/contest/greatest/webtoon">
          <img
            src="https://ssl.pstatic.net/static/comic/images/bnr_contest_2022.jpg"
            width="240"
            height="86"
            alt="2022 지상최대공모전 - 접수 및 안내"
          />
        </a>
      </div>
      <div class="asideBanner">
        <a href="https://recruit.webtoonscorp.com">
          <img
            src="https://ssl.pstatic.net/static/comic/images/bnr_careers.jpg"
            width="240"
            height="86"
            alt="웹툰 채용공고 CAREERS"
          />
        </a>
      </div>
      <div class="asideButton">
        <a
          class="btn_faq"
          href="https://help.naver.com/support/service/main.help?serviceNo=799"
          target="_blank"
          title="새 창"
        >
          <span class="blind">웹툰 고객센터</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style></style>
