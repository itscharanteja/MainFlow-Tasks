function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  if (email === "") {
    alert("Email must be filled out");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }
  document.getElementById("name").value = escapeHtml(name);
  document.getElementById("email").value = escapeHtml(email);

  return true;
}

// Dynamic Content Update Function
function updateContent() {
  document.getElementById("content").innerText =
    "The content has been updated!";
}
