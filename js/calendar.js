const calendarDates = document.getElementById("calendarDates");
const currentMonthElement = document.getElementById("currentMonth");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const scheduleContainer = document.querySelectorAll(".schedule-container");

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// 달력을 렌더링하는 함수
function renderCalendar() {
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDayOfWeek = firstDayOfMonth.getDay();

  currentMonthElement.textContent = `${currentYear}년 ${currentMonth + 1}월`;
  calendarDates.innerHTML = "";

  // 빈 날짜 (이전 달)
  for (let i = 0; i < startDayOfWeek; i++) {
    const emptyDate = document.createElement("div");
    emptyDate.classList.add("date", "empty");
    calendarDates.appendChild(emptyDate);
  }

  // 현재 달의 날짜
  for (let i = 1; i <= daysInMonth; i++) {
    const dateElement = document.createElement("div");
    dateElement.classList.add("date");
    dateElement.textContent = i;

    // 날짜 클릭 시 today에 날짜 표시
    dateElement.addEventListener("click", () => handleDateClick());

    calendarDates.appendChild(dateElement);
  }
}

const handleDateClick = () => {
  scheduleContainer.forEach(element => {
    if(element.style.display === "none")  element.style.display = "flex";
    else element.style.display = "none"
  });
}

// 이전 달 버튼 클릭 이벤트
prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

// 다음 달 버튼 클릭 이벤트
nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

let events = {
  "2024-09-01": [
      { text: "2024 LoL Champions Korea Summer  DK vs T1", time: "5:00" }
  ],
  "2024-11-7": [
      { text: "", time: "08:00" }
  ]
};




// 초기 실행
renderCalendar();
