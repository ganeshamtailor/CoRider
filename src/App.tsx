import Footer from "./components/Footer"
import Message from "./components/Message"
import Header from "./components/Navbar"

const App = () => {
  return (
      <div className="bg-[#FAF9F4] min-h-screen flex flex-col">
        <Header />
        <Message />
        <div className="flex-grow"></div> {/* This div will push Footer to the bottom */}
        <Footer />
      </div>
    
  )
}

export default App
