import React from "react";

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./1.jpg" class="d-block w-100" alt="imagen1" />
                    </div>
                    <div className="carousel-item">
                        <img src="./2.jpg" class="d-block w-100" alt="imagen2" />
                    </div>
                    <div className="carousel-item">
                        <img src="./3.jpg" class="d-block w-100" alt="imagen3" />
                    </div>
                    <div className="carousel-item">
                        <img src="./4.jpg" class="d-block w-100" alt="imagen4" />
                    </div>
                    <div className="carousel-item">
                        <img src="./5.jpg" class="d-block w-100" alt="imagen5" />
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