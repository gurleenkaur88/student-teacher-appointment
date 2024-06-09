let teachers = [
    { id: 1, name: "John Doe", username: "johndoe", password: "123456", department: "Mathematics", subject: "Algebra" },
    { id: 2, name: "Jane Smith", username: "janesmith", password: "password", department: "Science", subject: "Physics" }
  ];
  
  let students = [];
  
  let appointments = [];
  
  function teacherLogin() {
    const username = document.getElementById('teacherUsername').value;
    const password = document.getElementById('teacherPassword').value;
  
    const teacher = teachers.find(teacher => teacher.username === username && teacher.password === password);
    if (teacher) {
      alert(`Welcome ${teacher.name}`);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  
  function registerStudent() {
    const name = document.getElementById('studentName').value;
    const username = document.getElementById('studentUsername').value;
    const password = document.getElementById('studentPassword').value;
  
    const student = { id: students.length + 1, name, username, password };
    students.push(student);
    alert("Student registered successfully!");
  }