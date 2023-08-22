import axios from 'axios';

const searchImage = async (term) => {
	const response = await axios.get('https://api.unsplash.com/search/photos',{
		headers: {Authorization: 'Client-ID lBfzbLsz2Za2xzdWV4BnEdaRB7-g4QlAng7UvoKO0mQ'},
		params:{
			query: term,	
		},
	});
	console.log(response);
	return response.data.results;
}
export default searchImage;