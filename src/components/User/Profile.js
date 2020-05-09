import React from "react";
import { AuthContext } from "../context/Authentication";

function Login() {
  return (
    <AuthContext.Consumer>
      {context => {
        const {
          currentUser: {username, email, designer},
          message
        } = context.state;

        const { handleUpdateData, handleUpdateInput, handleCheckboxChange } = context;
        return (
          <>
                <div className="container">
            <div className="row">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Welcome Back! {username}
                    </h5>
                    <form
                      className="form-signin"
                      id="form"
                      onSubmit={handleUpdateData}
                    >
                      <p>Edit your profile</p>
                      <label className="form-label-group" htmlFor="username">
                        Username:
                        <input
                          className="form-control"
                          id="username"
                          name="username"
                          type="text"
                          value={username}
                          onChange={handleUpdateInput}
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
                          onChange={handleUpdateInput}
                        />
                      </label>
                      {/* <div>
                      <label className="form-label-group" htmlFor="isDesigner">
                        Designer?
                        <input
                          className="form-control"
                          id="isDesigner"
                          type="checkbox"
                          name="isDesigner"
                            onChange={handleCheckboxChange}
                          value={designer}
                        />
                      </label>
                      </div> */}


                      <hr className="my-4" />
                      {message && (
                        <div className="error-message">{message}</div>
                      )}
                      <div className="product-price-btn">
                      <button
                        // className="btn btn-lg btn-dark btn-block text-uppercase"
                        type="submit"
                      >
                        Update
                      </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
              </>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default Login;
