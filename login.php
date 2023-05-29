<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" href="./images/Orbital Poster (7).png" />
    <link rel="stylesheet" href="form.css" />

    <title>Login Page</title>
  </head>
  <body>
    <form method="post" action ="login.php">
      <div class="background">
        <div class="alertbox">
          <p class="alert">Error! Wrong email or password!</p>
        </div>

        <div class="logincontainer">
          <div class="logincenter">
            <div class="logo">
              <img src="./images/Orbital Poster Full Final.png" alt="" />
            </div>
            <h2 class="signin">Sign In</h2>
            <div class="singincontainer">
              <form action="">
                <br />
                <input
                  class="email"
                  type="email"
                  id="email"
                  name = "email"
                  placeholder="Email"
                />
                <br />
                <br />

                <input class="password" type="password" placeholder="Password" name = "password" />
                <br />
                <br />

                <!-- <a href="success.html">
                  <button class="btn" type="button" name="login_Btn">Login</button>
                </a> -->
                <input type="submit" value="Login" class="btn" name="login_Btn">
              </form>
            </div>
          </div>
        </div>
      </div>
      </form>
  </body>
</html>

<?php
$conn = mysqli_connect("localhost", "root", "");
if(isset($_POST['login_Btn'])){
  $email = $_POST['email'];
  $password = $_POST['password'];
  $sql = "SELECT * FROM websitelogin.logindetails WHERE email = '$email'";
  $result = mysqli_query($conn, $sql);
  while($row = mysqli_fetch_assoc($result)){
    $resultPassword = $row['password'];
    if($password == $resultPassword){
      header('Location:success.html');
    } else {
      echo "<script>
          alert('login unsuccessful');
      </script>";
    }
  }
}
?>