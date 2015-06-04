 /*-Mobile_nav-*/ 
          $('.header_top button').click(function(){ 
          var $target = $($(this).data('target')); 
          if(!$target.hasClass('in'))
          $('.header_top .in').removeClass('in').height(0);
      });
  
        /*--Mobile_nav-*/
 
  /*MAP POP*/
  $(".maps").click( function(){     
    var googleIframe = $('.pop_map');
    googleIframe.attr('src',googleIframe.attr('src')+'');  
  });
  
 
     
     /*SHOW MORE FILTER*/
$(document).ready(function () {        
     
    $(".content_change a").click(function () {
        $(this).html("Schließen").toggleClass("lesstext");
        $('.lesstext').html("Öffnen");

    });
});    
  
   /*PHOTOS_VEDIOS POP*/
  $(".controls").hide();
 $(".photos").click( function(){    
 //$(".controls").show();  
  if ($("li").hasClass("active"))
  {
    $(".controls").show()
  }  
 
  });

/*SERACH FIELD*/
$(document).ready(function () {
    $('.tooglesearch').click(function () {
        $('.searchbanner').toggle('fast')
    });

});

/*TREEVIEW*/
$(document).ready(function () {
    $("#browser").treeview({
        toggle: function () {
            console.log("%s was toggled.", $(this).find(">span").text());
        }
    });

    $("#add").click(function () {
        var branches = $("<li><span class='folder'>New Sublist</span><ul>" +
                "<li><span class='file'>Item1</span></li>" +
                "<li><span class='file'>Item2</span></li></ul></li>").appendTo("#browser");
        $("#browser").treeview({
            add: branches
        });
    });

});

/*CHECKBOX NEWSLETTER*/
$(".newsletter li").click(function () {
    var checkbox = $(this).find("input[type='checkbox']");
    if (checkbox.attr("checked") == "") {
        checkbox.attr("checked", "true");
    } else {
        checkbox.attr("checked", "");
    }
});
/*SHOW MORE FILTER*/
$(document).ready(function () {        
    $('.showmore').html(" <i class='glyphicon glyphicon-triangle-bottom'></i>Show More");
    $(".showmore").click(function () {
        $(this).html("<i class='glyphicon glyphicon-triangle-bottom'></i>Show More").toggleClass("lesstext").closest("div").prev("ul").toggleClass("expandul");
        $('.lesstext').html("<i class='glyphicon glyphicon-triangle-top'></i>Show Less");

    });
});

/*RANGE SLIDER*/
$(document).ready(function () {
    $("#slider-range").slider({
        range: true,
        min: 500,
        max: 5000,
        values: [20, 3000],
        slide: function (event, ui) {
            $("#range").html("$" + ui.values[ 0 ]);
            $("#range_rt").html("$" + ui.values[ 1 ]);
        }
    });
    $("#range").html("$" + $("#slider-range").slider("values", 0));
    $("#range_rt").html("$" + $("#slider-range").slider("values", 1));
});


/*Counter*/
 
                $('#AddButton').click( function() {
                    var counter = $('#TextBox').val();
                    counter++ ;
                    $('#TextBox').val(counter);
                });
                
                 $('#DeleteButton').click( function() { 
               var counter = (parseInt($('#TextBox').val() , 10) - 1);
               // counter-- ;
               $("#TextBox").val((counter-1) < 1 ? 1 :(counter -1));
               
                });
                
                  $('#AddButton2').click( function() {
                    var counter = $('#TextBox2').val();
                    counter++ ;
                    $('#TextBox2').val(counter);
                });
                
                 $('#DeleteButton2').click( function() { 
               var counter = (parseInt($('#TextBox2').val() , 10) - 1);
               // counter-- ;
               $("#TextBox2").val((counter-1) < 1 ? 1 :(counter -1));
               
                });
                
                
                
                $('.premium').hide();
                 $('.travel_insurance').hide();
                  $('.family_travel').hide();
              
                $('.premium2').hide();
                 $('.travel_insurance2').hide();
                 
                $(".select_action").change(function () {
                    var select = $(this).val();
                    if (select == 'prem') {
                        //some code
                 $('.premium').show();
                  $('.standard').hide();
                 $('.travel_insurance').hide();
                  $('.family_travel').hide();
                    }
                    else if (select == 'insur')  {
                     $('.premium').hide();
                  $('.standard').hide();
                 $('.travel_insurance').show();
                  $('.family_travel').hide();
                    }
                    else if (select == 'family')  {
                    $('.premium').hide();
                  $('.standard').hide();
                 $('.travel_insurance').hide();
                  $('.family_travel').show();
                    }
                    
                    else if (select == 'stand')  {
                     $('.premium').hide();
                  $('.standard').show();
                 $('.travel_insurance').hide();
                  $('.family_travel').hide();
                    }
                    
                   
                if (select == 'prem2') {
                        //some code
                 $('.premium2').show();
                  $('.standard2').hide();
                 $('.travel_insurance2').hide();
                  $('.family_travel2').hide();
                    }
                    else if (select == 'insur2')  {
                     $('.premium2').hide();
                  $('.standard2').hide();
                 $('.travel_insurance2').show();
                  $('.family_travel2').hide();
                    }
                    else if (select == 'family2')  {
                    $('.premium2').hide();
                  $('.standard2').hide();
                 $('.travel_insurance2').hide();
                  $('.family_travel2').show();
                    }
                    
                    else if (select == 'stand2')  {
                     $('.premium2').hide();
                  $('.standard2').show();
                 $('.travel_insurance2').hide();
                  $('.family_travel2').hide();
                    }
                      
                });


/*=========PAYEMENT=============*/
           
 
 $('#creditcard').is() ;
  $('#creditcard').prop('checked', true);
  $('.paypalcard_form').hide();
    $('#creditcard').click(function () {
        if ($(this).is(':checked')) {
            $('.creditcard_form').show();
              $('.paypalcard_form').hide();
        } 
    });
 
      $('#debitcard').click(function () {
        if ($(this).is(':checked')) {
            $('.creditcard_form').hide();
             $('.paypalcard_form').hide();
        } 
    });
    
     $('#moneycard').click(function () {
        if ($(this).is(':checked')) {
            $('.creditcard_form').hide();
             $('.paypalcard_form').hide();
        } 
    });
    
     $('#paypalcard').click(function () {
        if ($(this).is(':checked')) {
            $('.creditcard_form').hide();
               $('.paypalcard_form').show();
        } 
    });
 
  $('#onlinecard').click(function () {
        if ($(this).is(':checked')) {
            $('.creditcard_form').hide();
             $('.paypalcard_form').hide();
        } 
    });