$(document).ready(function() {
    $(".b1").click(function(){
        event.stopPropagation();
        
            $(".b2").removeClass("active");
            $(".b3").removeClass("active");
            $(".b4").removeClass("active");
            $(".b11").addClass("active");
            $(".b12").addClass("active");
            $(".b13").addClass("active");
            $(".b14").addClass("active");
            $(this).addClass("active");
            $(".b21").removeClass("active");
            $(".b22").removeClass("active");
            $(".b23").removeClass("active");
            $(".b24").removeClass("active");
            $(".b41").removeClass("active");
            $(".b42").removeClass("active");
            $(".b43").removeClass("active");
            $(".b44").removeClass("active");
            $(".b31").removeClass("active");
            $(".b32").removeClass("active");
            $(".b33").removeClass("active");
            $(".b34").removeClass("active");
            $(".rect1").removeClass("active");
        $(".rect2").removeClass("active");
        $(".rect3").removeClass("active");
        $(".rect4").removeClass("active");
        $(".rect5").removeClass("active");
        $(".rect6").removeClass("active");
        $(".rect7").removeClass("active");
        $(".rect8").removeClass("active");
            
        
    });
    $(".b2").click(function(){
        event.stopPropagation();
        
            $(".b1").removeClass("active");
            $(".b3").removeClass("active");
            $(".b4").removeClass("active");
            $(".b21").addClass("active");
            $(".b22").addClass("active");
            $(".b23").addClass("active");
            $(".b24").addClass("active");
            $(this).addClass("active");
            $(".b41").removeClass("active");
            $(".b42").removeClass("active");
            $(".b43").removeClass("active");
            $(".b44").removeClass("active");
            $(".b11").removeClass("active");
            $(".b12").removeClass("active");
            $(".b13").removeClass("active");
            $(".b14").removeClass("active");
            $(".b31").removeClass("active");
            $(".b32").removeClass("active");
            $(".b33").removeClass("active");
            $(".b34").removeClass("active");
            $(".rect1").removeClass("active");
        $(".rect2").removeClass("active");
        $(".rect3").removeClass("active");
        $(".rect4").removeClass("active");
        $(".rect5").removeClass("active");
        $(".rect6").removeClass("active");
        $(".rect7").removeClass("active");
        $(".rect8").removeClass("active");
            
        
    });


    $(".b3").click(function(){
        event.stopPropagation();
       
            $(".b2").removeClass("active");
            $(".b1").removeClass("active");
            $(".b4").removeClass("active");
            $(".b31").addClass("active");
            $(".b32").addClass("active");
            $(".b33").addClass("active");
            $(".b34").addClass("active");
            $(this).addClass("active");
            $(".b21").removeClass("active");
            $(".b22").removeClass("active");
            $(".b23").removeClass("active");
            $(".b24").removeClass("active");
            $(".b41").removeClass("active");
            $(".b42").removeClass("active");
            $(".b43").removeClass("active");
            $(".b44").removeClass("active");
            $(".b11").removeClass("active");
            $(".b12").removeClass("active");
            $(".b13").removeClass("active");
            $(".b14").removeClass("active");
            $(".rect1").removeClass("active");
        $(".rect2").removeClass("active");
        $(".rect3").removeClass("active");
        $(".rect4").removeClass("active");
        $(".rect5").removeClass("active");
        $(".rect6").removeClass("active");
        $(".rect7").removeClass("active");
        $(".rect8").removeClass("active");
            
        
    });

    $(".b4").click(function(){
        event.stopPropagation();
        
            $(".b2").removeClass("active");
            $(".b3").removeClass("active");
            $(".b1").removeClass("active");
            $(".b41").addClass("active");
            $(".b42").addClass("active");
            $(".b43").addClass("active");
            $(".b44").addClass("active");
            $(this).addClass("active");
            $(".rect1").addClass("active");
            $(".rect2").addClass("active");
            $(".rect3").addClass("active");
            $(".rect4").addClass("active");
            $(".rect5").addClass("active");
            $(".rect6").addClass("active");
            $(".rect7").addClass("active");
            $(".rect8").addClass("active");
            $(".b21").removeClass("active");
            $(".b22").removeClass("active");
            $(".b23").removeClass("active");
            $(".b24").removeClass("active");
            $(".b11").removeClass("active");
            $(".b12").removeClass("active");
            $(".b13").removeClass("active");
            $(".b14").removeClass("active");
            $(".b31").removeClass("active");
            $(".b32").removeClass("active");
            $(".b33").removeClass("active");
            $(".b34").removeClass("active");
            
        
    });
    $(window).click(function(){
        $(".b2").removeClass("active");
        $(".b3").removeClass("active");
        $(".b1").removeClass("active");
        $(".b4").removeClass("active");
        $(".b11").removeClass("active");
        $(".b12").removeClass("active");
        $(".b13").removeClass("active");
        $(".b14").removeClass("active");
        $(".b21").removeClass("active");
        $(".b22").removeClass("active");
        $(".b23").removeClass("active");
        $(".b24").removeClass("active");
        $(".b31").removeClass("active");
        $(".b32").removeClass("active");
        $(".b33").removeClass("active");
        $(".b34").removeClass("active");
        $(".b41").removeClass("active");
        $(".b42").removeClass("active");
        $(".b43").removeClass("active");
        $(".b44").removeClass("active");
        $(".rect1").removeClass("active");
        $(".rect2").removeClass("active");
        $(".rect3").removeClass("active");
        $(".rect4").removeClass("active");
        $(".rect5").removeClass("active");
        $(".rect6").removeClass("active");
        $(".rect7").removeClass("active");
        $(".rect8").removeClass("active");
        

        
    });
 
    $(".txt button").click(function(){
        $(this).addClass("active");
        $(".txt").addClass("active");
        $(".txt0").addClass("active");
        $(".txt0 button").addClass("active");
    });
    $(".txt0 button").click(function(){
        $(this).removeClass("active");
        $(".txt").removeClass("active");
        $(".txt0").removeClass("active");
        $(".txt button").removeClass("active");
    });

    
  

});