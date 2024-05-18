import React, { Component } from 'react'

export default class signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch(`${process.env.REACT_APP_BACKEND_URL}/login-user`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      })
    }).then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login Succesful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./Home"
        }
      });
  }
  render() {
    return (
      <>
        {/* Coding By CodingNepal - codingnepalweb.com */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google singh-in"
          content="398202171911-bins1ld1ms6s81jj18417ilf4jeguis0.apps.googleusercontent.com"
        />
        <title> Responsive Login Form </title>
        {/* CSS */}
        <link rel="stylesheet" href="slide navbar style.css" />
        {/* Boxicons CSS */}
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
        {/* Icon Font Stylesheet */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Raleway:wght@600;800&display=swap"
          rel="stylesheet"
        />
        {/* Libraries Stylesheet */}
        <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="fillbasket/src/script.js" />
        {/* Navbar start */}
        <div className="container-fluid fixed-top">
          
          <div className="container px-0">
            <nav className="navbar navbar-light bg-white navbar-expand-xl">
              <a href="/" className="navbar-brand">
                <h1 className="text-primary display-6">Fill Basket</h1>
              </a>
              <button
                className="navbar-toggler py-2 px-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span className="fa fa-bars text-primary" />
              </button>
              <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                  {/* <a href="index.html" class="nav-item nav-link active">Home</a> */}
                  <a href className="nav-item nav-link">
                    Shop
                  </a>
                  <a href className="nav-item nav-link">
                    Shop Detail
                  </a>
                  {/* <a href="cart.html" class="nav-item nav-link">Cart</a> */}
                  <a href className="nav-item nav-link">
                    Contact
                  </a>
                </div>
                <div className="d-flex m-3 me-0">
                  <button
                    className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="fas fa-search text-primary" />
                  </button>
                  <a href className="position-relative me-4 my-auto">
                    <i className="fa fa-shopping-bag fa-2x" />
                    {/* <span class="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style="top: -5px; left: 15px; height: 20px; min-width: 20px;">3</span> */}
                  </a>
                  <a href="/" className="my-auto">
                    <i className="fas fa-user fa-2x" />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
        {/* Modal Search Start */}
        <div
          className="modal fade"
          id="searchModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Search by keyword
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body d-flex align-items-center">
                <div className="input-group w-75 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Search End */}
        <div>
          <section className="containerr forms">
            <div className="form login">
              <div className="form-content">
                <header>Login</header>
                <form onSubmit={this.handleSubmit}>
                  <div className="field input-field">
                    <input
                      type="text"
                      name='email'
                      // value={user.email}
                      // onChange={handleChange}
                      placeholder="Email"
                      className="input"
                      required="@"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="field input-field">
                    <input
                      type="password"
                      name='password'
                      // value={user.password}
                      // onChange={handleChange}
                      placeholder="Password"
                      className="password"
                      required=" "
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                    <i className="bx bx-hide eye-icon" />
                  </div>
                  <div className="form-link">
                    <a href className="forgot-pass">
                      Forgot password?
                    </a>
                  </div>
                  <div className="field button-field">
                    <button type='submit'>Login</button>
                  </div>
                </form>
                <div className="form-link">
                  <span>
                    Don't have an account?{" "}
                    <a href="/Signupp" className="link signup-link">
                      Signup
                    </a>
                  </span>
                </div>
              </div>
              <div className="line" />
              <div className="media-options">
                <a href className="field facebook">
                  <i className="bx bxl-facebook facebook-icon" />
                  <span>Login with Facebook</span>
                </a>
              </div>
              <div className="media-options">
                <a href className="field google">
                  <img src="images/googleicon.png" alt="" className="google-img" />
                  <span>Login with Google</span>
                </a>
              </div>
            </div>
          </section>
          {/* JavaScript */}
        </div>
      </>

    )
  }
}
