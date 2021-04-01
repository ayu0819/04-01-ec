import React from 'react';
import styled from 'styled-components';
import * as AiIcons from "react-icons/ai";
import {useSelector} from "react-redux";
import {getUserId} from '../../reducks/users/selectors';
import {db} from '../../firebase/index';

const ProductCard = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      width: 100%;
      border-radius:0.5em;
      max-width:29.55em;
      margin: 1.5em auto 0;
      background-color: #fff;
      transition: all ease-out .3s;
     cursor: pointer;
   :hover {
       background-color: #f5f5f5;
       transition: all ease-out .3s; 
   }
   img {
       width: 200px;
       height: 200px;
       object-fit: cover;
       border-radius: 0.5em 0 0 0.5em;
   }
   h3 {
       font-size:1.2em;
       font-weight:bold;
       padding: 0;
   }
`;

const TextArea = styled.div`
 padding: 0 2em;
 width:8em;
`;

const CartItem = (props) => {
    const selector = useSelector((state) => state);
    const uid = getUserId(selector);

    const image = props.product.images[0].path;
    const name = props.product.name;
    const price = props.product.price.toLocaleString();
    const size = props.product.size;

    console.log(size)

  const removeProductFromCart = (id) => {
    return db.collection('users').doc(uid)
             .collection('cart').doc(id)
             .delete()
};

console.log(name)
console.log(size)
 return(
     <ProductCard>
       <img src={image} alt="商品画像" />
         <TextArea>
             <h3>{name}</h3>
             <p>{"￥" + price}</p>
             <p>{'sizeは' + size}</p>
         </TextArea>
         <AiIcons.AiFillDelete className="menu__Icon cart__delete" onClick={() => removeProductFromCart(props.product.cartId)}  />
   </ProductCard>
 )
}

export default CartItem;
