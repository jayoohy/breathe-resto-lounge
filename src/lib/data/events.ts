// TODO(client): confirm the exact name, schedule, and offer for the recurring "Breathe Laze" weekly event.
export const weeklyEvent = {
  name: "Ladies Monday",
  cadence: "Every Monday",
  time: "6 PM – Late",
  description:
    "Breathe's signature ladies' night — complimentary welcome cocktail, curated playlist, and games all evening. Come through with the girls and unwind.",
};

export type SeasonalEvent = {
  title: string;
  window: string;
  description: string;
};

// TODO(client): replace with the current month's actual promo/holiday graphic content.
export const seasonalEvents: SeasonalEvent[] = [
  {
    title: "Welcome to the Season",
    window: "Monthly",
    description:
      "Every new month opens with a Breathe-branded toast — a limited cocktail drop and a fresh reason to gather.",
  },
  {
    title: "Holiday Specials",
    window: "Eid · Easter · Christmas · New Year",
    description:
      "Festive tasting menus and celebratory cocktails timed to the holidays our community celebrates together.",
  },
];

export const gamesNote =
  "Cards, board games, and friendly competition — part of the complete relaxation experience at Breathe.";
