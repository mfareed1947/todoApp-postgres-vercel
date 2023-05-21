import AddTodo from '@/Components/AddTodo'
import TodoList from '@/Components/TodoList'


export default function Home() {
  return (
    <main className='bg-gradient-to-tr from-primary to-secondary h-screen w-full flex justify-center items-center shadow-lg'>
      <div className='px-3 py-4 max-w-md w-full bg-gradient-to-br from-white/30 to-white/50 backdrop-blur-xl rounded-xl'>
        {/* @ts-ignore */}
        <TodoList  />
        <AddTodo />
        <div className='w-1/2 h-1.5 bg-black/80 mx-auto rounded-lg '></div>
      </div>
    </main>
  )
}