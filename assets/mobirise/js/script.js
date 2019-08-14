// $(document).ready(function() {
    var current = 1;
    var next = 1;
    var stopSlider = false;

    $("#btn-callback-carousel").on("click", function(){
      $("#callback-modal").modal('show');
    });
    
    $("#btn-callback-phone-icon").on("click", function(){
      $("#callback-modal").modal('show');
      $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-navbar").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#btn-callback-footer").on("click", function(){
        $("#callback-modal").modal('show');
        $("#inputSite").val('Клиент заказал обратный звонок');
    });

    $("#lessons-1").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-2").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-3").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-4").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-5").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-6").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#lessons-7").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-1").on("click", function(){
        $("#modal-lessons1").modal('show');
    });
    
    $("#call-form-2-eng").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-2-it").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-3-12").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-3-34").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-3-56").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-3-78").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-4-34").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#call-form-4-56").on("click", function(){
        $("#modal-lessons1").modal('show');
    });

    $("#details1").on("click", function(){
        $("#modal-info1").modal('show');
    });

    $("#details2").on("click", function(){
        $("#modal-info2").modal('show');
    });

    $("#details3").on("click", function(){
        $("#modal-info3").modal('show');
    });

    $("#details4").on("click", function(){
        $("#modal-info4").modal('show');
    });

    $("#btn-callback-carousel-ok").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#callBackMain").on("click", function(){
      $("#callback-modal").modal('hide');
    });

    $("#success-modal-ok").on("click", function(){
      $("#success-modal").modal('hide');
    });

    function slideTeachers() {
        if (!stopSlider) {
          if (next < 7) {
            next = next + 1;
            $("#teacher-"+current).css('display','none');
            $("#teacher-"+next).css('display','block');
            current = next;
          } else {
              next = 1;
              $("#teacher-"+current).css('display','none');
              $("#teacher-"+next).css('display','block');
              current = next;
          }
        }
    };

    function slideToLeft() {
        if(current !== 1) {
            stopSlider = true;
            for(var i = 1; i < 8; i++) {
                $("#teacher-"+i).css('display','none');
            }
            current -= 1;
            next = current;
            $("#teacher-"+current).css('display','block');
        }
    };

    function slideToRight() {
        if(current !== 7) {
            stopSlider = true;
            for(var i = 1; i < 8; i++) {
                $("#teacher-"+i).css('display','none');
            }
            next = current + 1;
            current = next;
            $("#teacher-"+next).css('display','block');
        }
    };

    

    window.setInterval(function() {
      function getDateNow() {
        var n =  new Date();
        var y = n.getFullYear();
        var m = n.getMonth() + 1;
        m = m.toString().length < 2 ? '0'+m : m;
        var d = n.getDate();
        d = d.toString().length < 2 ? '0'+d : d;
        var h = n.getHours();
        h = h.toString().length < 2 ? '0'+h : h;
        var min = n.getMinutes();
        min = min.toString().length < 2 ? '0'+min : min;
        $('#inputTime').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime2').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
        $('#inputTime3').val(d + '-' + m + '-' + y + ' ' + h + ':' + min);
      };

      getDateNow();
      slideTeachers();
    }, 2500);
//   });

  $(document.body).on('hide.bs.modal,hidden.bs.modal', function () {
    $('body').css('padding-right','0');
  });

  $('#form-class').submit(function(e) {
    e.preventDefault();
    $.ajax({
         type: 'POST',
         url: 'https://jumprock.co/mail/noproblems',
         data: $(this).serialize(),
         beforeSend: function(params) {
          
         },
         complete: function(params) {
          
         },
         success: function(params) {
            $('#modal-lessons1').modal('hide');
            $('#success-modal').modal('show');
         },
    });
  });

  $('#form-class2').submit(function(e) {
    e.preventDefault();
    $.ajax({
         type: 'POST',
         url: 'https://jumprock.co/mail/noproblems',
         data: $(this).serialize(),
         beforeSend: function(params) {
          
         },
         complete: function(params) {
          
         },
         success: function(params) {
            $('#modal-lessons1').modal('hide');
            $('#success-modal').modal('show');
         },
    });
  });
  
  $('#form-phone').submit(function(e) {
    e.preventDefault();
    $.ajax({
         type: 'POST',
         url: 'https://jumprock.co/mail/noproblems',
         data: $(this).serialize(),
         beforeSend: function(params) {
          
         },
         complete: function(params) {
          
         },
         success: function(params) {
            $('#callback-modal').modal('hide');
            $('#success-modal').modal('show');
         },
    });
  });
