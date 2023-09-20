import React, { useState } from "react";
import { SizeMe } from "react-sizeme";

export default function useSizeMe(render, options) {
  const [currentSize, setSize] = useState({ width: null, height: null });
  return [
    <SizeMe {...options}>
      {({ size }) => {
        if (
          size.width !== currentSize.width ||
          size.height !== currentSize.height
        ) {
          setSize(size);
        }
        return render({ ...size });
      }}
    </SizeMe>,
    currentSize.width,
    currentSize.height,
  ];
}
