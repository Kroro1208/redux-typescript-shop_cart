import { useDispatch } from 'react-redux';
import { clearCart } from '../app/features/cart/CartSlice';
import { closeModal } from '../app/features/modal/ModalSlice';

export const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-8 flex flex-col items-center rounded-lg shadow-lg max-w-xl w-full">
        <h4 className="text-2xl font-bold mb-4">買い物カゴを全てからにしますか？</h4>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-red-500 px-5 py-2 rounded-lg text-white hover:bg-red-600 border-red-700 border-b-4 active:border-b-0 transition-all transform active:scale-95"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            OK
          </button>
          <button
            className="bg-gray-500 px-5 py-2 rounded-lg text-white hover:bg-gray-600 border-gray-700 border-b-4 active:border-b-0 transition-all transform active:scale-95"
            onClick={() => dispatch(closeModal())}
          >
            NO
          </button>
        </div>
      </div>
    </aside>
  );
}
