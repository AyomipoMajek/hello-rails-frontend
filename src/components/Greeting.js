import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { greetapi } from '../redux/Greet/GreetSlice';

const Greetings = () => {
  const greet = useSelector((state) => state.greet.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(greetapi());
  }, [dispatch]);
  return (
    <div>
      <h1>Random Greetings</h1>
      <p>{greet.title}</p>
    </div>
  );
};

export default Greetings;
