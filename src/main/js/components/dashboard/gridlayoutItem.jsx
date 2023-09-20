import React from "react";

const GridLayoutItem = React.forwardRef(
  (
    {
      style,
      className,
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={className}
        style={{ width: "100%", height: "100%", ...style }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        {...props}>
        {children}
      </div>
    );
  }
);

export default GridLayoutItem;
