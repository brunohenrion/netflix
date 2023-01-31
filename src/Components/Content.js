import Title from "./Title";
import Picture from "./Picture";
import data from "../data.json";

const Content = () => {
  return (
    <div>
      {data.map((element) => {
        return (
          <section>
            {/* <h2>{element.category}</h2> */}
            <Title name={element.category} />
            <div>
              {element.images.map((element) => {
                // return <img src={[element]} alt="" />;
                return <Picture pic={[element]} />;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default Content;
