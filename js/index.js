// 로딩인트로1
// var i=0;
// var timer = setInterval(add, 20)
// function add(){
//     i++
//     if (i>100) {
//         clearInterval(timer)
//         $('.introAni').fadeOut(500)
//         return false
//     }
//     $('.introAni .box > p').eq(1).text(i+'%')
//     $('.introAni .box .barani').css({
//         width:i+"%"
//     })
// }

// 로딩인트로2
$(window).on('load', function(){
    setTimeout(function(){
        $('.introBox').fadeOut(500)
    }, 1000)
})
$('.introBox').on('click', function(){
    $(this).fadeOut(100)
})

// 메인슬라이드 : 슬릭슬라이더 연결
$(".article1 .slide_group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 4500, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive:[{
        breakpoint:1025,
        settings:{
            arrows: false
        }
    }]
})

var elPlaystop = document.querySelector('.article1 .playstop')
var ibtn = elPlaystop.childNodes
elPlaystop.addEventListener('click', function(){
    if ( ibtn[0].classList.contains('fa-pause') ) {
        $('.article1 .slide_group').slick('slickPause')
        ibtn[0].classList.remove('fa-pause')
        ibtn[0].classList.add('fa-play')
    } else {
        $('.article1 .slide_group').slick('slickPlay')
        ibtn[0].classList.remove('fa-play')
        ibtn[0].classList.add('fa-pause')
    }
})


var aboutNear = $('#ABOUT').offset().top
var skillNear = $('#SKILL').offset().top
var portNear = $('#PORTFOLIO').offset().top
var portNearAni = portNear - $(window).height()/3
// var contactNear = $('#contact').offset().top
var lastNear = $('body').height() - $(window).height()
$('.nav .depth > li').on('click', function(e){
    e.preventDefault()
    var num = $(this).index()
    /* if (num===0) {
        $('html').animate({ scrollTop:0 }, 500) 
    } else if (num===1) {
        $('html').animate({ scrollTop:aboutNear}, 500) 
    } else if (num===2) {
        $('html').animate({ scrollTop:skillNear}, 500)
    } else if (num===3) {
        $('html').animate({ scrollTop:portNear}, 500) 
    }
    else {
        $('html').animate({ scrollTop:contactNear}, 500)
    } */
    switch(num) {
        case 0 : $('html').stop().animate({ scrollTop:0 }, 700); break;
        case 1 : $('html').stop().animate({ scrollTop:aboutNear }, 700); break;
        case 2 : $('html').stop().animate({ scrollTop:skillNear }, 700); break;
        case 3 : $('html').stop().animate({ scrollTop:portNear }, 700); break;
        case 4 : $('html').stop().animate({ scrollTop:lastNear }, 700); 
    }

})


function draw(jumsu, cname) {
    var count=0;
    var stop = setInterval(function(){
        count++
        if (count<=jumsu) {
            $(cname).find('.myscore').text(count+'%').css({
                width:count+'%'
            })
            
        } else {
            clearInterval(stop)
            return false
        }
    },10)
}



$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct < aboutNear ) {
        $('.depth > li').eq(0).addClass('on')
        .siblings().removeClass('on')
    } else if ( sct>=aboutNear && sct<skillNear ) {
        $('.depth > li').eq(1).addClass('on')
        .siblings().removeClass('on')
        $('.skill').removeClass('on').find('.myscore').css({
            width:'0%'
        })
    } else if ( sct>=skillNear && sct<portNear ) {
        $('.depth > li').eq(2).addClass('on')
        .siblings().removeClass('on')
        if ( !$('.skill').hasClass('on') ) {
            $('.skill').addClass('on')
            draw(80, '.html')
            draw(70, '.css')
            draw(50, '.script')
            draw(40, '.jquery')
            draw(30, '.react')
        }
    } else if ( sct>=portNear && sct<lastNear ) {
        $('.depth > li').eq(3).addClass('on')
        .siblings().removeClass('on')
        $('.skill').removeClass('on').find('.myscore').css({
            width:'0%'
        })
    } else {
        $('.depth > li').eq(4).addClass('on')
        .siblings().removeClass('on')
    }
})



$('.article').on('mousewheel', function(e, delta){
    // 0보다 크면 위로, 0보다 작으면 아래로
    if (delta>0) {
        var prev = $(this).prev().offset().top
        $('html').stop().animate({
            scrollTop:prev
        }, 700, 'linear')
    } else if (delta<0) {
        var next = $(this).next().offset().top
        $('html').stop().animate({
            scrollTop:next
        }, 700, 'linear')
    }
})


// 맨위로 버튼 클릭시 부드럽게 스크롤시키기
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct>=50 && !$('#header').hasClass('on') ) {
        $('#header').addClass('on')
        $('.gotop').addClass('on')
    } else if ( sct<50 && $('#header').hasClass('on') ) {
        $('#header').removeClass('on')
        $('.gotop').removeClass('on') 
    }
})

$('.gotop').on('click',function(e){
    e.preventDefault()
    $('html').animate({
        scrollTop:0
    }, 600)
})


var linum;
$('.gallery li').on('click', function(e){
    e.preventDefault()
    linum = $(this).index()
    var href = $(this).find('a').attr('href')
    var src = $(this).find('img').attr('src')
    var alt = $(this).find('img').attr('alt')
    $('body').append('<div class="outbox"><div class="inbox"></div></div>')
    $('.outbox').css({
        position:'fixed', top:0, left:0, right:0, bottom:0,
        zIndex:'999999', background:'rgba(0,0,0,0.8)'
    })
    $('.inbox').css({
        position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)'
    })
    .append(`<a href="${href}" target="_blank"><img src="${src}" alt="${alt}"></a>`)
    .append('<button class="close"><i class="fas fa-times-circle"></i></button>')
    .append('<button class="arrow prev"><i class="fas fa-angle-left"></i></button><button class="arrow next"><i class="fas fa-angle-right"></i></button>')
    $('.inbox .close').css({
        position:'absolute', top:'70px', right:'20px',
        background:'none', border:'none', fontSize:'40px', color:'#fff'
    })
    $('.inbox .prev').css({
        position:'absolute', top:'50%', left:'50%', marginLeft:'-400px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
    $('.inbox .next').css({
        position:'absolute', top:'50%', right:'50%', marginRight:'-400px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'70px', color:'#fff'
    })
})

$('body').on('click', '.inbox .close, .outbox', function(){
    $('.outbox').remove()
})

$('body').on('click', '.inbox', function(e){
    e.stopPropagation()
})

function gallery(indexnum) {
    var href = $('.gallery li').eq(indexnum).find('a').attr('href')
    var src = $('.gallery li').eq(indexnum).find('img').attr('src')
    var alt = $('.gallery li').eq(indexnum).find('img').attr('alt')
    $('.inbox').find('a').attr({href:href})
    $('.inbox').find('img').attr({
        src:src,
        alt:alt
    })
}

$('body').on('click', '.inbox .next', function(){
    linum++
    if (linum === $('.gallery li').length) {
        linum = 0
    }
    gallery(linum)
})

$('body').on('click', '.inbox .prev', function(){
    linum--
    if (linum<0) {
        linum = 7
    }
    gallery(linum)
})