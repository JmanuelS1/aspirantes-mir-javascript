const menu = [
    {
      name: 'Home',
      link: '/',
      items: []
    },
    {
      name: 'About',
      link: '/about',
      items: []
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: []
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: []
            },
          ]
        },
      ]
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: []
            },
          ]
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: []
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: []
            },
          ]
        },
      ]
    },
  ];
  
  const menuContainer = document.getElementById('menu');
  
  function createMenu(menu, container) {
    const ul = document.createElement('ul');
    container.appendChild(ul);
  
    menu.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.name;
      a.setAttribute('href', item.link);
      li.appendChild(a);
  
      if (item.items.length > 0) {
        li.classList.add('dropdown');
        createMenu(item.items, li);
      }
  
      ul.appendChild(li);
    });
  }
  
  createMenu(menu, menuContainer);