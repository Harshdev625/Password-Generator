const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = `-~!@#$%^&*()_{}[].,/+<>=|?'"`;

const createPassword = () => {
  let password = "";
  let length = parseInt(document.getElementById("length").value);
  console.log(length);
  if (length < 4) {
    alert("Length should be greater than or equal to four.");
    return;
  }
  const arr = [];
  const brr = [0, 0, 0, 0];
  if (document.getElementById("lowercase").checked) arr.push(0);
  if (document.getElementById("uppercase").checked) arr.push(1);
  if (document.getElementById("numbers").checked) arr.push(2);
  if (document.getElementById("special").checked) arr.push(3);
  if (arr.length === 0) {
    alert(`You didn't checked the password requirement.`);
  }
  console.log(arr.length);
  while (password.length < length) {
    let a = arr[Math.floor(Math.random() * arr.length)];
    if (a === 0) {
      brr[0]++;
      let b = Math.floor(Math.random() * lowercase.length);
      password += lowercase[b];
    } else if (a === 1) {
      let b = Math.floor(Math.random() * uppercase.length);
      brr[1]++;
      password += uppercase[b];
    } else if (a === 2) {
      let b = Math.floor(Math.random() * numbers.length);
      brr[2]++;
      password += numbers[b];
    } else {
      let b = Math.floor(Math.random() * special.length);
      brr[3]++;
      password += special[b];
    }
  }
  document.getElementById("password").value = password;
};

document.getElementById("generate").addEventListener("click", createPassword);

const copyPassword = () => {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
  const messageElement = document.getElementById("message");
  messageElement.textContent = "Password copied to clipboard!";
};

document.getElementById("copy").addEventListener("click", copyPassword);
