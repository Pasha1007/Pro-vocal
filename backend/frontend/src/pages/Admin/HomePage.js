import React, { useEffect, useState } from 'react';

export default function HomePage() {
  const [trainings, setTrainings] = useState([]); // Стейт для тренувань
  const [formData, setFormData] = useState({ // Стейт для даних форми додавання тренування
    title: '',
    description: '',
    category: 1,
    content: '',
    file: null,
  });
  const [updateData, setUpdateData] = useState({ // Стейт для даних форми оновлення тренування
    id: '',
    title: '',
    description: '',
    category: 1,
    content: '',
    file: null,
  });

  // Функція для завантаження тренувань з сервера
  const loadTrainings = async () => {
    try {
      const response = await fetch('http://localhost:1234/api/trainings');
      if (!response.ok) {
        throw new Error('Failed to fetch trainings');
      }
      const data = await response.json();
      console.log(data);
      setTrainings(data.data);
    } catch (error) {
      console.error('Error loading trainings:', error.message);
    }
  };

  useEffect(() => {
    loadTrainings(); // Виклик функції завантаження тренувань при завантаженні компонента
  }, []);

  // Функція для відправки форми додавання тренування
  const handleSubmit = async (e) => {
    e.preventDefault();
    let base64File = null;

    if (formData.file) {
      base64File = await toBase64(formData.file);
    }

    const data = {
      title: formData.title,
      category: formData.category,
      content: formData.content,
      description: formData.description,
      file: base64File,
    };

    try {
      const response = await fetch('http://localhost:1234/api/trainings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to add training');
      }

      setFormData({ title: '', category: null, content: '', description: '', file: null });
      loadTrainings(); // Після успішного додавання тренування - перезавантажуємо список тренувань
    } catch (error) {
      console.error('Error adding training:', error.message);
    }
  };

  // Функція для видалення тренування
  const deleteTraining = async (id) => {
    try {
      const response = await fetch(`http://localhost:1234/api/trainings/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to delete training');
      }
      loadTrainings(); // Після успішного видалення тренування - перезавантажуємо список тренувань
    } catch (error) {
      console.error('Error deleting training:', error.message);
    }
  };

  // Функція для обробки кліку на кнопку оновлення тренування
  const handleUpdate = (training) => {
    setUpdateData({
      id: training._id,
      title: training.title,
      category: training.category,
      content: training.content,
      description: training.description,
      file: null
    });
  };

  // Функція для відправки форми оновлення тренування
  const updateTraining = async (e) => {
    e.preventDefault();
    let base64File = null;

    if (updateData.file) {
      base64File = await toBase64(updateData.file);
    }

    const data = {
      title: updateData.title,
      description: updateData.description,
      category: updateData.category,
      content: updateData.content,
      file: base64File,
    };

    try {
      const response = await fetch(`http://localhost:1234/api/trainings/${updateData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update training');
      }

      setUpdateData({ id: '', category: null, content: '', title: '', description: '', file: null });
      loadTrainings(); // Після успішного оновлення тренування - перезавантажуємо список тренувань
    } catch (error) {
      console.error('Error updating training:', error.message);
    }
  };

  // Функція для конвертації файлу в base64
  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {/*<input*/}
        {/*    type="text"*/}
        {/*    placeholder="Title"*/}
        {/*    value={formData.title}*/}
        {/*    onChange={(e) => setFormData({ ...formData, title: e.target.value })}*/}
        {/*/>*/}
        <input
            type="number"
            placeholder="Category ( 1, 2, 3)"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        />
        <input
            type="text"
            placeholder="Content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input type="file" onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })} />
        <button type="submit">Add Training</button>
      </form>

      <h2>Trainings:</h2>
      <ul>
        {trainings.map((training) => (
          <li key={training._id}>
            <div>
              <p>{training.title}</p>
              <p>{training.content}</p>
              <p>{training.description}</p>
              <p>{training.category}</p>
              <a href={"http://localhost:1234/" + training.file.filePath}>{training.file.filePath}</a>
              <button onClick={() => deleteTraining(training._id)}>Delete</button>
              <button onClick={() => handleUpdate(training)}>Update</button>
            </div>
          </li>
        ))}
      </ul>

      {updateData.id && (
        <form onSubmit={updateTraining}>
          <input
            type="text"
            placeholder="New Title"
            value={updateData.title}
            onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
          />
          <textarea
            placeholder="New Description"
            value={updateData.description}
            onChange={(e) => setUpdateData({ ...updateData, description: e.target.value })}
          />
          <input
              type="number"
              placeholder="Category ( 1, 2, 3)"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          />
          <input
              type="text"
              placeholder="Content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
          <input type="file" onChange={(e) => setUpdateData({ ...updateData, file: e.target.files[0] })} />
          <button type="submit">Update Training</button>
        </form>
      )}
    </div>
  );
}
