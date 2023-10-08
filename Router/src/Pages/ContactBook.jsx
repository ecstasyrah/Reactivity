import { useState, useEffect } from "react";
import "../App.css";
import "../Pages/des.css";

function ContactBook() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({});
  const [formValid, setFormValid] = useState(true);
  const [searchId, setSearchId] = useState("");
  const [search, setSearch] = useState(null);
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/troy1129/jsonplaceholder/db")
      .then((response) => {
        if (!response.ok) {
          throw new Error("NOT OK");
        }
        return response.json();
      })
      .then((jsonData) => {
        setStudents(jsonData.data);
        console.log(jsonData);
      })
      .catch((error) => {
        console.error("ERROR FETCHING DATA: ", error);
      });
  }, []);

  useEffect(() => {
    if (editStudent) {
      setNewStudent(editStudent);
    }
  }, [editStudent]);

  const handleAddStudent = () => {
    if (
      newStudent.id &&
      newStudent.name &&
      newStudent.age &&
      newStudent.course
    ) {
      const updatedStudents = [...students, newStudent];
      setStudents(updatedStudents);
      setNewStudent({});
    } else {
      setFormValid(false);
    }
  };

  const handleUpdateStudent = () => {
    if (
      newStudent.id &&
      newStudent.name &&
      newStudent.age &&
      newStudent.course
    ) {
      const updatedStudents = students.map((students) => {
        if (students.id === editStudent.id) {
          return newStudent;
        }
        return students;
      });
      setStudents(updatedStudents);
      setNewStudent({});
      setEditStudent(null);
      setSearch(newStudent);
    } else {
      setFormValid(false);
    }
  };

  const handleCancelEdit = () => {
    setEditStudent(null);
    setNewStudent({});
  };

  const handleSearch = () => {
    const result = students.find((student) => student.id == searchId);
    setSearch(result || null);
  };

  const handleDeleteStudent = () => {
    console.log(editStudent);
    const updatedStudents = students.filter(
      (student) => student.id !== search.id
    );
    console.log(updatedStudents);
    setStudents(updatedStudents);
    setEditStudent(null);
    setSearch(null);
  };

  return (
    <div className="main5">
      <div className="title5">
        <h1>Contact Book</h1>
        <img src="" alt="" />
      </div>
      <div className="box5">
        <div className="leftB5">
          {!formValid}
          <div className="insideLeft5">
            <div className="searchstud4">
              <label htmlFor="id">ID SEARCH</label>
              <br />
              <input
                id="search"
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter ID"
              />
              <br />
              <button onClick={handleSearch} className="button5">
                Search
              </button>
              {search ? (
                <div className="displaystud5">
                  <h3>Contact Details</h3>
                  <p>ID: {search.id}</p>
                  <p>Name: {search.name}</p>
                  <p>Age: {search.age}</p>
                  <p>Course: {search.course}</p>
                  {!editStudent && (
                    <>
                      <button
                        onClick={() => setEditStudent(search)}
                        className="button5"
                        style={{ marginRight: 5 }}
                      >
                        Edit
                      </button>
                      <button onClick={handleDeleteStudent} 
                      className="button5"
                      style={{ marginLeft: 5 }}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              ) : (
                <p>Who?</p>
              )}
            </div>
          </div>
        </div>
        <div className="rightB5">
          <div className="display5">
            <ul style={{ listStyle: "none" }}>
              {students.map((index) => (
                <li key={index.id}>{index.id} </li>
              ))}
            </ul>
          </div>
          <div className="input5">
            <input
              id="id"
              type="text"
              value={newStudent.id || ""}
              placeholder="ID"
              onChange={(e) =>
                setNewStudent({ ...newStudent, id: e.target.value })
              }/>
            <br />
            <input
              id="name"
              type="text"
              value={newStudent.name || ""}
              placeholder="Name"
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }/>
            <br />
            <input
              id="age"
              type="text"
              value={newStudent.age || ""}
              placeholder="Age"
              onChange={(e) =>
                setNewStudent({ ...newStudent, age: e.target.value })
              }/>
            <br />
            <input
              id="course"
              type="text"
              value={newStudent.course || ""}
              placeholder="Course"
              onChange={(e) =>
                setNewStudent({ ...newStudent, course: e.target.value })
              }/>
          </div>
          <div>
            {editStudent ? (
              <div className="edit5">
                <button
                  type="submit"
                  onClick={handleUpdateStudent}
                  className="editb5"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="cancelb5"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="submit"
                onClick={handleAddStudent}
                className="button5"
              >
                Add
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBook;