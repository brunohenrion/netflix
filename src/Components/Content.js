import Title from "./Title";
import Picture from "./Picture";
import data from "../data.json";

const Content = () => {
  return (
    <div>
      {data.map((element, index) => {
        return (
          <section key={index}>
            <Title name={element.category} />
            <div>
              {element.images.map((element, num) => {
                return <Picture key={num} pic={[element]} />;
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default Content;
