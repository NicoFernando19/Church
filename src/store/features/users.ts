import { ActionType } from '../actionTypes/actionTypes';

export const getUsers = (users: any) => {
  return {
    type: ActionType.GetUsers,
    payload: users,
  };
};
