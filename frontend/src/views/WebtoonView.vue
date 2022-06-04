<template>
  <div id="container">
    <div id="content" class="webtoon">
      <router-view></router-view>
    </div>
    <div id="aside">
      <div class="asideButton upload">
        <a
          href="/mypage/myActivity"
          class="Nbtn_upload"
          onclick="nclk_v2(event,'olk.upload');"
          >웹툰 올리기</a
        >
      </div>
      <!-- 배너 -->
      <div
        id="barAndRightAd"
        name="addiv"
        data-veta-preview="p_wtoon_home"
        class="asideAd"
      >
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
      <!-- //배너 -->
      <!-- 롤링이미지 -->
      <div class="asideRolling">
        <a
          onclick="nclk_v2(event,'olk.banner')"
          href="https://comic.naver.com/webtoon/list.nhn?titleId=795262"
        >
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
            <!-- 선택된 메뉴에는 choice라는 클래스명을 사용합니다 -->
            <li id="realTimeRankChoiceTabFavorite" class="choice">
              <a
                id="realTimeRankChoiceTabFavoriteClick"
                onclick="nclk_v2(event,'rnk.rep')"
                href="#"
                ><img
                  src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_favor.gif"
                  title="인기순"
                  alt="인기순"
                  width="31"
                  height="12"
              /></a>
            </li>
            <li id="realTimeRankChoiceTabUpdate">
              <a
                id="realTimeRankChoiceTabUpdateClick"
                onclick="nclk_v2(event,'rnk.upd')"
                href="#"
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
                onclick="nclk_v2(event,'rnk*p.cont','792651','1')"
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
            <li class="rank02">
              <a
                onclick="nclk_v2(event,'rnk*p.cont','597447','2')"
                href="/webtoon/detail?titleId=597447&amp;no=444"
                title="프리드로우-제441화 이민지 대 고주연 (1)"
                >프리드로우-제441화 이민지 대 고주연 (1)</a
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
            <li class="rank03">
              <a
                onclick="nclk_v2(event,'rnk*p.cont','727188','3')"
                href="/webtoon/detail?titleId=727188&amp;no=163"
                title="취사병 전설이 되다-163화 : 거절할 수 밖에 없는 이유"
                >취사병 전설이 되다-163화 : 거절할 수 밖에 없는 이유</a
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
            <li class="rank04">
              <a
                onclick="nclk_v2(event,'rnk*p.cont','650305','4')"
                href="/webtoon/detail?titleId=650305&amp;no=336"
                title="호랑이형님-3부 프롤로그 우처구 우러본"
                >호랑이형님-3부 프롤로그 우처구 우러본</a
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
            <li class="rank05">
              <a
                onclick="nclk_v2(event,'rnk*p.cont','730694','5')"
                href="/webtoon/detail?titleId=730694&amp;no=129"
                title="초인의 시대-2부 37화"
                >초인의 시대-2부 37화</a
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
            <li class="rank06">
              <a
                onclick="nclk_v2(event,'rnk*p.cont','721948','6')"
                href="/webtoon/detail?titleId=721948&amp;no=157"
                title="스터디그룹-시즌2 38화"
                >스터디그룹-시즌2 38화</a
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
                onclick="nclk_v2(event,'rnk*p.cont','774864','7')"
                href="/webtoon/detail?titleId=774864&amp;no=39"
                title="존잘주의-38화. 나도 한다 뉴투브."
                >존잘주의-38화. 나도 한다 뉴투브.</a
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
            <li class="rank08">
              <a
                onclick="nclk_v2(event,'rnk*p.cont','774862','8')"
                href="/webtoon/detail?titleId=774862&amp;no=64"
                title="조조코믹스-사형집행자 6화 : 원숭이 지갑"
                >조조코믹스-사형집행자 6화 : 원숭이 지갑</a
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
            <li class="rank09">
              <a
                onclick="nclk_v2(event,'rnk*p.cont','769568','9')"
                href="/webtoon/detail?titleId=769568&amp;no=59"
                title="반드시 해피엔딩-59화"
                >반드시 해피엔딩-59화</a
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
            <li class="rank10">
              <a
                onclick="nclk_v2(event,'rnk*p.cont','784255','10')"
                href="/webtoon/detail?titleId=784255&amp;no=62"
                title="먹는 인생-61화 순두부찌개"
                >먹는 인생-61화 순두부찌개</a
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
              <a href="#" onclick="return false;">
                <img
                  src="https://ssl.pstatic.net/static/comic/images/migration/common/tab_txt_m.png"
                  width="21"
                  height="11"
                  alt="남자"
                  title="남자"
              /></a>
            </li>
            <li id="recommandWebtoonRankWTabOver">
              <a href="#" onclick="return false;">
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
                    onerror="this.src='https://ssl.pstatic.net/static/comic/images/migration/common/blank.gif'"
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
                  ><a
                    id="recommand_painter_0"
                    href="#"
                    onclick="return artistAction.viewArtist('792651', this);"
                    title="홍실 / 지페리"
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
            <li id="recommandLi_1" class="rank02">
              <div class="thumb6">
                <a
                  id="recommand_link_1"
                  href="/webtoon/detail?titleId=727188&amp;no=163"
                  title="취사병 전설이 되다"
                >
                  <img
                    onerror="this.src='https://ssl.pstatic.net/static/comic/images/migration/common/blank.gif'"
                    id="recommand_thumbnail_1"
                    src="https://shared-comic.pstatic.net/thumb/webtoon/727188/thumbnail/thumbnail_IMAG10_f01cc201-02c6-4a40-8c1a-e3db0c256876.jpg"
                    width="30"
                    height="33"
                    alt="취사병 전설이 되다"
                  />
                  <span class="mask"></span>
                </a>
              </div>
              <div class="rc_info">
                <a
                  id="recommand_titleName_1"
                  href="/webtoon/detail?titleId=727188&amp;no=163"
                  class="tit"
                  title="취사병 전설이 되다"
                  >취사병 전설이 되다</a
                >
                <em
                  ><a
                    id="recommand_painter_1"
                    href="#"
                    onclick="return artistAction.viewArtist('727188', this);"
                    title="제이로빈 / 이진수"
                    >제이로빈 / 이진수</a
                  ></em
                >
                <span class="rankBox2">
                  <img
                    id="recommand_img_1"
                    src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
                    title="변동없음"
                    alt="변동없음"
                  /><em id="recommand_rank_1">0</em>
                </span>
              </div>
            </li>
            <li id="recommandLi_2" class="rank03">
              <div class="thumb6">
                <a
                  id="recommand_link_2"
                  href="/webtoon/detail?titleId=650305&amp;no=336"
                  title="호랑이형님"
                >
                  <img
                    onerror="this.src='https://ssl.pstatic.net/static/comic/images/migration/common/blank.gif'"
                    id="recommand_thumbnail_2"
                    src="https://shared-comic.pstatic.net/thumb/webtoon/650305/thumbnail/thumbnail_IMAG10_3c6c0ce8-f93b-4609-90d3-84069801e941.jpg"
                    width="30"
                    height="33"
                    alt="호랑이형님"
                  />
                  <span class="mask"></span>
                </a>
              </div>
              <div class="rc_info">
                <a
                  id="recommand_titleName_2"
                  href="/webtoon/detail?titleId=650305&amp;no=336"
                  class="tit"
                  title="호랑이형님"
                  >호랑이형님</a
                >
                <em
                  ><a
                    id="recommand_painter_2"
                    href="#"
                    onclick="return artistAction.viewArtist('650305', this);"
                    title="이상규"
                    >이상규</a
                  ></em
                >
                <span class="rankBox2">
                  <img
                    id="recommand_img_2"
                    src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_no.gif"
                    title="변동없음"
                    alt="변동없음"
                  /><em id="recommand_rank_2">0</em>
                </span>
              </div>
            </li>
            <li id="recommandLi_3" class="rank04">
              <div class="thumb6">
                <a
                  id="recommand_link_3"
                  href="/webtoon/detail?titleId=730694&amp;no=129"
                  title="초인의 시대"
                >
                  <img
                    onerror="this.src='https://ssl.pstatic.net/static/comic/images/migration/common/blank.gif'"
                    id="recommand_thumbnail_3"
                    src="https://shared-comic.pstatic.net/thumb/webtoon/730694/thumbnail/thumbnail_IMAG10_66827cdd-5000-40fb-ace1-96396beccc25.jpg"
                    width="30"
                    height="33"
                    alt="초인의 시대"
                  />
                  <span class="mask"></span>
                </a>
              </div>
              <div class="rc_info">
                <a
                  id="recommand_titleName_3"
                  href="/webtoon/detail?titleId=730694&amp;no=129"
                  class="tit"
                  title="초인의 시대"
                  >초인의 시대</a
                >
                <em
                  ><a
                    id="recommand_painter_3"
                    href="#"
                    onclick="return artistAction.viewArtist('730694', this);"
                    title="섭이"
                    >섭이</a
                  ></em
                >
                <span class="rankBox2">
                  <img
                    id="recommand_img_3"
                    src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_up.gif"
                    title="순위상승"
                    alt="순위하락"
                  /><em id="recommand_rank_3">1</em>
                </span>
              </div>
            </li>
            <li id="recommandLi_4" class="rank05">
              <div class="thumb6">
                <a
                  id="recommand_link_4"
                  href="/webtoon/detail?titleId=721948&amp;no=157"
                  title="스터디그룹"
                >
                  <img
                    onerror="this.src='https://ssl.pstatic.net/static/comic/images/migration/common/blank.gif'"
                    id="recommand_thumbnail_4"
                    src="https://shared-comic.pstatic.net/thumb/webtoon/721948/thumbnail/thumbnail_IMAG10_03dbca7a-d940-47d7-9e4d-5100c4db77a3.jpg"
                    width="30"
                    height="33"
                    alt="스터디그룹"
                  />
                  <span class="mask"></span>
                </a>
              </div>
              <div class="rc_info">
                <a
                  id="recommand_titleName_4"
                  href="/webtoon/detail?titleId=721948&amp;no=157"
                  class="tit"
                  title="스터디그룹"
                  >스터디그룹</a
                >
                <em
                  ><a
                    id="recommand_painter_4"
                    href="#"
                    onclick="return artistAction.viewArtist('721948', this);"
                    title="신형욱 / 유승연"
                    >신형욱 / 유승연</a
                  ></em
                >
                <span class="rankBox2">
                  <img
                    id="recommand_img_4"
                    src="https://ssl.pstatic.net/static/comic/images/migration/common/arrow_down.gif"
                    title="순위하락"
                    alt="순위하락"
                  /><em id="recommand_rank_4">1</em>
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
              onclick="nclk_v2(event,'sna.not','1676','1')"
              href="/notice/detail?noticeId=1676"
              title="2022 지상최대공모전 웹툰 부문 상세 공지"
            >
              <strong> 2022 지상최대공모전 웹툰 부문 상세 공지 </strong>
            </a>
          </li>
          <li>
            <a
              onclick="nclk_v2(event,'sna.not','1678','2')"
              href="/notice/detail?noticeId=1678"
              title="2022 모든웹툰 공모전 (레드아이스X부천시with네이버웹툰) 개최 안내"
            >
              <strong> 2022 모든웹툰 공모전 개최 안내 </strong>
            </a>
          </li>
          <li>
            <a
              onclick="nclk_v2(event,'sna.not','535','3')"
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
              onclick="nclk_v2(event,'sna.not','521','4')"
              href="/notice/detail?noticeId=521"
              title="[출시] 새로운 웹툰 라인업! <매일+>에서 만나보세요! "
            >
              <strong> [출시] 새로운 웹툰 라인업! &lt;매일+&gt; </strong>
            </a>
          </li>
          <li>
            <a
              onclick="nclk_v2(event,'sna.not','495','5')"
              href="/notice/detail?noticeId=495"
              title="(new) 네이버웹툰 연재 작가를 모십니다! "
            >
              <strong> 네이버웹툰 연재 작가를 모십니다 </strong>
            </a>
          </li>
          <li>
            <a
              onclick="nclk_v2(event,'sna.not','526','6')"
              href="/notice/detail?noticeId=526"
              title="#내돈내툰, 우리가 웹툰을 즐기는 방법"
            >
              #내돈내툰, 우리가 웹툰을 즐기는 방법
            </a>
          </li>
          <li>
            <a
              onclick="nclk_v2(event,'sna.not','1685','7')"
              href="/notice/detail?noticeId=1685"
              title="2022년 6월 유료화 전환 작품 안내"
            >
              2022년 6월 유료화 전환 작품 안내
            </a>
          </li>
        </ul>
        <a
          onclick="nclk_v2(event,'sna.more')"
          href="/notice/list"
          class="asideBoxMore"
        >
          <span class="blind">공지사항</span> 더보기
        </a>
      </div>
      <!-- //공지사항 -->
      <div class="asideBanner">
        <a
          onclick="nclk_v2(event,'sna.proposal');"
          href="/business/proposalGuide"
        >
          <img
            src="https://ssl.pstatic.net/static/comic/images/bnr_partnership.jpg"
            width="240"
            height="86"
            alt="웹툰, 웹소설 온라인 광고 판권 사업"
          />
        </a>
      </div>
      <div class="asideBanner">
        <a
          onclick="nclk_v2(event,'sna.writerproposal');"
          href="https://joinus.comic.naver.com"
        >
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
        <a
          onclick="nclk_v2(event,'sna.recruit');"
          href="https://recruit.webtoonscorp.com"
        >
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
          onclick="nclk_v2(event,'sna.faq')"
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
