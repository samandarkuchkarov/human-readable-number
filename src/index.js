module.exports =function toReadable(number) {
     let answer, answer2, answer3;
     let s = number.toString();
     let length = s.length;
     let toTen = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ];
     let totwenty = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
     let tohundred = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

 if(number==0){
     return 'zero';
 }

     if (length == 1) {
         answer = toTen[number - 1];

         return(answer) ;
     }
     if (length == 2 && number <= 19) {
         let secondnumber = number % 10;
         if (secondnumber == 0) {
             answer = totwenty[0];
             return(answer);
         } else {
             answer = totwenty[secondnumber]
             return(answer);
         }
     }
     if (length == 2 && number > 19) {
         let ten = number / 10
         let firstnumber;
         firstnumber = Math.floor(ten);

         answer = tohundred[firstnumber - 1];
         let secondnumber = number % 10;
         answer2 = toTen[secondnumber - 1];
         if (secondnumber != 0) {
             
            return(answer + ' ' + answer2)
         } else {
            return(answer);
         }
     }

     if (number >= 100) {
         let hundred = number / 100;
         let firstnumber = Math.floor(hundred);
         answer = toTen[firstnumber - 1] + ' ' + 'hundred';
         let ten1 = number % 100;
        if(ten1<=9){
           if(ten1>0&&ten1<=9){
            answer3=toTen[ten1 - 1];
             
            return(answer+' '+answer3);
           } else{
            return(answer);
           }
            
        }


         if (ten1 <= 19&& ten1>9) {
            let thirdnumber = ten1 % 10;
           
            if (thirdnumber == 0 ) {
                answer2 = totwenty[0];   
                
                return(answer +' '+ answer2 );
            } else if (thirdnumber!=0){
                
                answer2 = totwenty[thirdnumber]
                return(answer +' '+ answer2 );
              
            }
        }
     
         if ( ten1 > 19) {
             let ten = ten1 / 10
             let secondnumber;
             secondnumber = Math.floor(ten);

             answer2 = tohundred[secondnumber - 1];
             let thirdnumber = number % 10;
             answer3 = toTen[thirdnumber -1];
            
             
             if (secondnumber != 0 && thirdnumber!=0) {
                return(answer +' '+ answer2 + ' ' + answer3); 
             } else if(secondnumber==0 && thirdnumber==0){
                return(answer+' ');
             }
             else if(secondnumber!=0 && thirdnumber==0){
                 
                return(answer+" "+answer2);
            }
            else if(secondnumber!=0 && thirdnumber==0){
                 
                return(answer+" "+answer2);
            }
         }

     }

 }

