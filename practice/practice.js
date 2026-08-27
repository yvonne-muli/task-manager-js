let count = 0;

const countDisplay = document.getElementById("countDisplay");
const countBtn = document.getElementById("countBtn");


countBtn.addEventListener("click", function() {
    count = count + 1;
    if(count % 2==0) {
        countDisplay.textContent = "clicks: " + count + "(even)";
    }
    else {
        countDisplay.textContent = "clicks: " + count + "(odd)";
    }

});


