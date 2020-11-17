import React, { useState, useEffect } from 'react'


const Quote = () => {

  const [quote, setQuote] = useState('');


  const fetchQuote = async () => {
    const res = await fetch(
      `api/quote`
    );
    const data = await res.json();
    setQuote(data);
  }

  useEffect(() => {
    fetchQuote();
  }, []);
  if (!quote) return <div className="container">WAIT FOR IT</div>
  const randomQuote = Math.floor(Math.random() * quote.length);
  return (
    <section className="container">
      <p className='item quote'> {quote[randomQuote].text} - {quote[randomQuote].author} </p>

      <button className="btn" onClick={fetchQuote}>New One</button>
    </section>
  )
}


export default Quote
