import { useDispatch } from 'react-redux'
import { clearCart } from '../app/features/cart/CartSlice';
import { closeModal } from '../app/features/modal/ModalSlice';

export const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside>
      <div>
          <h4>買い物カゴを全てからにしますか？</h4>
          <div>
            <button
            onClick={()=> {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            >
              OK
            </button>
            <button onClick={()=> closeModal()}>No</button>
          </div>
      </div>
    </aside>
  )
}

