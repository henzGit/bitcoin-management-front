/*
 *
 * MenuBar reducer
 *
 */
import { fromJS } from 'immutable';

export const initialState = fromJS({
  items: [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: '/app/',
    },
    {
      label: 'Coin',
      icon: 'pi pi-fw pi-star',
      url: '/app/coin/',
    },
    {
      label: 'Profile',
      icon: 'pi pi-fw pi-user',
      url: '/app/profile/',
    },
  ],
});

function MenuBarReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default MenuBarReducer;
