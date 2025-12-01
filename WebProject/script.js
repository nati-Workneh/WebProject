// script.js

// פונקציה להצגת תאריך ושעה נוכחיים
function showDateTime() {
  const now = new Date();
  // עיצוב בהתאם ללוקאל ישראל
  const formatted = now.toLocaleString('he-IL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  document.getElementById('date-time').textContent = formatted;
}

// מריץ את הפונקציה ברגע שה-DOM טען במלואו
window.addEventListener('DOMContentLoaded', showDateTime);


// בחר את הטופס
const form = document.getElementById('contact-form');

// ביטול כל הודעות שגיאה קודמות
function clearErrors() {
  document.getElementById('email-error').textContent = '';
  document.getElementById('phone-error').textContent = '';
}

// פונקציה לוולידציה
form.addEventListener('submit', function(e) {
  clearErrors();

  let valid = true;

  // קבלת הערכים
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // regex לאימייל
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('email-error').textContent = 'כתובת אימייל לא תקינה';
    valid = false;
  }

// regex לטלפון (10 ספרות בלבד, מתחיל ב-052, 053, 054, 050 או 051)
const phoneRegex = /^(?:052|053|054|050|051)\d{7}$/;
if (!phoneRegex.test(phone)) {
  document.getElementById('phone-error').textContent =
    'מספר טלפון לא תקין (מותר רק 10 ספרות ומתחיל ב-052, 053, 054, 050 או 051)';
  valid = false;
}


  // אם משהו לא תקין - עצור שליחה
  if (!valid) {
    e.preventDefault();
  }
});



const cards = document.querySelectorAll(".card");

// Add "is-active" class to all cards initially
cards.forEach(card => card.classList.add("is-active"));

// Use event delegation for better performance
document.addEventListener("mouseenter", event => {
  const card = event.target.closest(".card");
  if (card) {
    cards.forEach(c => c.classList.remove("is-active"));
    card.classList.add("is-active");
  }
}, true);

document.addEventListener("mouseleave", event => {
  const card = event.target.closest(".card");
  if (card) {
    cards.forEach(c => c.classList.add("is-active"));
  }
}, true);

// הפונקציה שמצרפת את אפקט ה-glow לכל אלמנט
function attachGlowEffect(el) {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--x', `${x}px`);
    el.style.setProperty('--y', `${y}px`);
  });
  el.addEventListener('mouseleave', () => {
    el.style.setProperty('--x', `50%`);
    el.style.setProperty('--y', `50%`);
  });
}

// בוחרים את כל הכפתורים שרוצים באותה שורה
const buttons = document.querySelectorAll('.your-old-selector, .button-creative');

// מריצים על כל כפתור ומחזיקים לו את הפונקציה
buttons.forEach(btn => {
  attachGlowEffect(btn);
});
