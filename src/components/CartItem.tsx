import { useDispatch } from 'react-redux';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { decrease, increase, removeItem } from '../app/features/cart/CartSlice';
import { TrashIcon } from './icons/TrashIcon';

type Props = {
    id: number;
    img: string;
    title: string;
    price: number;
    amount: number;
}

const CartItem = ({ id, img, title, price, amount }: Props) => {
    const dispatch = useDispatch();
    return (
        <article className='flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md'>
            <div className='flex items-center'>
                <img src={img} alt={title} className='w-24 h-24 object-cover rounded-lg hover:scale-[2.5] transition-all duration-300' />
                <div className='ml-4'>
                    <h4 className='text-lg font-bold'>{title}</h4>
                    <h4 className='text-md'>{price} 円</h4>
                    <button className='text-red-500 hover:text-red-700' onClick={() => dispatch(removeItem(id))}>
                        <TrashIcon />
                    </button>
                </div>
            </div>
            <div className='flex items-center'>
                <button className='text-green-500 hover:text-green-700' onClick={() => dispatch(increase(id))}>
                    <PlusIcon />
                </button>
                <p className='mx-2'>{amount}</p>
                <button className='text-red-500 hover:text-red-700' onClick={() => dispatch(decrease(id))}>
                    <MinusIcon />
                </button>
            </div>
        </article>
    );
}

export default CartItem;
