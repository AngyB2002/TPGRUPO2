import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./novedades.css";
export function Novedades() {
    
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2, // Número de tarjetas a mostrar al mismo tiempo
      slidesToScroll: 1,
      autoplay: true, // Activar el autoplay
      autoplaySpeed: 6000, // Velocidad del autoplay en milisegundos (4 segundos en este caso)
      responsive: [
        {
          breakpoint: 500, // En pantallas de 500px
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1000, // En pantallas de 1000px
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1500, // En pantallas de 1500px
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 2000, // En pantallas de 2000px
          settings: {
            slidesToShow: 3,
          },
        }
      ],
    };

    return (
        <>
        
        <div className="info">
          <h3>¡Nuestras novedades!</h3>
        </div>
        <Slider {...sliderSettings} className="slider">
          
            <div className="car" >
              <img src="/baners-img/aprender-jugando.jpg" className="card-img-top" width={"100%"} height={"100%"} alt="..." />
              
            </div>
            <div className="car" >
              <img src="/baners-img/epicos.jpg" className="card-img-top" width={"100%"} height={"100%"}  alt="..." />
              <div className="card-body">
               
                
              </div>
            </div>
            <div className="car" >
              <img src="/baners-img/juguetes-regalos.jpg" className="card-img-top"  height={"70%"} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jugueteria virtual</h5>
                <p className="card-text">Los mas interesantes!!</p>
                
              </div>
            </div>
            <div className="car" >
              <img src="/baners-img/montessori-waldorf.jpg" className="card-img-top"  height={"70%"} alt="..." />
              <h5>Acompañamos el desarollo con el metodo de enseñanza Waldorf</h5>
            </div>
            <div className="car" >
            <img src="/baners-img/juegos-mesa.jpg" className="card-img-top" width={"100%"} height={"80%"} alt="..." />
             
            </div>
        </Slider>
      </>
    );
}
export default Novedades;