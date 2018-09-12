window.addEventListener("load", init);


function init() {
    
    

    document.querySelector("#gamestart").addEventListener("click", gameStart);
    
}



function gameStart(){


    var x = document.querySelector("#totalmoney").innerHTML;

    if( x > 100) {

  
     document.querySelector("#totalmoney").innerHTML = x - 100 ; 
     const a  = Math.floor(Math.random() * 10);

     const b = Math.floor(Math.random() * 10);

     const c = Math.floor(Math.random() * 10);

     document.querySelector("#randomnumber1").innerHTML = a ; 
     document.querySelector("#randomnumber2").innerHTML = b ; 
     document.querySelector("#randomnumber3").innerHTML = c ; 

        if((a% 2 === 0 && b%2 === 0 && c%2 === 0) && (a ==b && b == c && a == c)) {

            document.querySelector("#checkcondition").innerHTML = "you have won 1000 INR as all the numbers are equal";
            const l = parseInt(document.querySelector("#totalmoney").innerHTML);
                const add2 = 1000 ; 
                const total2 = l + add2;
                // console.log(total);
                document.querySelector("#totalmoney").innerHTML = total2;
        }
        else if((a% 2 !== 0 && b%2 !== 0 && c%2 !== 0) && (a ==b && b == c && a == c)) {

            document.querySelector("#checkcondition").innerHTML = "you have won 1000 INR as all the numbers are equal";
            const k = parseInt(document.querySelector("#totalmoney").innerHTML);
                const add3 = 1000 ; 
                const total3 = k + add3;
                // console.log(total);
                document.querySelector("#totalmoney").innerHTML = total3;
        }
        

        else if( a% 2 === 0 && b%2 === 0 && c%2 === 0){

                document.querySelector("#checkcondition").innerHTML = "you have won 300 INR as all the numbers are even";
                const j = parseInt(document.querySelector("#totalmoney").innerHTML);
                const add = 300 ; 
                const total = j + add;
                // console.log(total);
                document.querySelector("#totalmoney").innerHTML = total;
            
                
                

        }
        else if(a% 2 !== 0 && b%2 !== 0 && c%2 !== 0){

                document.querySelector("#checkcondition").innerHTML = "you have won 300 INR as all the numbers are odd";
                const k = parseInt(document.querySelector("#totalmoney").innerHTML);
                const add1 = 300 ; 
                const total1 = k + add1;
                // console.log(total);
                document.querySelector("#totalmoney").innerHTML = total1;                
        }

        else if((a-b == Math.abs(1) && b-c == Math.abs(1)) || (a-b == Math.abs(1) && a-c == Math.abs(1)) || (b-c) ==Math.abs(1) && c-a== Math.abs(1)){

            document.querySelector("#checkcondition").innerHTML  = "you have won 800 INR as all the numbers are equal";
            const s = parseInt(document.querySelector("#totalmoney").innerHTML);
                const add3 = 800 ; 
                const total3 = s + add3;
                // console.log(total);
                document.querySelector("#totalmoney").innerHTML = total3;
        }
    

            
        else {
                document.querySelector("#checkcondition").innerHTML = "You were not lucky this time";
        }
        
            

    }
    else{
        document.querySelector("#gamestart").style.visibility = "hidden";
        document.querySelector("#gameover").innerHTML = "Game Over";
        document.querySelector("#checkcondition").innerHTML = "";
        isGameOver = true;

    
    }

   



}

