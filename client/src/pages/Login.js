import React, { Component } from "react";


function Login(props) {
    return (

        <div class="row">
            <div class="col-md-6">
                <h2>Log In</h2>

                <form class="form login-form">
                    <div class="form-group">
                        <label for="email-login">email:</label>
                        <input class="form-input" type="text" id="email-login" />
                    </div>
                    <div class="form-group">
                        <label for="password-login">password:</label>
                        <input class="form-input" type="password" id="password-login" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit">log in</button>
                    </div>
                </form>
            </div>

            <div class="col-md-6">
                <h2>Sign up</h2>

                <form class="form signup-form">
                    <div class="form-group">
                        <label for="name-signup">name:</label>
                        <input class="form-input" type="text" id="name-signup" />
                    </div>
                    <div class="form-group">
                        <label for="birthday-signup">username:</label>
                        <input class="form-input" type="text" id="birthday-signup" />
                    </div>
                    <div class="form-group">
                        <label for="email-signup">email:</label>
                        <input class="form-input" type="text" id="email-signup" />
                    </div>
                    <div class="form-group">
                        <label for="password-signup">password:</label>
                        <input class="form-input" type="password" id="password-signup" />
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit">signup</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;