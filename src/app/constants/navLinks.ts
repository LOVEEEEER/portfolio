interface INav {
  id: number | string;
  path: string;
  name: string;
}

export const navLinks: INav[] = [
  {
    id: 1,
    path: "/",
    name: "About",
  },
  {
    id: 2,
    path: "/contact",
    name: "Contacts",
  },
];
