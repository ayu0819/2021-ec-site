// selectors.js は store で管理している state を 参照する 関数
// storeのstateを参照するために reselect というnpmモジュールを使うべき

import {createSelector} from 'reselect';

const useSelector = (state) => state.users;

export const getIsSignedIn = createSelector(
    [useSelector],
    state => state.isSignedIn
)

export const getUserId = createSelector(
    [useSelector],
    state => state.uid
)

export const getUsername = createSelector(
    [useSelector],
    state => state.username
)

// getUserIdをhomeでコンポネートとして使う