const navigations = [
  {
    icon: "dress",
    title: "Apps",
    href: "/apps",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Apps",
          href: "/product/search/apps",
          subCategories: [
            {
              title: "App1",
              href: "/product/search/app1",
              imgUrl: "/assets/images/products/categories/app1.png",
            },
            {
              title: "App2",
              href: "/product/search/app1",
              imgUrl: "/assets/images/products/categories/app1.png",
            },
            {
              title: "App3",
              href: "/product/search/app1",
              imgUrl: "/assets/images/products/categories/app1.png",
            }
          ],
        }
      ]
    },
  }
];

export default navigations;
