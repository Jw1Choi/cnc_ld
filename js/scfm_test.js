function goal_weight() {
    var gw= $('#weight').val();
    if(gw>29 && gw<201)
    {
        $('#quest0_1').prop("disabled", false);
        $('#next_gw').css({transition:"1s"});
                $('#next_gw').css({background:"#1b1b1b"});
                $('#next_gw').css({border:"1px solid #fff"});
                $('#next_gw').css({color:"#fff"});
                $('#alert_gw').css({transition:"1s"});
                $('#alert_gw').css({color:"#fff"});
                $('#alert_gw').text('　');
    }
    else {
            
                $('#quest0_1').prop("disabled", true);
                $('#next_gw').css({transition:"1s"});
                $('#next_gw').css({background:"transparent"});
                $('#next_gw').css({border:"1px solid #1b1b1b"});
                $('#next_gw').css({color:"#1b1b1b"});
                $('#alert_gw').css({transition:"1s"});
                $('#alert_gw').css({color:"#fff"});
                $('#alert_gw').text('입력값을 확인하세요.');
        }
            if(gw<0)
        {
            

            $('#quest0_1').prop("disabled", true);
            $('#next_gw').css({transition:"1s"});
            $('#next_gw').css({border:"1px solid #1b1b1b"});
            $('#next_gw').css({background:"transparent"});
            $('#next_gw').css({color:"#1b1b1b"});
            $('#alert_gw').css({transition:"1s"});
            $('#alert_gw').css({color:"#fff"});
            $('#alert_gw').text('입력값을 확인하세요');
        }    
        if(gw=="")
        {
            $('#quest0_1').prop("disabled", true);
                $('#next_gw').css({transition:"1s"});
                $('#next_gw').css({background:"transparent"});
                $('#next_gw').css({border:"1px solid #1b1b1b"});
                $('#next_gw').css({color:"#1b1b1b"});
                $('#alert_gw').css({transition:"1s"});
                $('#alert_gw').css({color:"#fff"});
                $('#alert_gw').text('　');
        }
}

function go_gw(){
    $('#start').css({transition:"1s"});
    $('#start').css({background:"transparent"});
    $('#start').css({border:"1px solid #1b1b1b"});
    $('#start').css({color:"#1b1b1b"});
    $('.quest00').attr("onclick","jump_quest(1)");


    
    
}

function go_weight(){
    $('#next_gw').css({transition:"1s"});
    $('#next_gw').css({background:"transparent"});
    $('#next_gw').css({border:"1px solid #1b1b1b"});
    $('#next_gw').css({color:"#1b1b1b"});
    $('.quest0').attr("onclick","jump_quest(2)");


    
}

function go_height(){
$('#next_nw').css({transition:"1s"});
    $('#next_nw').css({background:"transparent"});
    $('#next_nw').css({border:"1px solid #1b1b1b"});
    $('#next_nw').css({color:"#1b1b1b"});
    $('.quest2').attr("onclick","jump_quest(3)");

}

function go_age(){
$('#next_height').css({transition:"1s"});
    $('#next_height').css({background:"transparent"});
    $('#next_height').css({border:"1px solid #1b1b1b"});
    $('#next_height').css({color:"#1b1b1b"});
    $('.quest3').attr("onclick","jump_quest(4)");


}

function go_name(){
$('#next_age').css({transition:"1s"});
    $('#next_age').css({background:"transparent"});
    $('#next_age').css({border:"1px solid #1b1b1b"});
    $('#next_age').css({color:"#1b1b1b"});
    $('.quest4').attr("onclick","jump_quest(5)");


}

function go_phone(){
$('#next_name').css({transition:"1s"});
    $('#next_name').css({background:"transparent"});
    $('#next_name').css({border:"1px solid #1b1b1b"});
    $('#next_name').css({color:"#1b1b1b"});
    $('.quest5').attr("onclick","jump_quest(6)");


}

