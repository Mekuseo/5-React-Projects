import useSWR from 'swr'

function Chat() {
  const MESSAGES_API = '/api/messages';

  const fetcher = async (url) => {
    const response = await fetch(url);
    return response.json();
  }

  return (
    <div>
      <ul>
        {/* render list of messages here */}
      </ul>
      <form>
        {/* render form to submit new messages here */}
      </form>
    </div>
  )
}

export default Chat;