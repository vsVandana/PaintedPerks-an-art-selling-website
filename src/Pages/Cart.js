import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { clearCart, decreaseItemQuantity, increaseItemQuantity, removeItemtoCart } from "../utils/cartSlice";
import shopping from '../utils/images/shopping.png'


const Cart = () => {
  const { items } = useSelector((store) => store.cart);
  console.log(items);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId))
  }
  const handleIncreaseQuantity = (itemId) => {
   dispatch(increaseItemQuantity(itemId))
  }
  const handleRemoveItem = (itemId) => {
    const result = window.confirm("Do you really want to remove this product from cart ?")
    if(result)
    dispatch(removeItemtoCart(itemId));
  };
  const handleClearCart = () => {
    const result = window.confirm("Do you really want to clear your cart ?")
   if(result)
    dispatch(clearCart())
  }
  return (
    <>
      {!items.length ? (
        <div className="flex flex-col items-center justify-center my-10">
          <img src={shopping}  alt="empty-cart" className="w-96"/>
          <p1 className="text-xl px-4">Currently Your Cart is empty..</p1>
        </div>
      ) : (
        <div className="flex flex-col my-5 p-4 justify-between">
          <div className="flex  mb-5 items-center justify-between border-b border-gray-200">
            <h1>
              Your Cart <span className="font-bold">({items.length})</span>
            </h1>
            <button className="bg-red-600 py-2 px-4 rounded-xl text-white" onClick={handleClearCart}>
              Clear cart
            </button>
          </div>
          <table className="w-full table-auto">
            <tbody className="bg-white divide-y divide-gray-200 gap-4 ">
              {items.map((item) => (
                <>
                  <tr
                    className="bg-white even:bg-gray-50 flex items-center flex-col sm:flex-row justify-between"
                    key={item.id}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center flex-col">
                      <img
                        src={item.img1}
                        alt="product"
                        style={{ width: "70px", height: "70px" }}
                      />
                      <div>
                        <h1 className="text-gray-400">{item.img_type}</h1>
                        <h1>{item.title}</h1>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><button className="flex md:gap-10 gap-7 border-2 border-gray-100 text-xl py-2 lg:px-6 md:px-3 sm:px-6 px-3 rounded-3xl bg-gray-100">
            <button onClick={()=>handleDecreaseQuantity(item.id)}>-</button>
            <button>{item.quantity}</button>
            <button onClick={()=>handleIncreaseQuantity(item.id)}>+</button>
        </button>
                      </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.price} x {item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <button
                        className="text-2xl text-red-600"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Cart;
