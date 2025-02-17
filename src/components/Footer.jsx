import React from 'react';

const Footer = () => {
    return (
        <footer>
            <footer class="ftco-footer img">
                <div class="container-fluid px-0 py-3 pt-0 bg-darken">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-auto text-center mb-2">
                            <a href="tel:08420123333" class="phone" style="font-size: 20px; color: white; padding-right: 50px; padding-left: 50px;">
                                <i class="fa fa-phone"></i><span style="font-size: 18px;"> 08420123333</span>
                            </a>
                        </div>


                        <div class="col-12 col-md-auto text-center mb-2">
                            <a href="mailto:contact@bbit.edu.in" class="mail" style="font-size: 20px; color: white; padding-right: 10px;">
                                <i class="fa fa-envelope"></i><span style="font-size: 18px;"> contact@bbit.edu.in</span>
                            </a>
                        </div>


                        <div class="col-12 col-md-auto text-center mb-2">
                            <a href="https://www.google.co.in/maps/dir//Budge+Budge+Institute+of+Technology,+Nishchintapur,+Budge+Budge,+Kolkata,+West+Bengal+700137/@22.4586864,88.1701524,17z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x39f830fc6fffffff:0x880d852ade5959b!3e0"
                                target="_blank" class="address" style="font-size: 20px; color: rgb(255, 0, 0); padding-right: 10px;">
                                <i class="fa fa-map-marker"></i><span style="font-size: 18px; color: #ffffff; height: auto;">&nbsp;Budge Budge Institute of Technology</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;
