import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  labelStyles,
  inputStyles,
  buttonStyles,
  containerStyles,
} from "./style.tsx";
interface Student {
  rollNumber: string;
  studentName: string;
  checkInTime: string;
  checkOutTime: string;
}
interface Errors {
  rollNumber?: string;
  studentName?: string;
  checkInTime?: string;
  checkOutTime?: string;
}

const StudentForm: React.FC = () => {
  const [formData, setFormData] = useState<Student>({
    rollNumber: "",
    studentName: "",
    checkInTime: "",
    checkOutTime: "",
  });

  const [students, setStudents] = useState<Student[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.rollNumber) {
      newErrors.rollNumber = "Roll number is required";
    }
    if (!formData.studentName) {
      newErrors.studentName = "Student name is required";
    }
    if (
      !formData.checkInTime ||
      !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
        formData.checkInTime
      )
    ) {
      newErrors.checkInTime = "Please enter a valid time (HH:MM:SS)";
    }
    if (
      !formData.checkOutTime ||
      !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
        formData.checkOutTime
      )
    ) {
      newErrors.checkOutTime = "Please enter a valid time (HH:MM:SS)";
    }
    return newErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setStudents([...students, formData]);
      setFormData({
        rollNumber: "",
        studentName: "",
        checkInTime: "",
        checkOutTime: "",
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="App" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        {/* @ts-ignore */}
        <div style={containerStyles}>
          <h1>Student Attendance</h1>
          <div>
            {/* @ts-ignore */}
            <label style={labelStyles} htmlFor="rollNumber">
              Roll Number
            </label>
            <input
              style={inputStyles}
              type="text"
              name="rollNumber"
              id="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
            />
            {errors.rollNumber && (
              <p style={{ color: "red" }}>{errors.rollNumber}</p>
            )}
          </div>
          <div>
            {/* @ts-ignore */}
            <label style={labelStyles} htmlFor="studentName">
              Student Name
            </label>
            <input
              style={inputStyles}
              type="text"
              name="studentName"
              id="studentName"
              value={formData.studentName}
              onChange={handleChange}
            />
            {errors.studentName && (
              <p style={{ color: "red" }}>{errors.studentName}</p>
            )}
          </div>
          <div>
            {/* @ts-ignore */}
            <label style={labelStyles} htmlFor="checkInTime">
              Check In Time
            </label>
            <input
              style={inputStyles}
              type="time"
              name="checkInTime"
              id="checkInTime"
              value={formData.checkInTime}
              onChange={handleChange}
            />
            {errors.checkInTime && (
              <p style={{ color: "red" }}>{errors.checkInTime}</p>
            )}
          </div>
          <div>
            {/* @ts-ignore */}
            <label style={labelStyles} htmlFor="checkOutTime">
              Check Out Time
            </label>
            <input
              style={inputStyles}
              type="time"
              name="checkOutTime"
              id="checkOutTime"
              value={formData.checkOutTime}
              onChange={handleChange}
            />
            {errors.checkOutTime && (
              <p style={{ color: "red" }}>{errors.checkOutTime}</p>
            )}
          </div>
          <button style={buttonStyles} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>

      <div
        style={{
          flex: 1,
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f9",
        }}
      >
        <div
          style={{
            ...containerStyles,
            textAlign: "center",
            margin: "auto",
            maxWidth: "800px",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            🎓 Student List: Total Students{" "}
            <span style={{ color: "#007BFF" }}>{students.length}</span>
          </h1>
          {students.map((student, index) => (
            <div
              key={index}
              style={{
                margin: "10px 0",
                padding: "15px",
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                backgroundColor: index % 2 === 0 ? "#f9f9ff" : "#ffffff",
                transition: "transform 0.3s",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                style={{
                  margin: "5px 0",
                  fontWeight: "bold",
                  color: "#555",
                }}
              >
                📋 Roll Number:{" "}
                <span style={{ color: "#333" }}>{student.rollNumber}</span>
              </p>
              <p style={{ margin: "5px 0", color: "#555" }}>
                👤 Name:{" "}
                <span style={{ fontWeight: "bold", color: "#333" }}>
                  {student.studentName}
                </span>
              </p>
              <p style={{ margin: "5px 0", color: "#28a745" }}>
                🕒 Check In: <span>{student.checkInTime}</span>
              </p>
              <p style={{ margin: "5px 0", color: "#dc3545" }}>
                🕓 Check Out: <span>{student.checkOutTime}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
