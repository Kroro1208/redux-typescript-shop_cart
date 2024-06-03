import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store';
import CartItem from './CartItem';
import { openModal } from '../app/features/modal/ModalSlice';

export const CartContainer = () => {
    const dispatch = useDispatch();
    const {amount, cartItems, total} = useSelector((state: RootState) => ({
        amount: state.cart.amount,
        cartItems: state.cart.cartItems,
        total: state.cart.total
    }));

    if(amount < 1){
        return (
            <section>
                <header>
                    <h2>買い物かご</h2>
                    <h4>買い物かごは空です</h4>
                </header>
            </section>
        )
    }

  return (
    <div>
      <section className=''>
            <header>
                <h2>買い物かご</h2>
            </header>
            <div>
            {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className=''>
                    <h4>小計{amount}個の商品 (税込) :<span>{total}円です</span></h4>
                    <button className='btn clear-btn' onClick={() => dispatch(openModal())}>全ての商品の選択解除</button>
                </div>
            </footer>
        </section>
    </div>
  )
}