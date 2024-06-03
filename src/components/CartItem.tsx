import { useDispatch } from 'react-redux';
import { PlusIcon } from './icons/PlusIcon';
import { MinusIcon } from './icons/MinusIcon';
import { decrease, increase, removeItem } from '../app/features/cart/CartSlice';

type Props = {
    id: string | number;
    img: string;
    title: string;
    price: number;
    amount: number;
}

const CartItem = ({ id, img, title, price, amount }: Props) => { // このCartItem内の値がaction.値でアクセス可能
    const dispatch = useDispatch();
    return (
        <article className=''>
            <img src={img} alt='' />
            <div>
                <h4>{title}</h4>
                <h4 className=''>{price}円</h4>
                <button className='' onClick={() => dispatch(removeItem(id))}><DeleteIcon /></button>
            </div>
            <div className=''>
                <button className='' onClick={() => dispatch(increase((id)))}>
                    <PlusIcon />
                </button>
                <p className=''>{amount}</p>
                <button className='' onClick={() => dispatch(decrease(id))}>
                    <MinusIcon />
                </button>
            </div>
        </article>
    );
}

export default CartItem;