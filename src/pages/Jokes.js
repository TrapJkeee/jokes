import JokeList from "../components/jokes/JokeList";

const DUMMY_JOKES = [
  { id: "j1", topic: "Programming", text: "wytka 1" },
  { id: "j2", topic: "General", text: "wytka 2" },
];

const Jokes = () => {
  return <JokeList jokes={DUMMY_JOKES} />;
};

export default Jokes;
