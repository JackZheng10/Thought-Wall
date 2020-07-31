let URLs = {};

if (process.env.NODE_ENV === "production") {
  URLs = {
    baseURL: "/api",
    socketURL: "https://thoughtwall.herokuapp.com/api",
  };
} else {
  URLs = {
    baseURL: "http://localhost:5000/api",
    socketURL: "http://localhost:5000/api",
  };
}

export default URLs;
