import React, { useState } from 'react';

const MainView = () => {
    const [question, setQuestion] = useState('What did you do today?');
    const [quote, setQuote] = useState('“Knowing yourself is the beginning of all wisdom.” - Aristotle');
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () =>{
        if (clickCount === 0){
            setQuestion('What will you do tomorrow?');
            setQuote(' "The way I see it, if you want the rainbow, you gotta put up with the rain." - Dolly Parton');
        } else {
            setQuestion('What will you change about yourself?');
            setQuote(' "Act as if what you do makes a difference. IT DOES." - William James');  
        }
        setClickCount ( clickCount +1);
    }

    return (
        <div className="container">
         <h1 className="fade-in-header"> {clickCount === 0 ? 'Your question for today is...' : clickCount === 1 ? 'Your second question of the day is...' : 'Your last question for today is...'}</h1> 
            <div className="card zoom fade-in-question">
                <p>{question}</p> 
            </div>
            <div className="quote-card zoom fade-in-question">
                <p className="quote"> {quote} </p>
            </div>
            <button className="button fade-in-question " onClick={handleClick} disabled={clickCount === 2 ? true : false}>
                <p> Next question</p>
            </button>
            <input type="image" alt="twitter-logo" className="tweet img-zoom fade-in-question" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg==" />
        </div>
    )
}

export default MainView;