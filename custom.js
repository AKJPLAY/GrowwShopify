window.coursor = new MouseFollower({
    container: 'body',
    speed: 1.5,
    stateDetection: false,
    dataAttr: false
});


coursor.on('render', function(cursor){
    document.querySelector('.js-masker').style.setProperty("--x", coursor.pos.x + 'px');
    document.querySelector('.js-masker').style.setProperty("--y", (coursor.pos.y + Math.abs(document.querySelector('body').getClientRects()[0].y))  + 'px');
    window.lastXPosition = coursor.pos.x;
    window.lastYPosition = coursor.pos.x;
});

coursor.on('show', function(cursor){
    console.log(cursor);
    document.querySelector('.js-masker').style.setProperty("--x", coursor.pos.x + 'px');
    document.querySelector('.js-masker').style.setProperty("--y", (coursor.pos.y + Math.abs(document.querySelector('body').getClientRects()[0].y))  + 'px');
});

coursor.on('hide', function(cursor){
    document.querySelector('.js-masker').style.setProperty("--x", coursor.pos.x + 'px');
    document.querySelector('.js-masker').style.setProperty("--y", (coursor.pos.y + Math.abs(document.querySelector('body').getClientRects()[0].y))  + 'px');
});

coursor.on('addState', function(cursor, state){
    document.querySelector('.js-masker').style.setProperty("--x", coursor.pos.x + 'px');
    document.querySelector('.js-masker').style.setProperty("--y", (coursor.pos.y + Math.abs(document.querySelector('body').getClientRects()[0].y))  + 'px');
});

coursor.on('addState', function(removeState, state){
    document.querySelector('.js-masker').style.setProperty("--x", coursor.pos.x + 'px');
    document.querySelector('.js-masker').style.setProperty("--y", (coursor.pos.y + Math.abs(document.querySelector('body').getClientRects()[0].y))  + 'px');
});

coursor.on('destroy', function(cursor){
    document.querySelector('.js-masker').style.setProperty("--x", coursor.pos.x + 'px');
    document.querySelector('.js-masker').style.setProperty("--y", (coursor.pos.y + Math.abs(document.querySelector('body').getClientRects()[0].y))  + 'px');
})

document.onscroll = function(){
    window.coursor.show();
}
