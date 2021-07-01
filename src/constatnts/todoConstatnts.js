export const TODO_LIST = 'TODO_LIST';

export const triggerReducer = (type, extra = {}) => ({
  type,
  ...extra,
});
