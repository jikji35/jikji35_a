    // pagecreate 이벤트를 걸어줍니다.
$(document).one("pagecreate",".eventPage",function() {

    //다음 페이지로 이동하는 함수입니다.
    function navnext( next ) {
        $( ":mobile-pagecontainer" ).pagecontainer("change",next+".html",{ 
            transition:"slide"
        });
    }
    
    //이전 페이지로 이동하는 함수입니다.
    function navprev(prev){
        $(":mobile-pagecontainer").pagecontainer("change",prev+".html",{
            transition:"slide",
            reverse:true
        });
    }
    
    // jquery on 을 사용하여 swipeleft 이벤트를 걸어줍니다.
    $(document).on("swipeleft",".ui-page",function(event){
    
    // jqmData 선택자를 이용하여 next 속성을 가져옵니다. ( 위 html 파일에서 data-next 로 선언되어 있습니다.)
        var next = $(this).jqmData("next");
        if(next){
            navnext(next);  // 다음페이지로 이동하는 함수를 실행합니다.
        }
    });
    
    // jquery on 을 사용하여 swipeleft 이벤트를 걸어줍니다.
    $(document).on("swiperight",".ui-page",function(event){
        var prev = $(this).jqmData("prev");
        if(prev){
            navprev(prev);
        }
    });
    
});
