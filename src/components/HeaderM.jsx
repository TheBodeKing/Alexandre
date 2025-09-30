const HeaderM = () => {
  return (
    <div>
      <div></div>
      <button className="absolute z-[200] p-[15px] right-0 top-10 ">
        <span className="w-10 h-6 inline-block relative ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default HeaderM;
