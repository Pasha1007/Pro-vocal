import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://kramarpavlo:1A4AWlTnNOBNHkrg@cluster0.i67bygy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
