import { createSlice } from "@reduxjs/toolkit";
import CircularBuffer from "mnemonist/circular-buffer";
const severityList = ["info", "success", "warning", "error"];
const MAX_BUFFER_SIZE = 100;
const MAX_ID = 100;
// funcion para convertir de Epoch time a time Human
const epochToHuman = (epoch) => {
  const cadena = Number(epoch);

  const nueva = new Date(cadena).getTime() * 1000;
  const fecha = new Date(nueva).toLocaleString(
    {}, //"es-CO"
    { 
      //timeZone: "UTC",
      hour12: false });
  return fecha;
};
const alarmSlice = createSlice({
  name: "alarm",
  initialState: { data: [] }, //4 or undefined = no filter
  reducers: {
    update: (state, action) => {
      const id =
        state.data.length > 0
          ? state.data[state.data.length - 1].id
          : undefined;

      const circularDataArray = action.payload.data.reduce(
        (buffer, item, i) => {
          item.id = id ? (id % MAX_ID) + i + 1 : (i % MAX_ID) + 1;
          item.date = epochToHuman(action.payload.date);
          item.status = severityList[item.status];
          buffer.push(item);
          return buffer;
        },
        CircularBuffer.from(state.data, Array, MAX_BUFFER_SIZE)
      );
      state.data = circularDataArray.toArray();
    },
    drop: (state, action) => {
        
      // state.data.filter = state.data.filter(
        
      //   (item, i) => !action.payload.selected.has(item.id)
      // );
      state.data = [
        ...state.data.filter(
          (item, i) => !action.payload.selected.has(item.id)
        ),
      ];
    },
  },
});

export const selectAlarmData = (state) => state.alarm.data;
export const selectAlarmDataRemaining = (state) => state.alarm.data.length;
export const selectAlarmLastData = (state) => {
  const lastData = state.alarm.data[state.alarm.data.length - 1];
  return lastData ? lastData : "";
};

export default alarmSlice.reducer;
export const { update, drop } = alarmSlice.actions;
