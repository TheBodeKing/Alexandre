import React, { useEffect, useRef } from "react";
import { museImg } from "../utils";

const DragOwl = () => {
  const conRef = useRef(null);
  const boxRef = useRef(null);
  const isClicked = useRef(false);
  const coords = useRef({
    //starting position of the cube
    startX: 0,
    //last position of the cube on mouse up
    lastX: 0,
  });

  useEffect(() => {
    //cheking if the reference exists
    if (!boxRef.current || !conRef.current) return;

    const box = boxRef.current;
    const con = conRef.current;
    const cor = coords.current;

    const centerBox = () => {
      const centerX = (con.clientWidth - box.clientWidth) / 2;
      box.style.left = `${centerX}px`;
    };
    centerBox();

    //when user clicks
    const onMouseDown = (e) => {
      //prevent the right mouse button from clicking
      if (e.button !== 0) return;
      //fires up the boolean variable that tells if it's clicked
      isClicked.current = true;
      //updates the current position of the cube based on the position of the mouse
      cor.startX = e.clientX;

      // also save the current box position!
      cor.lastX = box.offsetLeft;
    };

    //when the user stops clicking
    const onMouseUp = (e) => {
      //tells the boolean variable that the click ended
      isClicked.current = false;
      //updates the last saved position of the cube based on where the mouse was when released
      cor.lastX = box.offsetLeft;
    };

    //when the mouse starts moving
    const onMouseMove = (e) => {
      //only matters if the user clicked, so mouse move only counts if also mouse down
      if (!isClicked.current) return;

      // calculate new position: current mouse delta + last saved box position
      const nextX = e.clientX - cor.startX + cor.lastX;

      // limit movement between 0 and (container width - box width)
      const minX = 0;
      const maxX = Math.max(con.clientWidth - box.clientWidth, 0);

      // clamp value
      const clampedX = Math.min(Math.max(nextX, minX), maxX);

      // update the box position on screen
      box.style.left = `${clampedX}px`;
    };

    //adding the events to it's respectivbes boxes
    box.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    con.addEventListener("mousemove", onMouseMove);

    //setting the cleanup of the events of said boxes
    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      con.removeEventListener("mousemove", onMouseMove);
    };
    //triggering the cleanup
    return cleanup;
  }, []);

  return (
    <div className="items-center">
      <div
        className="w-[500px] h-[500px] relative border border-black overflow-hidden"
        ref={conRef}
      >
        <div className="absolute cursor-pointer" ref={boxRef} draggable={false}>
          <div className="w-[1943px] relative touch-manipulation flex flex-row">
            <div className="w-[277.5px] touch-pan-y ">
              <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                  <div className="h-[156px] ">
                    <img
                      src={museImg}
                      alt="muse"
                      className="w-full rounded-sm"
                      draggable={false}
                    />
                  </div>
                  <div className="p-[20px] flex flex-col ">
                    <h3 className="text-lg mb-[10px] font-medium ">
                      DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[277.5px] touch-pan-y ">
              <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                  <div className="h-[156px] ">
                    <img
                      src={museImg}
                      alt="muse"
                      className="w-full rounded-sm"
                      draggable={false}
                    />
                  </div>
                  <div className="p-[20px] flex flex-col ">
                    <h3 className="text-lg mb-[10px] font-medium ">
                      DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[277.5px] touch-pan-y ">
              <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                  <div className="h-[156px] ">
                    <img
                      src={museImg}
                      alt="muse"
                      className="w-full rounded-sm"
                      draggable={false}
                    />
                  </div>
                  <div className="p-[20px] flex flex-col ">
                    <h3 className="text-lg mb-[10px] font-medium ">
                      DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[277.5px] touch-pan-y ">
              <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                  <div className="h-[156px] ">
                    <img
                      src={museImg}
                      alt="muse"
                      className="w-full rounded-sm"
                      draggable={false}
                    />
                  </div>
                  <div className="p-[20px] flex flex-col ">
                    <h3 className="text-lg mb-[10px] font-medium ">
                      DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[277.5px] touch-pan-y ">
              <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                  <div className="h-[156px] ">
                    <img
                      src={museImg}
                      alt="muse"
                      className="w-full rounded-sm"
                      draggable={false}
                    />
                  </div>
                  <div className="p-[20px] flex flex-col ">
                    <h3 className="text-lg mb-[10px] font-medium ">
                      DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[277.5px] touch-pan-y ">
              <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                  <div className="h-[156px] ">
                    <img
                      src={museImg}
                      alt="muse"
                      className="w-full rounded-sm"
                      draggable={false}
                    />
                  </div>
                  <div className="p-[20px] flex flex-col ">
                    <h3 className="text-lg mb-[10px] font-medium ">
                      DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[277.5px] touch-pan-y ">
              <div className="flex flex-col relative gap-[40px] py-[20px] px-[10px] ">
                <div className="shadow-[0px_0px_10px_1px_#00000054] rounded-sm h-[320px] bg-white ">
                  <div className="h-[156px] ">
                    <img
                      src={museImg}
                      alt="muse"
                      className="w-full rounded-sm"
                      draggable={false}
                    />
                  </div>
                  <div className="p-[20px] flex flex-col ">
                    <h3 className="text-lg mb-[10px] font-medium ">
                      DESENVOLVIMENTO E IDENTIDADE VISUAL{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragOwl;
