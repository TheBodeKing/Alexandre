const SeguradoraCard = (img, alt) => {
  return (
    <img
      src={img}
      alt={alt}
      className="justify-center h-[70px] w-auto my-[15px]"
      draggable={false}
    />
  );
};

export default SeguradoraCard;
