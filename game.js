const WHIDTH = 400;
const HEIGH = 400;

let target = {
    x:getRandomNumber(WHIDTH),
    y:getRandomNumber(HEIGH)
};
 let $map = document.getElementById('map');
 let $distance = document.getElementById('distance');
 let click =0;

 $map.addEventListener('click',function(e){
     click++;
     let distance = getDistance(e,target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = distanceHint;

    if(distance < 20){
        alert(` you find the treasure in ${click} clicks` );
        location.reload();
    }
 })