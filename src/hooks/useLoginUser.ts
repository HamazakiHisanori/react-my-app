import { useContext } from "react";

import { LoginUserContext, LoginUserContextType } from "../providers/LoginUser";

export const useLoginUser = (): LoginUserContextType => useContext(LoginUserContext);
