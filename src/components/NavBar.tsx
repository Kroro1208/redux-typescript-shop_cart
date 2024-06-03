import { RootState } from '../app/store';
import rocketImage from '../assets/rocket.gif';
import { useSelector } from 'react-redux';
import shopCartImage from '../assets/cart.gif';

const NavBar: React.FC = () => {
    const amount = useSelector((state: RootState) => state.cart.amount);
    console.log(amount);

    return (
        <nav className="w-full container mx-auto flex justify-between items-center p-5">
            <div className='flex gap-3 items-center'>
                <h3 className="text-3xl font-bold">SHOP CART PROJECT</h3>
                <p className='text-lg font-bold'>using Redux with TypeScript</p>
                <img src={rocketImage} alt="logo" width={80} height={80}/>
            </div>
            <div className="flex items-center relative">
                <img src={shopCartImage} alt="cart" width={50} height={50} />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full
                bg-gray-800 flex items-center justify-center transform translate-x-2 translate-y-2">
                    <p className="text-white mb-0 text-lg">{amount}</p>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
