function main (){
    function activeTabs(){
        $('.tabs').removeClass('active')
        $(this).addClass('active')
        let dataId = $(this).attr('data-id')
        $('.contents').css('display','none')
        let concatContentData = "[content-data-id ='" + dataId +"']"
        $(concatContentData).fadeIn(400)
    }
    $('.tabs').click(activeTabs)
   
}
$(document).ready(main)