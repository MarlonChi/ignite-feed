interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface Post {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/MarlonChi.png",
      name: "Marlon Chiodelli",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-02-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/MarlonChi.png",
      name: "Marlon Chiodelli",
      role: "Desenvolvedor",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-02-12 20:00:00"),
  },
];
