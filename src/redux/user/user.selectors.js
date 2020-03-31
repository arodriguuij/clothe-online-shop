import { createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectUserId = createSelector(
    [selectUser],
    user => user.userId
)