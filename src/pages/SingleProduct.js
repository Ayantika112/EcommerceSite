import axios from "axios";
import { useParams} from "react-router-dom";

function SingleProduct() {
    let {id} = new useParams();
    console.log({id});

    axios.get(`http://localhost:8080/products/${id}`).then((data)=>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })

    return (
        <>
            <h1>tu jji gyftftd ctft {id} </h1>
        </>
    )
}
export default SingleProduct;