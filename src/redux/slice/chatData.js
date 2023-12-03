import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";

  const dataSlice = createSlice({
    name: "chat",
    initialState: {
      chatData:{},
    },
    reducers: {
        setValueLevel2: (state, action)=>{
            state['chatData'] = {
              ...state['chatData'],
              [action.payload[0]]:[...(state['chatData'][action.payload[0]] || []), action.payload[1]],
            }; 
        }
      },
  });

export const {setValueLevel2 } = dataSlice.actions;
export default dataSlice.reducer;

