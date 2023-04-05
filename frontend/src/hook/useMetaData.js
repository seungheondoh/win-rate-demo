import axios from 'axios';
import React, { useState, useEffect } from 'react';

// detect
const MetaContext = React.createContext()

const MetaProvider = (props) => {
	const [tutorialdata, setTutoiraldata] = useState([])
	
    function getRandomSampled(arr, size) {
		var shuffled = arr.slice(0), i = arr.length, temp, index;
		while (i--) {
			index = Math.floor((i + 1) * Math.random());
			temp = shuffled[index];
			shuffled[index] = shuffled[i];
			shuffled[i] = temp;
		}
		return shuffled.slice(0, size);
	}

	// server data
	const getTutorialdata = async() => {
		try {
			const item_list = await axios("http://143.248.249.113:7777/static/win_samples.json");
			const sampleData = getRandomSampled(item_list.data, 20);
			setTutoiraldata(sampleData)
		} catch (e) {
			if (e) {
				console.log(e.message, 'Sorry Error!')
			}
		}
	}
	useEffect(() => {
		getTutorialdata();
	}, [])

	return (
		<MetaContext.Provider value={{
			tutorialdata,
			setTutoiraldata
		}}>
			{props.children}
		</MetaContext.Provider>
	)
}

const MetaConsumer = MetaContext.Consumer
export { MetaProvider, MetaConsumer, MetaContext }