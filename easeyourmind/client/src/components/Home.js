import React, { useState, useEffect } from 'react';
import { GiOvermind } from "react-icons/gi";

import Test from '../audioclips/medidation.mp3'
import { Howl } from 'howler';

const Home = () => {
  const [seconds, setSeconds] = useState(60);
  const [isBreathing, setIsBreathing] = useState(false);
  const id = React.useRef(null);

  const soundPlay = src => {
    const sound = new Howl({ src })
    sound.play()
  }

  function toggle() {
    setIsBreathing(!isBreathing);
  }

  function reset() {
    setSeconds(60);
    setIsBreathing(false);
  }

  const clear = () => {
    window.clearInterval(id.current)
  }

  useEffect(() => {
    if (isBreathing) {
      id.current = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (!isBreathing && seconds !== 0) {
      clearInterval(id.current);
    }
    return () => clear();
  }, [isBreathing, seconds]);

  useEffect(() => {
    if (seconds <= 0) {
      clear()
    }

  }, [seconds])

  return (
    <section className="container breathe" >
      <GiOvermind className="overmind-logo" />
      <p className="item overmind">The purpose of meditation isn’t merely to reduce stress or to make you feel better in the moment—it’s to make fundamental discoveries in the laboratory of your own mind.</p>
      <article className="article">

        <p className="timer">
          {seconds ? `${seconds}s` : 'Zen Done!'}

          <button className={`btn-${isBreathing ? 'active' : 'inactive'}`} onClick={() => {
            soundPlay(Test);
            toggle()
          }}>
            {isBreathing ? 'Pause' : 'Start'}
          </button>
          {seconds <= 0 ?
            <button className="btn-done" onClick={reset}>
              Again
        </button> : ''
          }
        </p>
      </article>


    </section>
  );
};

export default Home;
