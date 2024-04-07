import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style/SingleProduct.css';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Navbar } from "../features/navbar/Navbar";
import '../style/Product.css'

function SingleProduct() {
    var { id } = new useParams();
    var [productData, setProductData] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).then((data) => {
            setProductData(data.data);
            console.log(data.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    return (
        <>
            <Navbar />
            <div className="parentBody mt-4">
                <div className="card">
                    <div className="card-header card-header-css">
                        <div><b>{productData.title}</b></div>
                    </div>
                    <div className="card-body">
                        <div className="parentBodyStyle">
                            <img className="imageSize" src="https://www.ippc.int/static/img/images/icone-home-capacity_B1.png" alt='error' />
                            <span>description :- {productData.description} </span>
                            <span>category :- {productData.category} </span>
                            <span>discountPercentage :- {productData.discountPercentage} </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleProduct;