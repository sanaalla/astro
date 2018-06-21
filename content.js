window.onload = function(){
    
    
//THIS IS THE WEIRD GAME ANIMATION
var loop = true;
var easing = 'linear';
var direction = 'alternate';

anime({
  translateX: 470,
  translateY: 100,
  loop,
  direction

})

var bar4Timeline = anime.timeline({
  loop,
  direction
})
var bar3Timeline = anime.timeline({
  loop,
  direction
})

var bar2Timeline = anime.timeline({
  loop,
  direction
})
var bar1Timeline = anime.timeline({
  loop,
  direction
})



bar4Timeline
.add({
  targets: '.bar4',
  translateY: 10,
  easing,
  background: '#FF1461'
}).add({
  targets: '.bar4',
  translateY: 10,
  easing,
  background: '#53bdff'
}).add({
  targets: '.bar4',
  translateY: '-10',
  easing,
  background: '#b929ae'
})

bar1Timeline
.add({
  targets: '.bar1',
  translateY: '-5',
  easing,
  background: '#282741'
}).add({
  targets: '.bar1',
  translateY: 5,
  easing,
  background: '#FF1461'
}).add({
  targets: '.bar1',
  translateY: 10,
  easing,
  background: '#53bdff'
})


bar3Timeline
.add({
  targets: '.bar3',
  translateY: '-5',
  easing,
  background: '#b929ae'
}).add({
  targets: '.bar3',
  translateY: 10,
  easing,
  background: '#282741'
}).add({
  targets: '.bar3',
  translateY: 5,
  easing,
  background: '#FF1461'
})


bar2Timeline
.add({
  targets: '.bar2',
  translateY: 5,
  easing,
  background: '#53bdff'
}).add({
  targets: '.bar2',
  translateY: 10,
  easing,
  background: '#b929ae'
}).add({
  targets: '.bar2',
  translateY: '-5',
  easing,
  background: '#282741'
})
bar1Timeline
.add({
  targets: '.bar1',
  translateY: '-5',
  easing,
  background: '#FF1461'
}).add({
  targets: '.bar1',
  translateY: 10,
  easing,
  background: '#53bdff'
}).add({
  targets: '.bar1',
  translateY: 5,
  easing,
  background: '#b929ae'
})

    
}