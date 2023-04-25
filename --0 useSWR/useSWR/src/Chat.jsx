import useSWR from 'swr'

const MESSAGES_API = '/api/messages';
const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
}

function Chat() {

  const {data:messages, error} = useSWR(MESSAGES_API, fetcher);
  if(error) return <div>Error: {error.message}</div>

  return (
    <div>
      <ul>
        {messages.map((message)=>{
          <li key={meaage.id}>{message.text}</li>
        })}
      </ul>
      <form>
        {/* render form to submit new messages here */}
      </form>
    </div>
  )
}

export default Chat;