import { useEffect, useRef, useState } from "react";
import { bannerListImg } from "../constants";
import { gsap } from "gsap";

const Banner = () => {
  const banRef = useRef([]);
  const [ativo, setAtivo] = useState(0);

  const inOut = (antigo, novo) => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.inOut" },
    });
    tl.to(antigo, { x: "-100%" });
    tl.fromTo(novo, { x: "100%" }, { x: 0 });
  };

  useEffect(() => {
    if (!banRef) return;

    inOut(banRef[ativo - 1], banRef[ativo]);
  }, [ativo]);

  return (
    <section>
      <div>
        {bannerListImg.map(({ img, id }) => (
          <div key={id} ref={(el) => (banRef.current[id] = el)}>
            {<img src={img} alt="banner" />}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          setAtivo(ativo + 1);
        }}
      >
        AA
      </button>
    </section>
  );
};

export default Banner;
