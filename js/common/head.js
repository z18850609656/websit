window.onscroll = function () {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var navTop= document.getElementById('navbar-top');
    if (top > 500) {//500就是滚动条滚动到的位置，大于500才显示
        navTop.style.display = 'none';
    } else {
        navTop.style.display = 'block';
    }
}