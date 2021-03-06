 var mistress = require( "../bower_components/jquery/jquery" );
 var rloop = require( "./deps/runloop" );
 var txtllt = require( "./deps/textillate" );
 var lttring = require( "./deps/lettering" );
 var fp = require( "./deps/fullpage" );
 var jui = require( "./deps/jui" );
 var jnav = require( "./deps/navgoco" );

    // Set height for vertically centered tables
    function setTableHeight()
    {
      var winHeight = $(window)
        .height();
      $('.table')
        .css('height', winHeight);
      $('.table__cell')
        .css('height', winHeight);
    }
    setTableHeight();
     // Reset table height on window resize
    $(window)
      .resize(function()
      {
        setTableHeight();
      });
     // Disable scrolling
    $('html')
      .on('scroll touchmove mousewheel', function(e)
      {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
     // Run code on document.ready
    $(document)
      .ready(function()
      {
        // set APText vars
        var apc = $('#active__page_container'),
          ap = $('#active__page'),
          hidden = 'hidden',
          inactiveHiddenClass = '.inactive.hidden',
          inactiveHidden = 'inactive hidden',
          fadeIn = 'animated fadeIn',
          fadeOut = 'animated fadeOut',
          fadeTime = 1000;
        // Function to: fade in div.active__page_container brackets
        function loadAPBrackets()
          {
            $(inactiveHiddenClass)
              .removeClass(hidden)
              .addClass(fadeIn);
          }
        // Function to: clear div.active__page_container brackets
        function clearAPBrackets()
          {
            apc.addClass(fadeOut);
            // Reset div.active__page_container
            setTimeout(function()
            {
              apc.removeClass(fadeOut);
              apc.addClass(inactiveHidden);
            }, fadeTime);
          }
        // Function to: clear text in span.active__page 
        function clearAPText()
        {
          // check if ap has text
          if (ap.text() != '')
          {
            // clear & fade out ap text
            ap.addClass(fadeOut)
              .text('');
            // reset AP classes after animation runs
            setTimeout(function()
            {
              ap.removeClass(fadeOut);
            }, fadeTime);
          }
        };
        // Function to: load text in span.active__page 
        function loadAPText(obj)
        {
          // load text
          ap.addClass(fadeIn)
            .text(obj);
          // reset AP classes after animation runs
          setTimeout(function()
          {
            ap.removeClass(fadeIn);
          }, fadeTime);
        };
        /**
         * jQuery.browser.mobile (http://detectmobilebrowser.com/)
         *
         * jQuery.browser.mobile will be true if the browser is a mobile device
         *
         **/
        (function(a)
        {
        (jQuery.browser = jQuery.browser ||
          {})
          .mobile =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
            .test(a) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
            .test(a.substr(0, 4))
          })(navigator.userAgent || navigator.vendor || window.opera);
          // Check for mobile browsers
          if (jQuery.browser.mobile === true)
          {
          (function($){
          $.fn.innerText = function(msg) {
          if (msg) {
            if (document.body.innerText) {
               for (var i in this) {
                  this[i].innerText = msg;
               }
            } else {
               for (var i in this) {
                  this[i].innerHTML.replace(/\&lt;br\&gt;/gi,"\n").replace(/(&lt;([^&gt;]+)&gt;)/gi, "");
               }
            }
            return this;
          } else {
            if (document.body.innerText) {
               return this[0].innerText;
            } else {
               return this[0].innerHTML.replace(/\&lt;br\&gt;/gi,"\n").replace(/(&lt;([^&gt;]+)&gt;)/gi, "");
            }
          }
          };    
          })(jQuery); $('.skills__list_item.x').innerText('View this sites page speed score')
          .wrap( "<a href='https://developers.google.com/speed/pagespeed/insights/?url=dennisjefferson.com' class='skills__list_a'></a>" );;
          // Mobile  setup
          }
        else
        {
          // Desktop setup
        }
        $('#fullpage')
            .fullpage(
            {
              sectionsColor: ['#F5EDE3', '#F5EDE3', '#F5EDE3', '#F5EDE3',
                '#F5EDE3'
              ],
              anchors: ['intro', 'about', 'skills', 'portfolio', 'contact'],
              menu: '.main-menu',
              css3: true,
              scrollingSpeed: 900,
              animateAnchor: true, 
              loopBottom: true,
              loopTop: true,
              keyboardScrolling: true,
              fixedElements: '.controls',
              easingcss3: 'ease-in-out',
              afterLoad: function(anchorLink, index)
              {
                // fadeIn the page title in on anchor load
                if (anchorLink == 'intro')
                {
                  clearAPBrackets()
                }
                if (anchorLink == 'about')
                {
                  loadAPText("About");
                }
                if (anchorLink == 'skills')
                {
                  loadAPText("Skills");
                }
                if (anchorLink == 'portfolio')
                {
                  loadAPText("Portfolio");
                }
                if (anchorLink == 'contact')
                {
                  loadAPText("Contact");
                }
              },
              onLeave: function(index, nextIndex, direction)
              {
                // Load active__page brackets onLeave from intro
                if (index == 1 && direction == 'down')
                {
                  clearAPText();
                  loadAPBrackets();
                }
                // fadeOut the page title when going 'up' or 'down'
                if (direction == 'down')
                {
                  clearAPText();
                }
                else if (direction == 'up')
                {
                  clearAPText();
                }
              }
            });
        // Reset URL Hash for fullpage.js bug
        history.pushState('', document.title, window.location.pathname);
        // create function to off-canvas-menu
        function closeNav()
          {
            $('body')
              .removeClass('nav-expanded');
          }
          $('.arrow.up').on('click',  function() {
            $.fn.fullpage.moveSectionUp();
          });
          $('.arrow.down').on('click',  function() {
            $.fn.fullpage.moveSectionDown();
          });
          // fadeIn APC after closeNav()
        function apcFadeIn()
          {
            apc.addClass('fadeIn');
            setTimeout(function()
            {
              apc.removeClass("animated fadeOut fadeIn");
            }, 800);
          }
          // fadeOut APC after navExpanded

        function apcFadeOut()
          {
            $('#active__page_container')
              .addClass('animated fadeOut');
          }
          // Highlight svg on mouseover
        var tba = $('a.three-bars_a'),
          tb = $('.three-bars');
        tba.mouseover(function()
        {
          tb.css('fill', '#FF6600');
        });
        tba.mouseout(function()
        {
          tb.css('fill', '#6699FF');
        });
        //Navigation Menu Slider Open
        $('#nav-expander')
          .on('click', function(e)
          {
            e.preventDefault();
            $('body')
              .toggleClass('nav-expanded');
            apcFadeOut(); // fadeout APC on navOpen
          });
        //Navigation Menu Slider Close
        $('#nav-close')
          .on('click', function(e)
          {
            e.preventDefault();
            closeNav();
            apcFadeIn(); // fadeIn APC on navClose
          });
        // Initialize navgoco with default options
        $(".main-menu")
          .navgoco(
          {
            caret: '<span class="caret"></span>',
            accordion: false,
            openClass: 'open',
            save: true,
            cookie:
            {
              name: 'navgoco',
              expires: false,
              path: '/'
            },
            slide:
            {
              duration: 300,
              easing: 'swing'
            }
          });
        // Set Scrolling Navigation Links
        $('.main-menu-home')
          .on('click', function(e)
          {
            e.preventDefault();
            closeNav();
            $.fn.fullpage.moveTo(1);
          });
        $('.main-menu-about')
          .on('click', function(e)
          {
            e.preventDefault();
            closeNav();
            apcFadeIn();
            $.fn.fullpage.moveTo(2);
          });
        $('.main-menu-skills')
          .on('click', function(e)
          {
            e.preventDefault();
            closeNav();
            apcFadeIn();
            $.fn.fullpage.moveTo(3);
          });
        $('.main-menu-portfolio')
          .on('click', function(e)
          {
            e.preventDefault();
            closeNav();
            apcFadeIn();
            $.fn.fullpage.moveTo(4);
          });
        $('.main-menu-resume')
          .on('click', function(e)
          {
            e.preventDefault();
            closeNav();
            apcFadeIn();
          });
        $('.main-menu-contact')
          .on('click', function(e)
          {
            e.preventDefault();
            closeNav();
            apcFadeIn();
            $.fn.fullpage.moveTo(5);
          });
      });
     // Run code on window load
    $(window)
      .bind("load", function()
      {
        // This code runs after 1 second
        setTimeout(function()
        {
          // Reveal sections after page load to avoid FOUC
          $('.reveal.hidden')
            .removeClass('hidden')
            .addClass('animated fadeIn');
          // Turn scroll back on
          $('html')
            .off('scroll touchmove mousewheel');   
          // dev_mode
          // $.fn.fullpage.moveTo(3);
        }, 1000);
        // Center intro content horizontally
        function inwi()
          {
            var introWidth = $('.intro')
              .width();
            $('.table__cell')
              .css('width', introWidth + 'px');
          }
          // Run inwi() on resize
        $(window)
          .resize(function()
          {
            inwi();
          });
        // Fade in intro content on load
        setTimeout(function()
        {
          $('#fullpage')
            .removeClass('hidden')
            .addClass('animated fadeIn');
          inwi();
        }, 300);
        // Initiliaze variables
        var t0 = $('.dynamic_text0'),
          t1 = $('.dynamic_text1'),
          t2 = $('.dynamic_text2'),
          t3 = $('.dynamic_text3'),
          t4 = $('.dynamic_text4'),
          t5 = $('.dynamic_text5'),
          controls = $('.controls');
        // create anon function for our intro animation handler
        (function()
        {
          // create function to run texillate animation
          function txtl(obj)
            {
              obj.removeClass('hidden')
                .textillate(
                { in :
                  {
                    effect: 'flipInY'
                  }
                });
            }
          // create function to fadeIn hidden object
          function invFade(obj)
            {
              obj.removeClass('invisible')
                .addClass('animated fadeIn')
            }
          // Build engine for paper-plane & take off
          var engine = $('.two.paper-plane');
          function igniteEngine()
          {
            engine.css('fill', '#FF6600');
          }
          function killEngine()
          {
            engine.css('fill', '#F5EDE3');
          }
          // Fade out control msg after intro animation
          function fadeInCtrlsMsg()
          {
            var loop = jQuery.runloop();
            loop.addKey('100%', function()
            {
              $('#controls__msg').addClass('animated fadeOut');              
            });
            loop.play(3200);
          }
          function takeOff()
            {
              //        \ / 
              //  --=_/( . )\_=--  F-18 HORNET
              // Create runloop for paper-plane animation timing
              var loop = jQuery.runloop();
              // Note: only use 5% intervals (10% for <500ms durations)!
              loop.addKey('5%', function()
              {
                igniteEngine()
              });
              loop.addKey('15%', function()
              {
                killEngine()
              });
              loop.addKey('25%', function()
              {
                igniteEngine()
              });
              loop.addKey('35%', function()
              {
                killEngine()
              });
              loop.addKey('45%', function()
              {
                igniteEngine()
              });
              loop.addKey('55%', function()
              {
                killEngine()
              });
              loop.addKey('65%', function()
              {
                igniteEngine()
              });
              loop.addKey('75%', function()
              {
                killEngine()
              });
              loop.addKey('85%', function()
              {
                igniteEngine()
              });
              loop.addKey('95%', function()
              {
                killEngine()
              });
              loop.addKey('100%', function()
              {
                igniteEngine()
              });
              loop.play(1500);
            }

          // Create runloop for text animation timing
          var loop = jQuery.runloop();
          // Note: only use 5% intervals (10% for <500ms durations)!
          loop.addKey('5%', function()
          {
            txtl(t0);
          });
          loop.addKey('20%', function()
          {
            t0.addClass('hidden');
            txtl(t1);
          });
          loop.addKey('40%', function()
          {
            t1.addClass('hidden');
            txtl(t2);
            takeOff();
          });
          loop.addKey('60%', function()
          {
            t2.addClass('hidden');
            txtl(t3);
          });
          loop.addKey('80%', function()
          {
            t3.addClass('hidden');
            txtl(t4);
          });
          // Run final paragraph text
          loop.addKey('90%', function()
          {
            invFade(t5);
          });
          loop.addKey('100%', function()
          {
            invFade(controls);
            fadeInCtrlsMsg();            
          });
          loop.play(20000);
        })();

      }); // end document ready 