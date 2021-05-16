const { Home, HomeRounded } = require('@material-ui/icons')

const sideDrawerOptions = {
  mainMenu: [
    {
      name: 'Dashboard',
      icon: HomeRounded,
      subOptions: [
        {
          name: 'Social Media',
          to: 'social-media'
        }
      ]
    },
    {
      name: 'Layouts',
      icon: HomeRounded,
      subOptions: [
        {
          name: 'Light Mode',
          to: 'light-mode'
        },
        {
          name: 'Light Mode',
          to: 'light-mode'
        }
      ]
    }
  ],
  applications: [
    {
      name: 'Email',
      subOptions: [
        {
          name: 'Inbox',
          to: 'inbox'
        }
      ]
    }
  ]
}

export default sideDrawerOptions
