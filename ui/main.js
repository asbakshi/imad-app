console.log('Loaded!');

var img = document.getElementById('madi');
var moveMargin = 0;
function MoveRight(){
    moveMargin = moveMargin + 10;
    img.style.marginLeft = moveMargin +'px';
}
img.onclick = function()
{
    var interval = setInterval(MoveRight, 100);
};