const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~{}|-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length >  password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}


function copyPassword() {
  const passwordBox = document.getElementById("password"); // Assuming this is the ID of your password input field
  if (passwordBox) {
    passwordBox.select();

    try {
      const successful = navigator.clipboard.writeText(passwordBox.value);
      console.log("Copying to clipboard:", successful); // Optional logging for debugging
      // If you want to provide feedback to the user, you can display a success message or icon here
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      // Handle the error, such as notifying the user that copying failed
    }
  } else {
    console.error("Password box not found.");
    // Handle the error, such as notifying the user that the password field couldn't be found
  }
}
