import React from "react";
import bgstand from "../assets/images/menu-bg.png";
import stand from "../assets/images/title-shape.svg";
import "./css/checkout.css";

const Checkout = () => {


  return (
    <div className="w-100">
      <section
        className=" bg-light repeat-img w-100 vh-100"
        style={{ backgroundImage: `url(${bgstand})`, marginTop: '90px' }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="sec-title text-center mb-5 mt-5">
              <h2 className="h2-title">
                <span>Pesanan Anda</span>
              </h2>
              <div className="sec-title-shape mb-4">
                <img src={stand} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-auto" style={{ width: '18rem' }}>
          <div class="card-body">
            <h5 class="card-title">Nama : Vica Fresinsya</h5>
            <h6 class="card-subtitle mb-2 text-muted">Tanggal : 12 Juni 2012</h6>
            <table class="table table-borderless" >
              <thead className="w-100 ">
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td>John</td>
                  <td>Doe</td>
                  <td className=" text-wrap">john@example.com</td>
                </tr>
                <tr>
                  <td>Mary</td>
                  <td>Moe</td>
                  <td>mary@example.com</td>
                </tr>
                <tr>
                  <td>July</td>
                  <td>Dooley</td>
                  <td>july@example.com</td>
                </tr>
              </tbody>
            </table>
            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          </div>
        </div>
        {/* <table class="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Default</td>
              <td>Defaultson</td>
              <td>def@somemail.com</td>
            </tr>
            <tr class="table-primary">
              <td>Primary</td>
              <td>Joe</td>
              <td>joe@example.com</td>
            </tr>
            <tr class="table-success">
              <td>Success</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr class="table-danger">
              <td>Danger</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr class="table-info">
              <td>Info</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
            <tr class="table-warning">
              <td>Warning</td>
              <td>Refs</td>
              <td>bo@example.com</td>
            </tr>
            <tr class="table-active">
              <td>Active</td>
              <td>Activeson</td>
              <td>act@example.com</td>
            </tr>
            <tr class="table-secondary">
              <td>Secondary</td>
              <td>Secondson</td>
              <td>sec@example.com</td>
            </tr>
            <tr class="table-light">
              <td>Light</td>
              <td>Angie</td>
              <td>angie@example.com</td>
            </tr>
            <tr class="table-dark">
              <td>Dark</td>
              <td>Bo</td>
              <td>bo@example.com</td>
            </tr>
          </tbody>
        </table> */}
        {/* <div className="struk">
          <div className="row g-xxl-5">
            <div className="col-lg-4 col-sm-6 mx-auto">
              <div className="box-struk">
                <div className="dish-title">
                  <h5 className="h5-title">
                    Nama : vica fresinsya <br />
                    Tanggal : 12-06-2022
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Checkout;
