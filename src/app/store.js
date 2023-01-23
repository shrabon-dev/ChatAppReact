import { configureStore } from "@reduxjs/toolkit";
import activeChatSlice from "../slice/activeChatSlice";
import  userLoginInfoSlice  from "../slice/userSlice";
import darkmodeSlice from "../slice/darkmodeSlice";
export const store = configureStore({
  reducer: {
   activechat: activeChatSlice,
   userLoginInfo: userLoginInfoSlice,
   darkmode: darkmodeSlice,
  },
})