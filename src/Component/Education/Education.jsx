import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import './Education.css'

const Education = () => {
   const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./Animation.json", 
    });
    return () => lottie.destroy();
  }, []);

    return (
        <div className="education">
            <div className="title">
                <span>Education</span>
            </div>
                
            <div className="questioner">
                <div className="status">

                    <div className="grades">

                      {/* <div> */}
                          <img src="" alt="" />
                        <div>
                            <h3>Adiaha Obong Secondary School</h3>
                            <h5>West African Examination Counsil</h5>
                        </div>
                       
                      {/* </div> */}

                    </div>

                </div>
                <div className="stata"> 
                    <div ref={container} style={{ width: 300, height: 300 }} />
                </div>
               
            </div>

        </div>
    )
}

export default Education