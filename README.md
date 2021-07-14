# JWT-auth

Simple MERN application.

Auth: access and refresh tokens, email activation.

## Client

- react
- typescript
- axios
- mobx
- mobx-react-lite

## Server

- express
- jsonwebtoken
- nodemailer
- express-validator

Database:

- mongodb
- mongoose

## Run app

### Client

```
cd client
yarn start
```

Client started on [http://localhost:3000](http://localhost:3000)

### Server

Create a file `.env` in the folder `server`

```text
PORT=5000
API_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
DB_URL=your_mongodb_url
SMTP_HOST=your_smtp_host (ex: smtp.gmail.com)
SMTP_PORT=your_smtp_port (ex: 587)
SMTP_USER=your_email(ex: example@gmail.com)
SMTP_PASSWORD=your_email_password
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

```bash
cd server
npm run dev
```

Sever started on [http://localhost:5000](http://localhost:5000)
