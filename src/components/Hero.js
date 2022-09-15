const Hero = ({ children, image, imageAlt }) => {
  return (
    <>
      <div className="grid">
        <img
          src={image}
          alt={imageAlt}
          className="col-start-1 col-end-2 row-start-1 row-end-2"
        />
        {children}
      </div>
    </>
  );
};

export default Hero;
