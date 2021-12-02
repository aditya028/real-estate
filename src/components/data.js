const properties = [
  {
    title: "My Villa",
    id: 12330,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    detail: {
      room: 2,
      area: "20023 sqfeet",
      location: "Near S.N. sinha college Aurangabad Bihar",
      price: 30000,
    },
  },
  {
    title: "My Villa2",
    id: 12331,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    detail: {
      room: 3,
      area: "223 sqfeet",
      location: "Near S.N. sinha college Aurangabad Bihar",
      price: 30000,
    },
  },
  {
    title: "My House3",
    id: 12332,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    detail: {
      room: 21,
      area: "2230 sqfeet",
      location: "Near S.N. sinha college Aurangabad Bihar",
      price: 30000,
    },
  },
  {
    title: "My Villa4",
    id: 12333,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    detail: {
      room: 24,
      area: "230 sqfeet",
      location: "Near S.N. sinha college Aurangabad Bihar",
      price: 120000,
    },
  },
  {
    title: "My Villa5",
    id: 12334,
    image:
      "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    detail: {
      room: 5,
      area: "140000 sqfeet",
      location: "Near S.N. sinha college Aurangabad Bihar",
      price: 60000,
    },
  },
];

export default function getProperty() {
  const list = [...properties];
  return list;
}

const tenant = [
  { property_id: 12334, id: 470, name: "Aditya Nandan", rent: 10000 },
  { property_id: 12333, id: 471, name: "Aditya Nandan", rent: 10000 },
  { property_id: 12332, id: 472, name: "Aditya Nandan", rent: 10000 },
  { property_id: 12331, id: 473, name: "Aditya Nandan", rent: 10000 },
  { property_id: 12330, id: 474, name: "Aditya Nandan", rent: 10000 },
];
export function getTenant(id) {
  const item = tenant.filter((obj) => obj.property_id === id);
  return item;
}
export function deleteTenant(id) {
  const item = tenant.filter((obj) => obj.id === id);
  const index = tenant.indexOf(item);
  if (index > -1) {
    tenant.splice(index, 1);
  }
}
