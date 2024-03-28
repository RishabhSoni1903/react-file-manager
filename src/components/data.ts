const data = [
  {
    id: 1,
    name: "app",
    type: "folder",
    children: [
      {
        id: 2,
        name: "file1",
        type: "folder",
        children: [
          {
            id: 3,
            name: "file1",
            type: "file",
            size: "106.56MB",
          },
          {
            id: 4,
            name: "file2",
            type: "file",
            size: "106.56MB",
          },
          {
            id: 5,
            name: "main",
            type: "folder",
            children: [
              {
                id: 6,
                name: "src",
                type: "folder",
                children: [
                  {
                    id: 7,
                    name: "file1",
                    type: "file",
                    size: "106.56MB",
                  },
                  { id: 8, name: "file2", type: "file", size: "106.56MB" },
                  {
                    id: 9,
                    name: "public",
                    type: "folder",
                    children: [
                      { id: 10, name: "file1", type: "file", size: "106.56MB" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "components",
    type: "folder",
    children: [
      { id: 12, name: "file1", type: "file", size: "106.56MB" },
      { id: 13, name: "file2", type: "file", size: "106.56MB" },
      { id: 14, name: "file3", type: "file", size: "106.56MB" },
    ],
  },
];

export default data;
