backend/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.controller.js
│   │   │   ├── auth.routes.js
│   │   │   └── auth.service.js
│   │   │
│   │   ├── users/
│   │   │   ├── users.controller.js
│   │   │   ├── users.routes.js
│   │   │   └── users.service.js
│   │   │
│   │   ├── stores/
│   │   │   ├── stores.controller.js
│   │   │   ├── stores.routes.js
│   │   │   └── stores.service.js
│   │   │
│   │   └── ratings/
│   │       ├── ratings.controller.js
│   │       ├── ratings.routes.js
│   │       └── ratings.service.js
│   │
│   ├── utils/
│   │   ├── hash.js
│   │   ├── jwt.js
│   │   └── validation.js
│   │
│   ├── app.js
│   └── server.js
│
└── package.json
