import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true}))

const feedbackSchema = new mongoose.Schema({name: String, email: String, feedback: String})
const feedbackModel = new mongoose.model('feedbacks', feedbackSchema)

app.post('/submit-form', async (req, res) => {
    try {
      await mongoose.connect(process.env.database);
      const { name, email, feedbackValue } = req.body;
      await new feedbackModel({name, email, feedback: feedbackValue}).save()
      console.log('Feedback added with success');
    } 
    catch (error) {console.error(error);}
    finally{
      res.redirect('https://givemefeedback.onrender.com/?success=true');
    }
  });

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });