function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const confirm = document.getElementById("regConfirm").value;

  if (username === "" || password === "" || confirm === "") {
    alert("Please fill all fields");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  // Save user (demo)
  localStorage.setItem("user", JSON.stringify({ username, password }));

  alert("Registration successful!");
  window.location.href = "login.html";
}
