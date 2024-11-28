const calendarDates = document.getElementById("calendarDates");
const currentMonthElement = document.getElementById("currentMonth");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const scheduleContainer = document.querySelectorAll(".schedule-container");
const correction = document.getElementById("correction");
const popup = document.getElementById("popup");

const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let selectedDate = null; // 현재 선택된 날짜를 추적하는 변수

// 기존 이벤트 데이터
const defaultEvents = {
  "2024-11-02": [
    { text: "2024 월즈 챔피언십 BLG vs T1", time: "11:00" }
  ],
  "2024-11-29": [
    { text: "선수들 개인방송", time: "10:00" }
  ],
  "2024-11-30": [
    { text: "선수들 개인방송", time: "10:00" }
  ]
};

// 로컬 스토리지에서 이벤트를 불러오기
const loadEventsFromLocalStorage = () => {
  const storedEvents = JSON.parse(localStorage.getItem("events")) || {};
  return { ...defaultEvents, ...storedEvents }; // 기존 데이터와 병합
};

// 로컬 스토리지에 이벤트 저장
const saveEventToLocalStorage = (date, event) => {
  const storedEvents = loadEventsFromLocalStorage();
  if (!storedEvents[date]) {
    storedEvents[date] = [];
  }
  storedEvents[date].push(event);
  localStorage.setItem("events", JSON.stringify(storedEvents));
};

// 초기 실행 시 기본 데이터를 로컬 스토리지와 병합 저장
if (!localStorage.getItem("events")) {
  localStorage.setItem("events", JSON.stringify(defaultEvents));
}

// 팝업 토글
correction.addEventListener("click", function () {
  popup.style.display = popup.style.display === "block" ? "none" : "block";
});

// 달력 렌더링
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

    // 날짜 클릭 시 스케줄 표시 및 날짜 업데이트
    dateElement.addEventListener("click", () => handleDateClick(i));
    calendarDates.appendChild(dateElement);
  }
}

// 날짜 클릭 이벤트
const handleDateClick = (day) => {
  const clickedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  if (selectedDate === clickedDate) {
    scheduleContainer.forEach((element) => {
      element.style.display = "none";
    });
    selectedDate = null;
  } else {
    selectedDate = clickedDate;
    const scheduleHeader = document.getElementById("schedule-currentday");
    scheduleHeader.textContent = `${currentYear}년 ${currentMonth + 1}월 ${day}일`;
    scheduleContainer.forEach((element) => {
      element.style.display = "flex";
    });
    updateScheduleSection(clickedDate);
  }
};

// 팝업 데이터 저장 및 렌더링
function saveEventFromPopup() {
  const scheduleInput = popup.querySelector('input[type="text"]');
  const scheduleTime = popup.querySelector('input[type="time"]');
  const eventText = scheduleInput.value.trim();
  const eventTime = scheduleTime.value;

  if (!eventText || !eventTime || !selectedDate) {
    alert("모든 필드를 입력해 주세요!");
    return;
  }

  const newEvent = { text: eventText, time: eventTime };

  saveEventToLocalStorage(selectedDate, newEvent);

  popup.style.display = "none";
  scheduleInput.value = "";
  scheduleTime.value = "";

  updateScheduleSection(selectedDate);
}

// 스케줄 섹션 업데이트
const updateScheduleSection = (date) => {
  const scheduleSection = document.querySelector(".schedule-section");
  scheduleSection.innerHTML = ""; // 기존 내용 초기화

  const storedEvents = loadEventsFromLocalStorage();

  if (storedEvents[date] && storedEvents[date].length > 0) {
    storedEvents[date].forEach((event) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${event.text} - ${event.time}`;
      scheduleSection.appendChild(listItem);
    });
  } else {
    const noEventItem = document.createElement("li");
    noEventItem.textContent = "일정이 없습니다.";
    scheduleSection.appendChild(noEventItem);
  }
};

// 이전/다음 달 이동
prevBtn.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar();
});

// 완료 버튼 이벤트 연결
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveEventFromPopup);

// 초기 렌더링
renderCalendar();
