import useSWR from 'swr'

const fetch = (...args) => fetch(...args).then(res => res.json())
function App() {
  const {data, error} = useSWR('https://jsonplaceholder.typicode.com/posts', fetch);
  if (error) return <div>Error: {error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <div className="App">{data}</div>
      <div>hello world</div>
    </div>
  )
}

export default App
