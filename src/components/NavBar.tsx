import rocketImage from '../assets/rocket.gif';

const NavBar: React.FC = () => {
  return (
    <nav className="w-full container mx-auto justify-between items-center p-5">
        <div className='flex gap-3 items-center justify-center mx-auto'>
            <h3 className="text-3xl font-bold">SHOP CART PROJECT</h3>
            <p className='text-lg font-bold'>using Redux with TypeScript</p>
            <img src={rocketImage} alt="logo" width={80} height={80}/>
        </div>
      <div className="relative flex justify-between">
        <div className="absolute -top-2.5 -right-2.5 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
            <p className="text-white mb-0 text-xl">0</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
