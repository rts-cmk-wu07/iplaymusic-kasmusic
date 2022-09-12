const Album = (props) => {
  return (
    <div className={props.css}>
      <img
        src={props.src}
        className="col-start-1 row-start-1 col-end-2 row-end-2"
      />
      {props.children}
    </div>
  );
};

export default Album;
