import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  // [1] get user details from frontend
  // [2] validation - not empty
  // [3] check if user allready exists :      username, email
  // [4] check for images , check for avatar
  // [5] upload them to cloudinary, avatar
  // [6] create user object - create entry in db
  // [7] remove password and refresh token field from response
  // [8] check for user creation
  // [9] return response
  //------------------------------------------

  // TODO:[1] get user details from frontend
  const { fullName, email, username, password } = req.body;
  console.log("email:", email);

  // TODO:[2] validation - not empty
  if (
    [fullname, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All Fields are required");
  }
  // TODO: [3] check if user allready exists :      username, email
  const existedUser = User.findOne({
    $or: [{ email }, { username }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }
  // TODO:[4] check for images , check for avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  // TODO:[5] upload them to cloudinary, check for avatar
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  if (!avatar) {
    throw new ApiError(400, "Avarat file is required");
  }
  // TODO:[6] create user object - create entry in db
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });
  // TODO:[7] remove password and refresh token field from response
  const createdUser = await User.findByID(user._id).select(
    "-password -refreshToken"
  );
  // TODO:[8] check for user creation
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }
  // TODO:[9] return response
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registerd Successfully"));
});

export { registerUser };
