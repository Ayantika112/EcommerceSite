import { useParams } from "react-router-dom"

function SingleProduct() {
    const getData = useParams();
    console.log('getData----> '+JSON.stringify(getData));
    return (
        <>
            <h1>tu jji gyftftd ctft</h1>
        </>
    )

}
export default SingleProduct