import CurrencyConverter from "./components/CurrencyConverter"

function App() {

  return (
    <section className="flex text-white justify-center items-center h-screen mx-auto bg-[url(https://images.unsplash.com/photo-1550147760-44c9966d6bc7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center">
      {/* <div className="bg-amber-100 size-72 rounded-full absolute top-16 left-96"></div>
      <div className="bg-pink-200 size-72 rounded-full absolute bottom-28 right-96"></div> */}
      <CurrencyConverter/>
    </section>
  )
}

export default App
