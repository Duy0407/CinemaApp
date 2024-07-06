export const StorageKey = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  UN_FIRST_OPEN: "UN_FIRST_OPEN",
};

export const ResponseStatus = {
  SUCCESS: 200,
  VALIDATE_FAIL: 422,
  UNAUTHORIZED: 401,
  TOO_MANY_REQUEST: 429,
  MAINTENANCE_MODE: 503,
};

export const Language = [
  { index: 1, title: "English", lang: "en" },
  { index: 2, title: "Tiếng Việt", lang: "vi" },
];

export interface IMovie {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  genre: string;
  describe: string;
  runtime: string;
  release: string;
  director: string;
  cast: string[];
  createdAt: string;
}

export interface IMovieRoom {
  name: string;
  subName: string;
  info: IRooms[];
}

interface IRooms {
  time: string;
  viewMode: string;
  adult: string;
  child: string;
  student: string;
  vip: string;
}

export const ByCinema = [
  {
    title: "Eurasia Cinema7",
    subTitle: "no sub title",
    info: [
      {
        time: "14:00",
        viewMode: "Psy",
        adult: "2 $",
        child: "1000",
        student: "1500",
        vip: "",
      },
      {
        time: "13:00",
        viewMode: "Psy",
        adult: "2000",
        child: "1000",
        student: "1500",
        vip: "4000",
      },
    ],
  },
  {
    title: "Kinopark 8 IMAX Saryarka",
    subTitle: "no sub title",
    info: [
      {
        time: "14:00",
        viewMode: "IMAX Psy",
        adult: "2000",
        child: "1000",
        student: "1500",
        vip: "4000",
      },
      {
        time: "15:00",
        viewMode: "IMAX Psy",
        adult: "2000",
        child: "1000",
        student: "1500",
        vip: "",
      },
      {
        time: "13:00",
        viewMode: "IMAX Psy",
        adult: "2000",
        child: "1000",
        student: "1500",
        vip: "8000",
      },
    ],
  },
];
