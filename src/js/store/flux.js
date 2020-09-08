const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			puzzles: [
				{
					img: "https://via.placeholder.com/300",
					pieces: 750,
					title: "Puzzle 1",
					ages: "12+",
					theme: "animals",
					text:
						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
				},
				{
					img: "https://via.placeholder.com/300",
					title: "Puzzle 2",
					pieces: 450,
					ages: "6+",
					theme: "floral",
					text:
						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
				},
				{
					img: "https://via.placeholder.com/300",
					title: "Puzzle 3",
					pieces: 650,
					theme: "I Spy",
					ages: "3+",
					text:
						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
				},
				{
					img: "https://via.placeholder.com/300",
					title: "Puzzle 4",
					pieces: 1000,
					theme: "abstract",
					ages: "4+",
					text:
						"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
				}
			],
			shipping: [{ text: "Puzzle Swap" }]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
