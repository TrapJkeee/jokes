import { useHistory } from "react-router-dom";
import JokeForm from "../components/jokes/JokeForm";

const AddJoke = () => {
  const history = useHistory();

  const addJokeHandler = (jokeData) => {
    history.push("/jokes");
  };

  return <JokeForm onAddJoke={addJokeHandler} />;
};

export default AddJoke;
