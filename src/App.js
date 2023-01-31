import "./App.css";

import img from "./img/logo.png";
import Header from "./Components/Header";
import Content from "./Components/Content";

const App = () => {
  return (
    <>
      <body>
        <Header pic={img} />
        <main>
          <Content />
        </main>
      </body>
    </>
  );
};

export default App;

// import "./App.css";
// import data from "./data.json";
// import img from "./img/logo.png";

// const App = () => {
//   return (
//     <>
//       <body>
//         <header>
//           <img src={img} alt="" />
//         </header>
//         <main>
//           <div>
//             {data.map((element) => {
//               return (
//                 <section>
//                   <h2>{element.category}</h2>
//                   <div>
//                     {element.images.map((element) => {
//                       return <img src={[element]} alt="" />;
//                     })}
//                   </div>
//                 </section>
//               );
//             })}
//           </div>
//         </main>
//       </body>
//     </>
//   );
// };

// export default App;
