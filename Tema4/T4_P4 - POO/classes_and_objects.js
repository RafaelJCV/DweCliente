const courseData = {
  id: 101,
  title: "Desarrollo Web con JavaScript",
  category: "Programación",
  duration: 60,
  price: 129.99,
  active: true,
  instructor: {
    id: 10,
    name: "Laura García",
    specialty: "Desarrollo Frontend",
  },
  students: [
    {
      id: 1,
      name: "Carlos Ruiz",
      age: 22,
      grade: 8.5,
      completed: true,
    },
    {
      id: 2,
      name: "Ana López",
      age: 19,
      grade: 9.2,
      completed: true,
    },
    {
      id: 3,
      name: "Pedro Martín",
      age: 25,
      grade: 4.3,
      completed: false,
    },
    {
      id: 4,
      name: "Lucía Fernández",
      age: 21,
      grade: 7.8,
      completed: true,
    },
    {
      id: 5,
      name: "David Sánchez",
      age: 23,
      grade: 3.5,
      completed: false,
    },
    {
      id: 6,
      name: "María Torres",
      age: 20,
      grade: 6.7,
      completed: true,
    },
  ],
};

class Course {
  id;
  title;
  category;
  duration;
  price;
  active;
  instructor;
  students;

  constructor(courseParam) {
    {
      this.id = courseParam.id;
      this.title = courseParam.title;
      this.category = courseParam.category;
      this.duration = courseParam.duration;
      this.price = courseParam.price;
      this.active = courseParam.active;
      this.instructor = courseParam.instructor;
      this.students = courseParam.students;
    }
  }

  getInfo() {
    return;
    `Título: ${this.title}
    Categoría: ${this.category}
    Duración: ${this.duration}
    Precio del curso: ${this.price}`;
  }

  getStudentById(id) {
    return this.students.find((student) => student.id === id);
  }

  getPassedStudents() {
    return this.students.filter((students) => students.grade >= 5);
  }

  getFailedStudents() {
    return this.students.filter((students) => students.grade < 5);
  }

  getCompletedStudents() {
    return this.students.filter((students) => students.completed === true);
  }

  getStudentNames() {}

  getAverageGrade() {
    if (this.students.length === 0) {
      return 0;
    }
    return (
      this.students.reduce((acc, student) => {
        return acc + student.grade;
      }, 0) / this.students.length
    );
  }
}

course = new Course(courseData);
