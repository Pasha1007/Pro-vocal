import asyncHandler from '../middleware/asyncHandler.js'; // Middleware для обробки асинхронних операцій
import Training from '../models/trainingModel.js'; // Модель тренування з бази даних
import fs from 'fs'; // Модуль для роботи з файловою системою
import path from 'path'; // Модуль для роботи з шляхами файлів
import User from '../models/userModel.js'; // Модель користувача з бази даних

// Функція для збереження файлу з Base64 в файлову систему
const saveBase64File = (base64Data, filePath) => {
  const matches = base64Data.match(/^data:(.+);base64,(.+)$/);
  const ext = matches[1].split('/')[1];
  const data = matches[2];
  const buffer = Buffer.from(data, 'base64');
  const filename = `${filePath}.${ext}`;
  fs.writeFileSync(filename, buffer);
  return filename;
};

// Отримання всіх тренувань з бази даних
const getAllTrainings = asyncHandler(async (req, res) => {
  const allTrainings = await Training.find().populate('category');

  // Check if user is logged in
  if (!req.user) {
    // If no user, return all trainings
    res.json({ success: true, data: allTrainings });
    return;
  }

  const user = await User.findById(req.user._id);

  let unlockedTrainings = [];

  // Unlock the first training if none have been completed
  if (user.completedTrainings.length === 0) {
    unlockedTrainings = allTrainings.slice(0, 1);
  } else {
    // Unlock the next training
    const nextTrainingIndex = user.completedTrainings.length;
    unlockedTrainings = allTrainings.slice(0, nextTrainingIndex + 1);
  }

  res.json({ success: true, data: unlockedTrainings });
});
// Створення нового тренування
const createTraining = asyncHandler(async (req, res) => {
  const { title, description, content, category, file } = req.body;
  const newTraining = new Training({
    title,
    description,
    category,
    content
  });

  // Якщо прийшов файл, зберігаємо його на сервері та записуємо інформацію про нього в базу даних
  if (file) {
    const filePath = `uploads/${newTraining._id}`;
    const filename = saveBase64File(file, filePath);
    newTraining.file = {
      fileName: path.basename(filename),
      filePath: filename,
      fileType: file.split(';')[0].split(':')[1],
    };
  }

  await newTraining.save(); // Збереження нового тренування в базу даних
  res.status(201).json({ success: true, data: newTraining });
});

// Отримання конкретного тренування за його ідентифікатором
const getTrainingById = asyncHandler(async (req, res) => {
  const training = await Training.findById(req.params.id);
  if (!training) {
    res.status(404).json({ success: false, error: 'Training not found' });
    return;
  }
  res.json({ success: true, data: training });
});

// Оновлення тренування за його ідентифікатором
const updateTraining = asyncHandler(async (req, res) => {
  const { title, description, content, category, file } = req.body;
  const training = await Training.findById(req.params.id);

  if (!training) {
    res.status(404).json({ success: false, error: 'Training not found' });
    return;
  }

  training.title = title;
  training.description = description;
  training.category = category;
  training.content = content;

  // Якщо прийшов новий файл, зберігаємо його та оновлюємо інформацію в базі даних
  if (file) {
    const filePath = `uploads/${training._id}`;
    const filename = saveBase64File(file, filePath);
    training.file = {
      fileName: path.basename(filename),
      filePath: filename,
      fileType: file.split(';')[0].split(':')[1],
    };
  }

  await training.save(); // Збереження оновленого тренування в базу даних
  res.json({ success: true, data: training });
});

// Видалення тренування за його ідентифікатором
const deleteTraining = asyncHandler(async (req, res) => {
  const training = await Training.findByIdAndDelete(req.params.id);
  if (!training) {
    res.status(404).json({ success: false, error: 'Training not found' });
    return;
  }

  // Видалення файлу, якщо він існує
  if (training.file && fs.existsSync(training.file.filePath)) {
    fs.unlinkSync(training.file.filePath);
  }

  res.json({ success: true, data: {} });
});
// Оновлення прогресу користувача при завершенні тренування
const completeTraining = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user.completedTrainings.includes(req.params.id)) {
        user.completedTrainings.push(req.params.id);
        await user.save();
    }

    res.json({ success: true, data: user.completedTrainings });
});


// Експорт функцій контролерів для використання в маршрутах
export {
  getAllTrainings,
  createTraining,
  getTrainingById,
  updateTraining,
  deleteTraining,
    completeTraining
};
