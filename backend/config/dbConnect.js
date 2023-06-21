import mongoose from "mongoose";

const dbConnect = async() => {
  try {
    // Replace <YOUR_CONNECTION_STRING> with your actual MongoDB connection string
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};


export default dbConnect;