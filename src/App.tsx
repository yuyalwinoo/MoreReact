import { useCounterStore } from "./store"

const App = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Counter with Zustand</h1>
      <p>{count}</p>
      <div className="flex space-x-3">
        <button onClick={increment} className="px-3 py-2 bg-blue-400 rounded-xl cursor-pointer">+</button>
        <button onClick={decrement} className="px-3 py-2 bg-blue-400 rounded-xl cursor-pointer">-</button>
      </div>
    </div>
  )
}

export default App