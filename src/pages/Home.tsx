import { Card } from "../components/Card";
import { groupData } from "../utils/groupData";

export const Home = () => {
  return (
    <>
      <section id="top">
        <h3>班紹介</h3>
        <div className="tile">
          {groupData.map((data) => (
            <Card
              key={data.name}
              name={data.name}
              desc={data.desc}
              path={data.path}
            />
          ))}
        </div>
      </section>
    </>
  );
};
