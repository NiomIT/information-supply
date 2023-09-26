const header = document.getElementById("header");
const main = document.getElementById("main");
const body = document.getElementById("body");

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
  main.style.filter = "blur(3px)";
});
notificationCloseIcon.addEventListener("click", () => {
  notificationParentDiv.style.display = "none";
  main.style.filter = "blur(0px)";
});
// Notification end //

// ----------User Login Start -----------//
const userBadhonImgDiv = document.getElementById("user-badhon-img-div");

const userLoginAccount = document.getElementById("user-login-account");

const userLoginCloseIcon = document.getElementById("user-login-close-icon");

userBadhonImgDiv.addEventListener("click", () => {
  userLoginAccount.style.display = "block";
  main.style.filter = "blur(3px)";
});

userLoginCloseIcon.addEventListener("click", () => {
  userLoginAccount.style.display = "none";
  main.style.filter = "blur(0px)";
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
  main.style.filter = "blur(3px)";
});

editProfileModalCrossIcon.addEventListener("click", () => {
  editProfileParentDiv.style.display = "none";
  main.style.filter = "blur(0px)";
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
  main.style.filter = "blur(0px)";
});
// ------------Setting icon end------------//

// -------- Post View Recent Acctivety start ----------//
const recentAcctivety = document.getElementById("recent-acctivety");
const postViewParentDiv = document.getElementById("post-view-parent-div");
const postViewCross = document.getElementById("post-view-cross");

recentAcctivety.addEventListener("click", () => {
  postViewParentDiv.style.display = "block";
  main.style.filter = "blur(2px)";
  settingsModalDiv.style.filter = "blur(2px)";
});

postViewCross.addEventListener("click", () => {
  postViewParentDiv.style.display = "none";
  main.style.filter = "blur(0px)";
  settingsModalDiv.style.filter = "blur(0px)";
});
// -------- Post View Recent Acctivety end ----------//

// --------------Country All start------------- //
const countryAll = document.getElementById("country-all");
const countryAllParentDiv = document.getElementById("country-all-parent-div");
const countryAllCross = document.getElementById("country-all-cross");

countryAll.addEventListener("click", () => {
  countryAllParentDiv.style.display = "block";
  main.style.filter = "blur(2px)";
  settingsModalDiv.style.filter = "blur(2px)";
});

countryAllCross.addEventListener("click", () => {
  countryAllParentDiv.style.display = "none";
  main.style.filter = "blur(0px)";
  settingsModalDiv.style.filter = "blur(0px)";
});
// --------------Country All end------------- //

// -----------Area Code Start-----------//
const areaCode = document.getElementById("area-code");
const areaCodeParentDiv = document.getElementById("area-code-parent-div");
const areaCodeCorssBtn = document.getElementById("area-code-cross-btn");

areaCode.addEventListener("click", () => {
  areaCodeParentDiv.style.display = "block";
  main.style.filter = "blur(2px)";
  settingsModalDiv.style.filter = "blur(2px)";
});

areaCodeCorssBtn.addEventListener("click", () => {
  areaCodeParentDiv.style.display = "none";
  main.style.filter = "blur(0px)";
  settingsModalDiv.style.filter = "blur(0px)";
});
// -----------Area Code End-----------//
