$(document).ready(function(){

    $('.header_catalog').on('click',function() {
        $(".header_content_left").css({
            "z-index": '-1'
        });
        $(".filter").show(200);
    });
    $('.header_right_avatar').on('click',function() {
        $(".login").css({
            "display": 'flex'
        });
    });



    $('.header_content').mouseover(function() {
        $(".header_content_left").css({
            "z-index": '1'
        });
        $(".filter").fadeOut(200);
        $(".login").fadeOut(200);
    });


    $('.content_container_up').mouseover(function() {
        $(".header_content_left").css({
            "z-index": '1'
        });
        $(".filter").fadeOut(200);
        $(".login").fadeOut(200);
    });



    $('.button_catalog').mouseover(function() {
        $(this).css({
            'display':'none'
        });
        $('.button_catalog_active').css({
            'display':'block'
        })
    });
    $('.button_catalog').mouseout(function() {
        $(this).css({
            'display':'block'
        });
        $('.button_catalog_active').css({
            'display':'none'
        })
    });
    

        $("#slider").owlCarousel({
            items: 4,
            loop: true,
            smartSpeed: 500,
        })

        let owlNext = $('#slider')
        owlNext.owlCarousel();
        $('.next_slide').click(function(){
            owlNext.trigger('next.owl.carousel');
        });
        

        $("#slider2").owlCarousel({
            items: 2,
            loop: true,
            smartSpeed: 500,
        })

        let owlNext2 = $('#slider2')
        owlNext2.owlCarousel();
        $('.next_icon').click(function(){
            owlNext2.trigger('next.owl.carousel');
        });



        $('#test').validate({
            rules: {
            name: {
                required: true,
            },
                email: {
                    required: true,
                    email: true,
            },
            field: {
                required: true,
                step: 12,
                number: true
              },
              gender: {
                required: true
              }
        },
        messages: {
            name: "Введите имя",
            email: {
                required: 'Ведите email',
                email: 'Адрес должен быть вида barbag@mail.ru',
        },
            field: {
                required:'Ведите номер телефона',
                step: 'Номер должен содержать 12 цифр',
                number: 'Номер состоит из цифр'
            },
            gender: 'Дайте согласие на обработку данных'
        }
        })
        $('#test2').validate({
            rules: {
            name: {
                required: true,
            },
                email: {
                    required: true,
                    email: true,
            },
        },
        messages: {
            name: "Введите пароль",
            email: {
                required: 'Ведите email',
                email: 'Адрес должен быть вида barbag@mail.ru',
        },
        }
        });
        $('#test3').validate({
            rules: {
            name: {
                required: true,
            },
                email: {
                    required: true,
                    email: true,
            },
            field: {
                required: true,
                step: 12,
                number: true
              },
            field2: {
                required: true,
                step: 6,
                number: true
              },
              gender: {
                required: true
              },
              name2: {
                required: true,
            },
        },
        messages: {
            name: "Введите имя",
            email: {
                required: 'Ведите email',
                email: 'Адрес должен быть вида barbag@mail.ru',
        },
            field: {
                required:'Введите номер телефона',
                step: 'Номер должен содержать 12 цифр',
                number: 'Номер состоит из цифр'
            },
            field2: {
                required:'Введите номер индекса',
                step: 'Номер должен содержать 6 цифр',
                number: 'Номер состоит из цифр'
            },
            name2: "Заполние поле",
            gender: 'Дайте согласие на обработку данных'
        }
        });

        ///////////////////////////////////////////////////

        $('.up').on('click', function(){
            $('html, body').animate({scrollTop: 0}, 200);
        })

        $('.login_enter').on('click', function(){
            let pupup = $('.pupup');
            pupup.fadeIn(300);
            $('body').css({
                'position': 'fixed'
            })
        });
        $('.button_exit').on('click', function(){
            let pupup = $('.pupup');
            pupup.fadeOut(300);
            $('body').css({
                'position': 'relative'
            })
        });
        $('.form_button_registration').on('click', function(e){
            e.preventDefault();
            let pupup = $('.pupup2');
            pupup.fadeIn(300);
            $('body').css({
                'position': 'fixed'
            })
        });
        $('.button_exit2').on('click', function(){
            let pupup = $('.pupup2');
            pupup.fadeOut(300);
            let pupup2 = $('.pupup');
            pupup2.fadeOut(300);
            $('body').css({
                'position': 'relative'
            })

        });
        $('.form_button_registration2').on('click', function(e){
            e.preventDefault();
            let pupup = $('.pupup2');
            pupup.fadeOut(300);
            $('body').css({
                'position': 'fixed'
            })
        });

})
