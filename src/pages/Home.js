import { Link } from "react-router-dom";
import "../style/Product.css";
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
export function Home() {
  var data = useSelector(item => item.product.card);
  console.log('---- data ------> ' + JSON.stringify(data));
  return (
    <div>
      <nav className="topNavbar navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="p-2 navbar-item" to={"/login/product"}>
            Product
          </Link>
          <Link className="p-2 navbar-item" to={"/login/cart"}>
            <FaCartPlus  style={{'fontSize':'1.5rem'}}/><span>{data.length}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
