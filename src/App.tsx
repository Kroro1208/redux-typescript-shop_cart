import { MinusIcon } from "./components/icons/MinusIcon"
import { PlusIcon } from "./components/icons/PlusIcon"
import { TrashIcon } from "./components/icons/TrashIcon"

function App() {
  return (
    <div className='text-4xl font-bold'>
      <div>
        <PlusIcon />
        <MinusIcon />
        <TrashIcon />
      </div>
    </div>
  )
}

export default App
