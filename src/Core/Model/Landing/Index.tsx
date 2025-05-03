
import './LandingStyle.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import './Landing';
const LandingPage = () => { 
    return (
        
        
        <div className='principal'>
            <div className='Contenedor-fondo'>
               
                <div className='texto1'>
                
                <div className='texto01'>
                    <img src="src/assets/Vector 1.svg" alt="" />
                </div>

                <div className='texto02'>
                    <h1 className='titulo-pagina'>
                    Peponé
                    </h1>
                    <p className='subtitulo'>
                        HOTEL GATUNO
                    </p>
                </div>
                <div className='texto3'>
                    <p className='parrafo'>
                        Bienvenido a Peponé
                        Hotel Gatuno
                    </p>
                    <p className='informacion-final'>
                    La mejor plataforma para la gestion de reservas y cuidado de gatos
                    </p>
                </div>
                </div>
                <div className='texto2'>
                    <div className='botones11'>

                    </div>
                 
                    <div className='botones2'>

                        <button className='btn-registro'>
                            <p>
                                Crear cuenta
                            </p>
                        </button>

                        <button className='btn-login'>
                            <p>
                                Iniciar sesión
                            </p>
                        </button>

                    </div>

                </div>



            </div>
           <img src="src/assets/Rectangle 7.jpg" className='fondo' alt="" />
            

           {/* <section className='manin-princiapal'>
            





                <article className='contenedor-informacion'>
                        <div className='icono-nosotros'>
                            <img className='icono-pata' src="src/assets/Gemini_Generated_Image_4599tg4599tg4599-removebg-preview 1.svg" alt="" />
                            <br />
                            <p className='texto-elegirnos'>
                                Porque elegirnos
                            </p>

                        </div>

                        <div>

                        </div>

                        <div>

                        </div>


                </article>
           </section>
         */}
          



    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide"
      data-bs-touch="false"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="src\assets\361989685_160013533711158_2554708084698752322_n.jpg"
            className="d-block w-100"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/800x400"
            className="d-block w-100"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/800x400"
            className="d-block w-100"
            alt="Slide 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>




        
        
        

        
        </div>
        
        


    );
    };

export default LandingPage;