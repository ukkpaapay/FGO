$(function(){
    $("#button1").hide()
$("#button").click(function() {
    $("#button").hide()
    $("#button1").fadeIn(3000)
    var a=Math.floor(Math.random() * Math.floor(11));
    if(a==0||a==1||a==3||a==4||a==5||a==6||a==7||a==9||a==10){
     var b=Math.floor(Math.random() * Math.floor(7));
    switch(b){
    case 0:$("#myImg").attr("src", "servant/1-1.jpg");setTimeout(function() {servant(a,b)}, 800);break;
    case 1:$("#myImg").attr("src", "servant/2-1.jpg");setTimeout(function() {servant(a,b)}, 800);break;
    case 2:$("#myImg").attr("src", "servant/3-1.jpg");setTimeout(function() {servant(a,b)}, 800);break;
    case 3:$("#myImg").attr("src", "servant/4-1.jpg");setTimeout(function() {servant(a,b)}, 800);break;
    case 4:$("#myImg").attr("src", "servant/5-1.jpg");setTimeout(function() {servant(a,b)}, 800);break;
    case 5:$("#myImg").attr("src", "servant/6-1.jpg");setTimeout(function() {servant(a,b)}, 800);break;
    case 6:$("#myImg").attr("src", "servant/7-1.jpg");setTimeout(function() {servant(a,b)}, 800);break;
    }

}else{
    if(a==2||a==8){
        var b=Math.floor(Math.random() * Math.floor(13));
        switch(b){
            case 0:$("#myImg").attr("src", "servant/1.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 1:$("#myImg").attr("src", "servant/2.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 2:$("#myImg").attr("src", "servant/3.png");setTimeout(function() {servant(a,b)}, 800);break;
            case 3:$("#myImg").attr("src", "servant/4.png");setTimeout(function() {servant(a,b)}, 800);break;
            case 4:$("#myImg").attr("src", "servant/5.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 5:$("#myImg").attr("src", "servant/6.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 6:$("#myImg").attr("src", "servant/7.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 7:$("#myImg").attr("src", "servant/8.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 8:$("#myImg").attr("src", "servant/9.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 9:$("#myImg").attr("src", "servant/10.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 10:$("#myImg").attr("src", "servant/11.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 11:$("#myImg").attr("src", "servant/12.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            case 12:$("#myImg").attr("src", "servant/13.jpg");setTimeout(function() {servant(a,b)}, 800);break;
            }
    }
}
function servant(a,b) {
    if(a==0||a==1||a==3||a==4||a==5||a==6||a==7||a==9||a==10){
        if(b==0){var q=Math.floor(Math.random() * Math.floor(3));//saber
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/saber/1-1.png");break;
        case 1:$("#myImg").attr("src", "servant1/saber/2-1.png");break;
        case 2:$("#myImg").attr("src", "servant1/saber/3-1.png");break;
    }

}else{

    if(b==1){var q=Math.floor(Math.random() * Math.floor(4));//archer
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/archer/1-1.png");break;
        case 1:$("#myImg").attr("src", "servant1/archer/2-1.png");break;
        case 2:$("#myImg").attr("src", "servant1/archer/3-1.png");break;
        case 3:$("#myImg").attr("src", "servant1/archer/4-1.png");break;
    }}else{
    if(b==2){var q=Math.floor(Math.random() * Math.floor(6));//lancer
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/lancer/1-1.png");break;
        case 1:$("#myImg").attr("src", "servant1/lancer/2-1.png");break;
        case 2:$("#myImg").attr("src", "servant1/lancer/3-1.png");break;
        case 3:$("#myImg").attr("src", "servant1/lancer/4-1.png");break;
        case 4:$("#myImg").attr("src", "servant1/lancer/5-1.png");break;
        case 5:$("#myImg").attr("src", "servant1/lancer/6-1.png");break;
        
    }}else{
    if(b==3){var q=Math.floor(Math.random() * Math.floor(7));//berserker
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/berserker/1-1.png");break;
        case 1:$("#myImg").attr("src", "servant1/berserker/2-1.png");break;
        case 2:$("#myImg").attr("src", "servant1/berserker/3-1.png");break;
        case 3:$("#myImg").attr("src", "servant1/berserker/4-1.png");break;
        case 4:$("#myImg").attr("src", "servant1/berserker/5-1.png");break;
        case 5:$("#myImg").attr("src", "servant1/berserker/6-1.png");break;
        case 6:$("#myImg").attr("src", "servant1/berserker/7-1.png");break;
    }}else{
    if(b==4){var q=Math.floor(Math.random() * Math.floor(8));//caster
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/caster/1-1.png");break;
        case 0:$("#myImg").attr("src", "servant1/caster/2-1.png");break;
        case 1:$("#myImg").attr("src", "servant1/caster/3-1.png");break;
        case 2:$("#myImg").attr("src", "servant1/caster/4-1.png");break;
        case 3:$("#myImg").attr("src", "servant1/caster/5-1.png");break;
        case 4:$("#myImg").attr("src", "servant1/caster/6-1.png");break;
        case 5:$("#myImg").attr("src", "servant1/caster/7-1.png");break;
        case 6:$("#myImg").attr("src", "servant1/caster/8-1.png");break;
    }}else{
    if(b==5){var q=Math.floor(Math.random() * Math.floor(6));//rider
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/rider/2-1.png");break;
        case 1:$("#myImg").attr("src", "servant1/rider/2-1.png");break;
        case 2:$("#myImg").attr("src", "servant1/rider/2-1.png");break;
        case 3:$("#myImg").attr("src", "servant1/rider/2-1.png");break;
        case 4:$("#myImg").attr("src", "servant1/rider/2-1.png");break;
        case 5:$("#myImg").attr("src", "servant1/rider/2-1.png");break;
    }}else{
    if(b==6){var q=Math.floor(Math.random() * Math.floor(7));//assassin
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/assassin/1-1.png");break;
        case 1:$("#myImg").attr("src", "servant1/assassin/2-1.png");break;
        case 2:$("#myImg").attr("src", "servant1/assassin/3-1.png");break;
        case 3:$("#myImg").attr("src", "servant1/assassin/4-1.png");break;
        case 4:$("#myImg").attr("src", "servant1/assassin/5-1.png");break;
        case 5:$("#myImg").attr("src", "servant1/assassin/6-1.png");break;
        case 6:$("#myImg").attr("src", "servant1/assassin/7-1.png");break;
    }
}
    }}}}}}}




    if(a==2||a==8){
        if(b==0){var q=Math.floor(Math.random() * Math.floor(5));//saber
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/saber/1.png");break;
        case 1:$("#myImg").attr("src", "servant1/saber/2.png");break;
        case 2:$("#myImg").attr("src", "servant1/saber/3.png");break;
        case 3:$("#myImg").attr("src", "servant1/saber/4.png");break;
        case 4:$("#myImg").attr("src", "servant1/saber/5.png");break;
    }
}else{

    if(b==1){var q=Math.floor(Math.random() * Math.floor(2));//archer
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/archer/1.png");break;
        case 1:$("#myImg").attr("src", "servant1/archer/2.png");break;
    }}else{
    if(b==2){var q=Math.floor(Math.random() * Math.floor(3));//lancer
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/lancer/1.png");break;
        case 1:$("#myImg").attr("src", "servant1/lancer/2.png");break;
        case 2:$("#myImg").attr("src", "servant1/lancer/3.png");break;

        }}else{
    if(b==3){var q=Math.floor(Math.random() * Math.floor(2));//berserker
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/berserker/1.png");break;
        case 1:$("#myImg").attr("src", "servant1/berserker/2.png");break;
    }}else{
    if(b==4){var q=Math.floor(Math.random() * Math.floor(2));//caster
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/caster/1.png");break;
        case 1:$("#myImg").attr("src", "servant1/caster/2.png");break;
    }}else{
    if(b==5){var q=Math.floor(Math.random() * Math.floor(1));//rider
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/rider/1.png");break;
    }}else{
    if(b==6){var q=Math.floor(Math.random() * Math.floor(2));//assassin
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/assassin/1.png");break;
        case 1:$("#myImg").attr("src", "servant1/assassin/2.png");break;
    }}else{
    if(b==7){var q=Math.floor(Math.random() * Math.floor(1));//ruler
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/ruler/1.png");break;
    }}else{
    if(b==8){var q=Math.floor(Math.random() * Math.floor(1));//avenger
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/avenger/2.png");break;

    }}else{
    if(b==9){var q=Math.floor(Math.random() * Math.floor(1));//avenger
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/avenger/1.png");break;
    }}else{
    if(b==10){var q=Math.floor(Math.random() * Math.floor(1));//Foreigner
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/Foreigner/1.png");break;
    }}else{
    if(b==11){var q=Math.floor(Math.random() * Math.floor(1));//alterego
        switch(q){
            case 0:$("#myImg").attr("src", "servant1/alterego/1.png");break;
        }}else{
        if(b==12){var q=Math.floor(Math.random() * Math.floor(1));//mooncancer
        switch(q){
        case 0:$("#myImg").attr("src", "servant1/mooncancer/1.png");break;
    
}}}}}}}}}}}}}}}
}
    $("#button1").click(function(){
        location.reload();
    });
});
});