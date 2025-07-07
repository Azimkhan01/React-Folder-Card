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
        folders: [{
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
                    folders: {

                    }
                }
            ]


        }, {
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
                    folders: {

                    }
                }
            ]
        }]
    },
    {
        type:'folder',
        name:"database",
        files:[
            "userModel.js","productModel.js","categoryModel.js"
        ],
        folders:[]
    }
] 