import React from "react";

const Header = () => {

return(

<div className="Header">

  <header id="wn__header" className="header__area header__absolute sticky__header">
      <div className="container-fluid">
          <div className="row">
              <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                  <div className="logo">
                      <a href="index.html">
                          <img src="images/logo/logo.png" alt="logo images"/>
                      </a>
                  </div>
              </div>
              <div className="col-lg-8 d-none d-lg-block">
                  <nav className="mainmenu__nav">
                      <ul className="meninmenu d-flex justify-content-start">
                          <li className="drop with--one--item"><a href="index.html">Home</a>
                
                          </li>
                          <li className="drop"><a href="#">Shop</a>
                              
                          </li>
                          <li className="drop"><a href="shop-grid.html">Books</a>
                              
                          </li>
                          <li className="drop"><a href="shop-grid.html">Kids</a>
                              
                          </li>
                          <li className="drop"><a href="#">Pages</a>
                              
                          </li>
                          <li className="drop"><a href="blog.html">Blog</a>
                            
                          </li>
                          <li><a href="contact.html">Contact</a></li>
                      </ul>
                  </nav>
              </div>
              <div className="col-md-6 col-sm-6 col-6 col-lg-2">
                  <ul className="header__sidebar__right d-flex justify-content-end align-items-center">
                      <li className="shop_search"><a className="search__active" href="#"></a></li>
                      <li className="wishlist"><a href="#"></a></li>
                      <li className="shopcart"><a className="cartbox_active" href="#"><span
                              className="product_qun">3</span></a>
                        
                          <div className="block-minicart minicart__active">
                              <div className="minicart-content-wrapper">
                                  <div className="micart__close">
                                      <span>close</span>
                                  </div>
                                  <div className="items-total d-flex justify-content-between">
                                      <span>3 items</span>
                                      <span>Cart Subtotal</span>
                                  </div>
                                  <div className="total_amount text-end">
                                      <span>$66.00</span>
                                  </div>
                                  <div className="mini_action checkout">
                                      <a className="checkout__btn" href="cart.html">Go to Checkout</a>
                                  </div>
                                  <div className="single__items">
                                      <div className="miniproduct">
                                          <div className="item01 d-flex">
                                              <div className="thumb">
                                                  <a href="product-details.html"><img
                                                          src="images/product/sm-img/1.jpg"
                                                          alt="product images"/></a>
                                              </div>
                                              <div className="content">
                                                  <h6><a href="product-details.html">Voyage Yoga Bag</a></h6>
                                                  <span className="price">$30.00</span>
                                                  <div className="product_price d-flex justify-content-between">
                                                      <span className="qun">Qty: 01</span>
                                                      <ul className="d-flex justify-content-end">
                                                          <li><a href="#"><i className="zmdi zmdi-settings"></i></a>
                                                          </li>
                                                          <li><a href="#"><i className="zmdi zmdi-delete"></i></a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="item01 d-flex mt--20">
                                              <div className="thumb">
                                                  <a href="product-details.html"><img
                                                          src="images/product/sm-img/3.jpg"
                                                          alt="product images"/></a>
                                              </div>
                                              <div className="content">
                                                  <h6><a href="product-details.html">Impulse Duffle</a></h6>
                                                  <span className="price">$40.00</span>
                                                  <div className="product_price d-flex justify-content-between">
                                                      <span className="qun">Qty: 03</span>
                                                      <ul className="d-flex justify-content-end">
                                                          <li><a href="#"><i className="zmdi zmdi-settings"></i></a>
                                                          </li>
                                                          <li><a href="#"><i className="zmdi zmdi-delete"></i></a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="item01 d-flex mt--20">
                                              <div className="thumb">
                                                  <a ></a>
                                              </div>
                                              <div className="content">
                                                  <h6><a href="product-details.html">Compete Track Tote</a></h6>
                                                  <span className="price">$40.00</span>
                                                  <div className="product_price d-flex justify-content-between">
                                                      <span className="qun">Qty: 03</span>
                                                      <ul className="d-flex justify-content-end">
                                                          <li><a href="#"><i className="zmdi zmdi-settings"></i></a>
                                                          </li>
                                                          <li><a href="#"><i className="zmdi zmdi-delete"></i></a>
                                                          </li>
                                                      </ul>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="mini_action cart">
                                      <a className="cart__btn" >View and edit cart</a>
                                  </div>
                              </div>
                          </div>
                         
                      </li>
                      <li className="setting__bar__icon"><a className="setting__active" href="#"></a>
                          <div className="searchbar__content setting__block">
                              <div className="content-inner">
                                  <div className="switcher-currency">
                                      <strong className="label switcher-label">
                                          <span>Currency</span>
                                      </strong>
                                      <div className="switcher-options">
                                          <div className="switcher-currency-trigger">
                                              <span className="currency-trigger">USD - US Dollar</span>
                                              <ul className="switcher-dropdown">
                                                  <li>GBP - British Pound Sterling</li>
                                                  <li>EUR - Euro</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="switcher-currency">
                                      <strong className="label switcher-label">
                                          <span>Language</span>
                                      </strong>
                                      <div className="switcher-options">
                                          <div className="switcher-currency-trigger">
                                              <span className="currency-trigger">English01</span>
                                              <ul className="switcher-dropdown">
                                                  <li>English02</li>
                                                  <li>English03</li>
                                                  <li>English04</li>
                                                  <li>English05</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="switcher-currency">
                                      <strong className="label switcher-label">
                                          <span>Select Store</span>
                                      </strong>
                                      <div className="switcher-options">
                                          <div className="switcher-currency-trigger">
                                              <span className="currency-trigger">Fashion Store</span>
                                              <ul className="switcher-dropdown">
                                                  <li>Furniture</li>
                                                  <li>Shoes</li>
                                                  <li>Speaker Store</li>
                                                  <li>Furniture</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="switcher-currency">
                                      <strong className="label switcher-label">
                                          <span>My Account</span>
                                      </strong>
                                      <div className="switcher-options">
                                          <div className="switcher-currency-trigger">
                                              <div className="setting__menu">
                                                  <span><a href="#">Compare Product</a></span>
                                                  <span><a href="#">My Account</a></span>
                                                  <span><a href="#">My Wishlist</a></span>
                                                  <span><a href="#">Sign In</a></span>
                                                  <span><a href="#">Create An Account</a></span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
         
          <div className="row d-none">
              <div className="col-lg-12 d-none">
                  <nav className="mobilemenu__nav">
                      <ul className="meninmenu">
                          <li><a href="index.html">Home</a>
                              <ul>
                                  <li><a href="index.html">Home Style Default</a></li>
                                  <li><a href="index-2.html">Home Style Two</a></li>
                                  <li><a href="index-3.html">Home Style Three</a></li>
                                  <li><a href="index-box.html">Home Box Style</a></li>
                              </ul>
                          </li>
                          <li><a href="#">Pages</a>
                              <ul>
                                  <li><a href="about.html">About Page</a></li>
                                  <li><a href="portfolio.html">Portfolio</a>
                                      <ul>
                                          <li><a href="portfolio.html">Portfolio</a></li>
                                          <li><a href="portfolio-three-column.html">Portfolio 3 Column</a></li>
                                          <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="my-account.html">My Account</a></li>
                                  <li><a href="cart.html">Cart Page</a></li>
                                  <li><a href="checkout.html">Checkout Page</a></li>
                                  <li><a href="wishlist.html">Wishlist Page</a></li>
                                  <li><a href="error404.html">404 Page</a></li>
                                  <li><a href="faq.html">Faq Page</a></li>
                                  <li><a href="team.html">Team Page</a></li>
                              </ul>
                          </li>
                          <li><a href="shop-grid.html">Shop</a>
                              <ul>
                                  <li><a href="shop-grid.html">Shop Grid</a></li>
                                  <li><a href="shop-list.html">Shop List</a></li>
                                  <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                  <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                  <li><a href="shop-no-sidebar.html">Shop No sidebar</a></li>
                                  <li><a href="single-product.html">Single Product</a></li>
                              </ul>
                          </li>
                          <li><a href="blog.html">Blog</a>
                              <ul>
                                  <li><a href="blog.html">Blog Page</a></li>
                                  <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                  <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                  <li><a href="blog-details.html">Blog Details</a></li>
                              </ul>
                          </li>
                          <li><a href="contact.html">Contact</a></li>
                      </ul>
                  </nav>
              </div>
          </div>
     
          <div className="mobile-menu d-block d-lg-none">
          </div>
         
      </div>
</header>

          <div className="brown--color box-search-content search_active block-bg close__top">
              <form id="search_mini_form" className="minisearch" action="#">
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
 </div>
   

    )

 };

 export default Header;
