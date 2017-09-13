/*背景图*/
$(document).ready(init);
var Data = {
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    locked: false //是否设值完成, 用于完美控制不同浏览器事件解析差异
};
function init() {
    addListener();
}
function addListener() {
    $(".pages-1").mouseover(doMouseOver).mousemove(doMouseMove);
}
function doMouseOver(e) {
    Data.startX = e.pageX - Data.currentX;
    Data.startY = e.pageY - Data.currentY;
    Data.locked = true;
}
function doMouseMove(e) {
    if (Data.locked != true) {
        return false;
    }
    Data.currentX = -(e.pageX - Data.startX);
    Data.currentY = -(e.pageY - Data.startY);
//        $(".pages-1").animate({ "background-position-x": Data.currentX + "px", "background-position-y": Data.currentY + "px" },"slow");
    $(".pages-1").css({ "background-position": Data.currentX + "px "+ Data.currentY + "px" });
}
function doMouseOut(e) {
    locked = false;
}
/*产品服务*/
function moverOver1() {
    document.imgMouse1.src="images/jhzf_icon.png";
}
function moverOut1(){
    document.imgMouse1.src="images/jhzf_icon-c.png";
}
function moverOver2() {
    document.imgMouse2.src="images/xfjr_icon.png";
}
function moverOut2(){
    document.imgMouse2.src="images/xfjr_icon-c.png";
}
function moverOver3() {
    document.imgMouse3.src="images/gyljr_icon.png";
}
function moverOut3(){
    document.imgMouse3.src="images/gyljr_icon-c.png";
}
function moverOver4() {
    document.imgMouse4.src="images/dzfw_icon.png";
}
function moverOut4(){
    document.imgMouse4.src="images/dzfw_icon-c.png";
}