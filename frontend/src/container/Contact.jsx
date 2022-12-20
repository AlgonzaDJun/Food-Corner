import React from 'react'
import stand from "../assets/images/title-shape.svg";
import bgstand from "../assets/images/menu-bg.png";

const Contact = () => {
    return (
        <section className='bg-light repeat-img w-100 h-auto position-absolute' style={{ backgroundImage: `url(${bgstand})`, marginTop: '80px' }}>
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="sec-title text-center mb-5 mt-5">
                            <h2 className="pesan">
                                Hubungi Kami
                            </h2>
                            <div className="sec-title-shape mb-4">
                                <img src={stand} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card w-75 mx-auto'>
                    <div className='card-body'>
                        <div class="input-group mb-3 gap-5 d-flex flex-nowrap">
                            <div className='input-group w-50 border border-1 rounded-2'>
                                <i class="uil uil-user w-auto m-auto mx-2"></i>
                                <input type="text" class="form-control w-auto border-0 rounded-2" placeholder="Nama" aria-label="name" />
                            </div>
                            <div className='input-group w-50 border border-1 rounded-2'>
                                <i class="uil uil-phone-alt m-auto mx-2"></i>
                                <input type="number" class="form-control w-auto border-0" placeholder="Telepon" aria-label="tlp" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label className='form-label'>Email</label>
                            <input type="email" class="form-control" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label className='form-label'>Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className='btn w-100 rounded-4'>Submit</button>
                    </div>

                </div>
            </div>
        </section>

        

    );
};

export default Contact