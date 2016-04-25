////////////////////////////////////////////////
/////######################################/////
////##   osModal                          ##////
///###    07 Feb ‎2016 Sunday, 06:06:06    ###///
//####     Generator : Oğuzhan SARI       ####//
///###      Agency : fikirfokur DSA       ###///
////##        Project : Vandalina         ##////
/////######################################/////
////////////////////////////////////////////////

(function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
(function ($) {
    $.osModal = function (el, options) {
        var osm = $(el);
        osm.exts = $.extend({}, $.osModal.defopt, options);
        osm.data('osModalData', osm);
        osm_methods = {
            init: function () {
                var t = osm;
                var o = t.exts;
                var osmid = o.id;
                var osmokbutton = '<a href="#" class="osm-okbutton btn btn-primary"><span class="btn-ctn"><span class="title">' + o.okbuttontext + '</span></span></a>';
                var osmyes = '<a href="#" class="osm-yes btn btn-danger"><span class="btn-ctn"><span class="title">' + o.yestext + '</span></span></a>';
                var osmno = '<a href="#" class="osm-no btn btn-success"><span class="btn-ctn"><span class="title">' + o.notext + '</span></span></a>';
                var osmbuttons = "";
                var osmbuttonsleft = "";
                var osmbuttonsright = "";
                var confirmbutton = "";
                //openbeforefunc
                if (Array.isArray(o.openbeforefunc) && o.openbeforefunc.constructor === Array && o.openbeforefunc) { osm.runFunction(o.openbeforefunc[0], o.openbeforefunc[1]); }
                if (o.alertconfirm == true) {
                    confirmbutton = osmyes + osmno;
                }
                if (o.alertconfirm == true || o.okbutton == true || ((Array.isArray(o.addbuttonleft) && o.addbuttonleft.constructor === Array && o.addbuttonleft) || (Array.isArray(o.addbuttonright) && o.addbuttonright.constructor === Array && o.addbuttonright))) {
                    if ((Array.isArray(o.addbuttonleft) && o.addbuttonleft.constructor === Array && o.addbuttonleft)) {
                        for (var i = 0; i < o.addbuttonleft.length; i++) {
                            osmbuttonsleft += o.addbuttonleft[i];
                        }
                    }
                    if ((Array.isArray(o.addbuttonright) && o.addbuttonright.constructor === Array && o.addbuttonright)) {
                        for (var i = 0; i < o.addbuttonright.length; i++) {
                            osmbuttonsright += o.addbuttonright[i];
                        }
                    }
                    if (o.okbutton == true) {
                        confirmbutton += osmokbutton;
                    }
                    osmbuttons = '<div class="osm-article-buttons"><div class="osm-buttons-left">' + osmbuttonsleft + '</div><div class="osm-buttons-right">' + osmbuttonsright + confirmbutton + '</div></div>';
                }
                var oscheaderclose = '<a href="#" class="osm-h-c-button"><i class="icon-close"></i></a>';
                var osmhtitle = o.title;
                var osmaddclass = "";
                var osmaddstyle = "";
                var osmcontent = o.content;
                var osmloaders = '<div class="osm-loaders"><div class="osm-progress osm-progress-active"><div class="osm-progress-activity"></div></div></div>';
                if (o.type == "alert") { osmaddclass += " osm-alert " + o.alerttype + " "; }
                var osmmaxwidth = "";
                if (o.maxwidth != false) {
                    osmmaxwidth = "max-width:" + o.maxwidth.toString();
                    if (o.maxwidth.toString().indexOf("px") == -1) { osmmaxwidth = osmmaxwidth + (o.maxwidth <= 100 ? "%;" : "px;"); }
                }
                var osmwidth = "";
                if (o.width != false & o.responsive != true) {
                    osmwidth = "width:" + o.width;
                    if (o.width.toString().indexOf("px") == -1) { osmwidth = osmwidth + (o.width <= 100 ? "%;" : "px;"); }
                } else if (o.width != false & o.responsive == true) {
                    osmwidth = "width: 100%;";
                }

                

                t.css({ "position": o.position });
                t.addClass(osmaddclass);
                var osmelements = '' +
                //'<div class="osModal  {0}" style="{1} position: ' + o.position + '" id="{2}">' +
                '<div class="osm-backclose"></div>' +
                '<div class="osm-box">' +
                '<div class="osm-container" style="' + osmwidth + osmmaxwidth + '">' +
                '<div class="osm-content">' +
                '<div class="osm-header">' +
                '<div class="osm-h-left">' +
                '<i class="osm-h-icon {0}"></i>' +
                '<span class="osm-h-title">{1}</span>' +
                '</div>' +
                '<div class="osm-h-right">' +
                '<div class="osm-h-closed">' +
                '{2}' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="osm-article">' +
                '<div class="osm-article-container">' +
                '<div class="osm-article-container-scrolling"><div class="osm-load"></div></div>' +
                '</div>' +
                '{3}' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
                //'</div>';

                t.append(StringFormat(osmelements, [o.icon, osmhtitle, oscheaderclose, osmbuttons]));

                //$(o.openedarea).append(StringFormat(osmelements, [o.icon, osmhtitle, oscheaderclose, osmbuttons]));

                var box = $('.osm-box', t);
                var container = $('.osm-container', t);
                var content = $('.osm-content', t);
                var header = $('.osm-h-header', t);
                var article = $('.osm-article', t);
                var articlectn = $('.osm-article-container', t);
                var articlectnscroll = $('.osm-article-container-scrolling', t);
                var articleload = $('.osm-load', t);
                var hcbutton = $('.osm-h-c-button', t);
                var articlebuttons = $('.osm-article-buttons', t);
                var okbutton = $('.osm-okbutton', t);
                var backclose = $('.osm-backclose', t);
                var confirmyes = $('.osm-yes', t);
                var confirmno = $('.osm-no', t);
                t.css({ "visibility": "visible" }).animate({ "opacity": 1 }, o.openanimatespeed);

                if (o.animatecss != null) {
                    container.addClass(o.animatecss + ' animated ');
                }
                if (o.type == "alert") {
                    articleload.append(osmcontent);
                } else if (o.type == "url") {
                    if (osmcontent == "" || osmcontent == undefined) {
                        alert("Belirtilen yol bulunamadı !");
                    } else {
                        articleload.html(osmloaders);
                        articleload.load(osmcontent);
                    }
                } else {
                    articleload.append(osmcontent);
                }
                if (o.maxheight != null) { t.heightconf(); $(window).resize(function () { t.heightconf(); }); }
                hcbutton.click(function () { t.close(); return false; });
                if (o.backclose) { backclose.click(function () { t.close(); return false; }); }
                if (o.autoclose) { setTimeout(function () { t.close(); }, o.autotime); }
                if (o.okbutton) { okbutton.click(function () { t.close(); return false; }); }
                if (o.alertconfirm == true) { confirmyes.click(function () { if (Array.isArray(o.confirmfunc) && o.confirmfunc.constructor === Array && o.confirmfunc) { t.runFunction(o.confirmfunc[0], o.confirmfunc[1]); t.close(); } return false; }); confirmno.click(function () { t.close(); return false; }); }
                if ((Array.isArray(o.addbuttonleft) && o.addbuttonleft.constructor === Array && o.addbuttonleft) || (Array.isArray(o.addbuttonright) && o.addbuttonright.constructor === Array && o.addbuttonright)) { $('[data-osm-function]').click(function () { var t = $(this); var fnc = t.data("osm-function"); var prs = t.data("osm-function-parameters"); t.runFunction(fnc, prs); }); }
                if (Array.isArray(o.openfunc) && o.openfunc.constructor === Array && o.openfunc) { t.runFunction(o.openfunc[0], o.openfunc[1]); }
                if (o.bodyoverflow) { $('body').addClass('osModalOverflowBody'); }
                //articlectnscroll.mCustomScrollbar({ theme: "minimal-dark", set_height: "100%" });

                return true;
            }
        }
        osm.destroy = function () {
            var t = osm;
            var o = osm.exts;
            $('#' + o.id).remove();
            if (o.bodyoverflow) { $('body').removeClass('osModalOverflowBody'); }
            t.removeData("osModalData");
            return true;
        }
        osm.close = function () {
            var t = osm;
            var o = osm.exts;
            $('#' + o.id).animate({ "opacity": 0 }, o.closeanimatespeed, function () { if (Array.isArray(o.closefunc) && o.closefunc.constructor === Array && o.closefunc) { osm.runFunction(o.closefunc[0], o.closefunc[1]); } osm.destroy(); });
            return true;
        }
        osm.heightconf = function () {
            var t = osm;
            var o = osm.exts;
            var osmid = o.id;
            var modal = $('#' + osmid);
            var header = $('.osm-h-header', modal);
            var article = $('.osm-article', modal);
            var articlectn = $('.osm-article-container', modal);
            var articlebuttons = $('.osm-article-buttons', modal);
            var maxheight = o.maxheight;
            var hheight = header.outerHeight(true);
            var abheight = articlebuttons.outerHeight(true);
            var outheight = hheight + abheight;
            newheight = maxheight;
            if (maxheight.toString().indexOf("px") == -1 & maxheight.toString().indexOf("%") == -1) { if (maxheight <= 100) { var wh = $(window).outerHeight(true); newheight = (wh / 100) * maxheight; } }
            articlectn.css({ "height": newheight + "px" });
            //articlectn.css({ "max-height": newheight + "px" });
            return true;
        }
        osm.runFunction = function (functionname, parametres) {
            if (typeof window[functionname] === 'function') {
                var call;
                if (parametres != false) {
                    call = window[functionname].apply(this, parametres);
                } else {
                    call = window[functionname]();
                }
            } else {
                alert("Belirtilen fonksiyon geçersiz.");
            }
            return true;
        }
        osm_methods.init();
    }
    $.osModal.defopt = {
        openedarea: 'body', // relative özelliğe sahip olmalı
        type: 'html', // default = html import, url = load, alert = alert
        title: '',  // string
        content: '',  // string
        openanimatespeed: 750, // int
        closeanimatespeed: 500, // int
        autoclose: false, // true or false
        autotime: 4000, // int
        alerttype: 'primary', // primary, warning, succes, info, danger, inverse, purple, pink,
        alertconfirm: false, // true or false,
        yestext: "SİL", // string
        notext: "VAZGEÇ", // string
        confirmfunc: null, // example : ["functionname", [parametres]] > function functionname(string, int, bool) { return this; } ( run to yestext button clicker )
        id: 'osm-' + osCodeGenerator(20), // string
        closefunc: null, // example : ["functionname", [parametres]] > function functionname(string, int, bool) { return this; }
        openfunc: null, // example : ["functionname", [parametres]] > function functionname(string, int, bool) { return this; }
        openbeforefunc: null, // example : ["functionname", [parametres]] > function functionname(string, int, bool) { return this; }
        okbutton: false, // true or false (for alert box)
        okbuttontext: "KAPAT", // string (for alert box)
        addbuttonright: null, // array ( a include -----> data-osm-function=\"testfunc\" data-osm-function-parameters='[\"asd\",123]' <----- go function call )
        addbuttonleft: null, // array ( a include -----> data-osm-function=\"testfunc\" data-osm-function-parameters='[\"asd\",123]' <----- go function call )
        width: 100, // px, % or int (initial of false)
        maxwidth: 800, // px, % or int max width (initial of false)
        maxheight: null, // px, % or int (Scrolling supported by mcustomscrollbar)
        position: "fixed", // absolute or fixed
        backclose: true, // true or false
        mobile: true, // true, false or null mobile  (button display on mobile [ true = Show compulsory, false = mandatory Hide, null = closebutton default setting ])
        closebutton: true, // true, false or null
        icon: 'icon-window-maximize',
        animatecss: null, // animate.css supported by animatecss (https://daneden.hub.io/gitanimate.css/)
        bodyoverflow: true,
        responsive: false,
    }
    $.fn.osModal = function (options, opt) {
        if (typeof options === "object") {
            if (options === undefined) { options = {}; }
            return this.each(function () {
                if (options.id == undefined) {
                    options = $.extend({}, options, { id: osCodeGenerator(30) });
                }
                if (options.openedarea == undefined) {
                    options = $.extend({}, options, { openedarea: 'body' });
                }
                $(options.openedarea).append('<div class="osModal" id="' + options.id + '">');
                var $this = $('#' + options.id);
                if ($this.data('osModalData') === undefined) {
                    new $.osModal($this, options);
                }
            });
        } else {
            var ex = $('#' + $(this).attr("id"));
            var $osModal = $(this).data('osModalData');
            switch (options) {
                case "destroy": $osModal.destroy(); break;
                case "close": $osModal.close(); break;
                default: $osModal.destroy();
            }
        }
    }
})(jQuery);
function ModalClose(id) {
    $('#' + id).osModal("close");
}
function StringFormat(text, arguments) {
    for (var i = 0; i < arguments.length; i++) {
        var regEx = new RegExp("\\{" + (i) + "\\}", "gm");
        text = text.replace(regEx, arguments[i]);
    }
    return text;
}
$(function () {
    $('.modaltest').click(function () {
        $(this).osModal({
            title: 'Test modal',
            content: '/modaltest.html',
            type: 'url',
            addbuttonleft: [
                "<a href=\"/\" class=\"btn btn-default\"><span class=\"btn-ctn\"><span class=\"icon\"><i class=\"icon-comment-text-outline\"></i></span><span class=\"title\">Yorumları Oku</span></span></a>",
                "<a href=\"/\" class=\"btn btn-primary\"><span class=\"btn-ctn\"><span class=\"icon\"><i class=\"icon-eye\"></i></span><span class=\"title\">Ayrıntılı İncele</span></span></a>",
            ],
            addbuttonright: [
                "<div class=\"amount\"></div>",
                "<a href=\"/\" class=\"btn btn-default\"><span class=\"btn-ctn\"><span class=\"icon\"><i class=\"icon-close\"></i></span><span class=\"title\">İptal</span></span></a>",
                "<a href=\"/\" class=\"btn btn-success\"><span class=\"btn-ctn\"><span class=\"icon\"><i class=\"icon-content-save\"></i></span><span class=\"title\">Kaydet</span></span></a>",
            ],
            openfunc: ["amountcreator", [80, 10, 20, 10]], //amountcreator fonksiyonu vdCounter içerisinde yer alıyor.
        });
        return false;
    });
    $('.modalcategorytree').click(function () {
        $(this).osModal({
            title: 'Kategori Ağacı',
            content: '/modalcategorytree.html',
            type: 'url',
            addbuttonright: [
                "<a href=\"/\" class=\"btn btn-default\"><span class=\"btn-ctn\"><span class=\"icon\"><i class=\"icon-close\"></i></span><span class=\"title\">İptal</span></span></a>",
                "<a href=\"/\" class=\"btn btn-success\"><span class=\"btn-ctn\"><span class=\"icon\"><i class=\"icon-content-save\"></i></span><span class=\"title\">Kaydet</span></span></a>",
            ],
            width: "500px",
            maxwidth: false,
        });
        return false;
    });
    $('.modalconfirmtest').click(function () {
        $(this).osModal({
            title: 'Onay',
            content: 'Silmek istediğinize emin misiniz?',
            type: 'alert',
            alertconfirm: true,
            yestext: "Ürünü Sil",
            notext: "Silmekten Vazgeç",
            confirmfunc: ["modalconfirmtestfunc", [1, 2, "üç"]],
            openfunc: ["openfunctest"],
            closefunc: ["closefunctest", ["parametre1", "parametre2"]],
            maxwidth: 400,
        });
        return false;
    });

    $('#modalselectizetest').click(function () {
        var content = $(this).attr('href');
        content = '"' + content + '"';
        $(this).osModal({
            title: 'Selectize Test',
            content: content,
            type: 'url',
            maxheight: 400
        });
        return false;
    });
});
function modalconfirmtestfunc(a, b, c) {
    alert("please view console");
    console.log("modalconfirmtestfunc");
    console.log("parametre a = " + a);
    console.log("parametre b = " + c);
    console.log("parametre c = " + b);
}
function openfunctest() {
    console.log("openfunctest");
}
function closefunctest(p1, p2) {
    console.log("closefunctest");
    console.log("parametre 1 = " + p1);
    console.log("parametre 2 = " + p2);
}
//addbuttonleft: [
//    "<a href=\"#\" class=\"btn btn-warning\"><span class=\"btn-ctn\"><span class=\"title\">warning</span></span></a>",
//    "<a href=\"#\" class=\"btn btn-danger\"><span class=\"btn-ctn\"><span class=\"title\">danger</span></span></a>",
//    "<a href=\"#\" class=\"btn btn-inverse\"><span class=\"btn-ctn\"><span class=\"title\">inverse</span></span></a>",
//    "<a href=\"#\" class=\"btn btn-purple\"><span class=\"btn-ctn\"><span class=\"title\">purple</span></span></a>",
//    "<a href=\"#\" class=\"btn btn-pink\"><span class=\"btn-ctn\"><span class=\"title\">pink</span></span></a>"
//],
//    addbuttonright: [
//        "<a href=\"#\" data-osm-function=\"testfunc\" data-osm-function-parameters='[\"asd\",123]' class=\"btn btn-default\"><span class=\"btn-ctn\"><span class=\"title\">default</span></span></a>",
//        "<a href=\"#\" class=\"btn btn-primary\"><span class=\"btn-ctn\"><span class=\"title\">primary</span></span></a>",
//        "<a href=\"#\" class=\"btn btn-success\"><span class=\"btn-ctn\"><span class=\"title\">success</span></span></a>",
//        "<a href=\"#\" class=\"btn btn-info\"><span class=\"btn-ctn\"><span class=\"title\">info</span></span></a>"
//    ],