function go_result(){
$('#next_phone').css({transition:"1s"});
    $('#next_phone').css({background:"transparent"});
    $('#next_phone').css({border:"1px solid #1b1b1b"});
    $('#next_phone').css({color:"#1b1b1b"});
    
    $('#hidden_iframe11').attr("onload", "if(submitted){}");
     $('#form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfGDJUid1fs3aCASzgucwITBZtqO0gdC2QzLRbmAJlFO3Zoqg/formResponse");
    $('.quest6').attr("onclick","jump_quest(99)");


}

function ban() {
									
    $('#dzi1_ord').text('남성은 참여가 불가능합니다.');
    $('#dzi1_ord').css({color:"#fff"});

}

function now_weight() {
    var nw= $('#now-weight').val();
    var gw= $('#weight').val();
    var total= nw-gw;

    if(total>0)
    {
        $('#quest2_1').prop("disabled", false);
        $('#next_nw').css({transition:"1s"});
                $('#next_nw').css({background:"#1b1b1b"});
                $('#next_nw').css({border:"1px solid #fff"});
                $('#next_nw').css({color:"#fff"});
                $('#alert_nw').css({transition:"1s"});
                $('#alert_nw').css({color:"#fff"});
                $('#alert_nw').text('　');
    }

    if(gw==nw){
                $('#quest2_1').prop("disabled", true);
                $('#next_nw').css({transition:"1s"});
                $('#next_nw').css({background:"transparent"});
                $('#next_nw').css({border:"1px solid #1b1b1b"});
                $('#next_nw').css({color:"#1b1b1b"});
                $('#alert_nw').css({transition:"1s"});
                $('#alert_nw').css({color:"#fff"});
                $('#alert_nw').text('목표치와 같은 체중입니다.');
    }

    if(total<0){
        $('#quest2_1').prop("disabled", true);
                $('#next_nw').css({transition:"1s"});
                $('#next_nw').css({background:"transparent"});
                $('#next_nw').css({border:"1px solid #1b1b1b"});
                $('#next_nw').css({color:"#1b1b1b"});
                $('#alert_nw').css({transition:"1s"});
                $('#alert_nw').css({color:"#fff"});
                $('#alert_nw').text('목표치보다 낮은 체중입니다.');
    }


        if(nw<0)
        {
            
            $('#now-weight').val("");
            $('#quest2_1').prop("disabled", true);
            $('#next_nw').css({transition:"1s"});
            $('#next_nw').css({border:"1px solid #1b1b1b"});
            $('#next_nw').css({background:"transparent"});
            $('#next_nw').css({color:"#1b1b1b"});
            $('#alert_nw').css({transition:"1s"});
            $('#alert_nw').css({color:"#fff"});
            $('#alert_nw').text('입력값을 확인하세요');
        }    
        if(nw=="")
        {
            $('#quest2_1').prop("disabled", true);
                $('#next_nw').css({transition:"1s"});
                $('#next_nw').css({background:"transparent"});
                $('#next_nw').css({border:"1px solid #1b1b1b"});
                $('#next_nw').css({color:"#1b1b1b"});
                $('#alert_nw').css({transition:"1s"});
                $('#alert_nw').css({color:"#fff"});
                $('#alert_nw').text('　');
        }

        if(nw>200)
        {
            $('#quest2_1').prop("disabled", true);
                $('#next_nw').css({transition:"1s"});
                $('#next_nw').css({background:"transparent"});
                $('#next_nw').css({border:"1px solid #1b1b1b"});
                $('#next_nw').css({color:"#1b1b1b"});
                $('#alert_nw').css({transition:"1s"});
                $('#alert_nw').css({color:"#fff"});
                $('#alert_nw').text('입력값을 확인하세요');
        }
        
}

function now_height() {
    var nh= $('#now-height').val();
    if(nh>110 && nh<201)
    {
        $('#quest3_1').prop("disabled", false);
        $('#next_height').css({transition:"1s"});
                $('#next_height').css({background:"#1b1b1b"});
                $('#next_height').css({border:"1px solid #fff"});
                $('#next_height').css({color:"#fff"});
                $('#alert_height').css({transition:"1s"});
                $('#alert_height').css({color:"#fff"});
                $('#alert_height').text('　');
    }
    else {
            
                $('#quest3_1').prop("disabled", true);
                $('#next_height').css({transition:"1s"});
                $('#next_height').css({background:"transparent"});
                $('#next_height').css({border:"1px solid #1b1b1b"});
                $('#next_height').css({color:"#1b1b1b"});
                $('#alert_height').css({transition:"1s"});
                $('#alert_height').css({color:"#fff"});
                $('#alert_height').text('입력값을 확인하세요.');
        }
            if(nh<0)
        {
            
            $('#weight').val("");
            $('#quest3_1').prop("disabled", true);
            $('#next_height').css({transition:"1s"});
            $('#next_height').css({border:"1px solid #1b1b1b"});
            $('#next_height').css({background:"transparent"});
            $('#next_height').css({color:"#1b1b1b"});
            $('#alert_height').css({transition:"1s"});
            $('#alert_height').css({color:"#fff"});
            $('#alert_height').text('입력값을 확인하세요');
        }    
        if(nh=="")
        {
            $('#quest3_1').prop("disabled", true);
                $('#next_height').css({transition:"1s"});
                $('#next_height').css({background:"transparent"});
                $('#next_height').css({border:"1px solid #1b1b1b"});
                $('#next_height').css({color:"#1b1b1b"});
                $('#alert_height').css({transition:"1s"});
                $('#alert_height').css({color:"#fff"});
                $('#alert_height').text('　');
        }
}

function now_age() {
    var na= $('#now-age').val();
    if(na>24 && na<55)
    {
        $('#quest4_1').prop("disabled", false);
        $('#next_age').css({transition:"1s"});
                $('#next_age').css({background:"#1b1b1b"});
                $('#next_age').css({border:"1px solid #fff"});
                $('#next_age').css({color:"#fff"});
                $('#alert_age').css({transition:"1s"});
                $('#alert_age').css({color:"#fff"});
                $('#alert_age').text('　');
    }
    else {
            
                $('#quest4_1').prop("disabled", true);
                $('#next_age').css({transition:"1s"});
                $('#next_age').css({background:"transparent"});
                $('#next_age').css({border:"1px solid #1b1b1b"});
                $('#next_age').css({color:"#1b1b1b"});
                $('#alert_age').css({transition:"1s"});
                $('#alert_age').css({color:"#fff"});
                $('#alert_age').text('25세 ~ 54세 신청 가능');
        }
            if(na<0)
        {
            
      
            $('#quest4_1').prop("disabled", true);
            $('#next_age').css({transition:"1s"});
            $('#next_age').css({border:"1px solid #1b1b1b"});
            $('#next_age').css({background:"transparent"});
            $('#next_age').css({color:"#1b1b1b"});
            $('#alert_age').css({transition:"1s"});
            $('#alert_age').css({color:"#fff"});
            $('#alert_age').text('입력값을 확인하세요');
        }    
        if(na=="")
        {
            $('#quest4_1').prop("disabled", true);
                $('#next_age').css({transition:"1s"});
                $('#next_age').css({background:"transparent"});
                $('#next_age').css({border:"1px solid #1b1b1b"});
                $('#next_age').css({color:"#1b1b1b"});
                $('#alert_age').css({transition:"1s"});
                $('#alert_age').css({color:"#fff"});
                $('#alert_age').text('　');
        }
}

function name() {
    const regex1 = /^[|가-힣|]+$/;
       var nm= $('#now_name').val();
       if(regex1.test(nm) && nm.length>1)
       {
           $('#quest5_1').prop("disabled", false);
           $('#next_name').css({transition:"1s"});
                   $('#next_name').css({background:"#1b1b1b"});
                   $('#next_name').css({border:"1px solid #fff"});
                   $('#next_name').css({color:"#fff"});
                   $('#alert_name').css({transition:"1s"});
                   $('#alert_name').css({color:"#fff"});
                   $('#alert_name').text('　');

                   var name =nm; 

localStorage.setItem("name", JSON.stringify(name));
       }
       else {
               
                   $('#quest5_1').prop("disabled", true);
                   $('#next_name').css({transition:"1s"});
                   $('#next_name').css({background:"transparent"});
                   $('#next_name').css({border:"1px solid #1b1b1b"});
                   $('#next_name').css({color:"#1b1b1b"});
                   $('#alert_name').css({transition:"1s"});
                   $('#alert_name').css({color:"#fff"});
                   $('#alert_name').text('입력값을 확인하세요.');
           }
               
           if(nm=="")
           {
               $('#quest5_1').prop("disabled", true);
                   $('#next_name').css({transition:"1s"});
                   $('#next_name').css({background:"transparent"});
                   $('#next_name').css({border:"1px solid #1b1b1b"});
                   $('#next_name').css({color:"#1b1b1b"});
                   $('#alert_name').css({transition:"1s"});
                   $('#alert_name').css({color:"#fff"});
                   $('#alert_name').text('　');
           }

           if(nm=="테스트" || nm=="그냥" || nm=="아아아" || nm=="아아"|| nm=="냥냥" || nm.substr(0, 1) == "보"|| nm.substr(0, 1) == "시"|| nm.substr(0, 1) == "씨"|| nm.substr(0, 1) == "쓰"|| nm.substr(0, 1) == "그"|| nm.substr(0, 1) == "빨"|| nm.substr(0, 1) == "메"|| nm.substr(0, 1) == "랄"|| nm.substr(0, 1) == "씹"|| nm.substr(0, 1) == "좆"|| nm.substr(0, 1) == "뽀"|| nm.substr(0, 1) == "찌"|| nm.substr(0, 1) == "쫄"|| nm.substr(0, 1) == "짤"|| nm.substr(0, 1) == "쎅"|| nm.substr(0, 1) == "섹"|| nm.substr(0, 1) == "테"|| nm.substr(0, 1) == "존"|| nm.substr(0, 1) == "썅"|| nm.substr(0, 1) == "짱"|| nm.substr(0, 1) == "쌕"|| nm.substr(0, 1) == "테"|| nm.substr(0, 1) == "쎄")
           {
               $('#quest5_1').prop("disabled", true);
               $('#next_name').prop("disabled", true);
               $('#next_name').css({background:"#858788"});
               $('#next_name').css({color:"#fff"});
               $('#alert_name').css({transition:"1s"});
               $('#alert_name').css({color:"#343efa"});
               $('#alert_name').text('장난 신청은 불가능합니다!');
           }    

   }

  function maxLengthCheck(object){										
   if (object.value.length > object.maxLength){
       object.value = object.value.slice(0, object.maxLength);
   }    
   }

   function now_phone() {
    var ph= $('#phone').val();
    if(ph.substr(0, 3) == "010" && ph.length==11)
    {
        $('#quest6_1').prop("disabled", false);
        $('#next_phone').css({transition:"1s"});
                $('#next_phone').css({background:"#1b1b1b"});
                $('#next_phone').css({border:"1px solid #fff"});
                $('#next_phone').css({color:"#fff"});
                $('#alert_phone').css({transition:"1s"});
                $('#alert_phone').css({color:"#fff"});
                $('#alert_phone').text('　');
    }
    else {
            
                $('#quest6_1').prop("disabled", true);
                $('#next_phone').css({transition:"1s"});
                $('#next_phone').css({background:"transparent"});
                $('#next_phone').css({border:"1px solid #1b1b1b"});
                $('#next_phone').css({color:"#1b1b1b"});
                $('#alert_phone').css({transition:"1s"});
                $('#alert_phone').css({color:"#fff"});
                $('#alert_phone').text('올바른 번호를 입력하세요.');
        }
       
        if(ph<0)
        {
            
        
            $('#quest6_1').prop("disabled", true);
            $('#next_phone').css({transition:"1s"});
            $('#next_phone').css({border:"1px solid #1b1b1b"});
            $('#next_phone').css({background:"transparent"});
            $('#next_phone').css({color:"#1b1b1b"});
            $('#alert_phone').css({transition:"1s"});
            $('#alert_phone').css({color:"#fff"});
            $('#alert_phone').text('입력값을 확인하세요');
        }    
       
        if(ph=="")
        {
            $('#quest6_1').prop("disabled", true);
                $('#next_phone').css({transition:"1s"});
                $('#next_phone').css({background:"transparent"});
                $('#next_phone').css({border:"1px solid #1b1b1b"});
                $('#next_phone').css({color:"#1b1b1b"});
                $('#alert_phone').css({transition:"1s"});
                $('#alert_phone').css({color:"#fff"});
                $('#alert_phone').text('　');
        }

        if(ph=="01011111111" || ph=="01022222222"|| ph=="01033333333"|| ph=="01044444444"|| ph=="01055555555"|| ph=="01066666666"|| ph=="01077777777"|| ph=="01088888888"|| ph=="01099999999"|| ph=="01000000000"|| ph=="01012121212"|| ph=="01012341234"|| ph=="01034343434"|| ph=="01012345678" || ph=="01000000001" || ph=="01000000002" || ph=="01000000003" || ph=="01000000004" || ph=="01000000005" || ph=="01000000006" || ph=="01000000007" || ph=="01000000008" || ph=="01000000009" || ph=="01000000010")
        {
                 $('#quest6_1').prop("disabled", true);
                $('#next_phone').css({transition:"1s"});
                $('#next_phone').css({background:"transparent"});
                $('#next_phone').css({border:"1px solid #1b1b1b"});
                $('#next_phone').css({color:"#1b1b1b"});
                $('#alert_phone').css({transition:"1s"});
                $('#alert_phone').css({color:"#fff"});
                $('#alert_phone').text('올바른 번호를 입력하세요.');
        }
}

function oo()  {
						
    const query = '.input_font:checked';
    const selectedEls = 
        document.querySelectorAll(query);
    

    let result = '';
    
    selectedEls.forEach((el) => {
      result += el.value + '/ ';
   
    });

            var cast =result; 

            localStorage.setItem("cast", JSON.stringify(cast));
}


function pp(){
						   
    var ss = $('input[name=result1]:checked').val();


    
    jump_quest(99);
                                         }

            function jump_quest(i){
            
                
setTimeout(function() {
$('.backg').hide();
$('#quest'+i+'_wrap').show();
$(window).scrollTop(0);	
}, 400);

       if(i==99){
      var ss = $('input[name=result1]:checked').val();
      const random_number = Math.floor(Math.random() * 100); 


   var effect = setInterval(scroll, 3000);
              setTimeout(function(){clearInterval(effect)}, 4300);

$("#box").animate({width: "100%"},5300);
           



setTimeout(function() {
   /*원하는 검사 결과 링크로 이동*/
    // window.location.href=( "./cutncut.html");
    jump_quest(100);
}, 5300);						
}

}


   $(function(){
    $('#now_name').bind("click keyup",name);
    $(".input_font").on("click",oo);
    $('.result').on("click",pp);
  })