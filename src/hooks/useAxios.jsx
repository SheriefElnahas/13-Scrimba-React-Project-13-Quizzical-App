import { useState, useEffect } from 'react';
import axios from 'axios';

import useShuffle from './useShuffle';

export default function useAxios(userConfigObj) {
  const [questions, setQuestions] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [modifiedQuestionsArr, setModifiedQuestionsArr] = useState([]);

  useEffect(() => {
    // 1- Extract User Config That you got from inputs
    const { category, amount, type, difficulty } = userConfigObj;

    // 2-Build The Url Using The User Config Inputs
    const constructedUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;
    // const url = `https://opentdb.com/api.php?amount=3&category=23&difficulty=easy&type=multiple`;

    const fetchQuestions = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(constructedUrl);
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

  useEffect(() => {
    // Only when questions is defined, meaning the request is completed
    if (questions.length !== 0) {
      const result = questions.map((question) => {
        // Build the choices array out from incorrect answer arr and contach that to correct answer
        const mergedChoicesArr = [...question.incorrect_answers, question.correct_answer];

        // Shuffle mergedChoicesArr to change the position of the correct answer from 3th index to a random index
        const shuffledChoicesArr = useShuffle(mergedChoicesArr);

        // Return an modifed object that contains the previous object + a new array property that contains all the choices
        return { ...question, shuffledChoicesArr };
      });

      setModifiedQuestionsArr(result);
    }
  }, [questions]);

  return { modifiedQuestionsArr, isPending, error };
}
