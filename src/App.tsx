import { useDispatch, useSelector } from "react-redux";
import { CartContainer } from "./components/CartContainer";
import { useEffect } from "react";
import { calculateTotals } from "./app/features/cart/CartSlice";
import { Modal } from "./components/Modal";
import NavBar from "./components/NavBar";
import { RootState } from "./app/store";

function App() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartItems, dispatch]);

    return (
        <main>
            {isOpen && <Modal />}
            <NavBar />
            <CartContainer />
        </main>
    );
}

export default App;
