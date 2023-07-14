import { useEffect, useState} from "react";
import { Container, FormWrapper } from "./style";
import { useNavigate, useParams } from "react-router-dom";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

const Form = (props: FormProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    console.log(name, email, message);
  }
  , [name, email, message]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");

   // ise params to pass data to MessageSentPage
    navigate(`/message-sent/${name}/${email}/${message}`);
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleFormSubmit}>
        <h1>Contact</h1>
        <div>
          <input 
            type="text" 
            placeholder="Name" 
            required
            value={name || params.name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            required
            value={email || params.email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
          <textarea
           placeholder="Message" 
            value={message || params.message}
            onChange={(e) => setMessage(e.target.value)}
           />
        </div>

        <button 
          type="submit"
          disabled={!name || !email || !message}
          >
            Send
        </button>
        
      </FormWrapper>
    </Container>
  );
};

export default Form;
