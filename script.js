// -----------------------------
// BRANCH DATA
// -----------------------------
window.onload = function () {

 

  let selectedBranch = null;

  const branchSelect = document.querySelector(".branch-box select");
  const branchButton = document.querySelector(".branch-box button");

  branchButton.addEventListener("click", function () {
    const branch = branchSelect.value;

    if (data[branch]) {
      selectedBranch = branch;
      alert(branch + " selected successfully!");
    } else {
      alert("Select valid branch");
    }
  });

  const cards = document.querySelectorAll(".card button");

  cards[0].addEventListener("click", function () {
    if (!selectedBranch) {
      alert("Select branch first!");
      return;
    }
    alert("Notes: " + data[selectedBranch].notes.join(", "));
  });

  cards[1].addEventListener("click", function () {
    window.location.href = "videolecher.html";
  });

  cards[2].addEventListener("click", function () {
    alert("PYQs section clicked");
  });

  cards[3].addEventListener("click", function () {
    alert("Random Test Started!");
  });

};
const featureButtons = document.querySelectorAll(".card button");

featureButtons[0].addEventListener("click", () => showContent("notes"));
featureButtons[1].addEventListener("click", () => showContent("videos"));
featureButtons[2].addEventListener("click", () => showContent("pyqs"));
featureButtons[3].addEventListener("click", startTest);

function showContent(type) {
  if (!selectedBranch) {
    alert("Select branch first!");
    return;
  }

  const items = data[selectedBranch][type];

  let output = type.toUpperCase() + ":\n\n";

  items.forEach((item, index) => {
    output += (index + 1) + ". " + item + "\n";
  });

  alert(output);
}

// -----------------------------
// RANDOM TEST SYSTEM
// -----------------------------
const loginBox = document.getElementById("loginBox");
const signupBox = document.getElementById("signupBox");

// default show login
loginBox.classList.add("active");

function showSignup(){
loginBox.classList.remove("active");
signupBox.classList.add("active");
}

function showLogin(){
signupBox.classList.remove("active");
loginBox.classList.add("active");
}
function signupUser() {
  let user = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  if (user === "" || email === "" || pass === "") {
    alert("Fill all details!");
    return;
  }

  // save user (temporary frontend)
  localStorage.setItem("user", user);

  alert("Account Created ✅");

  // redirect to login
  window.location.href = "login.html";
}
