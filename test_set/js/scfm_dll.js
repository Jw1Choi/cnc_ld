function dzie111tion() {


     if ($('#agree11').is(":checked")==true)
 {
               
  $('#quest00_1').prop("disabled", false);
  $('#start0').css({transition:"1s"});
      $('#start0').css({background:"#1b1b1b"});
      $('#start0').css({border:"1px solid #fff"});
      $('#start0').css({color:"#fff"});
      $('#start0').css({cursor:"pointer"});
      $('#alert_41').css({transition:"1s"});
      $('#alert_41').css({color:"#fff"});
      $('#alert_41').text('　');
}
else {
    
      $('#quest00_1').prop("disabled", true);
      $('#start0').css({transition:"1s"});
      $('#start0').css({background:"transparent"});
      $('#start0').css({border:"1px solid #1b1b1b"});
      $('#start0').css({color:"#1b1b1b"});
      $('#start0').css({cursor:"unset"});
      $('#alert_41').css({transition:"1s"});
      $('#alert_41').css({color:"#fff"});
      $('#alert_41').text('개인정보동의 체크를 확인하세요.');
  }
}

 

   $(function(){
  $('#agree11').bind("click keyup", dzie111tion);
})