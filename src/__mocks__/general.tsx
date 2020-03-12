type Menu = {
  items: MenuItem[];
};
type MenuItem = {
  title: string;
  icon: string;
};
export const menu: Menu = {
  items: [
    { title: 'dashboard', icon: '' },
    { title: 'devices', icon: '' },
    { title: 'sites', icon: '' },
    { title: 'account', icon: '' },
    { title: 'settings', icon: '' }
  ]
};
