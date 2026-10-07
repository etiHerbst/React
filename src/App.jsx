// קומפוננטת האב (App)
// דף זה = האב של כל הקומפוננטות.
// הוא מגדיר את הנתונים (רשימת המשימות ושם המשתמש)
// ומעביר אותם לשלושת קומפוננטות הבנים דרך props.

// ייבוא שלושת הקומפוננטות שיצרנו, כדי שנוכל להשתמש בהן כאן
import Header from './Header.jsx'
import TaskList from './TaskList.jsx'
import TaskSummary from './TaskSummary.jsx'

// טעינת קובץ העיצוב
import './App.css'

function App() {
  // הגדרת רשימת המשימות (סטטית — לא משתנה)
  // כל משימה היא אובייקט: id (מספר מזהה), name (שם), status (סטטוס)
  const tasks = [
    { id: 1, name: 'כתיבת קוד HTML', status: 'הושלם' },
    { id: 2, name: 'כתיבת קוד CSS', status: 'הושלם' },
    { id: 3, name: 'כתיבת קוד JavaScript', status: 'בתהליך' },
    { id: 4, name: 'בדיקת האתר', status: 'לא התחיל' },
  ]

  // שם המשתמש המוצג בכותרת
  const userName = 'משה ישראלי'

  return (
    <div className="app">
      {/* קומפוננטת הכותרת — מקבלת את שם המשתמש */}
      <Header userName={userName} />

      {/* קומפוננטת הסיכום — מקבלת את רשימת המשימות */}
      <TaskSummary tasks={tasks} />

      {/* קומפוננטת רשימת המשימות — מקבלת את רשימת המשימות */}
      <TaskList tasks={tasks} />
    </div>
  )
}

// מייצאים את הקומפוננטה כדי ש-main.jsx יוכל להרכיב אותה
export default App
