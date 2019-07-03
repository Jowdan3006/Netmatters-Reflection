// const sideNav = ``;



$('#nav-ham').css('display', 'grid');
$('#nav-ham').on('click', () => {
    $('.main-view').animate({
        left: "-275px"
    }, 200);
    $('#view-shadow').css({display: 'block', visibility: "visible"}).animate({
        opacity: "1.0",
        left: "-275px"
    }, 200);
});

$('#view-shadow').on('click', () => {
    $('.main-view').animate({
        left: "0px"
    }, 200);
    $('#view-shadow').css({display: 'none', visibility: "hidden"}).animate({
        left: "0",
        opacity: "0"
    }, 200);
});