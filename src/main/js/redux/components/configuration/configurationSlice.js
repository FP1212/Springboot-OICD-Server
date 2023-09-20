import { createSlice } from "@reduxjs/toolkit";
import { defaultInitialState } from "Constants/layouts/config";

const configurationSlice = createSlice({
  name: "configuration",
  initialState: defaultInitialState,
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

      return { ...state, tabs };
    },
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    changePriority: (state, action) => {
      debugger;
    },
  },
});

export const selectCurrentTab = (state) => state.configuration.tab;
export const selectTabs = (state) => state.configuration.tabs;
export const selectExchange = (state) => state.configuration.exchange;

export default configurationSlice.reducer;
export const { update, setTab, changePriority } = configurationSlice.actions;
