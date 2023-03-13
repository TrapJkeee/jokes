import React from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";

const DUMMY_JOKES = [
  { id: "j1", topic: "Programming", text: "wytka 1" },
  { id: "j2", topic: "General", text: "wytka 2" },
];

const JokeDetails = () => {
  const params = useParams();
  const routeMatch = useRouteMatch();

  const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  if (!joke) {
    return <h1 className="centered">Wytok ne nideno</h1>;
  }

  return (
    <>
      <HighlightedJoke topic={joke.topic} text={joke.text} />

      <Route path={`${routeMatch.path}`} exact>
        <div className="centered">
          <Link className="btn--empty" to={`${routeMatch.url}/comments`}>
            Show comments
          </Link>
        </div>
      </Route>

      <Route path={`${routeMatch.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default JokeDetails;
