import React from 'react';

function Food({fav}) {
	return <h1>i love {fav}</h1>;
}

function App() {
  return (
  <div>
	  <h1>Hello</h1>
	  <Food fav="kimchi" />
	  <Food fav="ramen" />
	  <Food fav="samgiop" />
	  <Food fav="chukumi" />
  </div>
  );
}

export default App;
