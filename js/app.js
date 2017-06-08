$(function(){
  var screenVal = $('#input-number');
  $('input:button').click(function(){
    let eachNumber = $(this).val();
    let currentScreen = screenVal.val();
    currentScreen += eachNumber;
    screenVal.val(currentScreen);
    if($(this).val() == 'C'){
      screenVal.val('');
    }
  });

  $('button').click(function(event){
    event.preventDefault();
    console.log('si');
    screenVal.val(eval(screenVal.val()));
  });
});
