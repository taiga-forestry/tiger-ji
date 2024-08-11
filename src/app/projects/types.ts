import mowse from "../../../public/mowse.png";
import mowsehover from "../../../public/mowse-hover.png";
import replay from "../../../public/replay.png";
import replayHover from "../../../public/replay-hover.png";
import decompiler from "../../../public/decompiler.png";
import decompilerhover from "../../../public/decompiler-hover.png";
import cr from "../../../public/cr.png";
import crhover from "../../../public/cr-hover.png";

export const linksMap = {
  github: {
    icon: "fa-brands fa-github",
  },
  demo: {
    icon: "fas fa-arrow-up-right-from-square",
  },
};

export const projectsSrcMap = {
  mowse: {
    normal: mowse,
    hovered: mowsehover,
  },
  decompiler: {
    normal: decompiler,
    hovered: decompilerhover,
  },
  cr: {
    normal: cr,
    hovered: crhover,
  },
  // grapes: {
  //   normal: grapes,
  //   hovered: grapeshover,
  // },
  replay: {
    normal: replay,
    hovered: replayHover,
  },
};

export type ValidLink = keyof typeof linksMap;