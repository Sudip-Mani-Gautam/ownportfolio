### Login code
```<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Modern Login & Registration</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- Boxicons -->
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #e9f0ff, #f7f7f7);
    }

    .container {
      position: relative;
      width: 850px;
      height: 500px;
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    }

    .forms {
      position: absolute;
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.6s ease-in-out;
    }

    form {
      width: 80%;
      text-align: center;
    }

    h2 {
      font-size: 28px;
      color: #111;
      margin-bottom: 20px;
      font-weight: 700;
    }

    .input-box {
      position: relative;
      margin: 15px 0;
    }

    .input-box input {
      width: 100%;
      padding: 12px 45px 12px 15px;
      border: none;
      outline: none;
      background: #f0f0f0;
      border-radius: 10px;
      font-size: 14px;
    }

    .input-box i {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: #777;
      font-size: 18px;
    }

    button {
      width: 100%;
      padding: 12px;
      border: none;
      outline: none;
      background: #6a8cff;
      color: #fff;
      border-radius: 10px;
      font-size: 15px;
      cursor: pointer;
      font-weight: 600;
      transition: 0.3s;
      margin-top: 10px;
    }

    button:hover {
      background: #557aff;
    }

    a {
      text-decoration: none;
      color: #555;
      font-size: 13px;
      display: block;
      margin: 10px 0;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 15px;
    }

    .social-icons a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      border: 1px solid #ccc;
      border-radius: 8px;
      color: #333;
      font-size: 18px;
      transition: 0.3s;
    }

    .social-icons a:hover {
      background: #6a8cff;
      color: #fff;
    }

    /* Blue curved section */
    .blue-box {
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(135deg, #8da9ff, #6a8cff);
      border-top-right-radius: 150px;
      border-bottom-right-radius: 150px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      transition: 0.6s ease-in-out;
      z-index: 5;
    }

    .blue-box h2 {
      color: #fff;
      font-size: 28px;
      font-weight: 700;
    }

    .blue-box p {
      font-size: 14px;
      margin: 10px 0 20px;
    }

    .blue-box button {
      width: 120px;
      border: 1px solid #fff;
      background: transparent;
      color: #fff;
      border-radius: 20px;
      font-weight: 600;
      padding: 8px;
      cursor: pointer;
      transition: 0.3s;
    }

    .blue-box button:hover {
      background: #fff;
      color: #6a8cff;
    }

    /* Form positioning */
    .login-form {
      right: 0;
      z-index: 2;
    }

    .register-form {
      left: 0;
      opacity: 0;
      z-index: 1;
      transform: translateX(-100%);
    }

    /* Active State (Register Mode) */
    .container.active .register-form {
      transform: translateX(0%);
      opacity: 1;
      z-index: 2;
    }

    .container.active .login-form {
      transform: translateX(100%);
      opacity: 0;
      z-index: 1;
    }

    .container.active .blue-box {
      transform: translateX(100%);
      border-top-left-radius: 150px;
      border-bottom-left-radius: 150px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    @media (max-width: 768px) {
      .container {
        width: 95%;
        height: auto;
        flex-direction: column;
      }

      .forms, .blue-box {
        width: 100%;
        position: relative;
        transform: none !important;
        border-radius: 0;
      }

      .blue-box {
        height: 200px;
      }
    }
  </style>
</head>
<body>
  <div class="container" id="container">

    <!-- Registration Form -->
    <div class="forms register-form">
      <form>
        <h2>Registration</h2>
        <div class="input-box">
          <input type="text" placeholder="Username" required>
          <i class='bx bx-user'></i>
        </div>
        <div class="input-box">
          <input type="email" placeholder="Email" required>
          <i class='bx bx-envelope'></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required>
          <i class='bx bx-lock-alt'></i>
        </div>
        <button>Register</button>
        <p style="margin-top:15px;">or register with social platforms</p>
        <div class="social-icons">
          <a href="#"><i class='bx bxl-google'></i></a>
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-github'></i></a>
          <a href="#"><i class='bx bxl-linkedin'></i></a>
        </div>
      </form>
    </div>

    <!-- Login Form -->
    <div class="forms login-form">
      <form>
        <h2>Login</h2>
        <div class="input-box">
          <input type="text" placeholder="Username" required>
          <i class='bx bx-user'></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required>
          <i class='bx bx-lock-alt'></i>
        </div>
        <a href="#">Forgot Password?</a>
        <button>Login</button>
        <p style="margin-top:15px;">or login with social platforms</p>
        <div class="social-icons">
          <a href="#"><i class='bx bxl-google'></i></a>
          <a href="#"><i class='bx bxl-facebook'></i></a>
          <a href="#"><i class='bx bxl-github'></i></a>
          <a href="#"><i class='bx bxl-linkedin'></i></a>
        </div>
      </form>
    </div>

    <!-- Blue Curved Box -->
    <div class="blue-box" id="blueBox">
      <h2>Hello, Welcome!</h2>
      <p>Don't have an account?</p>
      <button id="registerBtn">Register</button>
    </div>
  </div>

  <script>
    const container = document.getElementById('container');
    const blueBox = document.getElementById('blueBox');

    // Toggle between Register and Login
    blueBox.addEventListener('click', (e) => {
      if (e.target.id === 'registerBtn') {
        container.classList.add('active');
        blueBox.innerHTML = `
          <h2>Welcome Back!</h2>
          <p>Already have an account?</p>
          <button id="loginBtn">Login</button>
        `;
      } else if (e.target.id === 'loginBtn') {
        container.classList.remove('active');
        blueBox.innerHTML = `
          <h2>Hello, Welcome!</h2>
          <p>Don't have an account?</p>
          <button id="registerBtn">Register</button>
        `;
      }
    });
  </script>
</body>
</html>










