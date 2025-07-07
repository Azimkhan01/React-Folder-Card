## Example
https://github.com/user-attachments/assets/6247a686-9731-4c86-aa9b-ee97b1e5357f
## Example
![image](https://github.com/user-attachments/assets/220a19bd-d765-4bf4-aac2-f24534ac9969)
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


## Docs

step you need to know ->
  1. First in src see the data.js in /src/app/folder/data.js the structure of you folder  it sholud be in that form 
  2. Second if you want  you can directly copy the function from page.js in that copy the FolderStructure FileCard and FolderCard only other is not that much usefull
  3. As you can see in the page.js you can change the icon as of now i have use react-icon i suggest to use icon from there only and props that you have to use is fileIcon FolderIcon Structure as well

### FolderStructure Props

  ```
    const FolderStructure = ({fileIcon,folderIcon,Structure}) => {
  return (
    <div>
      {Structure.map((type, i) => {
        if (type.type == "file") {
          return <FileCard key={i} fileIcon={fileIcon} data={type.name} />;
        }
        if (type.type == "folder") {
          return <FolderCard key={i} fileIcon={fileIcon} folderIcon={folderIcon} data={type} />;
        }
      })}
    </div>
  );
};
  ```

### FolderCard

```
const FolderCard = ({ fileIcon,folderIcon,data }) => {
  const handleFolderClick = (e) => {
    if (e.target.nextElementSibling.style.display != "none") {
      e.target.nextElementSibling.style.display = "none";
    } else {
      e.target.nextElementSibling.style.display = "";
    }
  };
  return (
    <div className="">
      <button
        className="flex items-center gap-1 uppercase"
        onClick={(e) => {
          handleFolderClick(e);
        }}
      >
        {folderIcon}
        {data.name}
      </button>
      <div className="px-2 py-0.5" style={{ display: "none" }}>
        {data.files?.length > 0 &&
          data.files.map((filname, i) => {
            return <FileCard fileIcon={fileIcon} data={filname} key={i} />;
          })}
        {data.folders?.length > 0 &&
          data.folders.map((folderName, i) => {
            return <FolderCard fileIcon={fileIcon} folderIcon={folderIcon} key={i} data={folderName} />;
          })}
      </div>
    </div>
  );
};
```
### FileCard

```
const FileCard = ({fileIcon, data }) => {
  return (
    <p className="flex items-center gap-1">
      {fileIcon}
      {data}
    </p>
  );
};
```

