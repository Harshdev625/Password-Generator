const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = `-~!@#$%^&*()_{}[].,/+<>=|?'"`;
const Shuffle = (password) => {
  var arr = password.split("");
  arr.sort(() => {
    return 0.5 - Math.random();
  });
  password = arr.join("");
  return password;
};

const createPassword = () => {
  let password = "";
  let length = parseInt(document.getElementById("length").value);
  if (length < 4) {
    alert("Length should be greater than or equal to four.");
    return;
  }
  const arr = [];
  if (document.getElementById("lowercase").checked) arr.push(0);
  if (document.getElementById("uppercase").checked) arr.push(1);
  if (document.getElementById("numbers").checked) arr.push(2);
  if (document.getElementById("special").checked) arr.push(3);
  if (arr.length === 0) {
    alert(`You didn't checked the password requirement.`);
  }
  while (password.length < length - arr.length) {
    let a = arr[Math.floor(Math.random() * arr.length)];
    if (a === 0) {
      let b = Math.floor(Math.random() * lowercase.length);
      password += lowercase[b];
    } else if (a === 1) {
      let b = Math.floor(Math.random() * uppercase.length);
      password += uppercase[b];
    } else if (a === 2) {
      let b = Math.floor(Math.random() * numbers.length);
      password += numbers[b];
    } else {
      let b = Math.floor(Math.random() * special.length);
      password += special[b];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let b = Math.floor(Math.random() * lowercase.length);
      password += lowercase[b];
    } else if (arr[i] === 1) {
      let b = Math.floor(Math.random() * uppercase.length);
      password += uppercase[b];
    } else if (arr[i] === 2) {
      let b = Math.floor(Math.random() * numbers.length);
      password += numbers[b];
    } else {
      let b = Math.floor(Math.random() * special.length);
      password += special[b];
    }
  }
  password = Shuffle(password);
  document.getElementById("password").value = password;
};

document.getElementById("generate").addEventListener("click", createPassword);

const copyPassword = () => {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
  const messageElement = document.getElementById("message");
  messageElement.innerText = "Password has been copied to the clipboard!";
  setTimeout(() => {
    messageElement.innerText = "";
  }, 2000);
};

document.getElementById("copy").addEventListener("click", copyPassword);
