// CartComponent.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItem } from './createSlice';

// const CartComponent = () => {
//   const {items} = useSelector(state => state.cart);
//   console.log(items,'these are product items from usestate')
//   const dispatch = useDispatch();

//   const handleAddItem = (item) => {
//     dispatch(addItem(item));
//   };



//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {items.map(item => (
//           <li>
//             {item.name}
          
//             <button onClick={()=>dispatch(addItem(item))}>Click</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CartComponent;


