const actionUpdateStatus = "setStatusAndMessage";

const statusMiddleware = (store) => (next) => (action) => {
  if (!action.type.includes(actionUpdateStatus) && action.payload?.status) {
    const sliceName = action.type.split("/").slice(0, -1).join("/");

    store.dispatch({
      type: sliceName + "/" + actionUpdateStatus,
      payload: {
        status: action.payload.status,
        message: action.payload.message || "",
      },
    });
  }
  return next(action);
};

export default statusMiddleware;
