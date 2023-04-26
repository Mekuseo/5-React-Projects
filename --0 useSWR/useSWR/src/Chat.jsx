import useSWR, { mutate } from "swr";
import { useEffect } from "react";
import io from "socket.io-client";

const MESSAGES_API = "https://dummyapi.io/data/v1/post/6447e3ef98826d84d1d7aa5b/comment?limit=10";

const fetcher = async (url) => {
  const response = await fetch(url);
  return response.json();
};

function Chat() {
  const { data: messages, error } = useSWR(MESSAGES_API, fetcher);

  useEffect(() => {
    const socket = io();

    socket.on("new message", () => {
      mutate(MESSAGES_API);
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  

  if (error) return <div>Error: {error.message}</div>;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const text = formData.get("text");

    const response = await fetch(MESSAGES_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (response.ok) {
      event.target.reset();
      mutate(MESSAGES_API);
    } else {
      console.error("Error creating Message;", response.status);
    }
  };

  if (error) {
    return <div>Error loading messages</div>;
  }

  return (
    <div>
      <ul>
        {messages.map((message) => {
          <li key={message.id}>{message.text}</li>;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="text" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
