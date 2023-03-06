import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAxios(userConfigObj) {
  const [questions, setQuestions] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1- Extract User Config That you got from inputs
    const { category, amount, type, difficulty } = userConfigObj;

    // 2-Build The Url Using The User Config Inputs
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    const fetchQuestions = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(url);
        setIsPending(false);
        setQuestions(response.data.results);
        setError(null);
      } catch (err) {
        console.log(err);
        setIsPending(false);
        setError('Coult Not Fetch Data');
      }
    };

    fetchQuestions();
  }, []);

  return { questions, isPending, error };
}
