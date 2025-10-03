import Linha from "./Linha";

const Instagram = () => {
  return (
    <section className="lg:py-[50px]">
      <div className="max-w-[1140px] w-full px-[15px] mx-auto ">
        <h2
          className="laranja lg:text-[28px] text-[22px] mb-5 relative uppercase
         flex flex-col lg:flex-row lg:items-center lg:gap-4 gap-0 items-start"
        >
          siga-nos em
          <strong className="font-bold"> @faestruturasvisuais </strong>
          <Linha />
        </h2>
      </div>
      <div>
        <iframe
          src="https://snapwidget.com/embed/938180"
          className="snapwidget-widget"
          allowTransparency="true"
          style={{
            border: "none",
            overflow: "hidden",
            width: "100%",
            height: "169px",
          }}
          id="iFrameResizer0"
        />
      </div>
    </section>
  );
};

export default Instagram;
