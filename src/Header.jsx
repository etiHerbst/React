// קומפוננטת הכותרת (Header)
// קומפוננטה זו היא "בן" — היא מקבלת מידע מהאב (App) דרך props
// ומציגה אותו ככותרת בראש האתר.

function Header(props) {
  // props = אובייקט שמכיל את כל הנתונים שהאב העביר לנו:
  // userName — השם המוצג בכותרת
  // onNameChange — פונקציה לעדכון השם (מקבלת את הערך החדש מהשדה)

  return (
    <header className="header">
      {/* מציגים את שם המשתמש — מתעדכן בזמן אמת בזמן ההקלדה */}
      <h1>ניהול משימות של {props.userName}</h1>
      <p>ברוך הבא לאתר ניהול המשימות</p>

      {/* פקד להזנת השם */}
      <div className="name-input">
        <label htmlFor="user-name">שם המשתמש:</label>
        <input
          id="user-name"
          type="text"
          value={props.userName}
          onChange={(event) => props.onNameChange(event.target.value)}
          placeholder="הקלידו את שמכם"
        />
      </div>
    </header>
  )
}

// מייצאים את הקומפוננטה כדי שנוכל להשתמש בה בקבצים אחרים
export default Header
