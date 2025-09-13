const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message === "") return;

  // Display user message
  displayMessage(message, "user");

  // Clear input
  userInput.value = "";

  // Simulated bot response
  setTimeout(() => {
    displayMessage(getBotResponse(message), "bot");
  }, 500);
});

function displayMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = `chat-message ${sender}-message`;
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("library")) {
    return "📚 The library is open from 8 AM to 8 PM.";
  } else if (input.includes("dining")) {
    return "🍲 Today's dining menu includes vegan and non-veg options at Main Hall.";
  } else if (input.includes("schedule")) {
    return "🗓️ You can check your class schedule in the student portal.";
  } else if (input.includes("facilities")) {
    return "🏢 Sports, cultural, and admin blocks are open from 9 AM to 6 PM.";
  } else {
    return "🤖 I’m not sure, please check the campus website or contact admin.";
  }
}

/* Quick Access Section Info */
function showInfo(section) {
  let info = "";
  switch (section) {
    case "library":
      info = "📚 Library: Open 8 AM – 8 PM, Ground Floor of Main Building.";
      break;
    case "student":
      info = "🎓 Student Blocks: Divided by departments, open 9 AM – 6 PM.";
      break;
    case "sports":
      info = "🏀 Sports Block: Gym, basketball court, and stadium. Open 6 AM – 10 PM.";
      break;
    case "cultural":
      info = "🎭 Cultural Block: Auditorium, music, and art rooms. Open 9 AM – 8 PM.";
      break;
    case "admin":
      info = "🏛️ Admin Block: Registrar, Finance, Admissions. Open 9 AM – 5 PM.";
      break;
  }
  displayMessage(info, "bot");
}

/* ====== Graphs Section ====== */
const ctxLibrary = document.getElementById("libraryGraph").getContext("2d");
new Chart(ctxLibrary, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [{
      label: "Library Visitors",
      data: [120, 150, 180, 140, 200],
      backgroundColor: "#003366"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

const ctxDining = document.getElementById("diningGraph").getContext("2d");
new Chart(ctxDining, {
  type: "pie",
  data: {
    labels: ["Veg", "Non-Veg", "Vegan"],
    datasets: [{
      label: "Dining Preferences",
      data: [45, 35, 20],
      backgroundColor: ["#4CAF50", "#FF5733", "#FFC300"]
    }]
  },
  options: {
    responsive: true
  }
});
