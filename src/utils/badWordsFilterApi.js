export const badWordsFilterApi = async (raw) => {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "XOPpLm4QX2q2rEAuABqOMn257rde0IQB");
  
  const requestOptions = {
	method  : "POST",
	redirect: "follow",
	headers : myHeaders,
	body    : raw
  };
  
  try {
	const req = await fetch(
	  "https://api.apilayer.com/bad_words?censor_character=%24", requestOptions);
	const text = await req.text();
	const data = JSON.parse(text);
	
	return {
	  bad_words_total: data.bad_words_total,
	  content        : data.censored_content,
	};
  } catch (err) {
	console.log(err);
  }
};