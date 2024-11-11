
const locationText = document.getElementById("location-text"); 
const generateBtn = document.querySelector("#generate-btn"); 
const bookmarkBtn = document.querySelector("#bookmark-btn");
const savedList = document.querySelector("#saved-list");


const mainContainer = locationText.parentNode; 
const headerSibling = mainContainer.previousElementSibling; 


function clearBookmarks() {
    while (savedList.firstChild) {
        savedList.removeChild(savedList.firstChild);
    }
}


function bookThis() {
    const newLocation = document.createElement("li");
    newLocation.textContent = "A new Christmas Light Tour location!"; 
    savedList.appendChild(newLocation);
}


function addTemplatedLocations() {
    const fragment = document.createDocumentFragment();
    for (let i = 1; i <= 3; i++) {
        const clonedLocation = locationText.cloneNode(true);
        clonedLocation.textContent = `Light Tour Location ${i}`;
        fragment.appendChild(clonedLocation);
    }
    savedList.appendChild(fragment);
}


generateBtn.addEventListener("click", () => {
    locationText.textContent = "Explore this holiday's featured light tour!";
    generateBtn.classList.add("highlight");
});


bookmarkBtn.addEventListener("click", () => {
    bookThis();
    bookmarkBtn.style.color = "red";
    bookmarkBtn.classList.add("bookmarked");
});


generateBtn.addEventListener("click", bookThis); 
bookmarkBtn.addEventListener("click", clearBookmarks); 


function validateForm() {
    const emailField = document.forms["myForm"]["fname"];
    if (emailField.value === "") {
        alert("Email must be filled out.");
        emailField.focus();
        return false;
    }
    if (!emailField.value.includes("@")) {
        alert("Please enter a valid email address.");
        emailField.focus();
        return false;
    }
    return true;
}


document.forms["myForm"]["fname"].addEventListener("blur", (event) => {
    const email = event.target.value;
    if (!email.includes("@")) {
        alert("Invalid email format. Please include an '@' symbol.");
    }
});