import React ,{useRef} from "react";
import emailjs from '@emailjs/browser';
import ReactDOM from 'react-dom'



function Checkout() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mx2vche', 'template_1bmiieh', form.current, 'user_DSAMkqXUaLyBj7NV9HzjG')
        .then((result) => {
           
            const element =  <p> successfully </p>;
          
            ReactDOM.render(element, document.getElementById('root'));
           
           
        }, (error) => {
           <p> error </p>
           console.log(error);
        });

      
    };
  


  return(



     <div className="Checkout">
     <div className="box-search-content search_active block-bg close__top">
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

    <div className="ht__breadcrumb__area bg-image--4">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__inner text-center">
                        <h2 className="breadcrumb-title">Checkout</h2>
                        <nav className="breadcrumb-content">
                            <a className="breadcrumb_item" href="index.html">Home</a>
                            <span className="brd-separator">/</span>
                            <span className="breadcrumb_item active">Checkout</span>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="wn__checkout__area section-padding--lg bg__white">
        <div className="container">
        
            <div className="row">
                <div className="col-lg-6 col-12">
                <form ref={form} onSubmit={sendEmail} >
                    <div className="customer_details">
                        <h3>Billing details</h3>
                        <div className="customar__field">
                            <div className="margin_between">
                                <div className="input_box space_between">
                                    <label>First name <span>*</span></label>
                                    <input type="text" name="FirstName"/>
                                </div>
                                <div className="input_box space_between">
                                    <label>last name <span>*</span></label>
                                    <input type="text" name="lastName"/>
                                </div>
                            </div>
                            <div className="input_box">
                                <label>Company name <span>*</span></label>
                                <input type="text" name="CompanyName"/>
                            </div>
                            <div className="input_box">
                                <label>Country<span>*</span></label>
                                <select className="select__option" name="Country" >
                                    <option>Select a country…</option>
                                    <option>Afghanistan</option>
                                    <option>American Samoa</option>
                                    <option>Anguilla</option>
                                    <option>American Samoa</option>
                                    <option>Antarctica</option>
                                    <option>Antigua and Barbuda</option>
                                </select>
                            </div>
                            <div className="input_box">
                                <label>Address <span>*</span></label>
                                <input type="text" placeholder="Street address" name="Address"/>
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Apartment, suite, unit etc. (optional)"/>
                            </div>
                            <div className="input_box">
                                <label>District<span>*</span></label>
                                <select className="select__option" name="District">
                                    <option>Select a country…</option>
                                    <option>Afghanistan</option>
                                    <option>American Samoa</option>
                                    <option>Anguilla</option>
                                    <option>American Samoa</option>
                                    <option>Antarctica</option>
                                    <option>Antigua and Barbuda</option>
                                </select>
                            </div>
                            <div className="input_box">
                                <label>Postcode / ZIP <span>*</span></label>
                                <input type="text" name="Postcode"/>
                            </div>
                            <div className="margin_between">
                                <div className="input_box space_between">
                                    <label>Phone <span>*</span></label>
                                    <input type="text" name="Phone"/>
                                </div>

                                <div className="input_box space_between">
                                    <label>Email address <span>*</span></label>
                                    <input type="email" name="Email"/>
                                </div>
                            </div>
                        </div>
                        <div className="create__account">
                             <button>Envouyer</button>
                             <div className="mesgsucces"></div>
                        </div>
                    </div>
                    </form>
                </div>
                <div className="col-lg-6 col-12 md-mt-40 sm-mt-40">
                    <div className="wn__order__box">
                        <h3 className="order__title">Your order</h3>
                        <ul className="order__total">
                            <li>Product</li>
                            <li>Total</li>
                        </ul>
                        <ul className="order_product">
                            <li>Buscipit at magna × 1<span>$48.00</span></li>
                            <li>Buscipit at magna × 1<span>$48.00</span></li>
                            <li>Buscipit at magna × 1<span>$48.00</span></li>
                            <li>Buscipit at magna × 1<span>$48.00</span></li>
                        </ul>
                        <ul className="shipping__method">
                            <li>Cart Subtotal <span>$48.00</span></li>
                            <li>Shipping
                                <ul>
                                    <li>
                                        <input name="shipping_method[0]" data-index="0" value="legacy_flat_rate" checked="checked" type="radio"/>
                                        <label>Flat Rate: $48.00</label>
                                    </li>
                                    <li>
                                        <input name="shipping_method[0]" data-index="0" value="legacy_flat_rate" checked="checked" type="radio"/>
                                        <label>Flat Rate: $48.00</label>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="total__amount">
                            <li>Order Total <span>$223.00</span></li>
                        </ul>
                    </div>
                
               
                </div>
               
            </div>
        </div>
    </section>



   

     
     </div>


  );
}


 export default Checkout;
