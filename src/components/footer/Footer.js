import React from "react";


const Footer = () => {
  return(

     <div className="footer">
     
 
    <footer id="wn__footer" className="footer__area bg__cat--8 brown--color">
        <div className="footer-static-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__widget footer__menu">
                            <div className="ft__logo">
                                <a href="index.html">
                                    <img src="images/logo/3.png" alt="logo"/>
                                </a>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                    have suffered duskam alteration variations of passages</p>
                            </div>
                            <div className="footer__content">
                                <ul className="social__net social__net--2 d-flex justify-content-center">
                                    <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                    <li><a href="#"><i className="bi bi-google"></i></a></li>
                                    <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                                    <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                    <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                                </ul>
                                <ul className="mainmenu d-flex justify-content-center">
                                    <li><a href="index.html">Trending</a></li>
                                    <li><a href="index.html">Best Seller</a></li>
                                    <li><a href="index.html">All Product</a></li>
                                    <li><a href="index.html">Wishlist</a></li>
                                    <li><a href="index.html">Blog</a></li>
                                    <li><a href="index.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="copyright">
                            <div className="copy__right__inner text-start">
                                <p>&copy; 2022,  <a
                                        href="https://www.mediazain.com/" target="_blank">Mediazain</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        {/* <div className="payment text-end">
                            <img src="images/icons/payment.png" alt=""/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <div id="quickview-wrapper">
    
        <div className="modal fade" id="productmodal"  role="dialog">
            <div className="modal-dialog modal__container" role="document">
                <div className="modal-content">
                    <div className="modal-header modal__header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="modal-product">
                            
                            <div className="product-images">
                                <div className="main-image images">
                                    <img alt="big images" src="images/product/big-img/1.jpg"/>
                                </div>
                            </div>
                        
                            <div className="product-info">
                                <h1>Simple Fabric Bags</h1>
                                <div className="rating__and__review">
                                    <ul className="rating">
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                        <li><span className="ti-star"></span></li>
                                    </ul>
                                    <div className="review">
                                        <a href="#">4 customer reviews</a>
                                    </div>
                                </div>
                                <div className="price-box-3">
                                    <div className="s-price-box">
                                        <span className="new-price">$17.20</span>
                                        <span className="old-price">$45.00</span>
                                    </div>
                                </div>
                                <div className="quick-desc">
                                    Designed for simplicity and made from high quality materials. Its sleek geometry
                                    and material combinations creates a modern look.
                                </div>
                                <div className="select__color">
                                    <h2>Select color</h2>
                                    <ul className="color__list">
                                        <li className="red"><a title="Red" href="#">Red</a></li>
                                        <li className="gold"><a title="Gold" href="#">Gold</a></li>
                                        <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                        <li className="orange"><a title="Orange" href="#">Orange</a></li>
                                    </ul>
                                </div>
                                <div className="select__size">
                                    <h2>Select size</h2>
                                    <ul className="color__list">
                                        <li className="l__size"><a title="L" href="#">L</a></li>
                                        <li className="m__size"><a title="M" href="#">M</a></li>
                                        <li className="s__size"><a title="S" href="#">S</a></li>
                                        <li className="xl__size"><a title="XL" href="#">XL</a></li>
                                        <li className="xxl__size"><a title="XXL" href="#">XXL</a></li>
                                    </ul>
                                </div>
                                <div className="social-sharing">
                                    <div className="widget widget_socialsharing_widget">
                                        <h3 className="widget-title-modal">Share this product</h3>
                                        <ul className="social__net social__net--2 d-flex justify-content-start">
                                            <li className="facebook"><a href="#" className="rss social-icon"><i
                                                    className="zmdi zmdi-rss"></i></a></li>
                                            <li className="linkedin"><a href="#" className="linkedin social-icon"><i
                                                    className="zmdi zmdi-linkedin"></i></a></li>
                                            <li className="pinterest"><a href="#" className="pinterest social-icon"><i
                                                    className="zmdi zmdi-pinterest"></i></a></li>
                                            <li className="tumblr"><a href="#" className="tumblr social-icon"><i
                                                    className="zmdi zmdi-tumblr"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="addtocart-btn">
                                    <a href="#">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

)

 };

 export default Footer;
