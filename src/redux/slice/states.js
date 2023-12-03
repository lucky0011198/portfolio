import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";

console.log("effecfing")


  const dataSlice = createSlice({
    name: "states",
    initialState: {
      user:{},
      selecteduser:{},
      onlineUser:[],
      defaultGroup:[
        {
          name:"Leaf",
          subname:"Land of Fire",
        },
        {
          name:"Sand",
          subname:"Land of Wind",
        }
      ],
      groups:{
        
      },
      chatData:{},
      joinedRooms:"",
      initialRout:"/init"
    },
    reducers: {
        setValue: (state, action) => {
          state[action.payload[1]] = action.payload[0];
        },
        setValueLevel2: (state, action)=>{
          console.log(action);
            state['chatData'] = {
              ...state['chatData'],
              [action.payload[0]]:[...(state['chatData'][action.payload[0]] || []), action.payload[1]],
            }; 
        }
      },
  });

export const { setValue,setValueLevel2 } = dataSlice.actions;
export default dataSlice.reducer;

