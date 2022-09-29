import Album from "../components/Album";
import ViewAll from "../components/ViewAll";
import useFetch from "../customHooks/useFetch";

const AlbumSlider = () => {
  const { content } = useFetch({ link: "albums" });
  console.log(content);
  return (
    <>
      <section className="">
        <div className="flex place-content-between mx-7 mb-4">
          <h2 className="font-bold dark:text-white">Featured Albums</h2>
          <ViewAll />
        </div>
        <div className="overflow-x-auto flex gap-5 max-w-max ml-7 ">
          {content.map((item) => {
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
