import React from 'react';
function LanPage  (){
    
   
        return (
            <div>
               
                <title>Parason Software - Home</title>
                <link rel="icon" href="img/Fevicon.png" type="image/png"/>
                <link rel="stylesheet" href="vendors/bootstrap/bootstrap.min.css"/>
                <link rel="stylesheet" href="vendors/fontawesome/css/all.min.css"/>
                <link rel="stylesheet" href="vendors/themify-icons/themify-icons.css"/>
                <link rel="stylesheet" href="vendors/linericon/style.css"/>
                <link rel="stylesheet" href="vendors/owl-carousel/owl.theme.default.min.css"/>
                <link rel="stylesheet" href="vendors/owl-carousel/owl.carousel.min.css"/>
                <link rel="stylesheet" href="css/style.css"/>
                <main className="side-main">
                    {/*================ Hero sm Banner start =================*/}
                    <section className="hero-banner mb-30px">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="hero-banner__img">
                                        <img className="img-fluid" src="img/banner/hero-banner.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-5 pt-5">
                                    <div className="hero-banner__content">
                                        <h1>Advanced software made simple</h1>
                                        <p>Vel aliquam quis, nulla pede mi commodo tristique nam hac Luctun torquent velit felis commodo pellentesque nulla cras vel aliqua quisan nulla pede mi commoda</p>
                                        <a className="button bg" href="#">Sign Up</a>
                                        <a className="button bg" href="#">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ================ End footer Area ================= */} 
                </main>
            </div>
        );
    
};

export default LanPage;