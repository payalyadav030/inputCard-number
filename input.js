$(".input").keyup(function () {
  
    if (this.value.length == this.maxLength) {
      $(this).next('.input').focus();
    }
   
});
$('.input').keydown(function(e) {
    
    // console.log($(this).val() =='')
    if ((e.which == 8 || e.which == 46) && $(this).val() =='') {
        $(this).prev('input').focus();
    }
});

