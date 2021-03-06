/**
 * fullPage 2.4.3
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function(a) {
    a.fn.fullpage = function(c) {
        function ga() {
            a("body").append('<div id="fp-nav"><ul></ul></div>');
            h = a("#fp-nav");
            h.css("color", c.navigationColor);
            h.addClass(c.navigationPosition);
            for (var b = 0; b < a(".fp-section").length; b++) {
                var d = "";
                c.anchors.length && (d = c.anchors[b]);
                var e = c.navigationTooltips[b];
                "undefined" === typeof e && (e = "");
                h.find("ul").append('<li data-tooltip="' + e + '"><a href="#' + d + '"><span></span></a></li>')
            }
        }

        function I() {
            a(".fp-section").each(function() {
                var b = a(this).find(".fp-slide");
                b.length ? b.each(function() {
                    w(a(this))
                }) : w(a(this))
            });
            a.isFunction(c.afterRender) && c.afterRender.call(this)
        }

        function J() {
            if (!c.autoScrolling) {
                var b = a(window).scrollTop(),
                    d = 0,
                    e = Math.abs(b - a(".fp-section").first().offset().top);
                a(".fp-section").each(function(c) {
                    var f = Math.abs(b - a(this).offset().top);
                    f < e && (d = c, e = f)
                });
                var f = a(".fp-section").eq(d);
                if (!f.hasClass("active")) {
                    A = !0;
                    var g = a(".fp-section.active").index(".fp-section") + 1,
                        ha = B(f),
                        h = f.data("anchor");
                    f.addClass("active").siblings().removeClass("active");
                    k || (a.isFunction(c.onLeave) && c.onLeave.call(this, g, f.index(".fp-section") + 1, ha), a.isFunction(c.afterLoad) && c.afterLoad.call(this, h, f.index(".fp-section") + 1));
                    C(h, 0);
                    c.anchors.length && !k && (q = h, location.hash = h);
                    clearTimeout(K);
                    K = setTimeout(function() {
                        A = !1
                    }, 100)
                }
                c.fitSection && (clearTimeout(L), L = setTimeout(function() {
                    k || m(f)
                }, 1E3))
            }
        }

        function M(b) {
            return scrollable = b.find(".fp-slides").length ? b.find(".fp-slide.active").find(".fp-scrollable") : b.find(".fp-scrollable")
        }

        function x(b, d) {
            if ("down" == b) var c =
                "bottom",
                f = a.fn.fullpage.moveSectionDown;
            else c = "top", f = a.fn.fullpage.moveSectionUp;
            if (0 < d.length)
                if (c = "top" === c ? !d.scrollTop() : "bottom" === c ? d.scrollTop() + 1 + d.innerHeight() >= d[0].scrollHeight : void 0, c) f();
                else return !0;
            else f()
        }

        function ia(b) {
            var d = b.originalEvent;
            if (!N(b.target)) {
                c.autoScrolling && b.preventDefault();
                b = a(".fp-section.active");
                var e = M(b);
                k || t || (d = O(d), r = d.y, y = d.x, b.find(".fp-slides").length && Math.abs(z - y) > Math.abs(s - r) ? Math.abs(z - y) > a(window).width() / 100 * c.touchSensitivity && (z > y ? a.fn.fullpage.moveSlideRight() :
                    a.fn.fullpage.moveSlideLeft()) : c.autoScrolling && Math.abs(s - r) > a(window).height() / 100 * c.touchSensitivity && (s > r ? x("down", e) : r > s && x("up", e)))
            }
        }

        function N(b, d) {
            d = d || 0;
            var e = a(b).parent();
            return d < c.normalScrollElementTouchThreshold && e.is(c.normalScrollElements) ? !0 : d == c.normalScrollElementTouchThreshold ? !1 : N(e, ++d)
        }

        function ja(b) {
            b = O(b.originalEvent);
            s = b.y;
            z = b.x
        }

        function n(b) {
            if (c.autoScrolling) {
                b = window.event || b;
                b = Math.max(-1, Math.min(1, b.wheelDelta || -b.deltaY || -b.detail));
                var d = a(".fp-section.active"),
                    d = M(d);
                k || (0 > b ? x("down", d) : x("up", d));
                return !1
            }
        }

        function P(b) {
            var d = a(".fp-section.active").find(".fp-slides");
            if (d.length && !t) {
                var e = d.find(".fp-slide.active"),
                    f = null,
                    f = "prev" === b ? e.prev(".fp-slide") : e.next(".fp-slide");
                if (!f.length) {
                    if (!c.loopHorizontal) return;
                    f = "prev" === b ? e.siblings(":last") : e.siblings(":first")
                }
                t = !0;
                u(d, f)
            }
        }

        function Q() {
            a(".fp-slide.active").each(function() {
                D(a(this))
            })
        }

        function m(b, d, e) {
            var f = b.position();
            if ("undefined" !== typeof f && (d = {
                    element: b,
                    callback: d,
                    isMovementUp: e,
                    dest: f,
                    dtop: f.top,
                    yMovement: B(b),
                    anchorLink: b.data("anchor"),
                    sectionIndex: b.index(".fp-section"),
                    activeSlide: b.find(".fp-slide.active"),
                    activeSection: a(".fp-section.active"),
                    leavingSection: a(".fp-section.active").index(".fp-section") + 1,
                    localIsResizing: v
                }, !d.activeSection.is(b) || v)) {
                if (d.activeSlide.length) var g = d.activeSlide.data("anchor"),
                    h = d.activeSlide.index();
                c.autoScrolling && c.continuousVertical && "undefined" !== typeof d.isMovementUp && (!d.isMovementUp && "up" == d.yMovement || d.isMovementUp && "down" == d.yMovement) &&
                    (d.isMovementUp ? a(".fp-section.active").before(d.activeSection.nextAll(".fp-section")) : a(".fp-section.active").after(d.activeSection.prevAll(".fp-section").get().reverse()), p(a(".fp-section.active").position().top), Q(), d.wrapAroundElements = d.activeSection, d.dest = d.element.position(), d.dtop = d.dest.top, d.yMovement = B(d.element));
                b.addClass("active").siblings().removeClass("active");
                k = !0;
                "undefined" !== typeof d.anchorLink && R(h, g, d.anchorLink);
                a.isFunction(c.onLeave) && !d.localIsResizing && c.onLeave.call(this,
                    d.leavingSection, d.sectionIndex + 1, d.yMovement);
                ka(d);
                q = d.anchorLink;
                c.autoScrolling && C(d.anchorLink, d.sectionIndex)
            }
        }

        function ka(b) {
            if (c.css3 && c.autoScrolling) S("translate3d(0px, -" + b.dtop + "px, 0px)", !0), setTimeout(function() {
                T(b)
            }, c.scrollingSpeed);
            else {
                var d = la(b);
                a(d.element).animate(d.options, c.scrollingSpeed, c.easing).promise().done(function() {
                    T(b)
                })
            }
        }

        function la(b) {
            var a = {};
            c.autoScrolling ? (a.options = {
                top: -b.dtop
            }, a.element = "." + U) : (a.options = {
                scrollTop: b.dtop
            }, a.element = "html, body");
            return a
        }

        function ma(b) {
            b.wrapAroundElements && b.wrapAroundElements.length && (b.isMovementUp ? a(".fp-section:first").before(b.wrapAroundElements) : a(".fp-section:last").after(b.wrapAroundElements), p(a(".fp-section.active").position().top), Q())
        }

        function T(b) {
            ma(b);
            a.isFunction(c.afterLoad) && !b.localIsResizing && c.afterLoad.call(this, b.anchorLink, b.sectionIndex + 1);
            setTimeout(function() {
                k = !1;
                a.isFunction(b.callback) && b.callback.call(this)
            }, 600)
        }

        function V() {
            if (!A) {
                var b = window.location.hash.replace("#", "").split("/"),
                    a = b[0],
                    b = b[1];
                if (a.length) {
                    var c = "undefined" === typeof q,
                        f = "undefined" === typeof q && "undefined" === typeof b && !t;
                    (a && a !== q && !c || f || !t && E != b) && F(a, b)
                }
            }
        }

        function u(b, d) {
            var e = d.position(),
                f = b.find(".fp-slidesContainer").parent(),
                g = d.index(),
                h = b.closest(".fp-section"),
                k = h.index(".fp-section"),
                m = h.data("anchor"),
                p = h.find(".fp-slidesNav"),
                l = d.data("anchor"),
                q = v;
            if (c.onSlideLeave) {
                var n = h.find(".fp-slide.active").index(),
                    r;
                r = n == g ? "none" : n > g ? "left" : "right";
                q || "none" === r || a.isFunction(c.onSlideLeave) && c.onSlideLeave.call(this,
                    m, k + 1, n, r)
            }
            d.addClass("active").siblings().removeClass("active");
            "undefined" === typeof l && (l = g);
            c.loopHorizontal || (h.find(".fp-controlArrow.fp-prev").toggle(0 != g), h.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child")));
            h.hasClass("active") && R(g, l, m);
            var s = function() {
                q || a.isFunction(c.afterSlideLoad) && c.afterSlideLoad.call(this, m, k + 1, l, g);
                t = !1
            };
            c.css3 ? (e = "translate3d(-" + e.left + "px, 0px, 0px)", W(b.find(".fp-slidesContainer"), 0 < c.scrollingSpeed).css(X(e)), setTimeout(function() {
                    s()
                }, c.scrollingSpeed,
                c.easing)) : f.animate({
                scrollLeft: e.left
            }, c.scrollingSpeed, c.easing, function() {
                s()
            });
            p.find(".active").removeClass("active");
            p.find("li").eq(g).find("a").addClass("active")
        }

        function Y() {
            Z();
            G ? "text" !== a(document.activeElement).attr("type") && a.fn.fullpage.reBuild(!0) : (clearTimeout($), $ = setTimeout(function() {
                a.fn.fullpage.reBuild(!0)
            }, 500))
        }

        function Z() {
            if (c.responsive) {
                var b = g.hasClass("fp-responsive");
                a(window).width() < c.responsive ? b || (a.fn.fullpage.setAutoScrolling(!1), a("#fp-nav").hide(), g.addClass("fp-responsive")) :
                    b && (a.fn.fullpage.setAutoScrolling(!0), a("#fp-nav").show(), g.removeClass("fp-responsive"))
            }
        }

        function W(b, a) {
            var e = "all " + c.scrollingSpeed + "ms " + c.easingcss3;
            return a ? (b.removeClass("fp-notransition"), b.css({
                "-webkit-transition": e,
                transition: e
            })) : H(b)
        }

        function H(b) {
            return b.addClass("fp-notransition")
        }

        function na(b, d) {
            if (825 > b || 900 > d) {
                var c = Math.min(100 * b / 825, 100 * d / 900).toFixed(2);
                a("body").css("font-size", c + "%")
            } else a("body").css("font-size", "100%")
        }

        function C(b, d) {
            c.menu && (a(c.menu).find(".active").removeClass("active"),
                a(c.menu).find('[data-menuanchor="' + b + '"]').addClass("active"));
            c.navigation && (a("#fp-nav").find(".active").removeClass("active"), b ? a("#fp-nav").find('a[href="#' + b + '"]').addClass("active") : a("#fp-nav").find("li").eq(d).find("a").addClass("active"))
        }

        function B(b) {
            var d = a(".fp-section.active").index(".fp-section");
            b = b.index(".fp-section");
            return d > b ? "up" : "down"
        }

        function w(b) {
            b.css("overflow", "hidden");
            var a = b.closest(".fp-section"),
                e = b.find(".fp-scrollable");
            if (e.length) var f = e.get(0).scrollHeight;
            else f = b.get(0).scrollHeight, c.verticalCentered && (f = b.find(".fp-tableCell").get(0).scrollHeight);
            a = l - parseInt(a.css("padding-bottom")) - parseInt(a.css("padding-top"));
            f > a ? e.length ? e.css("height", a + "px").parent().css("height", a + "px") : (c.verticalCentered ? b.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : b.wrapInner('<div class="fp-scrollable" />'), b.find(".fp-scrollable").slimScroll({
                allowPageScroll: !0,
                height: a + "px",
                size: "10px",
                alwaysVisible: !0
            })) : aa(b);
            b.css("overflow", "")
        }

        function aa(b) {
            b.find(".fp-scrollable").children().first().unwrap().unwrap();
            b.find(".slimScrollBar").remove();
            b.find(".slimScrollRail").remove()
        }

        function ba(b) {
            b.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + ca(b) + 'px;" />')
        }

        function ca(b) {
            var a = l;
            if (c.paddingTop || c.paddingBottom) a = b, a.hasClass("fp-section") || (a = b.closest(".fp-section")), b = parseInt(a.css("padding-top")) + parseInt(a.css("padding-bottom")), a = l - b;
            return a
        }

        function S(b, a) {
            W(g, a);
            g.css(X(b))
        }

        function F(b, c) {
            "undefined" === typeof c && (c = 0);
            var e = isNaN(b) ? a('[data-anchor="' + b + '"]') : a(".fp-section").eq(b -
                1);
            b === q || e.hasClass("active") ? da(e, c) : m(e, function() {
                da(e, c)
            })
        }

        function da(b, a) {
            if ("undefined" != typeof a) {
                var c = b.find(".fp-slides"),
                    f = c.find('[data-anchor="' + a + '"]');
                f.length || (f = c.find(".fp-slide").eq(a));
                f.length && u(c, f)
            }
        }

        function oa(a, d) {
            a.append('<div class="fp-slidesNav"><ul></ul></div>');
            var e = a.find(".fp-slidesNav");
            e.addClass(c.slidesNavPosition);
            for (var f = 0; f < d; f++) e.find("ul").append('<li><a href="#"><span></span></a></li>');
            e.css("margin-left", "-" + e.width() / 2 + "px");
            e.find("li").first().find("a").addClass("active")
        }

        function R(a, d, e) {
            var f = "";
            c.anchors.length && (a ? ("undefined" !== typeof e && (f = e), "undefined" === typeof d && (d = a), E = d, location.hash = f + "/" + d) : ("undefined" !== typeof a && (E = d), location.hash = e))
        }

        function pa() {
            var a = document.createElement("p"),
                c, e = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            document.body.insertBefore(a, null);
            for (var f in e) void 0 !== a.style[f] && (a.style[f] = "translate3d(1px,1px,1px)", c = window.getComputedStyle(a).getPropertyValue(e[f]));
            document.body.removeChild(a);
            return void 0 !== c && 0 < c.length && "none" !== c
        }

        function ea() {
            return window.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function O(a) {
            var c = [];
            window.navigator.msPointerEnabled ? (c.y = a.pageY, c.x = a.pageX) : (c.y = a.touches[0].pageY, c.x = a.touches[0].pageX);
            return c
        }

        function D(b) {
            var d = c.scrollingSpeed;
            a.fn.fullpage.setScrollingSpeed(0);
            u(b.closest(".fp-slides"), b);
            a.fn.fullpage.setScrollingSpeed(d)
        }

        function p(a) {
            c.css3 ? S("translate3d(0px, -" +
                a + "px, 0px)", !1) : g.css("top", -a)
        }

        function X(a) {
            return {
                "-webkit-transform": a,
                "-moz-transform": a,
                "-ms-transform": a,
                transform: a
            }
        }

        function qa() {
            p(0);
            a("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();
            a(".fp-section").css({
                height: "",
                "background-color": "",
                padding: ""
            });
            a(".fp-slide").css({
                width: ""
            });
            g.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            });
            a(".fp-section, .fp-slide").each(function() {
                aa(a(this));
                a(this).removeClass("fp-table active")
            });
            H(g);
            H(g.find(".fp-easing"));
            g.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
                a(this).replaceWith(this.childNodes)
            });
            a("html, body").scrollTop(0)
        }
        c = a.extend({
            verticalCentered: !0,
            resize: !0,
            sectionsColor: [],
            anchors: [],
            scrollingSpeed: 1E3,
            easing: "easeInQuart",
            easingcss3: "ease",
            menu: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationColor: "#000",
            navigationTooltips: [],
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            controlArrowColor: "#fff",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            autoScrolling: !0,
            fitSection: !1,
            scrollOverflow: !1,
            css3: !1,
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            normalScrollElements: null,
            keyboardScrolling: !0,
            touchSensitivity: 5,
            continuousVertical: !1,
            animateAnchor: !0,
            normalScrollElementTouchThreshold: 5,
            sectionSelector: ".section",
            slideSelector: ".slide",
            responsive: 0,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, c);
        c.continuousVertical && (c.loopTop || c.loopBottom) && (c.continuousVertical = !1, console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));
        a.fn.fullpage.setAutoScrolling =
            function(b) {
                c.autoScrolling = b;
                b = a(".fp-section.active");
                c.autoScrolling ? (a("html, body").css({
                    overflow: "hidden",
                    height: "100%"
                }), g.css({
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), b.length && p(b.position().top)) : (a("html, body").css({
                    overflow: "visible",
                    height: "initial"
                }), g.css({
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), p(0), a("html, body").scrollTop(b.position().top))
            };
        a.fn.fullpage.setScrollingSpeed = function(a) {
            c.scrollingSpeed = a
        };
        a.fn.fullpage.setMouseWheelScrolling = function(a) {
            a ? document.addEventListener ?
                (document.addEventListener("mousewheel", n, !1), document.addEventListener("wheel", n, !1)) : document.attachEvent("onmousewheel", n) : document.addEventListener ? (document.removeEventListener("mousewheel", n, !1), document.removeEventListener("wheel", n, !1)) : document.detachEvent("onmousewheel", n)
        };
        a.fn.fullpage.setAllowScrolling = function(b) {
            if (b) {
                if (a.fn.fullpage.setMouseWheelScrolling(!0), G || fa) MSPointer = ea(), a(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, ja), a(document).off("touchmove " +
                    MSPointer.move).on("touchmove " + MSPointer.move, ia)
            } else if (a.fn.fullpage.setMouseWheelScrolling(!1), G || fa) MSPointer = ea(), a(document).off("touchstart " + MSPointer.down), a(document).off("touchmove " + MSPointer.move)
        };
        a.fn.fullpage.setKeyboardScrolling = function(a) {
            c.keyboardScrolling = a
        };
        a.fn.fullpage.moveSectionUp = function() {
            var b = a(".fp-section.active").prev(".fp-section");
            b.length || !c.loopTop && !c.continuousVertical || (b = a(".fp-section").last());
            b.length && m(b, null, !0)
        };
        a.fn.fullpage.moveSectionDown = function() {
            var b =
                a(".fp-section.active").next(".fp-section");
            b.length || !c.loopBottom && !c.continuousVertical || (b = a(".fp-section").first());
            b.length && m(b, null, !1)
        };
        a.fn.fullpage.moveTo = function(b, c) {
            var e = "",
                e = isNaN(b) ? a('[data-anchor="' + b + '"]') : a(".fp-section").eq(b - 1);
            "undefined" !== typeof c ? F(b, c) : 0 < e.length && m(e)
        };
        a.fn.fullpage.moveSlideRight = function() {
            P("next")
        };
        a.fn.fullpage.moveSlideLeft = function() {
            P("prev")
        };
        a.fn.fullpage.reBuild = function(b) {
            v = !0;
            var d = a(window).width();
            l = a(window).height();
            c.resize && na(l, d);
            a(".fp-section").each(function() {
                parseInt(a(this).css("padding-bottom"));
                parseInt(a(this).css("padding-top"));
                c.verticalCentered && a(this).find(".fp-tableCell").css("height", ca(a(this)) + "px");
                a(this).css("height", l + "px");
                if (c.scrollOverflow) {
                    var b = a(this).find(".fp-slide");
                    b.length ? b.each(function() {
                        w(a(this))
                    }) : w(a(this))
                }
                b = a(this).find(".fp-slides");
                b.length && u(b, b.find(".fp-slide.active"))
            });
            a(".fp-section.active").position();
            d = a(".fp-section.active");
            d.index(".fp-section") && m(d);
            v = !1;
            a.isFunction(c.afterResize) &&
                b && c.afterResize.call(this);
            a.isFunction(c.afterReBuild) && !b && c.afterReBuild.call(this)
        };
        var t = !1,
            G = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),
            fa = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints,
            g = a(this),
            l = a(window).height(),
            k = !1,
            v = !1,
            q, E, h, U = "fullpage-wrapper";
        a.fn.fullpage.setAllowScrolling(!0);
        c.css3 && (c.css3 = pa());
        a(this).length ? (g.css({
            height: "100%",
            position: "relative"
        }), g.addClass(U)) : console.error("Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");
        a(c.sectionSelector).each(function() {
            a(this).addClass("fp-section")
        });
        a(c.slideSelector).each(function() {
            a(this).addClass("fp-slide")
        });
        c.navigation && ga();
        a(".fp-section").each(function(b) {
            var d = a(this),
                e = a(this).find(".fp-slide"),
                f = e.length;
            b || 0 !== a(".fp-section.active").length || a(this).addClass("active");
            a(this).css("height", l + "px");
            (c.paddingTop || c.paddingBottom) && a(this).css("padding", c.paddingTop + " 0 " + c.paddingBottom + " 0");
            "undefined" !== typeof c.sectionsColor[b] && a(this).css("background-color",
                c.sectionsColor[b]);
            "undefined" !== typeof c.anchors[b] && a(this).attr("data-anchor", c.anchors[b]);
            if (1 < f) {
                b = 100 * f;
                var g = 100 / f;
                e.wrapAll('<div class="fp-slidesContainer" />');
                e.parent().wrap('<div class="fp-slides" />');
                a(this).find(".fp-slidesContainer").css("width", b + "%");
                a(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');
                "#fff" != c.controlArrowColor && (a(this).find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " +
                    c.controlArrowColor), a(this).find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + c.controlArrowColor + " transparent transparent"));
                c.loopHorizontal || a(this).find(".fp-controlArrow.fp-prev").hide();
                c.slidesNavigation && oa(a(this), f);
                e.each(function(b) {
                    a(this).css("width", g + "%");
                    c.verticalCentered && ba(a(this))
                });
                d = d.find(".fp-slide.active");
                0 == d.length ? e.eq(0).addClass("active") : D(d)
            } else c.verticalCentered && ba(a(this))
        }).promise().done(function() {
            a.fn.fullpage.setAutoScrolling(c.autoScrolling);
            var b = a(".fp-section.active").find(".fp-slide.active");
            b.length && (0 != a(".fp-section.active").index(".fp-section") || 0 == a(".fp-section.active").index(".fp-section") && 0 != b.index()) && D(b);
            c.fixedElements && c.css3 && a(c.fixedElements).appendTo("body");
            c.navigation && (h.css("margin-top", "-" + 70 + "px"), h.find("li").eq(a(".fp-section.active").index(".fp-section")).find("a").addClass("active"));
            c.menu && c.css3 && a(c.menu).closest(".fullpage-wrapper").length && a(c.menu).appendTo("body");
            c.scrollOverflow ?
                ("complete" === document.readyState && I(), a(window).on("load", I)) : a.isFunction(c.afterRender) && c.afterRender.call(this);
            Z();
            b = window.location.hash.replace("#", "").split("/")[0];
            if (b.length) {
                var d = a('[data-anchor="' + b + '"]');
                !c.animateAnchor && d.length && (c.autoScrolling ? p(d.position().top) : (p(0), a("html, body").scrollTop(d.position().top)), C(b, null), a.isFunction(c.afterLoad) && c.afterLoad.call(this, b, d.index(".fp-section") + 1), d.addClass("active").siblings().removeClass("active"))
            }
            a(window).on("load", function() {
                var a =
                    window.location.hash.replace("#", "").split("/"),
                    b = a[0],
                    a = a[1];
                b && F(b, a)
            })
        });
        a("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function() {
            !c.autoScrolling && c.fitSection && (a("html, body").stop(), k = !1)
        });
        var K, L, A = !1;
        a(window).on("scroll", J);
        var s = 0,
            z = 0,
            r = 0,
            y = 0;
        a(window).on("hashchange", V);
        a(document).keydown(function(b) {
            if (c.keyboardScrolling && !k) switch (b.which) {
                case 38:
                case 33:
                    a.fn.fullpage.moveSectionUp();
                    break;
                case 40:
                case 34:
                    a.fn.fullpage.moveSectionDown();
                    break;
                case 36:
                    a.fn.fullpage.moveTo(1);
                    break;
                case 35:
                    a.fn.fullpage.moveTo(a(".fp-section").length);
                    break;
                case 37:
                    a.fn.fullpage.moveSlideLeft();
                    break;
                case 39:
                    a.fn.fullpage.moveSlideRight()
            }
        });
        a(document).on("click touchstart", "#fp-nav a", function(b) {
            b.preventDefault();
            b = a(this).parent().index();
            m(a(".fp-section").eq(b))
        });
        a(document).on("click touchstart", ".fp-slidesNav a", function(b) {
            b.preventDefault();
            b = a(this).closest(".fp-section").find(".fp-slides");
            var c = b.find(".fp-slide").eq(a(this).closest("li").index());
            u(b, c)
        });
        a(document).on({
            mouseenter: function() {
                var b =
                    a(this).data("tooltip");
                a('<div class="fp-tooltip ' + c.navigationPosition + '">' + b + "</div>").hide().appendTo(a(this)).fadeIn(200)
            },
            mouseleave: function() {
                a(this).find(".fp-tooltip").fadeOut(200, function() {
                    a(this).remove()
                })
            }
        }, "#fp-nav li");
        c.normalScrollElements && (a(document).on("mouseenter", c.normalScrollElements, function() {
            a.fn.fullpage.setMouseWheelScrolling(!1)
        }), a(document).on("mouseleave", c.normalScrollElements, function() {
            a.fn.fullpage.setMouseWheelScrolling(!0)
        }));
        a(".fp-section").on("click touchstart",
            ".fp-controlArrow",
            function() {
                a(this).hasClass("fp-prev") ? a.fn.fullpage.moveSlideLeft() : a.fn.fullpage.moveSlideRight()
            });
        a(window).resize(Y);
        var $;
        a.fn.fullpage.destroy = function(b) {
            a.fn.fullpage.setAutoScrolling(!1);
            a.fn.fullpage.setAllowScrolling(!1);
            a.fn.fullpage.setKeyboardScrolling(!1);
            a(window).off("scroll", J).off("hashchange", V).off("resize", Y);
            a(document).off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", c.normalScrollElements).off("mouseout",
                c.normalScrollElements);
            a(".fp-section").off("click", ".fp-controlArrow");
            b && qa()
        }
    }
})(jQuery);