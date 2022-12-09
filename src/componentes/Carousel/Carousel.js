import React from "react";

import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="imagen1" />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} class="d-block w-100" alt="imagen2" />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} class="d-block w-100" alt="imagen3" />
                    </div>
                    <div className="carousel-item">
                        <img src={img4} class="d-block w-100" alt="imagen4" />
                    </div>
                    <div className="carousel-item">
                        <img src={img5} class="d-block w-100" alt="imagen5" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel