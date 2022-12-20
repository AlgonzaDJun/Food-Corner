import React from "react";
import { useState } from "react";
import "./css/styles2.css";

const Seller2 = () => {
  const [headerTogle, setHeaderTogle] = useState(false);

  return (
    <div style={{ marginTop: 150 }}>
      <div
        id="body-pd"
        className={headerTogle ? "body body-pd" : "body"}
        style={{ backgroundColor: "#80808045" }}
      >
        <header class={headerTogle ? "body-pd header" : "header"} id="header">
          <div class="header__toggle">
            <i
              class={headerTogle ? `bx bx-menu bx-x` : `bx bx-menu`}
              id="header-toggle"
              onClick={() => setHeaderTogle(!headerTogle)}
            ></i>
          </div>
          <div class="header__img">
            <img src="" alt="profil" />
          </div>
        </header>

        <h1 style={{ marginTop: "98px" }}>
          Welcome Back <b>$Seller</b>
        </h1>

        {/* navbar */}
        <div class={headerTogle ? "l-navbar showa" : "l-navbar"} id="nav-bar">
          <nav class="nav">
            <div>
              <a href="/seller2" class="nav__logo">
                <i class="bx bx-layer nav__logo-icon"></i>
                <span class="nav__logo-name">Stand Management</span>
              </a>

              <div class="nav__list">
                <a href="/seller2" class="nav__link nav-home">
                  <i class="bx bx-grid-alt nav__icon"></i>
                  <span class="nav__name">Home</span>
                </a>
                <a href="/order" class="nav-orderManage nav__link ">
                  <i class="bx bx-bar-chart-alt-2 nav__icon"></i>
                  <span class="nav__name">Orders</span>
                </a>
                <a href="/Menu" class="nav__link nav-menuManage">
                  <i class="bx bx-message-square-detail nav__icon"></i>
                  <span class="nav__name">Menu</span>
                </a>
                <a href="/seller2" class="nav__link nav-siteManage">
                  <i class="fas fa-cogs"></i>
                  <span class="nav__name">Profile Settings</span>
                </a>
              </div>
            </div>
            <a href="" class="nav__link">
              <i class="bx bx-log-out nav__icon"></i>
              <span class="nav__name">Log Out</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Seller2;
