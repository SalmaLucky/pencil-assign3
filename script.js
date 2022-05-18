/*progressbar*/
$(document).ready(function () {


  jQuery('.skill-per').each(function () {
    var $this = $(this);
    var per = $this.data('per');
    $this.css("width", per + '%');
    jQuery({ animatedValue: 0 }).animate({ animatedValue: per }, {
      duration: 1000,
      step: function () {
        $this.attr('per', Math.floor(this.animatedValue));
      },
      complete: function () {
        $this.attr('per', Math.floor(this.animatedValue));
      }
    })

  });

  /*gallery*/


  jQuery('.category').click(function () {


    //jQuery(this).addClass('active').siblings().removeClass('active');
    //jQuery(this).addClass("active");
    const value = jQuery(this).attr('data-filter');
    if (value == 'full-gallery') {
      jQuery('.image').show('1000');
    }
    else {
      jQuery('.image').not('.' + value).hide('1000');
      jQuery('.image').filter('.' + value).show('1000');
    }
    jQuery('.category').click(function () {
      jQuery(this).addClass('active').siblings().removeClass('active');
    });
  });


  // jQuery methods go here...
  //counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

  
  //story
  $('.owl-carousel').owlCarousel({
   items: 2,
   loop:true,
   autoplay:true,
    margin:30,
    
    
});

});