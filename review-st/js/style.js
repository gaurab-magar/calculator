document.addEventListener('DOMContentLoaded',function(){
    let Sbtn = document.getElementById("submit");
    let card1 = document.getElementById("card-1");
    let card2 = document.getElementById("card-2");
    let text = document.getElementById("change");
    let textInfo = document.getElementById("text-info");

    const textToWrite = `Thankyou !`;
    const speed = 220;
    const autoTextWriter = document.getElementById("autoText");

    let index = 0;



    Sbtn.addEventListener("click",function(){
        let ratingPoint = document.querySelector('input[name="rating"]:checked');
        if(ratingPoint){
            card1.style.display = 'none';
            card2.classList.remove('d-none');
            card2.classList.add('fadein');
            text.textContent=`you have selected: ${ratingPoint.value} out of 5`;
            condition(ratingPoint.value);
        }else{
            alert("please select a point from the stars to rate us!");
        }
    })

    function typeText() {
        autoTextWriter.textContent = textToWrite.slice(0, index);
        index++;
    
        if (index > textToWrite.length) {
          index = 0;
        }
      }
    
      setInterval(typeText, speed);


    function condition(rating){
        switch(rating){
            case '5':
                textInfo.textContent= `Excellent! Thank you for the 5-star rating.`;
                break;
            case '4':
                textInfo.textContent= "Great! Thank you for the 4-star rating.";
                break;
            case '3':
                textInfo.textContent= "Good! Thank you for the 3-star rating.";
                break;
            case '2':
                textInfo.textContent= "Okay. Thank you for the 2-star rating.";
                break;
            case '1':
                textInfo.textContent= "We're sorry to hear that. Thank you for the 1-star rating.";
                break;
            default:
                textInfo.textContent="invalid rating";
                break;
        }

    }

});
