const school = {
  teachers: [
  {
  id: 1,
  name: "Pinchas",
  subjects: ["chemistry", "biology", "physics"],
  students: [],
  capacityLeft: 3,
  },
  {
  id: 2,
  name: "Williams",
  subjects: ["history", "ethics"],
  students: [],
  capacityLeft: 2,
  },
  ],
  students: [
  {
  id: 10,
  name: "Jennifer",
  age: 20,
  },
  {
  id: 11,
  name: "Howard",
  age: 23,
  },
  {
  id: 12,
  name: "Old-Timmy",
  age: 86,
  },
  {
  id:13,
  name: "Houston",
  age: 21,
  },
  ],
  findPerson(type, id) {
    type = type.toLowerCase();
    if(type === "teacher")
      type = "teachers";
    if(type === "student")
      type = "students";

    for(person of school[type]) {
      if(person.id === id) {
        return person;
      }
    }
  },
  assignStudent(id, subject) {
    const student = this.findPerson("students", id);
    let fullCapacity = false;
    for(let teacher of school.teachers) {
      if(teacher.capacityLeft === 0) {
        fullCapacity = true;
      } else {
        if(teacher.subjects.includes(subject) && teacher.capacityLeft > 0) {
          teacher.capacityLeft--;
          teacher.students.push(student);
          break;
        }
      }
    }
    if(fullCapacity) {
      console.log("Sorry no available teachers left");
    }
  },
  assignTeachersSubject(id, subject) {
    const teacher = this.findPerson("teacher", id);
    if(!teacher.subjects.includes(subject)) {
      teacher.subjects.push(subject);
    }
  },
  addGrade(id, subject, grade) {
    const student = this.findPerson("student", id);
    if(student.grades === undefined) {
      student.grades = {};
    }

    student.grades[subject] = grade;
  }

 };

 school.assignStudent(13, "chemistry");
 school.assignTeachersSubject(1, "asdas");
 school.addGrade(13, "Math", 97)
 school.addGrade(13, "English", 57)
 console.log(school.findPerson("student", 13));
