import React, { useEffect } from "react";
import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import useHttp from "../hooks/use-http";
import { getJoke } from "../utils/firebase-api";
import Loader from "../components/UI/Loader";

const JokeDetails = () => {
  const params = useParams();
  const routeMatch = useRouteMatch();

  const {
    sendHttpRequest,
    status,
    data: loadedJoke,
    error,
  } = useHttp(getJoke, true);

  useEffect(() => {
    sendHttpRequest(params.jokeId);
  }, [sendHttpRequest, params.jokeId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!loadedJoke.text) {
    return <h1 className="centered">Joke not found</h1>;
  }

  return (
    <>
      <HighlightedJoke topic={loadedJoke.topic} text={loadedJoke.text} />

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
