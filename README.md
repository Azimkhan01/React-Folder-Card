Sure Azim! Here's the **complete and clean `README.md` content** with:

* 📁 A **properly formatted tree structure** (displayed correctly).
* 🧠 The **JavaScript `Structure` object** below it.

You can copy-paste this directly into your `README.md`:

---

```markdown
# 📁 Project Structure

```

├── app.js
├── package.json
├── controller
│   ├── handleAdmin.js
│   ├── cloud.js
│   ├── auth.js
│   └── Auth
│       ├── handleIncoming.js
│       ├── cloudIncoming.js
│       ├── authOutGoing.js
│       └── Auth
│           ├── handleIncoming.js
│           ├── cloudIncoming.js
│           ├── authOutGoing.js
│           └── Auth
│               ├── handleIncoming.js
│               ├── cloudIncoming.js
│               └── authOutGoing.js
├── database
│   ├── userModel.js
│   ├── productModel.js
│   └── categoryModel.js

````

---

## 📦 Structure as a JavaScript Object

```js
export const Structure = [
  {
    type: 'file',
    name: "app.js"
  },
  {
    type: 'file',
    name: "package.json"
  },
  {
    type: 'folder',
    name: "controller",
    files: [
      "handleAdmin.js",
      "cloud.js",
      "auth.js"
    ],
    folders: [
      {
        type: 'folder',
        name: "Auth",
        files: [
          "handleIncoming.js",
          "cloudIncoming.js",
          "authOutGoing.js"
        ],
        folders: [
          {
            type: 'folder',
            name: "Auth",
            files: [
              "handleIncoming.js",
              "cloudIncoming.js",
              "authOutGoing.js"
            ],
            folders: [
              {
                type: 'folder',
                name: "Auth",
                files: [
                  "handleIncoming.js",
                  "cloudIncoming.js",
                  "authOutGoing.js"
                ],
                folders: []
              }
            ]
          }
        ]
      },
      {
        type: 'folder',
        name: "Auth",
        files: [
          "handleIncoming.js",
          "cloudIncoming.js",
          "authOutGoing.js"
        ],
        folders: [
          {
            type: 'folder',
            name: "Auth",
            files: [
              "handleIncoming.js",
              "cloudIncoming.js",
              "authOutGoing.js"
            ],
            folders: []
          }
        ]
      }
    ]
  },
  {
    type: 'folder',
    name: "database",
    files: [
      "userModel.js",
      "productModel.js",
      "categoryModel.js"
    ],
    folders: []
  }
];
````

---

Let me know if you want me to build a Node.js/CLI script to generate this tree from the object automatically.
