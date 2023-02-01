import "./App.css";

import img from "./img/logo.png";
import Header from "./Components/Header";
import Content from "./Components/Content";

const App = () => {
  return (
    <div>
      <Header pic={img} />
      <Content />
    </div>
  );
};

export default App;

// import "./App.css";
// import data from "./data.json";
// import img from "./img/logo.png";

// const App = () => {
//   return (
//     <>
//
//         <header>
//           <img src={img} alt="" />
//         </header>
//         <main>
//           <div>
//             {data.map((element,index) => {
//               return (
//                 <section key={index}>
//                   <h2>{element.category}</h2>
//                   <div>
//                     {element.images.map((element,num) => {
//                       return <img key={num} src={[element]} alt="" />;
//                     })}
//                   </div>
//                 </section>
//               );
//             })}
//           </div>
//         </main>
//
//     </>
//   );
// };

// export default App;
