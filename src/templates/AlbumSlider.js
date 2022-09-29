import Album from "../components/Album";
import ViewAll from "../components/ViewAll";
import useFetch from "../customHooks/useFetch";

const AlbumSlider = () => {
  const { content } = useFetch({
    link: "albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc,2cKZfaz7GiGtZEeQNj1RyR,3VWrUk4vBznMYXGMPc7dRB,2cWBwpqMsDJC1ZUwz813lo,1zUY4PAFrNUOCeaEBrEHzh,4YPQsBdBBN3olFYXBl8rmq,6PFPjumGRpZnBzqnDci6qJ,4Gfnly5CzMJQqkUFfoHaP3,1zszC1x9HYKxUCKVa62p7C",
  });
  console.log(content);
  return (
    <>
      <section className="">
        <div className="flex place-content-between mx-7 mb-4">
          <h2 className="font-bold dark:text-white">Featured Albums</h2>
          <ViewAll />
        </div>
        <div className="overflow-x-auto flex gap-5 max-w-max ml-7 ">
          {content?.albums?.map((item) => {
            return (
              <Album
                src={item?.images[0].url}
                alt="test"
                css="w-[130px] h-[130px] shrink-0 "
              ></Album>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AlbumSlider;
