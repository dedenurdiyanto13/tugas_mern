const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1:27017/mern", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });
mongoose.connect(
  "mongodb+srv://dede:ananiu12@cluster0.qiqgntv.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

// Menambah 1 data
// const contact1 = new Contact({
//   nama: "Ana",
//   nohp: "081324524148",
//   email: "ana@gmail.com",
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));
