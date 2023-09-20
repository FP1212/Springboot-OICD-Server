import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status",
  initialState: {},
  reducers: {
    update: (state, action) => {
      const tabs = state.tabs.map((tab, index) => {
        return tab.id != state.tab
          ? tab
          : {
              ...tab,
              tables: [
                ...tab.tables.map((table) => {
                  return table.title != action.payload.table
                    ? table
                    : {
                        ...table,
                        content: {
                          ...table.content,
                          sources: table.content.sources.map((source) => {
                            return source.source != action.payload.source
                              ? source
                              : {
                                  ...source,
                                  data: source.data.map((row, i) => {
                                    //Replace current data by new data
                                    const coincidense =
                                      action.payload.data.find(
                                        (data) => data.name == row.name
                                      );

                                    return coincidense ? coincidense : row;
                                  }),
                                };
                          }),
                        },
                      };
                }),
              ],
            };
      });
      state.tabs = tabs;
    },
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const selectCurrentTab = (state) => state.status.tab;
export const selectTabs = (state) => state.status.tabs;
export const selectExchange = (state) => state.status.exchange;

export default statusSlice.reducer;
export const { update, setTab } = statusSlice.actions;
