import React from "react";

export default function Quote(props) {
  const { title, quote, author, background } = props.quoteData;

  return (
    <div className="quote">
      <h1>{title}!</h1>
      <h2>{quote}</h2>
      <h3>-{author}</h3>
      <img src={background} />
    </div>
  );
}
