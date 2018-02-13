;(() => {
    'use strict';
    /* 函数封装 */
    function Get(id) {
        return document.getElementById(id);
    }
    const load = () => {

        /* 表单选中时，改变背景颜色 */
        Get('search').onfocus = () => {
            Get('div_icon').style.cssText = 'border: 1px solid #ff6700;';
            Get('showHot').style.cssText = 'opacity: 0;';
        }
        Get('search').onblur = () => {
            Get('div_icon').style.cssText = 'border: 1px solid #e0e0e0;';
            Get('showHot').style.cssText = 'opacity: 1;';
        }        
        /* 轮播图 */
        function slideshow() {
            let slideshow = Get("slideshow"),
                imgs = slideshow.getElementsByTagName("img"), 
                pages = slideshow.getElementsByTagName('span'),
                current = 0; 
            function slideOff() {
              imgs[current].className=""; 
              pages[current].className="";
            }
            function slideOn() {
              imgs[current].className="active"; 
              pages[current].className="active";
            }
            function changeSlide() { 
              slideOff(); 
              current++; 
              if(current>=3) current=0;
              slideOn(); 
            }
            slideshow.onmouseover=function () {
                clearInterval(slideon); 
            }
            slideshow.onmouseout=function () {
                slideon=setInterval(changeSlide,2350);
            }
            let slideon=setInterval(changeSlide,2350);

            /* hover 切换 */ /* let一下直接解决 */
            for(let i=0; i<pages.length; i++) { 
                pages[i].onmouseover=function(){
                  slideOff(); 
                  current=i; 
                  slideOn(); 
                }
            }
        }
        
          slideshow();
    }
    window.onload = load; 
})();