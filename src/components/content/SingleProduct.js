import React ,{Component,useEffect,useState} from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {


    const { id } = useParams();
    const [SingleProducts,setSingleProducts] = useState([]);
   
    const getproduct = async () => {
        const response = await fetch(`https://server18.servermdz.pro/ao-boutique/public/api/apiproducts/${id}`);
        setSingleProducts(await response.json());
        
     
     }
  
     useEffect(() => {
        getproduct();
     },[]);



  return(




<div className="SingleProduct" key={SingleProducts.id}>



<div className="wrapper" id="wrapper">


<div className="ht__breadcrumb__area bg-image--4">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="breadcrumb__inner text-center">
                    <h2 className="breadcrumb-title">Shop Single</h2>
                    <nav className="breadcrumb-content">
                        <a className="breadcrumb_item" href="index.html">Home</a>
                        <span className="brd-separator">/</span>
                        <span className="breadcrumb_item active">Shop Single</span>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="maincontent bg--white pt--80 pb--55">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-12">
                <div className="wn__single__product">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="wn__fotorama__wrapper">
                                <div className="fotorama wn__fotorama__action" data-nav="thumbs">
                                    <a href="1.html"><img  src= { 'https://server18.servermdz.pro/ao-boutique/public/' + SingleProducts.images}  alt=""/></a>
                                    <a href="2.html"><img  src= { 'https://server18.servermdz.pro/ao-boutique/public/' + SingleProducts.images}  alt=""/></a>
                                    <a href="3.html"><img  src= { 'https://server18.servermdz.pro/ao-boutique/public/' + SingleProducts.images}  alt=""/></a>
                                    <a href="4.html"><img  src= { 'https://server18.servermdz.pro/ao-boutique/public/' + SingleProducts.images}  alt=""/></a>
                                    <a href="5.html"><img  src= { 'https://server18.servermdz.pro/ao-boutique/public/' + SingleProducts.images}  alt=""/></a>
                                    <a href="6.html"><img  src= { 'https://server18.servermdz.pro/ao-boutique/public/' + SingleProducts.images}  alt=""/></a>
                                    <a href="7.html"><img  src= { 'https://server18.servermdz.pro/ao-boutique/public/' + SingleProducts.images}  alt=""/></a>
                                    <a href="8.html"><img  src= { 'https://server18.servermdz.pro/ao-boutique/public/' + SingleProducts.images}  alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="product__info__main">
                                <h1>{  SingleProducts.titre }</h1>
                                <div className="product-reviews-summary d-flex">
                                    <ul className="rating-summary d-flex">
                                        <li><i className="zmdi zmdi-star-outline"></i></li>
                                        <li><i className="zmdi zmdi-star-outline"></i></li>
                                        <li><i className="zmdi zmdi-star-outline"></i></li>
                                        <li className="off"><i className="zmdi zmdi-star-outline"></i></li>
                                        <li className="off"><i className="zmdi zmdi-star-outline"></i></li>
                                    </ul>
                                </div>
                                <div className="price-box">
                                    <span>{  SingleProducts.prix } MAD </span> <span class="old_priceee"><del>{  SingleProducts.solde } MAD</del></span> 
                                </div>
                                <div className="product__overview">
                                    <p>{  SingleProducts.short_description } </p>
                                </div>
                                <div className="box-tocart d-flex">
                                    <span>Qty</span>
                                    <input id="qty" className="input-text qty" name="qty" min="1" value="1"
                                           title="Qty" type="number"/>
                                    <div className="addtocart__actions">
                                        <button className="tocart" type="submit" title="Add to Cart">Add to
                                            Cart
                                        </button>
                                    </div>
                                    <div className="product-addto-links clearfix">
                                        <a className="wishlist" href="#"></a>
                                        <a className="compare" href="#"></a>
                                    </div>
                                </div>
                                <div className="product_meta">
                                        <span className="posted_in">Categories:
                                            <a href="#">Adventure</a>,
                                            <a href="#">Kids' Music</a>
                                        </span>
                                </div>
                                <div className="product-share">
                                    <ul>
                                        <li className="categories-title">Share :</li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-social-twitter icons"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-social-tumblr icons"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-social-facebook icons"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-social-linkedin icons"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__info__detailed">
                    <div className="pro_details_nav nav justify-content-start" role="tablist">
                        <a className="nav-item nav-link active" data-bs-toggle="tab" href="#nav-details"
                           role="tab">Details</a>
                        <a className="nav-item nav-link" data-bs-toggle="tab" href="#nav-review" role="tab">Reviews</a>
                    </div>
                    <div className="tab__container tab-content">
                        
                        <div className="pro__tab_label tab-pane fade show active" id="nav-details" role="tabpanel">
                            <div className="description__attribute">
                                <p>{  SingleProducts.description }</p>
                               
                            </div>
                        </div>
                      
                        <div className="pro__tab_label tab-pane fade" id="nav-review" role="tabpanel">
                            <div className="review__attribute">
                                <h1>Customer Reviews</h1>
                                <h2>Hastech</h2>
                                <div className="review__ratings__type d-flex">
                                    <div className="review-ratings">
                                        <div className="rating-summary d-flex">
                                            <span>Quality</span>
                                            <ul className="rating d-flex">
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            </ul>
                                        </div>

                                        <div className="rating-summary d-flex">
                                            <span>Price</span>
                                            <ul className="rating d-flex">
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="rating-summary d-flex">
                                            <span>value</span>
                                            <ul className="rating d-flex">
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="review-content">
                                        <p>Hastech</p>
                                        <p>Review by Hastech</p>
                                        <p>Posted on 11/6/2018</p>
                                    </div>
                                </div>
                            </div>
                            <div className="review-fieldset">
                                <h2>You're reviewing:</h2>
                                <h3>Chaz Kangeroo Hoodie</h3>
                                <div className="review-field-ratings">
                                    <div className="product-review-table">
                                        <div className="review-field-rating d-flex">
                                            <span>Quality</span>
                                            <ul className="rating d-flex">
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="review-field-rating d-flex">
                                            <span>Price</span>
                                            <ul className="rating d-flex">
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="review-field-rating d-flex">
                                            <span>Value</span>
                                            <ul className="rating d-flex">
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                                <li className="off"><i className="zmdi zmdi-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="review_form_field">
                                    <div className="input__box">
                                        <span>Nickname</span>
                                        <input id="nickname_field" type="text" name="nickname"/>
                                    </div>
                                    <div className="input__box">
                                        <span>Summary</span>
                                        <input id="summery_field" type="text" name="summery"/>
                                    </div>
                                    <div className="input__box">
                                        <span>Review</span>
                                        <textarea name="review"></textarea>
                                    </div>
                                    <div className="review-form-actions">
                                        <button>Submit Review</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>

            </div>
            
        </div>
    </div>
</div>

<div className="box-search-content search_active block-bg close__top">
    <form id="search_mini_form--2" className="minisearch" action="#">
        <div className="field__search">
            <input type="text" placeholder="Search entire store here..."/>
            <div className="action">
                <a href="#"><i className="zmdi zmdi-search"></i></a>
            </div>
        </div>
    </form>
    <div className="close__wrap">
        <span>close</span>
    </div>
</div>

<div id="quickview-wrapper">
   
    <div className="modal fade" id="productmodal" tabindex="-1" role="dialog">
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
  

     
     </div>


    )

 };

 export default SingleProduct;
