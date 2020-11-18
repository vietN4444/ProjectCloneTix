let initialState = {
  combo: [
    {
      title: "NƯỚC NGỌT LY",
      listItem: [
        {
          itemTitle: "Coke 22oz",
          price: "25.000 đ",
          info: "Coke 22oz",
          count: 0,
        },
        {
          itemTitle: "Fanta 22oz",
          price: "25.000 đ",
          info: "Fanta 22oz",
          count: 0,
        },
        {
          itemTitle: "Sprite 22oz",
          price: "25.000 đ",
          info: "Sprite 22oz",
          count: 0,
        },
        {
          itemTitle: "Coke 32oz",
          price: "28.000 đ",
          info: "Coke 32oz",
          count: 0,
        },
        {
          itemTitle: "Sprite 32oz",
          price: "28.000 đ",
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
          price: "40.000 đ",
          info: "Bắp rang 60oz",
          count: 0,
        },
        {
          itemTitle: "Bắp nấm 60oz - Caramel",
          price: "45.000 đ",
          info: "Bắp nấm 60oz - Caramel",
          count: 0,
        },
        {
          itemTitle: "Bắp rang 60oz- Phô Mai",
          price: "45.000 đ",
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
          price: "65.000 đ",
          info: "1 Coke 22oz + 1 Poca Partyz + 1 Bắp rang 60oz",
          count: 0,
        },
        {
          itemTitle: "Combo 3 HCM",
          price: "85.000 đ",
          info:
            "1 Coke 22oz + 1 Kẹo MnM + 1 Bắp rang 60oz + 1 Trà sữa Trân châu Size M",
          count: 0,
        },
        {
          itemTitle: "Combo 4 HCM",
          price: "170.000 đ",
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
