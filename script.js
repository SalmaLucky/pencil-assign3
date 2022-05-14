/*progressbar*/
$(document).ready(function(){

  
jQuery('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.data('per');
    $this.css("width",per+'%');
    jQuery({animatedValue: 0}).animate({animatedValue: per},{
        duration: 1000,
        step: function(){
            $this.attr('per', Math.floor(this.animatedValue));
        },
        complete: function(){
          $this.attr('per', Math.floor(this.animatedValue));
        }
    })
  
  });
  /*counter*/
  jQuery('.count-item').counterUp({
    delay:10,
    time:1000
  });
  /*gallery*/
  
    
    jQuery('.category').click(function(){
      alert('hello');

      //jQuery(this).addClass('active').siblings().removeClass('active');
      //jQuery(this).addClass("active");
    });


 // jQuery methods go here...

});