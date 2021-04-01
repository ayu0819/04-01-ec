import {createSelector} from 'reselect';

const usersSelector = (state) => state.users;

export const getProductsInCart = createSelector(
    [usersSelector],
    state => state.cart
)

export const getIsSignedIn = createSelector(
    [usersSelector],
    state => state.isSignedIn
)

export const getUserId = createSelector(
    [usersSelector],
    state => state.uid
)

export const getUsername = createSelector(
    [usersSelector],
    state => state.username
)

export const getProductsInLike = createSelector(
    [usersSelector],
    state => state.like
  )

  export const getUseremail = createSelector(
    [usersSelector],
    state => state.email
)

  export const getUserPost = createSelector(
    [usersSelector],
    state => state.post
  )

  export const getPrefecture = createSelector(
    [usersSelector],
    state => state.prefecture
  )

  export const getCity = createSelector(
    [usersSelector],
    state => state.city
  )
  
  export const getOther = createSelector(
    [usersSelector],
    state => state.other
  )

  export const getDescription = createSelector(
    [usersSelector],
    state => state.description
  )

  export const getImages = createSelector(
    [usersSelector],
    state => state.images
  )

  export const getUserImages = createSelector(
    [usersSelector],
    state => state.images
  )

  // Role
  export const getUserRole = createSelector(
    [usersSelector],
    state => state.role
);