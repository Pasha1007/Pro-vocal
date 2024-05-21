import mongoose from 'mongoose'; // Імпорт бібліотеки mongoose для роботи з MongoDB

// Створення схеми для тренування
const trainingSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'] // Вимагаємо наявність назви тренування
  },
  description: {
    type: String,
    required: [true, 'Please add a description'] // Вимагаємо наявність опису тренування
  },
  category: {
    type: Number,
    required: [true, 'Please add a category']
  },
  content: {
    type: String,
    required: [true, 'Please add a content']
  },
  file: {
    fileName: String,
    filePath: String,
    fileType: String,
    fileSize: Number
  }
}, {
  timestamps: true // Додаємо поля з датою створення та оновлення запису
});

// Створення моделі Training на основі схеми trainingSchema
const Training = mongoose.model('Training', trainingSchema);

export default Training; // Експорт моделі Training для використання в інших частинах додатку
