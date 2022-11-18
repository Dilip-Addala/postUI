const Image = (props) => {
  const { src, classStyle } = props;
  return <img src={src} alt="pexel.com" className={classStyle} />;
};

export default Image;
