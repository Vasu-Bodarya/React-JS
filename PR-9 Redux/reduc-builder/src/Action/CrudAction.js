export const Add_user = (data) => {
    console.log(data);
    return {
        type: "add",
        payload: data
    }
}
export const Delete_user = (id) => {
    return {
        type: "delete",
        payload: id
    }
}

export const EDIT_USER = (id) => {
  return {
    type: "edit-user",
    payload: id,
  };
};

export const UPDATE_USER = (data) => {
  return {
    type: "update-user",
    payload: data,
  };
};