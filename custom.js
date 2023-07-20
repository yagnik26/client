// GET PRODUCT

function product() {
  let usercookie = document.cookie;
  console.log(usercookie);
  let a = usercookie.split("=")[0];
  let b = usercookie.split("=")[1];
  console.log(a);
  if (a == "jwt") {
    if (b) {
      window.location.href = "product.html";
    }
  } else {
    // window.location.href = "login.html";
    document.getElementById("signup").style.display = "none";
    document.getElementById("openSignup").addEventListener("click", (c) => {
      document.getElementById("signup").style.display = "block";
      document.getElementById("login_page").style.display = "none";
      document
        .getElementById("openLoginform")
        .addEventListener("click", (d) => {
          document.getElementById("login_page").style.display = "block";
          document.getElementById("signup").style.display = "none";
        });
    });
  }
}

// GET PROFILE

function profile() {
  let usercookie = document.cookie;
  console.log(usercookie);
  let a = usercookie.split("=")[0];
  let b = usercookie.split("=")[1];
  console.log(a);
  if (a == "jwt") {
    if (b) {
      window.location.href = "profile.html";
    }
  } else {
    window.location.href = "login.html";
  }
}

// FORGOT PASSWORD

function forgotPassword() {}
