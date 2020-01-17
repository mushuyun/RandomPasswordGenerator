var inputL = confirm ("Would you like to include lower case?");
var inputU = confirm ("Would you like to include uppercase?");
var inputN = confirm ("Would you like to include numbers?");
var inputS = confirm ("Would you like to include symbols?");

var length = prompt("Please enter password length from 8 to 128");
var complexity = parseInt(length);

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
var number = "1234567890";
var symbol = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

if (complexity != null && inputL === true ){
    let values = lower;
    function generate(){ 
        let password = "";
        for(var i = 0; i < complexity; i++){
         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
            }
            
        document.getElementById("display").value = password;
            
        document.getElementById("lastNums").innerHTML += password + "<br />";         
        }
}

if (complexity != null && inputU === true ){
    let values = upper;
    function generate(){ 
        let password = "";
        for(var i = 0; i < complexity; i++){
         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
            }
            
        document.getElementById("display").value = password;
            
        document.getElementById("lastNums").innerHTML += password + "<br />";         
        }
}

if (complexity != null && inputN === true ){
    let values = number;
    function generate(){ 
        let password = "";
        for(var i = 0; i < complexity; i++){
         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
            }
            
        document.getElementById("display").value = password;
            
        document.getElementById("lastNums").innerHTML += password + "<br />";         
        }
}

if (complexity != null && inputS === true ){
    let values = symbol;
    function generate(){ 
        let password = "";
        for(var i = 0; i < complexity; i++){
         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
            }
            
        document.getElementById("display").value = password;
            
        document.getElementById("lastNums").innerHTML += password + "<br />";         
        }
}

if(complexity != null && inputL === true && inputU === true && inputN === false && inputS === false){

    let values = lower.concat(upper);
    
    function generate(){ 
        let password = "";
        for(var i = 0; i < complexity; i++){
         password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
            }
            
        document.getElementById("display").value = password;
            
        document.getElementById("lastNums").innerHTML += password + "<br />";         
        }  
    }

if(complexity != null && inputL === true && inputU === true && inputN === true){

     let values = lower.concat(number, upper);
        function generate(){ 
            
            let password = "";
            for(var i = 0; i < complexity; i++){
                
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }   

if(complexity != null && inputL === true && inputN === true && inputU === false && inputS === false){
        
    let values = lower.concat(number);
        
        function generate(){ 
            let password = "";
            for(var i = 0; i < complexity; i++){
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }      
        
if(complexity != null && inputU === true && inputN === true && inputL === false && inputS === false){
        let values = upper.concat(number);
        
        function generate(){ 
            let password = "";
            for(var i = 0; i < complexity; i++){
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }  

if(complexity != null && inputL === true &&  inputU === true && inputS === true){
        let values = lower.concat(upper, symbol);
        
        function generate(){ 
            let password = "";
            for(var i = 0; i < complexity; i++){
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }     
if(complexity != null && inputL === true && inputN === true && inputS === true){
        let values = lower.concat(number, symbol);
        
        function generate(){ 
            let password = "";
            for(var i = 0; i < complexity; i++){
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }    
if(complexity != null && inputU === true && inputN === true && inputS === true){
        let values = upper.concat(number, symbol);
        
        function generate(){ 
            let password = "";
            for(var i = 0; i < complexity; i++){
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }     

if(complexity != null && inputU === true && inputS === true && inputL === false && inputN === false){
        let values = upper.concat(symbol);
        
        function generate(){ 
            let password = "";
            for(var i = 0; i < complexity; i++){
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }  
    
if(complexity != null && inputN === true && inputS === true && inputL === false && inputU ===false){
        let values = number.concat(symbol);
        
        function generate(){ 
            let password = "";
            for(var i = 0; i < complexity; i++){
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }  

if(complexity != null && inputL === true && inputS === true && inputN === false && inputU === false){
        let values = lower.concat(symbol);
        
        function generate(){ 
            let password = "";
            for(var i = 0; i < complexity; i++){
             password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
                }
                
            document.getElementById("display").value = password;
                
            document.getElementById("lastNums").innerHTML += password + "<br />";         
            }  
    }  

if(complexity !=null && inputL === true && inputU === true && inputN === true && inputS === true ) {
    let values = lower.concat(upper, number, symbol);
    
    function generate(){
    let password = "";
    for(var i = 0; i < complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
         }

    document.getElementById("display").value = password;

    document.getElementById("lastNums").innerHTML += password + "<br />";

    }
} 

function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");
}

if (complexity < 8 || complexity > 128 ){
    alert("You have to enter a number between 8 and 128.");  
    var length1 = prompt ("Please enter again");
    complexity = parseInt(length1);
}
