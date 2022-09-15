import Album from "../components/Album";
import ViewAll from "../components/ViewAll";

const AlbumSlider = () => {
  return (
    <>
      <section className="">
        <div className="flex place-content-between mx-7 mb-4">
          <h2 className="font-bold">Featured Albums</h2>
          <ViewAll />
        </div>
        <div className="overflow-x-auto flex gap-5 max-w-max ml-7 ">
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0 "
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
          <Album
            src="https://picsum.photos/130"
            alt="test"
            css="w-[130px] h-[130px] shrink-0"
          ></Album>
        </div>
      </section>
    </>
  );
};

export default AlbumSlider;
