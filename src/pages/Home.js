import { Link } from "react-router-dom";
import "../style/Product.css";
import { FaCartPlus } from "react-icons/fa";
export function Home() {
  return (
    <div>
      <nav className="topNavbar navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="p-2 navbar-item" to={"/Signup/product"}>
            Product
          </Link>
          <Link className="p-2 navbar-item" to={"/Signup/cart"}>
            <FaCartPlus  style={{'fontSize':'1.5rem'}}/>
          </Link>
        </div>
      </nav>
    </div>
  );
}
