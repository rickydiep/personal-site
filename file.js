//NAVBAR Scroll Color Change
$(document).ready(function(){   
    $(this).scrollTop(0);    
    var scroll_start = 0;
    var startchange = $('#about');
    var offset = startchange.offset();
    if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top-80) {
        $('#mynav').css('visibility', 'visible');
           $("#mynav").css('background-color', '#f0f0f0');
        } else if(scroll_start == 0){
            $('#mynav').css('visibility', 'visible');
            $('#mynav').css('background-color', 'transparent');
        }
         else{
            $('#mynav').css('visibility', 'hidden');
        }
    });
     }
    $('#navContents a').on('click', function(){
        $('#navbarNavAltMarkup').removeClass('show');
    });

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop:Infinity,
        typeSpeed: 50,
        backSpeed: 25,
        smartBackspace: true, 
        backDelay: 1200,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
      });


      $('ev.currentTarget').click(function(){
		var $this = $(this);
		$this.toggleClass('SeeMore');
		if($this.hasClass('SeeMore')){
            console.log(this)
			$this.html('<button class="SeeMore text-black btn btn-link btn-sm" data-toggle="collapse" data-target="#collapseMsft" aria-expanded="true" aria-controls="collapseMsft">Less  <i class="fa fa-angle-double-down" aria-hidden="true"></i></button>');	
		} else {
            console.log(this)
            $this.html('<button class="SeeMore text-black btn btn-link btn-sm" data-toggle="collapse" data-target="#collapseMsft" aria-expanded="true" aria-controls="collapseMsft">Show More   <i class="fa fa-angle-double-up" aria-hidden="true"></i></button>');		
		}
	});
 });




