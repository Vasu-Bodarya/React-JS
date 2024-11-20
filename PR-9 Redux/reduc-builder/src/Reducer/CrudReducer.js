let initialstate = {
    users: JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [],
    single: []
}
const CrudReducer = (state = initialstate, action) => {
    switch (action.type) {
      case "add":
        let old = [...state.users, action.payload]
        localStorage.setItem('users', JSON.stringify(old))
        return {
          ...state,
          users: old
        }
      case 'delete':
        let deleteid = action.payload
        let d = state.users.filter(val => val.id != deleteid)
        localStorage.setItem("users", JSON.stringify(d))
        return {
          ...state,
          users: d
        }
        case "edit-user":
          let edituser = state.users.find((val) => {
            return val.id == action.payload.editid;
          });
          console.log(edituser);
          return {
            ...state,
            single: edituser,
          };
    
        case "update-user":
          let update = state.users.map((val) => {
            if (val.id == action.payload.id) {
              (val.name = action.payload.name), (val.phone = action.payload.phone);
            }
            return val;
          });
          localStorage.setItem("users", JSON.stringify(update));
    
  
      default:
        return state;
    }
  }
export default CrudReducer