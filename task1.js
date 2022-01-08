window.onload = function(){
   let price = [mushrooms = 10,bacon = 20,tomato = 5,cheese = 20,olives =5];
   let diametr =[max = 60,middle = 40,min = 20];
   let myDiv = document.getElementById("myDiv");
    document.getElementById("order").onclick = function(){
             let myPrice = [];
             let myTotal=[];
             for (let i=0; i<myOrder.elements.length; i++){
                 if ( myOrder.elements[i].checked == true) {
                    myOrder.elements[i].value = price[i];
                    myPrice.push(Number(myOrder.elements[i].value));
                    myTotal.push(myOrder.elements[i].name)
                  }
              }
            let myPizza = document.getElementById("diametr");
            let myD = myPizza[myPizza.selectedIndex].text;
            myInd = myPizza.selectedIndex;
            myPrice.push(Number(diametr[myInd]));
            myTotal.push(myD);
            let sum=0;
            for (let i = 0; i < myPrice.length; i++) {
              sum += myPrice[i];
            }
            myDiv.innerHTML = myTotal+"; Total= "+sum;
    }
        
        document.getElementById('adress').onclick = function(e){
          let pattern = /\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}/;   
          let input = document.getElementById("mobile");
          if (!pattern.test(input.value)){
            alert("input correct mobile number");
            e.preventDefault();
          }
        }

}