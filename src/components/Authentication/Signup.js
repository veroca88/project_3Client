import React from "react";

import { Redirect } from "react-router-dom";

import { AuthContext } from "../context/Authentication";

function Signup() {
  return (
    <AuthContext.Consumer>
      {context => {
        const {
          formSignup: { username, email, password },
          message,
          isLoggedIn
        } = context.state;

        const { handleSignupInput, handleSignupSubmit } = context;
        return (
          <>
            {isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <>
                <div class="container">
                  <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                      <div class="card card-signin my-5">
                        <div class="card-body">
                          <h5 class="card-title text-center">BECOME A MEMBER</h5>
                          <form
                            class="form-signin"
                            id="form"
                            onSubmit={handleSignupSubmit}
                          >
                            <p>
                              Become a Member — you'll enjoy exclusive deals,
                              offers, invites and rewards.
                            </p>
                            <label
                              className="form-label-group"
                              htmlFor="username"
                            >
                              Username:
                              <input
                                className="form-control"
                                id="username"
                                name="username"
                                type="text"
                                value={username}
                                onChange={handleSignupInput}
                              />
                            </label>
                            <label className="form-label-group" htmlFor="email">
                              Email:
                              <input
                                className="form-control"
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleSignupInput}
                              />
                            </label>
                            <label
                              className="form-label-group"
                              htmlFor="password"
                            >
                              Password:
                              <input
                                className="form-control"
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handleSignupInput}
                              />
                            </label>
                            <hr className="my-4" />
                            {message && (
                              <div className="error-message">{message}</div>
                            )}
                            <button
                              class="btn btn-lg btn-warning btn-block text-uppercase"
                              type="submit"
                            >
                              Signup
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Signup;
