console.log('Loaded!');

var img = document.getElementById('madi');
var moveMargin = 0;
function MoveRight(){
    moveMargin = moveMargin + 5;
    img.style.marginLeft = moveMargin +'px';
}
img.onclick = function()
{
    var interval = setInterval(MoveRight, 30);
};