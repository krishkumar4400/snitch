import userModel from "../models/user.model.js";
import asyncHandler from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
});

const logoutUser = asyncHandler(async (req, res) => {});

const getCurrentUser = asyncHandler(async (req, res) => {});
