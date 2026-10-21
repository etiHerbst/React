// קומפוננטת האב (App)
// דף זה = האב של כל הקומפוננטות.
// הוא מגדיר את הנתונים (רשימת המשימות ושם המשתמש)
// ומעביר אותם לשלושת קומפוננטות הבנים דרך props.

// ייבוא useState כדי שנוכל לשמור את רשימת המשימות במצב (state) של הקומפוננטה
import { useState } from 'react'

// ייבוא הקומפוננטות שיצרנו, כדי שנוכל להשתמש בהן כאן
import Header from './Header.jsx'
import TaskForm from './TaskForm.jsx'
import TaskList from './TaskList.jsx'
import TaskSummary from './TaskSummary.jsx'

// טעינת קובץ העיצוב
import './App.css'

function App() {
  // רשימת המשימות נשמרת ב-state — כך שכאשר היא משתנה, React מרנדר מחדש
  // את האב ואת כל הבנים שמקבלים אותה.
  // כל משימה היא אובייקט: id (מספר מזהה), name (שם), status (סטטוס)
  // כל משימה שומרת גם previousStatus — הסטטוס שאליו נחזור כשמבטלים "הושלם"
  const [tasks, setTasks] = useState([
    { id: 1, name: 'כתיבת קוד HTML', status: 'הושלם', previousStatus: 'לא התחיל' },
    { id: 2, name: 'כתיבת קוד CSS', status: 'הושלם', previousStatus: 'לא התחיל' },
    { id: 3, name: 'כתיבת קוד JavaScript', status: 'בתהליך', previousStatus: 'לא התחיל' },
    { id: 4, name: 'בדיקת האתר', status: 'לא התחיל', previousStatus: 'לא התחיל' },
  ])

  // החלפת הסטטוס של משימה מסוימת בין "הושלם" לבין הסטטוס שהיה לה לפני כן.
  // מסומנת כ"הושלם": שומרים את הסטטוס הנוכחי ב-previousStatus.
  // מבוטלת: חוזרים ל-previousStatus (או ל"לא התחיל" אם אין).
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== id) return task

        const isDone = task.status === 'הושלם'

        return isDone
          ? { ...task, status: task.previousStatus || 'לא התחיל' }
          : { ...task, previousStatus: task.status, status: 'הושלם' }
      })
    )
  }

  // הוספת משימה חדשה לרשימה.
  // מזהה חדש = המזהה הגבוה ביותר + 1 (כך אין כפילויות).
  // משימה חדשה מתחילה תמיד בסטטוס "לא התחיל".
  const addTask = (name) => {
    const cleanName = name.trim()
    if (cleanName === '') return // לא מוסיפים משימה ריקה

    setTasks((prevTasks) => {
      const nextId = prevTasks.reduce((max, task) => Math.max(max, task.id), 0) + 1

      return [
        ...prevTasks,
        { id: nextId, name: cleanName, status: 'לא התחיל', previousStatus: 'לא התחיל' },
      ]
    })
  }

  // שם המשתמש נשמר ב-state — כך שהכותרת מתעדכנת כשמקלידים בשדה השם
  const [userName, setUserName] = useState('משה ישראלי')

  return (
    <div className="app">
      {/* קומפוננטת הכותרת — מקבלת את שם המשתמש ואת הפונקציה לעדכונו */}
      <Header userName={userName} onNameChange={setUserName} />

      {/* טופס הוספת משימה — מעביר את השם שהוקלד לאב */}
      <TaskForm onAdd={addTask} />

      {/* קומפוננטת הסיכום — מקבלת את רשימת המשימות המשותפת */}
      <TaskSummary tasks={tasks} />

      {/* קומפוננטת רשימת המשימות — מקבלת את המשימות ואת הפונקציה לשינוי סטטוס */}
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </div>
  )
}

// מייצאים את הקומפוננטה כדי ש-main.jsx יוכל להרכיב אותה
export default App
