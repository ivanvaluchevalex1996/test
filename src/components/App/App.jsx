import Header from "../Header/Header";
import Main from "../Main/Main";
import axios from "axios";
import { useState, useEffect } from "react";
import { ALL_COUNTRIES } from "../../config";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then((res) => setCountries(res.data));
  }, []);
  console.log(countries);
  return (
    <>
      <Header />
      <Main countries={countries} />
    </>
  );
}

export default App;
// import Header from "../Header/Header";
// import Main from "../Main/Main";
// import Controls from "../Controls/Controls";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { ALL_COUNTRIES } from "../../config";
// import List from "../List/List";
// import Card from "../Card/Card";

// function App() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     axios.get(ALL_COUNTRIES).then((res) => setCountries(res.data));
//   }, []);
//   console.log(countries);
//   return (
//     <>
//       <Header />
//       <Main>
//         <Controls />
//         <List>
//           {countries.map((c) => (
//             <Card
//               key={c.name}
//               img={c.flags.png}
//               population={c.population}
//               region={c.region}
//               capital={c.capital}
//             />
//           ))}
//         </List>
//       </Main>
//     </>
//   );
// }

// export default App;
