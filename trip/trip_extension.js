function bootstrapTripTesting(){
    return new Trip([
        {
            sel: $(".start-bootstarp"),
            animation: 'fadeInUp',
            header: "Start Bootstrap",
            content: "This is header.",
            expose: true,
            position: "s",
            showCloseBox: true,
            skip: false,
            onStart : function() {
                console.log("onStart");
            },
            onTripClose: function() {
                var status = 'member_completed'
                setAttributeTrue(status);
            },
            onTripChange: function () {
                scrollToElement("start-bootstarp")
            }
        },
        {
            sel: $(".about"),
            animation: 'fadeInUp',
            header: "About",
            content: "This is about box.",
            expose: true,
            position: "s",
            showCloseBox: true,
            skip: false,
            onStart : function() {
                console.log("onStart");
            },
            onTripClose: function() {
                var status = 'member_completed'
                setAttributeTrue(status);
            },
            onTripChange: function () {
                scrollToElement("about")
            }
        },
        {
            sel: $(".box-1"),
            animation: 'fadeInUp',
            header: "Project 1",
            content: "This is box 1.",
            expose: true,
            position: "n",
            showCloseBox: true,
            skip: false,
            onTripClose: function() {
                var status = 'member_completed'
                setAttributeTrue(status);
            },
            onTripChange: function () {
                scrollToElement("box-1")
            }
        },{
            sel: $(".box-2"),
            animation: 'fadeInRight',
            header: "Project 2",
            content: "This is Box 1.<br><br>This is Sample Text.",
            expose: true,
            position: "e",
            showCloseBox: true,
            onTripClose: function() {
                var status = 'member_completed'
                setAttributeTrue(status);
            },
            onTripChange: function () {
                scrollToElement("box-2")
            }
        }, {
            sel: $(".box-3"),
            animation: 'fadeInUp',
            header: "Project 3",
            content: "Box 3.<br><br><strong>Heading Section 1</strong><br>Sample Text.<br><br><strong>Heading Section 2</strong><br>Sample text.",
            expose: true,
            position: "s",
            showCloseBox: true,
            onTripClose: function() {
                var status = 'member_completed'
                setAttributeTrue(status);
            },
            onTripChange: function () {
                scrollToElement("box-3")
            }
        }, {
            sel: $(".box-4"),
            animation: 'fadeInUp',
            header: "Project 4",
            content: "If you have any questions do let us know, we will love to hear from you.",
            expose: true,
            position: "n",
            onTripChange: function () {
                scrollToElement("box-4")
            },
            onTripEnd : function(){
                var status = 'member_completed'
                setAttributeTrue(status);
            }
        }
    ], {enableAnimation: true, showHeader: true, showNavigation: true, tripTheme: 'white', delay: 10000});
}

function setAttributeTrue(status){
    // $.ajax({
    //     type: "get",
    //     url: '/update_intro?status=' + status,
    // })
    // $(".watch").trigger('click');
    // alert("trip closed, make ajax reques")
}

function scrollToElement(html_tag) {
    $('html, body').animate({
        scrollTop: $("." + html_tag).offset().top
    }, 500);
}