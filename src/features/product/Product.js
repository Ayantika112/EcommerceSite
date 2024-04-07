import { useEffect, useState } from "react";
import { Home } from "../../pages/Home";
import "../../style/Product.css";
import "../../App.css"
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { increment } from "./productSlice";

import axios from "axios";
import { Link, NavLink } from "react-router-dom";

function fetchProduct() {
  return axios.get("http://localhost:8080/products");

}
export function Product() {
  
  const dispatch = useDispatch();
  var [product, setProduct] = useState([]);
  var [copyProduct, setCopyProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // await async "fetchBooks()" function
        const prod = await fetchProduct();
        setProduct(prod.data);
        setCopyProduct(prod.data);
      } catch (err) {
        console.log("Error occured when fetching books");
      }
    })();
  }, []);

  function chandeProductWithSeletedValue(e) {
    let productValue = e.target.value;
    let productKey = e.target.id;
    let typeofVal = e.target.name;

    if (productValue) {
      
      if (typeofVal === 'int') {
        productValue = parseInt(productValue)
      } else if (typeofVal === 'float') {
        productValue = parseFloat(productValue)
      }

      return setCopyProduct(product.filter(item => item[productKey] === productValue))
    } else {
      return setCopyProduct(product)
    }
  }


  return (
    <div>
      <Home />
      {/* <div style={{ background: "#cbcbcb75" }}> */}
      <div
        class="main-content"
        style={{
          display: "block",
          "margin-left": "auto",
          "margin-right": "auto",
          width: "85%",
        }}
      >
        <div
          style={{
            boxShadow: "rgb(31 31 33 / 20%) 0px 7px 29px 0px",
            background: "white",
          }}
          className="mt-4 row"
        >
          <div className="col-lg-3">
            <div className="p-3 bold h4"> All Products</div>
            <div className="row m-2">
              <div className="col-lg-12">
                <select
                  class="form-select ml-3"
                  aria-label="Default select example"
                  id="title"
                  name="string"
                  onChange={(e) => chandeProductWithSeletedValue(e)}
                >
                  <option selected value=''>Item Name</option>
                  {product.map((item, index) => (
                    <><option value={item.title} key='title'>{item.title}</option></>
                  ))}
                </select>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <select
                  class="form-select ml-3"
                  aria-label="Default select example"
                  id="price"
                  name="int"
                  onChange={(e) => chandeProductWithSeletedValue(e)}
                >
                  <option selected value=''>Item Price</option>
                  {product.map((item, index) => (
                    <><option value={item.price} key='price'>${item.price}</option></>
                  ))}
                </select>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <select
                  class="form-select ml-3"
                  aria-label="Default select example"
                  id="discountPercentage"
                  name="float"
                  onChange={(e) => chandeProductWithSeletedValue(e)}
                >
                  <option selected value=''>Item DiscountPercentage</option>
                  {product.map((item, index) => (
                    <>
                      <option value={item.discountPercentage} key='discountPercentage'>
                        {item.discountPercentage} %
                      </option>
                    </>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row m-2" style={{ "overflow": "auto", "height": "50rem" }}>
              {copyProduct.map((item, e) => (
                <div
                  className=" col-sm-2"
                  style={{
                    "border-radius": "9px",
                    border: "2px solid #cfcfcf85",
                    margin: "5px",
                    cursor:'pointer'
                  }}
                >
                  <div id="" className="single-product">
                    <div class="part-1">
                      <span class="new p-2">{item.title}</span>
                      <div>
                        <Link to={{pathname:`/login/product/SingleProduct/${item.id}`}} >
                        {/* onClick={()=>{dispatch({type:uniqueProductDetails , data:item})}}  */}
                        <img className="imageSize"
                          src={"https://www.ippc.int/static/img/images/icone-home-capacity_B1.png"}
                          alt="error"
                        /></Link>
                        {/* <button> */}
                        <IoMdAddCircle
                          onClick={() => {
                            dispatch({ type: increment, data: item });
                          }}
                          style={{
                            color: "green",
                            fontSize: "25px",
                            cursor: "pointer",
                          }}
                        />
                      </div>
                      {/* </button> */}
                    </div>
                    <div class="part-2">
                      <h3 class="product-title">Here Product Title</h3>
                      <h4 class="product-price">${item.price}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
