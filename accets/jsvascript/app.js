const header = document.getElementById("header");
const main = document.getElementById("main");

// Notification start //
const bellIDiv = document.getElementById("bell-i-div");
const notificationParentDiv = document.getElementById(
  "notification-parent-div"
);
const notificationCloseIcon = document.getElementById(
  "notification-close-icon"
);

bellIDiv.addEventListener("click", () => {
  notificationParentDiv.style.display = "block";
});
notificationCloseIcon.addEventListener("click", () => {
  notificationParentDiv.style.display = "none";
});
// Notification end //

// ----------User Login Start -----------//
const userBadhonImgDiv = document.getElementById("user-badhon-img-div");

const userLoginAccount = document.getElementById("user-login-account");

const userLoginCloseIcon = document.getElementById("user-login-close-icon");

userBadhonImgDiv.addEventListener("click", () => {
  userLoginAccount.style.display = "block";
});

userLoginCloseIcon.addEventListener("click", () => {
  userLoginAccount.style.display = "none";
});
// -----------User Login End------------//

// ---------IN Logo Start------------//
const inDiv = document.getElementById("in-div");
const editProfileParentDiv = document.getElementById("edit-profile-parent-div");

const editProfileModalCrossIcon = document.getElementById(
  "edit-profile-modal-cross-icon"
);

inDiv.addEventListener("click", () => {
  editProfileParentDiv.style.display = "block";
});

editProfileModalCrossIcon.addEventListener("click", () => {
  editProfileParentDiv.style.display = "none";
});
// ----------IN Logo End------------//

// ------------Setting icon start-----------//
const settingIconDiv = document.getElementById("setting-icon-div");
const settingsModalDiv = document.getElementById("settings-modal-div");
const modalCloseButton = document.getElementById("modal-close-button");

settingIconDiv.addEventListener("click", () => {
  settingsModalDiv.style.display = "block";
});

modalCloseButton.addEventListener("click", () => {
  settingsModalDiv.style.display = "none";
});
// ------------Setting icon end------------//
