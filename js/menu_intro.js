const template = document.getElementById('headerTemplate');
template.innerHTML = `
<header>
<nav class="top">
    <a class="logo"  target="_self" >
      <!-- <p class="logo-font">D I E T E V E N T</p> -->
      <img alt="" src="img/diet-logo.png" >
    
    </a>
    <div class="menu-btn">
        <!-- <button class="Event_Menu">Event</button> -->
       <!-- <button class="total_menu"><img src="img/hamburger.svg" style="width:17px"></button> -->
    </div>
</nav>


<div class="ham-con" data-depth="1"><!-- 메뉴 -->
    <div class="bg"></div>
    <div class="container-box">

        <div class="top">
            <div>
                <button class="back">
                    <svg fill="none" viewBox="0 0 24 24" preserveAspectRatio="xMinYMid" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-db _SN-od"><path d="M5 9l7 7 7 -7" stroke="currentColor" data-autoid="chevron:90" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"></path></svg>
                </button>
                
                <p class="txt-cg">학생</p>
                
                <a class="logo"  target="_self" href="">
                  <!-- <p>D I E T E V E N T</p>   -->
                  <img alt="" src="img/diet-logo.png" >
                </a>
                <p class="close-btn ham-close-btn"><svg viewBox="0 0 24 24" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-da _SN-db"><path stroke="currentColor" d="M4.222 4.222l15.556 15.556M4.222 19.778L19.778 4.222"></path></svg></p>
            </div>
        </div>

        <div class="wrap">
            <div class="menu con-01"><!-- 메뉴 1depth-->

              
                <div class="middle">
                    <ul class="left">
                        <li><p><a target="_self" href="./index.html">HOME</a></p></li>
                        <li><p><a target="_self" href="./cutncut.html">다이어트 신청</a></p></li>
                        <!-- <li class="tab02" data-rel="menu-01" data-tit="다이어트"><p>다이어트</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>-->
                        <li class="tab02" data-rel="menu-02" data-tit="다이어트 테스트"><p>다이어트 테스트</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li> 
                        <!-- <li class="tab02" data-rel="menu-04" data-tit="다이어트 연재"><p>다이어트 연재</p><img width="24" height="24" src="img/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li> -->
                        
                    </ul>
                </div>
                <!-- <div class="bottom">
                  
                  
                </div> -->
            </div>
            <div class="menu02"><!-- 메뉴 2depth-->
                <div class="menu-01">
                    <div class="set-con">
                        <p>진로 선택</p>
                        <ul class="top">
                            <li><a target="_self" href="./type-test.html">문 / 이과 선택</a></li>
                            <li><a target="_self" href="./major-test.html">대학 전공 선택</a></li>
                        </ul>
                    </div>
                    <!--<div class="set-con">
                        <p>재능 및 적성 탐색</p>
                        <ul class="bottom">
                            <li><a target="_self" href="./potential-test.html">흥미 및 적성 검사</a></li>
                        </ul>
                    </div>
                    <div class="set-con">
                      <p>학습법</p>
                      <ul class="bottom">
                          <li><a target="_self" href="./howtostudy.html">나만의 학습법 찾기</a></li>
                          <li><a target="_self" href="./burnout-test.html">공부 번아웃 검사</a></li>
                      </ul>
                  </div>-->
                </div>
                <div class="menu-02">
                    <div class="set-con">
                        <p>다이어트 테스트</p>
                        <ul class="bottom">
                            <li><a target="_self" href="./fit-test.html">나의 적정 감량치는?</a></li>
                            <li><a target="_self"href="./diet-test.html">감량이 안되는 이유?</a></li>
                            <li><a target="_self"href="./event.html">-18kg 건강 감량 프로젝트</a></li>
                        </ul>
                    
                        
                    </div>
                
                </div>
                
                <div class="menu-04">
                    <div class="set-con pad">
                        <ul class="bottom">
                          <p style="padding: 30px 25px 10px;
                          letter-spacing: 0.02em;
                          line-height: 1.66667;
                          font-size: 12px;
                          font-weight: 500;
                          color: #707070;">전문 상담사 소개</p>
                          <li><a target="_self" href="./team-prof.html">이헌주 연세대 연구교수</a></li>
                          <li><a target="_self" href="./team-bsj.html">방수진 전문 상담사</a></li>
                          <li><a target="_self" href="./team-kjh.html">김종현 전문 상담사</a></li>
                          <li><a target="_self" href="./team-kje.html">김조은 전문 상담사</a></li>
                          <li><a target="_self" href="./team-kjs.html">김정수 전문 상담사</a></li>
                          <li><a target="_self" href="./team-syi.html">송영인 전문 상담사</a></li>
                          
                        </ul>
                    </div>
                </div>
              
            </div>
        
        </div>
    </div>
</div>

</header>
`;

document.body.appendChild(template.content);

