import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import StarRating from "./StarRating";

/* function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        color="blue"
        maxRating={10}
        size={48}
        onSetRating={setMovieRating}
      ></StarRating>
      <p>This movie was rated {movieRating} stars </p>
    </div>
  );
} */

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={5} color={"red"} size={72} defaultRating={3} />
    <StarRating
      maxRating={5}
      color={"green"}
      size={36}
      messages={["Terrible", "Not bad", "okay", "good", "excellent"]}
    />
    <Test /> */}
  </React.StrictMode>
)
