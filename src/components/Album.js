const Album = (props) => {
  return (
    <div>
      <img src={props.src} />
      {props.children}
    </div>
  );
};

export default Album;
