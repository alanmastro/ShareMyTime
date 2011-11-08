/*********************
//* jQuery Multi Level CSS Menu #2- By Dynamic Drive: http://www.dynamicdrive.com/
//* Last update: Nov 7th, 08': Limit # of queued animations to minmize animation stuttering
//* Menu avaiable at DD CSS Library: http://www.dynamicdrive.com/style/
*********************/

//Specify classes to li that has childern ul:
var arrowclasses={down:['downarrow'], right:['rightarrow']}

var jqueryslidemenu={

animateduration: {over: 250, out: 100}, //duration of slide in/ out animation, in milliseconds

buildmenu:function(menuid, arrowsvar){
	jQuery(document).ready(function($){
		var $mainmenu=$("#"+menuid+">ul");
		var $headers=$mainmenu.find("ul").parent();
		$headers.each(function(i){
			var $curobj=$(this);
			var $subul=$(this).find('ul:eq(0)');
			this._dimensions={w:this.offsetWidth, h:this.offsetHeight, subulw:$subul.outerWidth(), subulh:$subul.outerHeight()}
			this.istopheader=$curobj.parents("ul").length==1? true : false;
			$curobj.children("a:eq(0)").addClass(this.istopheader? arrowsvar.down[0] : arrowsvar.right[0]);
			
			// HOVER INTENT:
                var hoverOver = function(e) {
                    var $targetul = $(this).children("ul:eq(0)")
                    this._offsets = {
                        left: $(this).offset().left,
                        top: $(this).offset().top
                    }
                    var menuleft = this.istopheader ? 0 : this._dimensions.w
                    menuleft = (this._offsets.left + menuleft + this._dimensions.subulw > $(window).width()) ? (this.istopheader ? -this._dimensions.subulw + this._dimensions.w : -this._dimensions.w) : menuleft
                    if ($targetul.queue().length <= 1) //if 1 or less queued animations
                        $targetul.css({
                            left: menuleft + "px",
                            width: this._dimensions.subulw + 'px'
                        }).slideDown(jqueryslidemenu.animateduration.over)
                }
                var hoverOut = function(e) {
                    var $targetul = $(this).children("ul:eq(0)")
                    $targetul.slideUp(jqueryslidemenu.animateduration.out)
                } //end hover
    
                var config = {    
                    over: hoverOver, // function = onMouseOver callback (REQUIRED)    
                    timeout: 500, // number = milliseconds delay before onMouseOut    
                    out: hoverOut // function = onMouseOut callback (REQUIRED)    
                };
    
                $curobj.hoverIntent(config); //end hover
			$curobj.click(function(){
				$(this).children("ul:eq(0)").hide()
			});
		}) //end $headers.each()
		$mainmenu.find("ul").css({display:'none', visibility:'visible'});
	}); //end document.ready
}
};

//build menu with ID="main-menu-" on page:
jqueryslidemenu.buildmenu("main-menu", arrowclasses);