import React, {useState} from "react";
import "./App.css";

/*
const getQuotes = fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
same as async below 
  */

const getQ = async() => {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse
        }
    } catch (error) {console.log(error)}
}

function RandomQuote(){
    const [quote, setQuote] = useState({
        text: "this is the quote",
        author: "unknown"
    })

    const createQuote = () => {
        getQ().then(quote => {
        const random = Math.floor(Math.random() * quote.length)
        setQuote({
            text: quote[random].text,
            author: quote[random].author})
    })
    }

    return (
 
 <div className="quote-container" onClick={createQuote}>
        <q className="text">{quote.text}</q>
        <p className="author">{quote.author}</p>
        <p className="description">* Click me to show next quote</p>
    </div>
)
}

export default RandomQuote;