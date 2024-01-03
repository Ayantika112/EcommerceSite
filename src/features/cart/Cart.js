import { useEffect, useState } from "react";
import { Home } from "../../pages/Home";
import "../../style/Product.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


export function Cart() {
  var [expand, setExpandMap] = useState({});
  useEffect(() => {
    console.log('Hi')
  }, [expand])
  return (
    <div>
      <Home />
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
            height: "50rem",
            borderRadius: "10px",
          }}
          className="mt-4 row"
        >
          <div className="col-lg-8">
            <div className="row">
              <div
                className="col-lg-12 d-flex"
                style={{ "align-items": "baseline" }}
              >
                <FaLongArrowAltLeft />
                <h4 className="m-3">Continue shopping</h4>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-lg-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p class="mb-1">Shopping cart</p>
                    <p class="mb-0">You have 4 items in your cart</p>
                  </div>
                  <div>
                    <p class="mb-0">
                      <span class="text-muted">Sort by price:</span>{" "}
                      <select>
                        <option>100</option>
                        <option>200</option>
                      </select>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <div class="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                            class="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: "65px" }}
                          />
                        </div>
                        <div class="ms-3">
                          <h5>Canon EOS M50</h5>
                          <p class="small mb-0">Onyx Black</p>
                        </div>
                      </div>
                      <div class="d-flex flex-row align-items-center">
                        <div style={{ width: "50px" }}>
                          <h5 class="fw-normal mb-0">1</h5>
                        </div>
                        <div style={{ width: "80px" }}>
                          <h5 class="mb-0">$1199</h5>
                        </div>
                        <MdDeleteForever style={{ 'font-size': '22px', 'cursor': 'pointer' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mr-2">
            <div
              className="h-100"
              style={{ backgroundColor: "#3b71ca", borderRadius: "10px" }}
            >
              <div className="card p-2 m-2" style={{ 'background': '#f3e7e769' }}>
                <label className="fs-5 fw-bolder"> ADDRESS : </label>
                <div className="row">
                  <div className="text-break col-auto p-l-1">
                    <input type="radio" />
                  </div>
                  <div className="text-break col-auto">
                    <span>Halisahar Jetia Natun Para , Halisahar Station Road.</span>
                    <div>Pin-743135</div>
                  </div>
                  <div></div>
                </div>
                <div className="row">
                  <p>
                    <button className="btn btn-primary mt-2" id="btnExpandForAddress" onClick={() => {
                      let obj = expand;
                      if (!obj['btnExpandForAddress']) {
                        obj['btnExpandForAddress'] = {
                          'count': 0
                        }
                      } else {
                        obj['btnExpandForAddress']['count'] = obj['btnExpandForAddress']['count'] == 1 ? 0 : 1;
                      }
                      setExpandMap({ ...obj });
                      console.log('click ->' + JSON.stringify(expand))
                    }} type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Add Address
                    </button>
                  </p>
                  <div class={expand['btnExpandForAddress'] && expand['btnExpandForAddress']['count'] ? 'collapse show' : 'collapse hide'} id="collapseExample">
                    <div class="card card-body">
                      <input type="text" placeholder="Address No 1" className="p-1 m-1" style={{ "border": "none", "border-bottom": "1px solid black", 'outline': 'none' }} />
                      <input type="text" placeholder="Address No 2" className="p-1 m-1" style={{ "border": "none", "border-bottom": "1px solid black", 'outline': 'none' }} />
                      <input type="text" placeholder="Pin No" className="p-1 m-1" style={{ "border": "none", "border-bottom": "1px solid black", 'outline': 'none' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card p-2 m-2" style={{ 'background': '#f3e7e769' }}>
                <label className="fs-5 fw-bolder"> PAYMENT MODE : </label>
                <div className="row p-2">
                  <div className="text-break col-auto p-l-1">
                    <input type="radio" />
                  </div>
                  <div className="text-break col-auto">
                    <span>Cradit or Debit Card</span>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="text-break col-auto p-l-1">
                    <input type="radio" />
                  </div>
                  <div className="text-break col-auto">
                    <span>Google Pay</span>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="text-break col-auto p-l-1">
                    <input type="radio" />
                  </div>
                  <div className="text-break col-auto">
                    <span>Cash On Delivery</span>
                  </div>
                </div>
                <div className="row p-2">
                  <button className="col-auto btn btn-primary mt-2">Continue Payment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
