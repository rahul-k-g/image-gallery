import React from "react";
import { CategoryContext } from '../Helper/Context'
const Menuitems=()=>{
    const { image } = React.useContext(CategoryContext); 
    const [imgs, setImgs]=image
  
    return(<>
    <div className="menu-items container-fluid mt-5">
        <div className="row">
            <div className="col-11 mx-auto">
                <div className="row my-5">
                    {
                        imgs.map((el,index)=>{
                          
                          return ( <div key={index} className="item1 col-12 col-md-6 col-lg-6 col-xl-4">
                          <div className="row Item-inside">
                             
                                <img src={el.urls.small} alt={el.urls.small} className="img-fluid" />
                             

                          </div>
                    </div>)
                        })
                    }
                   

                </div>
            </div>
        </div>
    </div>
    </>)
}
export default Menuitems