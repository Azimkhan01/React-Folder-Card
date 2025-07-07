
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
## Example
https://github.com/user-attachments/assets/6247a686-9731-4c86-aa9b-ee97b1e5357f
## Example
![image](https://github.com/user-attachments/assets/220a19bd-d765-4bf4-aac2-f24534ac9969)


