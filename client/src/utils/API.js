// *** Include Modules: npm (axios)
import axios from "axios";

// Export axios GET, POST
export default {
  // Login user with the given id
  loginUser: function(userData) {
    return axios.post("/api/login", userData);
  },
  // Gets user with the given id
  getProfile: function(userId) {
    return axios.get("/profile/" + userId);
  },
  // Saves user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Get users for admin view of users needing mentor
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Update user to get mentor
  updateUser: function(userData) {
    return axios.put("/api/users/" + userData.id, userData);
  },
  // Changes user to Admin
  updateAdmin: function(userData) {
    return axios.put("/api/users/updateadmin/" + userData.id, userData);
  },
  // Changes user to Student
  updateStudent: function(userData) {
    return axios.put("/api/users/updatestudent/" + userData.id, userData);
  },
  // Saves lesson to the database
  saveLesson: function(userData) {
    return axios.post("/api/lessons", userData);
  },
  // Deletes lesson
  deleteLesson: function(lessonId) {
    return axios.delete("/api/lessons/" + lessonId)
  }
};
