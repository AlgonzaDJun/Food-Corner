import React, { useEffect } from "react";
import bgstand from "../assets/images/menu-bg.png";
import stand from "../assets/images/title-shape.svg";
import "./css/checkout.css";

import navbarLogo from "../assets/images/logo2.png";
const Checkout = () => {

  return (

    <div className="">
      <div className="">

        <section
          className=""
          style={{ marginTop: '90px', marginBottom: '100px' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sec-title text-center mb-5 mt-5">
                  <h2 className="pesan">
                    Daftar <br /> Menu Pesanan
                  </h2>
                  <div className="sec-title-shape mb-4">
                    <img src={stand} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="card mx-auto col-lg-5">
              <div class="card-body">
                <h2 class="nama-pesan">Member : Vica Fresinsya</h2>
                <h2 class="nama-pesan text-muted">Status : ready</h2>
                <div className="stand-menu">
                  <h6 class="text-muted mb-3">Tgl : 12-06-12</h6>
                </div>

                <table class="table table-borderless" >
                  <thead className="w-100">
                    <tr>
                      <th><h6 className="text-muted text-center" style={{ width: '4rem' }}></h6></th>
                      <th><h6 className="text-muted text-center" style={{ width: '4rem' }}>Jumlah</h6></th>
                      <th><h6 className="text-muted text-center" style={{ width: '4rem' }}>Porsi</h6></th>
                      <th><h6 className="text-muted text-center" style={{ width: '4rem' }}>Subtotal</h6></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="">
                        <h6 className="stand text-muted">
                          <i className="uil uil-store">Stand pepaya:</i>
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 className="menu mb-2 text-wrap" style={{ width: '7rem' }}>ayam geprek</h6>
                      </td>
                      <td>
                        <h6 className="menu mb-2 text-center" style={{ width: '4rem' }}>1</h6>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '6rem', }}>20,000</p>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                    </tr>
                    <tr className="stand-menu">
                      <td>
                        <h6 className="menu mb-2 text-wrap" style={{ width: '7rem' }}>ayam geprek</h6>
                      </td>
                      <td>
                        <h6 className="menu mb-2 text-center" style={{ width: '4rem' }}>1</h6>
                      </td>
                      <td className="harga text-center" >
                        <p style={{ width: '6rem', }}>20,000</p>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                    </tr>
                    <tr className="horizon">
                      <td></td>
                      <td></td>
                      <td className="">
                        <h6 className="text-muted text-end mt-1 text-wrap" style={{ width: '7rem' }}>Total Pesanan:</h6>
                      </td>
                      <td className="">
                        <p className="text-danger">20.000</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="">
                        <h6 className="stand text-muted">
                          <i className="uil uil-store">Stand pepaya:</i>
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 className="menu mb-2 text-wrap" style={{ width: '7rem' }}>ayam geprek</h6>
                      </td>
                      <td>
                        <h6 className="menu mb-2 text-center" style={{ width: '4rem' }}>1</h6>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                    </tr>
                    <tr className="stand-menu">
                      <td>
                        <h6 className="menu mb-2 text-wrap" style={{ width: '7rem' }}>ayam geprek</h6>
                      </td>
                      <td>
                        <h6 className="menu mb-2 text-center" style={{ width: '4rem' }}>1</h6>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="">
                        <h6 className="stand text-muted">
                          <i className="uil uil-store">Stand pepaya:</i>
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6 className="menu mb-2 text-wrap" style={{ width: '7rem' }}>ayam geprek</h6>
                      </td>
                      <td>
                        <h6 className="menu mb-2 text-center" style={{ width: '4rem' }}>1</h6>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                    </tr>
                    <tr className="stand-menu">
                      <td>
                        <h6 className="menu mb-2 text-wrap" style={{ width: '7rem' }}>ayam geprek</h6>
                      </td>
                      <td>
                        <h6 className="menu mb-2 text-center" style={{ width: '4rem' }}>1</h6>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                      <td>
                        <p className="harga text-center" style={{ width: '3rem', }}>20,000</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* about us */}
        {/* <section className="two-col-sec section" id="aboutUs">
          
        </section> */}
        {/* end of about us */}
      </div>
    </div>
  );
};

export default Checkout;
