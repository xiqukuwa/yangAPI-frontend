import {InitialState} from "@/typings";

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: InitialState | undefined) {
  const { longinUser } = initialState ?? {};
  return {
    canUser: longinUser,
    canAdmin: longinUser?.userRole === 'admin',
  };
}
