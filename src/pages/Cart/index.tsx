import Layout from "../../components/layout";
import "./Cart.css";
import Counts from "../../components/shared/Counts";

import { RiDeleteBin2Line } from "react-icons/ri";
import Button from "../../components/shared/Button";
import { useAppDispatch, useAppSelector } from "../../services";
import {
  removeAllFromCart,
  removeFromCart,
  incrementProductCount,
  decrementProductCount,
} from "../../services/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);

  return (
    <Layout>
      <div className="cart-container">
        <div className="title">
          <h1>Checkout</h1>
        </div>

        <div className="content">
          <div className="items">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Link
                        to={`/product/${item.title
                          .toLowerCase()
                          .split(" ")
                          .join("-")}/${item.id}`}
                      >
                        <div className="cart-product">
                          <img src={item.image} alt="product" />
                          <div className="details">
                            <h3>{item.title}</h3>
                            <p>
                              <b>Color:</b> Black
                            </p>
                            <p>
                              <b>Size:</b> M
                            </p>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className="price">${item.price}</td>
                    <td>
                      <Counts
                        decrement={() =>
                          dispatch(decrementProductCount(item.id))
                        }
                        increment={() =>
                          dispatch(incrementProductCount(item.id))
                        }
                        count={item.quantity}
                      />
                    </td>
                    <td className="price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td
                      className="delete"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      <RiDeleteBin2Line size={24} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="subtotal">
            <div className="title">
              <h3>Subtotal</h3>
              <p>
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <Button>Checkout</Button>
            <div
              className="text-sm text-gray-500 underline cursor-pointer mt-8 text-center"
              onClick={() => dispatch(removeAllFromCart())}
            >
              Remove all items
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
