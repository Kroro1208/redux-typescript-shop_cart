import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import CartItem from './CartItem';
import { openModal } from '../app/features/modal/ModalSlice';
import emptyCartImage from "../assets/happy.gif"

export const CartContainer = () => {
    const dispatch = useDispatch();
    const { amount, cartItems, total } = useSelector((state: RootState) => ({
        amount: state.cart.amount,
        cartItems: state.cart.cartItems,
        total: state.cart.total
    }));


    if (amount < 1) {
        return (
            <section className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                <header className='text-center'>
                    <img src={emptyCartImage} alt="Empty Cart" className="w-40 h-40 mb-4" />
                    <h2 className='text-4xl font-bold text-gray-800 mb-2'>Your Cart is Empty</h2>
                    <h4 className='text-lg text-gray-600 mb-6'>Looks like you haven't added anything to your cart yet.</h4>
                    <button 
                        className='px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300'
                        onClick={() => window.location.href = '/'}
                    >
                        Start Shopping
                    </button>
                </header>
            </section>
        )
    }

    return (
        <div className='container mx-auto p-4'>
            <section className='bg-white rounded-lg shadow-md p-6'>
                <header className='mb-4'>
                    <h2 className='text-2xl font-bold'>買い物かご</h2>
                </header>
                <div className='space-y-4'>
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            amount={item.amount}
                        />
                    ))}
                </div>
                <footer className='mt-4'>
                    <hr className='mb-4'/>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-lg font-semibold'>小計 {amount} 個の商品 (税込) :</h4>
                        <span className='text-lg font-bold'>{total} 円</span>
                    </div>
                    <button
                        className='mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600'
                        onClick={() => dispatch(openModal())}
                    >
                        全ての商品の選択解除
                    </button>
                </footer>
            </section>
        </div>
    );
}

export default CartContainer;
