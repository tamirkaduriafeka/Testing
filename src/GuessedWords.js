import React from 'react';
import propTypes from 'prop-types';

function GuessedWords(props) {
  return (
    <div>
      
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: propTypes.arrayOf(
    propTypes.shape({
      gueesedWord: propTypes.string.isRequired,
      letterMatchCount: propTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords
