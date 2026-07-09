document.querySelectorAll('.butterfly').forEach(function (butterfly) {
  butterfly.addEventListener('mouseover', function () {
    butterfly.style.left=(700*Math.random())+"px";
    butterfly.style.top=(200*Math.random()+200)+"px";
    butterfly.style.position = "absolute";
  });
});

document.querySelectorAll('.monster').forEach(function (foo) {
  foo.addEventListener('click', function () {
    foo.style.left=(450*Math.random()+400)+"px";
    foo.style.top=(130*Math.random()+170)+"px";
    foo.style.position = "absolute";
  });
});