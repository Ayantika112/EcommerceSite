import { useEffect, useState } from "react";
import { Home } from "../../pages/Home";
import "../../style/Product.css";
import "../../App.css"
import { fetchProduct } from "../product/productAPI";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { increment } from "./productSlice";

export function Product() {
  useEffect(() => {
    var res = fetchProduct();
    console.log("response ---------->", res.data);
  }, []);
  const dispatch = useDispatch();
  var [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        // await async "fetchBooks()" function
        const prod = await fetchProduct();
        setProduct(prod.data);
        console.log(prod);
      } catch (err) {
        console.log("Error occured when fetching books");
      }
    })();
  }, []);
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
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <select
                  class="form-select ml-3"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-lg-12">
                <select
                  class="form-select ml-3"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row m-2" style={{"overflow": "auto","height": "50rem"}}>
              {product.map((item, e) => (
                <div
                  className=" col-sm-2"
                  style={{
                    "border-radius": "9px",
                    border: "2px solid #cfcfcf85",
                    margin: "5px",
                    // margin: "0px 5px 0px 5px"
                  }}
                >
                  <div id="" className="single-product">
                    <div class="part-1">
                      <span class="new p-2">{item.title}</span>
                      <div>
                        <img
                          style={{
                            width: "10rem",
                            height: "12rem",
                            margin: "5px",
                          }}
                          src={item.images[1]}
                        />
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
                      <h4 class="product-price">$49.99</h4>
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
