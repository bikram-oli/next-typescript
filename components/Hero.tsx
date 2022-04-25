import { LoremIpsum } from "react-lorem-ipsum";
import ItemCard from "./ItemCard";
import SearchBar from "./SearchBar";
import { NextPage } from "next";

interface props {
  datas: [
    {
      title: string;
      imageUrl: string;
      description: string;
    }
  ];
}

const Hero: NextPage<props> = ({ datas }) => {
  return (
    <section>
    <SearchBar buttonname="Search"/>
      <div className="d-flex flex-wrap justify-content-around">
        {datas.map((data, index) => (
          <ItemCard
            key={index}
            title={data.title}
            image={data.imageUrl}
            description={data.description}
          />
        ))}
      </div>
    </section>
  );
};
export default Hero;
