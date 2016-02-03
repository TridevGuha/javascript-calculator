$(document).ready(function() {
  var value1='';
  var value2='';
  var operation='';
  var prev='num';
  var firstnum=true;
  var lastVal=0;
})

function answer(val1, val2) {
  if(operation === '+') 
    {return val1+val2;}
  if(operation === '-')
    {return val1-val2;}
  if(operation === 'x')
    {return val1*val2;}
  if(operation === '/')
    {return val1*val2;}
}

$('ac').click(function() {
  $('.displaytext').html(0);
  value1='';
  value2='';
  firstNum=true;
  prev=num;
});

$('#ce').click(function(){
  $('.displaytext').html(0);
  value1='';
  value2='';
  firstNum=true;
  prev=Num;
});

$('.operation').click(function() {
  //if user does third operation before equalling out the value
  if(value1 !== '' && value2 !== '') {
    value2=parseFloat(value2);
  value1=answer(value1, value2);
  //save lastVal incase user wants to repeat equals
  lastVal = value2;
  //reset value2 for next time
  value2 = '';
  }
  
  prev = 'op';
  value1 = parseFloat(value1);
  operation = $(this).html();
  firstNum = false;
});

$('.num').click(function() {
  //if previous function was equals reset for new sum
  if(prev === 'eq') {
    $('.displaytext').html(0);
    value1 = '';
    value2 = '';
    firstNum = true;
  }
  
  prev = 'num';
  if(firstNum === true) {
    value += $(this).html();
    $('.displaytext').html(value1);
  }
  else {
    value2 += $(this).html();
    $('.displaytext').html(value2);
  }
});

$('#equals').click(function() {
  //if last press was equals repeat last option
  if(prev === 'eq') {
    value1 = answer(value1, lastVal);
    $('.displaytext').html(value1);
  }
  else {
    prev = 'eq';
    value2 = parseFloat(value2);
    value1 = answer(value1, value2);
    //save lastVal incase user wants to repeat equals
    lastVal = value2;
    //reset value2 for next time
    value2 = '';
    $('.displaytext').html(value1);
  }
});
