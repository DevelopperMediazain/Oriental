import React ,{useEffect,useState} from "react";
import { Link} from "react-router-dom";

const Boutique = () => {

   const [Products,setProducts] = useState([]);

   const getproduct = async () => {
      const response = await fetch('https://server18.servermdz.pro/ao-boutique/public/api/apiproducts');
      setProducts(await response.json());
   
   }

   useEffect(() => {
      getproduct();
   },[]);
 


  return(



     <div className="Boutique">
     
     <div className="slider-area brown__nav slider--15 slide__activation slide__arrow01 owl-carousel owl-theme">
      
    
    
      <div className="slide animation__style10 bg-image--7 fullscreen align__center--left">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                    
                  </div>
              </div>
          </div>
      </div>
   
  </div>

  <section className="wn__product__area brown--color pt--80  pb--30">
      <div className="container">
        
          
          <div className="furniture--4 border--round arrows_style row ">
              
 
          {
             Products.map((eleProduits) => {

               return (
               

                  <div className="product product__style--3 col-md-3">
                   
                  <div className="product__thumb">
                 <Link className="first__img" to={ "/singleProduct/" + eleProduits.id} >
                         <img src= { 'https://server18.servermdz.pro/ao-boutique/public/' + eleProduits.images} alt="product image"/></Link>
                      <Link className="second__img animation1" to={ "/singleProduct/" + eleProduits.id} >
                         <img src= { 'https://server18.servermdz.pro/ao-boutique/public/' + eleProduits.imagebacks} alt="product image"/></Link>
                      {/* <div className="hot__box">
                          <span className="hot-label">{eleProduits.titre}</span>
                      </div> */}
                  </div>
                  <div className="product__content content--center content--center">
                      <h4><Link to={ "/singleProduct/" + eleProduits.id} >{eleProduits.titre}</Link></h4>
                      <ul className="price d-flex">
                          <li>{eleProduits.prix} MAD</li>
                          <li className="old_price">{eleProduits.solde} MAD</li>
                      </ul>
                      <div className="action">
                          <div className="actions_inner">
                              <ul className="add_to_links">
                                  <li><a className="cart" href="cart.html"><i className="bi bi-shopping-bag4"></i></a>
                                  </li>
                                  <li><a className="wishlist" href="wishlist.html"><i
                                          className="bi bi-shopping-cart-full"></i></a></li>
                                  <li><a className="compare" href="#"><i className="bi bi-heart-beat"></i></a></li>
                                  <li><a data-bs-toggle="modal" title="Quick View"
                                         className="quickview modal-view detail-link" href="#productmodal"><i
                                          className="bi bi-search"></i></a></li>
                              </ul> 
                          </div>
                      </div>
                      <div className="product__hover--content">
                          <ul className="rating d-flex">
                              <li className="on"><i className="fa fa-star-o"></i></li>
                              <li className="on"><i className="fa fa-star-o"></i></li>
                              <li className="on"><i className="fa fa-star-o"></i></li>
                              <li><i className="fa fa-star-o"></i></li>
                              <li><i className="fa fa-star-o"></i></li>
                          </ul>
                      </div>
                  </div>
                  
              </div>



               )


             } )
           
   
          }


           


   


         </div>
         
          </div>
         
      
  </section>



   

     
     </div>


    )

 };

 export default Boutique;

