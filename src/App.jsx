import './App.css'
import Todo from './components/Todo'
import AddTodo from './components/AddTodo'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <div className='h-screen overflow-y-scroll p-[2rem]'>
      <ToastContainer
        position='top-center'
        pauseOnHover={false}
        autoClose={3000}
      />
      <AddTodo />
      <Todo />
    </div>
  )
}

export default App
