import { useParams } from 'react-router-dom';


const MessageSent = () => {
  const { name, email, message } = useParams();
  
  return (
    <>
      <h1>Message Sent</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </>
  )
}

export default MessageSent