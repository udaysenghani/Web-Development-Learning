document.getElementById("loginBtn").addEventListener("click", async () =>{
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",  // important for session cookie
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (data.success) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert(data.message);
  }
});
