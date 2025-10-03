const Linha = ({ ext }) => {
  return (
    <span
      className={`w-[150px] h-[5px] cinzaClarobg rounded-lg lg:inline-block hidden ${ext} `}
    />
  );
};

export default Linha;
