// קומפוננטת טופס הוספת משימה (TaskForm)
// קומפוננטה זו היא "בן" — היא מחזיקה את הטקסט שהוקלד,
// וכשלוחצים "הוספה" היא מעבירה את הטקסט לאב (App) דרך props.onAdd.

import { useState } from 'react'

function TaskForm(props) {
  // הטקסט שנמצא כרגע בשדה — מנוהל ב-state של הטופס עצמו
  const [name, setName] = useState('')

  // שליחת הטופס: מונע רענון דף, מוסיף את המשימה ומרוקן את השדה
  const handleSubmit = (event) => {
    event.preventDefault() // מונע מהדפדפן לרענן את העמוד
    if (name.trim() === '') return // לא שולחים משימה ריקה

    props.onAdd(name) // מעבירים את השם לאב
    setName('') // מרוקנים את השדה לקראת המשימה הבאה
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="new-task">משימה חדשה:</label>
      <input
        id="new-task"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="הקלידו שם למשימה"
      />
      <button type="submit">הוספה</button>
    </form>
  )
}

// מייצאים את הקומפוננטה כדי שנוכל להשתמש בה בקבצים אחרים
export default TaskForm
