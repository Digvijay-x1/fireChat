
import dotenv from 'dotenv'

dotenv.config()            

const ENV = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGO_URL,
    NODE_ENV: process.env.NODE_ENV,
    JWT_SECRET: process.env.JWT_SECRET,
    STREAM_API_KEY: process.env.STREAM_API_KEY,
    STREAM_API_SECRET: process.env.STREAM_API_SECRET,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
}

export default ENV;