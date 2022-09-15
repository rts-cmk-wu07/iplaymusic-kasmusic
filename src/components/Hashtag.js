const Hashtag = ({ children, text }) => {
  return (
    <>
      <div className="max-w-max p-4 text-white font-bold rounded-full bg-primary mt-4">
        <p>#{text}</p>
      </div>
    </>
  );
};

export default Hashtag;
