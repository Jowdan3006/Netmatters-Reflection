const depart = [
    'web',
    'it',
    'tel',
    'sof',
    'mar',
    'sec'
];
for (let dep of depart) {
  $(`.carousel-${dep}`).css({backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.9) , rgba(0,0,0,.2) 70%, rgba(0,0,0,0)), url(../img/main-carousel-${dep}.jpg`})
}

// ---- input nav menu from existing desktop navigation ------------------ //

for (let dep of depart) {
    let nav = `<div class="sd-nav sd-${dep}">`;
    nav = nav + $(`.nav-${dep}.nav-pa`).clone('a:only-of-type').html() + '</div>';
    let sub = `<div class="sd-sub sd-${dep}">`;
    sub = sub + $(`.sub.sub-${dep}`).clone().html() + '</div>';
    $('.sd-mobile').append(nav + sub);
};


// ---- ham button display and side nav animation ------------------------ //

$('#nav-ham').css('display', 'grid');
$('#nav-ham').on('click', () => {
// $(window).on('load', () => { // testing
    if ($('.side-nav').css('width') <= '275px') {
        $('.main-view').animate({
            left: "-275px"
        }, 200);
        $('#view-shadow').css({display: 'block', visibility: "visible"}).animate({
            opacity: "1.0",
            left: "-275px"
        }, 200);
    } else {
        $('.main-view').animate({
            left: "-350px"
        }, 200);
        $('#view-shadow').css({display: 'block', visibility: "visible"}).animate({
            opacity: "1.0",
            left: "-350px"
        }, 200);
    }
});

$(window).on('resize', () => { // testing
    if ($('#view-shadow').css('display') != 'none') {
        if ($('.side-nav').css('width') > '275px') {
            $('.main-view').animate({
                left: "-350px"
            }, {
                duration: 200,
                queue: false
            });
            $('#view-shadow').animate({
                left: "-350px"
            }, {
                duration: 200,
                queue: false
            });
        } else {
            $('.main-view').animate({
                left: "-275px"
            }, {
                duration: 200,
                queue: false
            });
            $('#view-shadow').animate({
                left: "-275px"
            }, {
                duration: 200,
                queue: false
            });
        }
    }
});

// ---- side nav close on shadow click ----------------------------------- //

$('#view-shadow').on('click', () => {
    $('.main-view').animate({
        left: "0px"
    }, 200);
    $('#view-shadow').css({display: 'none', visibility: "hidden"}).animate({
        left: "0",
        opacity: "0"
    }, 200);
});


// ---- hover effects for side nav --------------------------------------- //

for (let dep of depart) {
    $(`.sd-sub.sd-${dep}`).mouseenter( () => {
        $(`.sd-nav.sd-${dep}`).addClass(`${dep}-hov`);
    }).mouseleave( () => {
        $(`.sd-nav.sd-${dep}`).removeClass(`${dep}-hov`);
    });
}

$(`.sd-list`).mouseenter( (e) => {
    $(e.currentTarget).prev('.sd-head').addClass('full-hov');
}).mouseleave( (e) => {
    $(e.currentTarget).prev('.sd-head').removeClass('full-hov');
});



// ---- cookie stuff ----------------------------------------------------- //

function getCookie(name){
    let re = new RegExp(name + "=([^;]+)");
    let value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

if (getCookie('username') === null) {
    $('.my-cookie').css({display: 'block', visibility: 'visible'}).animate({
        opacity: '1.0'
    }, {
        duration: 1000
    });
};

// if (getCookie('username') != null) {

//     // ---- display popup if cookie is detected for testing -------------- //

//     $('.my-cookie').html('<div class="cookie-wrap"><p>Eat your cookie? <button class="cookie-okay">Okay</button></p></div>');
//     $('.my-cookie').css({display: 'block', visibility: 'visible'}).animate({
//         opacity: '1.0',
//     }, {
//         duration: 1000
//     });
// };

$('.cookie-okay').on('click', () => {
    if (getCookie('username') === null) {
        document.cookie = 'username=swag; path=/';
    } else {
        document.cookie = 'username=; expires = Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    }

    $('.my-cookie').animate({
        opacity: '0'
    }, {
        duration: 1000
    });
    setTimeout( () => { $('.my-cookie').css({ display: 'none' }) }, 1000);
});

