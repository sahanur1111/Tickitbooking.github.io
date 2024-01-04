import './App.css'
import Book from './components/Book'
import Header from './components/Header'
import Table from './components/Table'

function App() {


  return (
    <div className='bg-[url(../src/assets/flight3.jpg)] bg-cover bg-no-repeat'>
      <Header/>
      <section className='h-screen'>
        <Book/>
        <Table/>
      </section>
    </div>
  )
}

export default App
