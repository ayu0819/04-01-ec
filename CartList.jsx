import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProductsInCart } from '../reducks/users/selectors';
import {CartItem} from '../components/Products';
import styled from 'styled-components';
import {push} from 'connected-react-router';

const Buttons = styled.div`
   padding-top: 3em;
`;

const Items = styled.div`
   padding-top: 1em;
`;

const Button = styled.button`
    margin: 0 auto;
    padding: 1.1em 3em;
    background: #ea352d;
    transition: all ease-out .3s;
    color: #fff;
    border-radius:2em;
    width:100%;
    max-width: 15em;
    margin-bottom:1em; 
    label{
      font-size: 1.2em;
    }
    :hover{
    padding: 1.1em 3em;
    background: #aa2e28;
    color: #fff;
    transition: all ease-out .3s;
    border-radius:2em;
    label{
      font-size: 1.2em; 
    }
    }
`;

const CartList = () => {
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const productsInCart = getProductsInCart(selector);
    // console test ↓
    console.log(productsInCart)

 return(
   <div>
      <div className="common__center">
          <h2>ショッピングカート</h2>
        <Items>
            {productsInCart.length > 0 && (
                productsInCart.map(product => <CartItem key={product.cartId} product={product}  /> )
            )}
        </Items>
        <Button onClick={() => dispatch(push('/order/confirm'))} >レジへ進む</Button>
      </div>
   </div>
 )
}

export default CartList;
