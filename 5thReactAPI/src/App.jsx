import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./des.css";
import { useEffect } from "react";

function App() {
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
    <div className="main">
      <div className="title">
        <h1>Contact Book</h1>
        <img src="" alt="" />
      </div>
      <div className="box">
        <div className="leftB">
          {!formValid}
          <div className="insideLeft">
            <div className="searchstud">
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
              <button onClick={handleSearch} className="button">
                Search
              </button>
              {search ? (
                <div className="displaystud">
                  <h3>Contact Details</h3>
                  <p>ID: {search.id}</p>
                  <p>Name: {search.name}</p>
                  <p>Age: {search.age}</p>
                  <p>Course: {search.course}</p>
                  {!editStudent && (
                    <>
                      <button
                        onClick={() => setEditStudent(search)}
                        className="button"
                        style={{ marginRight: 5 }}
                      >
                        Edit
                      </button>
                      <button onClick={handleDeleteStudent} 
                      className="button"
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
        <div className="rightB">
          <div className="display">
            <ul style={{ listStyle: "none" }}>
              {students.map((index) => (
                <li key={index.id}>{index.id} </li>
              ))}
            </ul>
          </div>
          <div className="input">
            <input
              id="id"
              type="text"
              value={newStudent.id || ""}
              placeholder="ID"
              onChange={(e) =>
                setNewStudent({ ...newStudent, id: e.target.value })
              }
            />
            <br />
            <input
              id="name"
              type="text"
              value={newStudent.name || ""}
              placeholder="Name"
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <br />
            <input
              id="age"
              type="text"
              value={newStudent.age || ""}
              placeholder="Age"
              onChange={(e) =>
                setNewStudent({ ...newStudent, age: e.target.value })
              }
            />
            <br />
            <input
              id="course"
              type="text"
              value={newStudent.course || ""}
              placeholder="Course"
              onChange={(e) =>
                setNewStudent({ ...newStudent, course: e.target.value })
              }
            />
          </div>
          <div>
            {editStudent ? (
              <>
                <button
                  type="submit"
                  onClick={handleUpdateStudent}
                  className="button"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="button"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="submit"
                onClick={handleAddStudent}
                className="button"
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

export default App;
