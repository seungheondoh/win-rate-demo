import React, { useState, useEffect } from 'react';

// detect
const MetaContext = React.createContext()

const MetaProvider = (props) => {
	const [tutorialdata, setTutoiraldata] = useState([])

	async function getTutorialdata(){
		let item_list = await require("../assets/data/item_list.json");
		setTutoiraldata(item_list['mood'])
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