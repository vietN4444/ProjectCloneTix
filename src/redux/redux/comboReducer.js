let initialState = {
  combo: [
    {
      title: "NƯỚC NGỌT LY",
      listItem: [
        {
          itemTitle: "Coke 22oz",
          price: 25000,
          info: "Coke 22oz",
          count: 0,
        },
        {
          itemTitle: "Fanta 22oz",
          price: 25000,
          info: "Fanta 22oz",
          count: 0,
        },
        {
          itemTitle: "Sprite 22oz",
          price: 25000,
          info: "Sprite 22oz",
          count: 0,
        },
        {
          itemTitle: "Coke 32oz",
          price: 28000,
          info: "Coke 32oz",
          count: 0,
        },
        {
          itemTitle: "Sprite 32oz",
          price: 28000,
          info: "Sprite 32oz",
          count: 0,
        },
      ],
    },
    {
      title: "BẮP RANG",
      listItem: [
        {
          itemTitle: "Bắp rang 60oz",
          price: 40000,
          info: "Bắp rang 60oz",
          count: 0,
        },
        {
          itemTitle: "Bắp nấm 60oz - Caramel",
          price: 45000,
          info: "Bắp nấm 60oz - Caramel",
          count: 0,
        },
        {
          itemTitle: "Bắp rang 60oz- Phô Mai",
          price: 45000,
          info: "Bắp rang 60oz- Phô Mai",
          count: 0,
        },
      ],
    },
    {
      title: "POPCORN COMBO",
      listItem: [
        {
          itemTitle: "Combo 1 HCM",
          price: 65000,
          info: "1 Coke 22oz + 1 Poca Partyz + 1 Bắp rang 60oz",
          count: 0,
        },
        {
          itemTitle: "Combo 3 HCM",
          price: 85000,
          info:
            "1 Coke 22oz + 1 Kẹo MnM + 1 Bắp rang 60oz + 1 Trà sữa Trân châu Size M",
          count: 0,
        },
        {
          itemTitle: "Combo 4 HCM",
          price: 170000,
          info: "4 Coke 22oz + 1 Lay's Stax Tôm + 2 Bắp rang 60oz",
          count: 0,
        },
      ],
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default reducer;
