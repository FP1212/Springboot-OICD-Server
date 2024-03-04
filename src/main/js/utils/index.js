//import { breakpoints } from "../constants/types/gridTypes";

/**
 * Calculate new layout arrange
 * @param {*} layout
 * @returns
 */
export function bottom(layout) {
  let max = 0,
    bottomY;
  for (let i = 0, len = layout.length; i < len; i++) {
    bottomY = layout[i].y + layout[i].h;
    if (bottomY > max) max = bottomY;
  }
  return max;
}

export function replacer(key, value) {
  if (value instanceof Map) {
    return {
      dataType: "Map",
      value: Array.from(value.entries()), // or with spread: value: [...value]
    };
  } else {
    return value;
  }
}

export function reviver(key, value) {
  if (typeof value === "object" && value !== null) {
    if (value.dataType === "Map") {
      return new Map(value.value);
    }
  }
  return value;
}

export function createInitialItemsLayout(cards) {
  return cards.map((card, index, list) => {
    const { w, h, minW, minH, x, y } = card.dimensions["lg"];
    const { isDraggable, isBounded, isResizable } = card.properties;
    return {
      i: index.toString(),
      x, //x: (index * 3) % 12,
      y,
      w,
      h,
      minW,
      minH,
      maxW: 12,
      maxH: 11,
      add: index === list.length - 1,
      isDraggable: isDraggable && true, //isDraggable && true,
      static: false,
      isBounded: isBounded && true,
      isResizable: isResizable && true,
    };
  });
}

export function buildLayout(cards) {
  // return breakpoints.reduce((prev, breakpoint) => {
  //   prev[breakpoint] = cards.map((card, index, list) => ({
  //     i: index.toString(),
  //     ...card.dimensions[breakpoint],
  //     maxW: 12,
  //     maxH: 11,
  //     add: index === list.length - 1,
  //     static: false,
  //     ...card.properties,
  //   }));
  //   return prev;
  // }, {});
}

//0: "Unknow", 1:"Operative", 2:"Deprecated", 3:"Error"
export const availableStatus = [
  { fill: "#343a40" },
  { fill: "#06d6a0" },
  { fill: "#ffc300" },
  { fill: "#f07167" },
];

export const cardinals = {
  labels: {
    N: "000",
    NE1: "022",
    NE: "045",
    NE2: "068",
    E: "090",
    SE1: "112",
    SE: "135",
    SE2: "158",
    S: "180",
    SW1: "202",
    SW: "225",
    SW2: "248",
    W: "270",
    NW1: "292",
    NW: "315",
    NW2: "338",
  },
  get: (x) => {
    const wd = x;
    let dir = cardinals.labels.N;

    if (wd > 348.75 && wd <= 11.25) {
      dir = "000";
    }
    if (wd > 11.25 && wd <= 33.75) {
      dir = "022";
    }
    if (wd > 33.75 && wd <= 56.25) {
      dir = "045";
    }
    if (wd > 56.25 && wd <= 78.75) {
      dir = "068";
    }
    if (wd > 78.75 && wd <= 101.25) {
      dir = "090";
    }
    if (wd > 101.25 && wd <= 123.75) {
      dir = "112";
    }
    if (wd > 123.75 && wd <= 146.25) {
      dir = "135";
    }
    if (wd > 146.25 && wd <= 168.75) {
      dir = "158";
    }
    if (wd > 168.75 && wd <= 191.25) {
      dir = "180";
    }
    if (wd > 191.25 && wd <= 213.75) {
      dir = "202";
    }
    if (wd > 213.75 && wd <= 236.25) {
      dir = "225";
    }
    if (wd > 236.25 && wd <= 258.75) {
      dir = "248";
    }
    if (wd > 258.75 && wd <= 281.25) {
      dir = "270";
    }
    if (wd > 281.25 && wd <= 303.75) {
      dir = "292";
    }
    if (wd > 303.75 && wd <= 326.25) {
      dir = "315";
    }
    if (wd > 326.25 && wd <= 348.75) {
      dir = "338";
    }
    // if (wd > 337.5 && wd <= 360) {
    //   dir = "N";
    // }

    // if (wd > 22.5 && wd <= 67.5) {
    //   dir = "NE";
    // }

    // if (wd > 67.5 && wd <= 112.5) {
    //   dir = "E";
    // }

    // if (wd > 112.5 && wd <= 157.5) {
    //   dir = "SE";
    // }

    // if (wd > 157.5 && wd <= 202.5) {
    //   dir = "S";
    // }

    // if (wd > 202.5 && wd <= 247.5) {
    //   dir = "SW";
    // }

    // if (wd > 247.5 && wd <= 292.5) {
    //   dir = "W";
    // }

    // if (wd > 292.5 && wd <= 337.5) {
    //   dir = "NW";
    // }

    return dir;
  },
};
