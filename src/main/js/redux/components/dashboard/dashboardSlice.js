import { createSlice, current } from "@reduxjs/toolkit";
import { bottom, replacer, reviver } from "Utils";

const initialState =
  // typeof electronStore.initial()["dashboardGridlayout"] !== "undefined"
  //   ? JSON.parse(electronStore.initial()["dashboardGridlayout"])
  //   :
  {};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      const tabs = state.tabs.map((tab) =>
        tab.id != action.payload.tab
          ? tab
          : {
              ...tab,
              gridlayout: {
                ...tab.gridlayout,
                layouts: {
                  ...tab.gridlayout.layouts,
                  items: [
                    ...tab.gridlayout.layouts.items,
                    {
                      i: "n" + grid.newCounter,
                      x:
                        (tab.gridlayout.layouts.items * 3) %
                        (tab.gridlayout.layouts.cols || 12),
                      y: bottom(tab.gridlayout.layouts[tab.gridlayout.layout]),
                      w: 3,
                      h: 3,
                      minW: 3,
                      maxW: 12,
                      minH: 3,
                      maxH: 12,
                    },
                  ],
                  newCounter: tab.gridlayout.newCounter + 1,
                  cards: [
                    ...tab.gridlayout.cards,
                    {
                      name: action.payload.name,
                      svgicon: action.payload.type,
                      id: action.payload.id,
                      data: "0",
                      date: new Date(),
                    },
                  ],
                },
              },
            },
      );
      state.tabs = tabs;
    },
    remove: (state, action) => {
      const tabs = state.tabs.map((tab) =>
        tab.id != action.payload.tab
          ? tab
          : {
              ...tab,
              gridlayout: {
                ...tab.gridlayout,
                layouts: {
                  ...tab.gridlayout.layouts,
                  items: tab.gridlayout.layouts.items.reduce(
                    (prev, item, index) =>
                      action.payload.index == index ? prev : { ...prev, item },
                    {},
                  ),
                  cards: tab.gridlayout.layouts.cards.reduce(
                    (prev, card, index) =>
                      action.payload.index == index ? prev : { ...prev, card },
                    {},
                  ),
                },
              },
            },
      );
      state.tabs = tabs;
    },
    resize: (state, action) => {},
    setTab: (state, action) => {
      state.tab = action.payload.tab;
    },
    layout: (state, action) => {
      if (action.payload.newLayout) {
        const tabs = state.tabs.map((tab) => {
          if (tab.id == action.payload.tab) {
            tab.gridlayout.layouts = {
              ...tab.gridlayout.layouts,
              ...action.payload.newLayout,
            };
          }
          return tab;
        });

        state.tabs = tabs;

        //Store layout every changes
        // electronStore.send(
        //   writeConfigRequest,
        //   "dashboardGridlayout",
        //   JSON.stringify(state)
        // );
      }
    },
    breakpoint: (state, action) => {
      const tabs = state.tabs.map((tab) => {
        if (tab.id == action.payload.tab) {
          tab.gridlayout.cols = action.payload.cols;
          tab.gridlayout.breakpoint = action.payload.breakpoint;
        }
        return tab;
      });
      state.tabs = tabs;
    },
    update: (state, action) => {
      const tabs = state.tabs.map((tab) => {
        if (tab.id == state.tab) {
          tab.gridlayout.cards = tab.gridlayout.cards.reduce((prev, card) => {
            if (card.id in action.payload.data) {
              card.data = action.payload.data[card.id];
            }
            prev.push(card);
            return prev;
          }, []);
        }
        return tab;
      });
      state.tabs = tabs;
      console.log(current(state));
    },
  },
});

export const selectDashboardLayouts = (tab) => (state) =>
  state.dashboard.tabs[tab].gridlayout.layouts;

export const selectCurrentBreakpoint = (tab) => (state) =>
  state.dashboard.tabs[tab].gridlayout.breakpoint;

export const selectDashboardTab = (state) => state.dashboard.tab;

export const selectRoutingKey = (tab) => (state) =>
  state.dashboard.tabs[tab].routingKey;

export const selectDashboardCards = (tab) => (state) =>
  state.dashboard.tabs[tab].gridlayout.cards;

export const getItemByIndex = (tab, index) => (store) =>
  store.dashboard.tabs[tab].gridlayout.items[index];

export const getCardByIndex = (tab, index) => (store) =>
  store.dashboard.tabs[tab].gridlayout.cards[index];

export const getCardDataByIndex = (index) => (store) =>
  store.dashboard.tabs[store.dashboard.tab].gridlayout.cards[index].data;

export const getCards = (store) => store.dashboard.tabs;

export default dashboardSlice.reducer;
export const { add, update, remove, layout, breakpoint, setTab } =
  dashboardSlice.actions;
