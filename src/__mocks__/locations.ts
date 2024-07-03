export const data = {
  current_country_id: 1,
  locations: [
    {
      id: 10998878976079,
      title: "Presidente Prudente",
      content:
        "\n<p>Rua Siqueira Campos, 1545 &#8211; Vila Roberto<br>Presidente Prudente, SP</p>\n",
      opened: false,
      mask: "required",
      towel: "required",
      fountain: "partial",
      locker_room: "allowed",
      schedules: [
        {
          weekdays: "Seg. à Sex.",
          hour: "Fechada",
        },
        {
          weekdays: "Sáb.",
          hour: "Fechada",
        },
        {
          weekdays: "Dom.",
          hour: "Fechada",
        },
      ],
    },
    {
      id: 10998878976080,
      title: "Campinas",
      content:
        "\n<p>Rua Barão de Jaguara, 1234 &#8211; Centro<br>Campinas, SP</p>\n",
      opened: true,
      mask: "required",
      towel: "recommended",
      fountain: "partial",
      locker_room: "allowed",
      schedules: [
        {
          weekdays: "Seg. à Sex.",
          hour: "06h00 às 18h00",
        },
        {
          weekdays: "Sáb.",
          hour: "09h00 às 13h00",
        },
        {
          weekdays: "Dom.",
          hour: "Fechada",
        },
      ],
    },
    {
      id: 10998878976081,
      title: "São Paulo",
      content:
        "\n<p>Avenida Paulista, 1578 &#8211; Bela Vista<br>São Paulo, SP</p>\n",
      opened: true,
      mask: "recommended",
      towel: "required",
      fountain: "partial",
      locker_room: "partial",
      schedules: [
        {
          weekdays: "Seg. à Sex.",
          hour: "07h00 às 20h00",
        },
        {
          weekdays: "Sáb.",
          hour: "08h00 às 14h00",
        },
        {
          weekdays: "Dom.",
          hour: "Fechada",
        },
      ],
    },
  ],
  wp_total: 116,
  total: 167,
  success: true,
};
