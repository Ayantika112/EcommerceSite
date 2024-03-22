import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../style/SingleProduct.css'

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
    }, [])


    return (
        <>
            <div className="parentBody">
                <div className="card">
                    <div className="card-header">
                        <b>{productData.title}</b>
                    </div>
                    <div className="card-body">
                        <div>
                            <img src="" alt="Error"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingleProduct;