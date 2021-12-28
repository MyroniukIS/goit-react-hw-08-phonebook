export const getIsloggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getUseremail = state => state.auth.user.email;

// const authSelectors = {
//   getIsloggedIn,
//   getUsername,
//   getUseremail,
// };
// export default authSelectors;
