# [ 1 ] Npm init

- [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

# [ 2 ] Connect With Git

# [ 3 ] Create Public Folder

- public
  - temp

# [ 4 ] .gitingnore Generator and setup Git Ignore file

# [ 5 ] Create File by Terminal in main directory

- command = touch app.js constants.js index.js

# [ 6 ] package.json = type:module

- type:module
- "dev": "nodemon -r dotenv/config --experimental-json-modules ./scr/index.js"

# [ 7 ] Nodemon Setup

- npm i -D nodemon

# [ 8 ] src folder create and Directory Create as per below

- mkdir scr/controller, scr/controller, scr/db, scr/middleware, scr/route, scr/models, scr/utils, public/temp
- controllers
- db
- middleware
- models
- routes
- utils

# [ 9 ] Nodemon Setup

- npm i -D prettier
- create file in main directory [1] .prettierrc [2] .prettierignore

# [ 10 ] npm i mongoose express dotenv

# [ 11 ] env PORT MONGO_URI

# [ 12 ] DATABASE CONNECTION

# [ 13 ] npm i cookie-parser cors

# [ 14 ] cors setup

- app.use(cors{})
- app.use(express.json())
- app.use(express.urlencoded({ extended: true }));

# [ 15 ] create asyncHandler

# [ 16 ] Node JS error Handler

- override the error
- [A] Apiresponse = constructor create
- [B] asyncHandler = constructor create

# [ 17 ]mongoose Schema Create

- [A] user.model.js = userSchema
- [B] video.model.js = videoSchema

# [ 18 ]npm i mongoose-aggregate-paginate-v2

# [ 19 ]npm i bcrypt jsonwebtoken

- [A] pre hooks Setup = isModified
- [B] userSchema.methods.isPasswordCorrect
- [C] userSchema.methods.generateAccessToken
- [D] userSchema.methods.generateRefreshToken
