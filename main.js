


// cards
let crd = document.querySelectorAll(".crd");
let item = document.querySelector(".item");
let container = document.querySelector(".container");
let Iimage = document.getElementById("Iimage");
let buynow = document.getElementById("buynow")



console.log(crd);

crd.forEach(function(currvalue) {

   currvalue.addEventListener("click" , function() {
       item.style.display = "flex";
       container.style.display = "none";


       let imgSrc = currvalue.firstElementChild.src;
       Iimage.src = imgSrc;

       buynow.addEventListener("click",function() {  
        document.querySelector(".buyy").style.display="block"
        document.querySelector(".buytext").innerHTML= `
         <h3> Enter Details : </h3>  
              <br>
              <input type="text" placeholder="Enter Your Name" id="name">  <br> 
               <input type="text" placeholder="Enter Your Address" id="address">  <br>
                <input type="text" placeholder="Enter Your Contect number" id="contect"> <br> <br> 
                
                <h3> Payment Option : </h3> <br>
                <select>
                  <option value="Google-pay"> Google-pay</option>
                  <option value=" Phone-pay"> Phone -pay</option>
                  <option value="Bharat-pay"> Bharat-pay</option>
                  <option value="Case-On-Delivery"> Case-On-Delivery</option>

                </select> <br>
                
               
        `
   let buytext = document.querySelector(".buytext"); 
        let button = document.createElement("button"); 
        button.innerText="Submit";
        buytext.appendChild(button)

        button.addEventListener("click" , function() {
          let name = document.getElementById("name"); 
          let address = document.getElementById("address");

             if(name.value == ""  && address.value == "" && Content.value == "") {
              alert("Please Enter Detail");
             }
             else {
              alert("Your Response Recorded");
               document.querySelector(".buyy").style.display="none";
             }

         })


        })
      })
    })
    document.addEventListener("DOMContentLoaded", function() {
    let cancelButton = document.querySelector(".cancel");

    if (cancelButton) {
        cancelButton.addEventListener("click", function() {
            let buyyDiv = document.querySelector(".buyy");
            if (buyyDiv) {
                buyyDiv.style.display = "none"; // Hide the element
            }
        });
    }
});




// connect 

function connect() {
  let name1 = document.getElementById("name1");
  let number1 = document.getElementById("number1");
  if(name1.value == "" && number1.value == "") {
    alert("Please Enter Detail ");
  }
  else
  {
    alert("Thank you for your contact");
  }
}






