function constructNote(msg, letters) {
  let confirmedWords = [];

  // turn into an array
  let letterArr = [...letters];

  if (letters.length < msg.length) return false;

  for (let i = 0; i < msg.length; i++) {
    for (let j = 0; j < letterArr.length; j++) {
      // If the msg letter exists in letterArr
      if (msg[i] == letterArr[j]) {
        // start at letter index, remove 1 character.
        letterArr.splice(j, 1);
        confirmedWords.push(msg[i]);
      };
    };
  };

  console.log(confirmedWords);

  if (confirmedWords.length == msg.length) {
    return true;
  } else {
    return false;
  };
};