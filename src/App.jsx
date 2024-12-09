import React from "react";
import GenerateForm from "./components/GenerateForm";

function App() {
  return (
    <div className="nk-body" data-menu-collapse="lg">
      <div className="nk-app-root">
        <header className="nk-header has-mask">
          <div className="nk-mask bg-gradient-a"></div>
          <div className="nk-mask bg-pattern-dot bg-blend-top"></div>
          <div className="nk-header-main nk-menu-main will-shrink is-transparent ignore-mask">
            <div className="container">
              <div className="nk-header-wrap">
                <div className="nk-header-logo">
                  <a href="#" className="logo-link">
                    <div className="logo-wrap">
                      <img
                        className="logo-img logo-light"
                        src="./newsswift.png"
                        alt=""
                      />
                      <img
                        className="logo-img logo-dark"
                        src="./newsswift.png"
                        alt=""
                      />
                    </div>
                    <h3 className="logo-text">NewsSwift</h3>
                  </a>
                </div>
                <div className="nk-header-toggle">
                  <button className="dark-mode-toggle">
                    <em className="off icon ni ni-sun-fill"></em>
                    <em className="on icon ni ni-moon-fill"></em>
                  </button>
                  <button className="btn btn-light btn-icon header-menu-toggle">
                    <em className="icon ni ni-menu"></em>
                  </button>
                </div>
                <nav className="nk-header-menu nk-menu">
                  <ul className="nk-menu-list mx-auto">
                    <li className="nk-menu-item has-dropdown">
                      {/* <a href="#" className="nk-menu-link">
                        <span className="nk-menu-text">Home</span>
                      </a> */}
                    </li>
                    <li className="nk-menu-item">
                      {/* <a href="about.jsx" className="nk-menu-link">
                        <span className="nk-menu-text">About Us</span>
                      </a> */}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <div className="nk-hero pt-xl-5">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-11 col-xl-9 col-xxl-8">
                <div className="nk-hero-content py-5 py-lg-6">
                  <h1 className="title mb-3 mb-lg-4">
                    Unlock the power of Daily News Content Generator Faster
                  </h1>
                  <ul className="btn-list btn-list-inline">
                    <GenerateForm />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
