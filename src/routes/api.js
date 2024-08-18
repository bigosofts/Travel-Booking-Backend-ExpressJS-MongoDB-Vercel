const express = require("express");
const router = express.Router();

//import post controller
const postController = require("../controllers/postController");
const travelPackageController = require("../controllers/travelPackageController");
const orderPackageController = require("../controllers/orderController");
const clientProfileController = require("../controllers/clientController");
const instructorprofileController = require("../controllers/instructorController");
const loginController = require("../controllers/loginController");
const widgetController = require("../controllers/widgetController");
const messageController = require("../controllers/messageController");
const conversationController = require("../controllers/conversationController");

//Middleware Import
const passEncrypted = require("../middlewares/passwordEncryption");
const authverify = require("../middlewares/authverifyMiddleware");

//demo request for test
router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express.js!" });
});

//authentication
router.post("/isAdmin", (req, res) => {
  let userName = req.headers["userName"];
  let userRole = req.headers["userRole"];
  let isAdmin = req.headers["isAdmin"];

  res.status(200).json({
    status: "Alhamdulillah",
    data: {
      userName,
      userRole,
      isAdmin,
    },
  });
});

router.post("/logout", (req, res) => {
  let userName = req.headers["userName"];
  let userRole = req.headers["userRole"];
  let isAdmin = req.headers["isAdmin"];

  res.clearCookie("token_travel").status(200).json({
    status: "Alhamdulillah",
    data: {
      userName,
      userRole,
      isAdmin,
    },
  });
});

//signup
router.post(
  "/create-client",
  passEncrypted.hashedPassword,
  clientProfileController.createClient
);

router.post(
  "/create-instructor",
  passEncrypted.hashedPassword,
  instructorprofileController.createInstructor
);

//Login api for students and teachers
router.post(
  "/client-login",
  passEncrypted.checkPasswordClient,
  loginController.clientLogin
);
router.post(
  "/instructor-login",
  passEncrypted.checkPasswordInstructor,
  loginController.instructorLogin
);

//create
router.post("/create-post", postController.createPost);
router.post("/create-package", travelPackageController.createPackage);
router.post("/create-order", orderPackageController.createOrder);
router.post("/create-widget", widgetController.createWidget);
router.post("/create-message", messageController.createMessage);
router.post("/create-conversation", conversationController.createConversation);

//read
router.post("/select-posts", postController.selectPosts);
router.post("/select-posts-public", postController.selectPosts);
router.post("/select-packages", travelPackageController.selectPackages);
router.post("/select-packages-public", travelPackageController.selectPackages);
router.post("/select-orders", orderPackageController.selectOrders);
router.post("/select-clients", clientProfileController.selectClients);
router.post("/select-all-clients", clientProfileController.selectAllClients);
router.post(
  "/select-all-clients-public",
  clientProfileController.selectAllClientsPublic
);
router.post("/select-widgets", widgetController.selectWidgets);
router.post("/select-widgets-public", widgetController.selectWidgets);
router.post("/select-messages", messageController.selectMessages);
router.post("/select-messages-public", messageController.selectMessages);
router.post(
  "/select-conversations",
  conversationController.selectConversations
);
router.post(
  "/select-conversations-public",
  conversationController.selectConversations
);
router.post(
  "/select-instructors",
  instructorprofileController.selectInstructors
);
router.post(
  "/select-all-instructors",
  instructorprofileController.selectAllInstructors
);
router.post(
  "/select-all-instructors-public",
  instructorprofileController.selectAllInstructorsPublic
);

//update
router.put("/update-post", postController.updatePost);
router.put("/update-package", travelPackageController.updatePackage);
router.put("/update-order", orderPackageController.updateOrder);
router.put("/update-client", clientProfileController.updateClient);
router.put("/update-instructor", instructorprofileController.updateInstructor);
router.put("/update-widget", widgetController.updateWidget);
router.put("/update-message", messageController.updateMessage);
router.put("/update-conversation", conversationController.updateConversation);

//delete
router.delete("/delete-post/:id", postController.deletePost);
router.delete("/delete-package/:id", travelPackageController.deletePackage);
router.delete("/delete-client/:id", clientProfileController.deleteClient);
router.delete(
  "/delete-instructor/:id",
  instructorprofileController.deleteInstructor
);
router.delete("/delete-order/:id", orderPackageController.deleteOrder);
router.delete("/delete-widget/:id", widgetController.deleteWidget);
router.delete("/delete-message/:id", messageController.deleteMessage);
router.delete(
  "/delete-conversation/:id",
  conversationController.deleteConversation
);

module.exports = router;
