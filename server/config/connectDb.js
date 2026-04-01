import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("DB is connected!");
  } catch (err) {
    console.log(`DB Error ${err}`);
  }
};

export default connectDB;
