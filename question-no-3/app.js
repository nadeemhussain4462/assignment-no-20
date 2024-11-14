let students = [];
let editIndex = null;

let studentForm = document.getElementById("studentForm");
let studentTable = document
  .getElementById("studentTable")
  .querySelector("tbody");
let editFormContainer = document.getElementById("editFormContainer");
let editForm = document.getElementById("editForm");

// Add Student
studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value;

  students.push({ name, age, grade });
  displayStudents();

  studentForm.reset();
});

// Display Students in Table
function displayStudents() {
  studentTable.innerHTML = "";
  students.forEach((student, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteStudent(${index})">Delete</button>
      </td>
    `;

    studentTable.appendChild(row);
  });
}

// Delete Student
function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

// Edit Student
function editStudent(index) {
  editIndex = index;
  let student = students[index];

  document.getElementById("editName").value = student.name;
  document.getElementById("editAge").value = student.age;
  document.getElementById("editGrade").value = student.grade;

  editFormContainer.classList.remove("hidden");
}

// Update Student
editForm.addEventListener("submit", function (event) {
  event.preventDefault();

  students[editIndex] = {
    name: document.getElementById("editName").value,
    age: document.getElementById("editAge").value,
    grade: document.getElementById("editGrade").value,
  };

  editFormContainer.classList.add("hidden");
  displayStudents();
});
