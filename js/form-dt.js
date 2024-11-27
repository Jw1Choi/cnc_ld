const form = document.getElementById('form');
form.innerHTML = `
<div class="form-box" id="fm-box">
<div class="inner">
    <div style="text-align:-webkit-center;">
        <div  style="border:1px solid #000;max-width:370px;padding:10px">
          <span class="timer">
              신청 마감 | <span id="day1"></span> ( <span id="countdown1"></span>)
          </span>
      </a></div></div><br><br><br>
    <h1 class="form-top-title">선착순 마감 시 자동 종료 될 수 있습니다.</h1>
    <div class="form-box-inner">
        <form action="" id="form_e11" method="POST" target="hidden_iframe11" onsubmit="dll(); submitted=true;">
          <input type="hidden" name="entry.272078534" value="">
            <div class="form-box-tb-out">
            <br>
                <table class="form-box-tb">
                    <tbody>
                        <tr id="select_lic">
                            <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->성별<br></th>
                            <td>

                                <select name='entry.1818522882' id='mf' class="form-control" placeholder="성별">

                                    <option value="성별" selected disabled>성별 선택</option>
                                        <option value="여성">여성</option>
                                        <option value="남성">남성</option>
                                        
                                      
                                </select>

                           
                            </td>
                        </tr>
                    <tr>
                        <th><!--<i class="fa fa-user" aria-hidden="true"></i>-->이름</th>
                        <td>
                            <input type='text' name='entry.583978956' id='name' class="form-control" placeholder="성함" maxlength="4">
                        </td>
                    </tr>
                  
                    <tr>
                        <th>연령</th>
                        <td>
                            <input type='text' name='entry.1881318671' id='age' class="form-control" placeholder="24~54세 사이" maxlength="2">
                           
                        </td>
                    </tr>
                    <tr>
                      <th>체중(kg)</th>
                      <td>
                          <input type='text' name='entry.880528237' id='now-wg' class="form-control" placeholder="현재 체중(kg)" maxlength="3" >
                         
                      </td>
                  </tr>
           
                <tr>
                  <th>신장(cm)</th>
                  <td>
                      <input type='text' name='entry.205668662' id='height' class="form-control" placeholder="신장(cm)" maxlength="3">
                     
                  </td>
              </tr>
              <!-- <tr>
                <th>희망목표(kg)</th>
                <td>
                    <input type='text' name='entry.1989036305' id='hope-wg' class="form-control" placeholder="희망목표(kg)" maxlength="3">
                   
                </td>
            </tr> -->
            <tr>
              <th><!--<i class="fa fa-phone" aria-hidden="true"></i>-->연락처</th>
              <td>
                  <input type='text' name='entry.576088086' id='phone' class="form-control" placeholder="휴대폰번호" maxlength="11">
              </td>
          </tr>
                    <!-- <tr>
                        <th>통화가능시간</th>
                        <td>
                            <select name="entry.882151947" id='position' class="form-control" placeholder="현재 조건">

                                <option value="통화가능시간" selected disabled>통화가능시간
                                    <option value="언제나 통화 가능">언제나 통화 가능</option>
                                    <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
                                    <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
                                    <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
                                    <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
                                    <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
                                    <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
                                    <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
                                    <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
                                    <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
                                    <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
                            </select>
                        </td>
                    </tr> -->
                    <tr>
                        <th>문의사항</th>
                        <td>
                            <textarea name='entry.1817436242' id='message' class="form-control" placeholder="문의사항을 적어주세요.(선택)" style="min-height:100px"></textarea>
                        </td>
                    </tr>
                    <!-- <tr>
                        <th>대출금액</th>
                        <td>
                        <input name='M_items_value_16' type='text' value='' class='ri_16 text_box' placeholder="필요금액을 입력하세요." pattern="\d*"><span class="text_box_text">&nbsp;만원</span>
                        </td>
                    </tr> -->
                    <!-- <tr>
                        <th>!--<i class="fa fa-user" aria-hidden="true"></i>--메모</th>
                        <td>
                            <textarea name="M_data" type="text" class="form-info" placeholder="개인 신용에 어떠한 영향도 끼치지 않으며, 한도안내 후 개인정보는 전부 파기됩니다." onkeyup="cdcheck(this)" onkeydown="cdcheck(this)"></textarea>
                        </td> 
                    </tr>   -->
                    <tr>
                        <td colspan="2" style="border-bottom: none"> 
                            <!-- <span class="red-txt">신용 8~10등급은 접수 불가합니다.</span> -->
                        
                            <input class="submit-btn" type='submit' id='send_message' value='무료 상담 신청하기' disabled >
                            <div class="form-agree-box">
                                <p class="form-info-agree">
                                    <span>
                                       
                                        <input type="checkbox" name="agree11" id="agree11" value="개인정보보호정책 동의" checked style="width:20px;">
                                        <label style="color:#000; font-weight:500;font-size:13px;" for="agree11">개인정보보호정책</label>
                    
                    
                                        <span class="privacyBtn" style="color:#000;font-weight:400; font-size: 13px;margin-top:-3px; " onclick="privacyPopUp()">
                                            [자세히 보기]
                                        </span>
                                    </span>
                                </p>

                                <script type="text/javascript">var submitted = false;</script>

                                <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
                                <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
                               
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
</div><!----form-end------>




<section id="dbscf" style="display:none;">
  <form id="db" name="f1" accept-charset="euc-kr" method="post" action="https://dbdbdeep.com/new/mct/ifr/ifr_save.php" target="hidden_iframe12">
 <input type="hidden" name="ms" value="S00257269W" />
<input type="hidden" name="ca" value="C05451655Y" />
    <input type="hidden" name="auto_defense" />
  
   <div class="input_form_area" >
	

	<div class="input_list">
		<table width=100%>
			<tr>
								<td class="input_title">
					이름
				</td>
				
				<td class="pb10">
					<input type="text" name="name" class="input_text" >
				</td>
			</tr>

			<tr>
								<td class="input_title">
					성별
				</td>
				
				<td class="pb10">
					<label>
						<input type="radio" value="여" name="sex" checked>
						<span>여자</span>
					</label>
					<label>
						<input type="radio" value="남" name="sex">
						<span>남자</span>
					</label>
					
				</td>
			</tr>

			<tr>
								<td class="input_title">
					나이
				</td>
				
				<td class="pb10">
					<input type="tel" name="age" class="input_text" >
				</td>
			</tr>

			<tr>
								<td class="input_title">
					키
				</td>
				
				<td class="pb10">
					<input type="tel" name="item1" class="input_text" >
				</td>
			</tr>

			<tr>
								<td class="input_title">
					몸무게
				</td>
				
				<td class="pb10">
					<input type="tel" name="item2" class="input_text" >
				</td>
			</tr>


			<tr>
								<td class="input_title">
					연락처
				</td>
				
				<td class="pb10">
					<input type="tel" name="tel" id = "tel"  maxlength=11 class="input_text" ><!--  -->

				</td>
			</tr>

			<tr>
								<td class="input_title">
					문의사항
				</td>
				
				<td class="pb10">
					<!-- <input type="text" class="input_text" > -->
					<textarea name="etc" style="height:100px;padding-top:10px" class="input_text" ></textarea>

				</td>
			</tr>

			

		</table>
	</div>
	<div class="argee_area">
		<p style="text-align:center;">
			<input type="checkbox"  name="agree" id="agreement" checked>
			<span >
			<a href='javascript:dbdb_pri_popup();void(0);'>개인정보 수집 및 이용</a> 에 동의합니다
			</span>
		</p>
	</div>
	<div style="text-align:center;">
		<button class="input_button" onclick="OnSubmit(document.f1);return false" style="cursor:pointer" >
			무료상담 신청하기
		</button>
	</div>
</div>
  </section>
  </form>

  `;

document.body.appendChild(form.content);