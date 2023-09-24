const body = document.getElementById("body");
const faSliders = document.getElementById("fa-sliders");
const settingsModalDiv = document.getElementById("settings-modal-div");
const modalCloseButton = document.getElementById("modal-close-button");

// get for notification modal //
const bellIconDiv = document.getElementById("bell-icon-div");

const notificationModal = document.getElementById("notification-modal");

const notificationClose = document.getElementById("notification-close");
// end notification modal //

// start use modal //
const userImg = document.getElementById("user-img");
const userModalParentDiv = document.getElementById("user-modal-parent-div");
const userCroseIcon = document.getElementById("user-crose-icon");
// end use modal //

// get for comment modal //
const commentButton = document.getElementById("comment-button");

const commentModalCloseBtn = document.getElementById("comment-modal-close-btn");

const commentModalParentDiv = document.getElementById(
  "comment-modal-parent-div"
);
// end comment modal //

// get for like button //
const likeButton = document.getElementById("like-button");
let likeTextCount = document.getElementById("like-text-count");

// end like button //

// Notification function start //
bellIconDiv.addEventListener("click", () => {
  console.log(notificationModal);
  notificationModal.style.display = "block";
  body.style.filter = "blur(3px)";
});

notificationClose.addEventListener("click", () => {
  notificationModal.style.display = "none";
  body.style.filter = "blur(0px)";
});
// Notification function end //

// user function start //
userImg.addEventListener("click", () => {
  console.log("btn clicked");
  userModalParentDiv.style.display = "block";
  body.style.filter = "blur(3px)";
});

userCroseIcon.addEventListener("click", () => {
  userModalParentDiv.style.display = "none";
  body.style.filter = "blur(0px)";
});
// user function end //

// setting icon function start //
faSliders.addEventListener("click", () => {
  settingsModalDiv.style.display = "block";
});

modalCloseButton.addEventListener("click", function () {
  settingsModalDiv.style.display = "none";
});
// setting icon function end //

// Comment Button function Start //
commentButton.addEventListener("click", () => {
  commentModalParentDiv.style.display = "block";
  body.style.filter = "blur(3px)";
});

commentModalCloseBtn.addEventListener("click", () => {
  commentModalParentDiv.style.display = "none";
  body.style.filter = "blur(0px)";
});
// Comment Button function End //

// Like button function start//

likeButton.addEventListener("click", () => {
  let previousLikeTextCount = +likeTextCount.innerText;

  if (previousLikeTextCount === +likeTextCount.innerText) {
    const likeCountIncrease = previousLikeTextCount + 1;
    likeTextCount.innerText = likeCountIncrease;
  }
});

// Like button function end //

// Report start //
const reportButton = document.getElementById("report-button");
const reportModalParentDiv = document.getElementById("report-modal-parent-div");
const reportCroseIcon = document.getElementById("report-crose-icon");

reportButton.addEventListener("click", () => {
  reportModalParentDiv.style.display = "block";
  body.style.filter = "blur(3px)";
});

reportCroseIcon.addEventListener("click", () => {
  reportModalParentDiv.style.display = "none";
  body.style.filter = "blur(0px)";
});
// Report End //

// Area Code Start //
const areaCode = document.getElementById("area-code");
const areaModalParentDiv = document.getElementById("area-modal-parent-div");
const areaCroseIcon = document.getElementById("area-crose-icon");

areaCode.addEventListener("click", () => {
  areaModalParentDiv.style.display = "block";
  body.style.filter = "blur(3px)";
});

areaCroseIcon.addEventListener("click", () => {
  areaModalParentDiv.style.display = "none";
  body.style.filter = "blur(0px)";
});
// Area Code End //

// Country All Modal Start //
const countryAll = document.getElementById("country-all");
const countryAllParentDiv = document.getElementById("country-all-parent-div");

const countryCrossBtn = document.getElementById("country-cross-btn");

countryAll.addEventListener("click", () => {
  countryAllParentDiv.style.display = "block";
  body.style.filter = "blur(3px)";
});

countryCrossBtn.addEventListener("click", () => {
  countryAllParentDiv.style.display = "none";
  body.style.filter = "blur(0px)";
});
// Country All Modal end //

// Post view modal start //
const recentAcctivety = document.getElementById("recent-acctivety");
const postViewParentDiv = document.getElementById("post-view-parent-div");

const postViewCross = document.getElementById("post-view-cross");

recentAcctivety.addEventListener("click", () => {
  postViewParentDiv.style.display = "block";
  body.style.filter = "blur(3px)";
});

postViewCross.addEventListener("click", () => {
  postViewParentDiv.style.display = "none";
  body.style.filter = "blur(0px)";
});
// Post view modal end//

// Gallery image load function start //
const inputFile = document.getElementById("input-file");
const galleryImg = document.getElementById("gallery-img");
const galleryImgParentDiv = document.getElementById("gallery-img-parent-div");
const galleryCrossIcone = document.getElementById("gallery-cross-icone");

inputFile.onchange = function () {
  galleryImg.src = URL.createObjectURL(inputFile.files[0]);
};

inputFile.addEventListener("click", () => {
  galleryImgParentDiv.style.display = "block";
});

galleryCrossIcone.addEventListener("click", () => {
  galleryImgParentDiv.style.display = "none";
});
// Gallery image load function end //

// In function start //
const inDiv = document.getElementById("in-div");
const editProfileParentDiv = document.getElementById("edit-profile-parent-div");
const editProfileModalCrossIcon = document.getElementById(
  "edit-profile-modal-cross-icon"
);

inDiv.addEventListener("click", () => {
  editProfileParentDiv.style.display = "block";
  body.style.filter = "blur(3px)";
});

editProfileModalCrossIcon.addEventListener("click", () => {
  editProfileParentDiv.style.display = "none";
  body.style.filter = "blur(0px)";
});
// In function End //

// Country All Modal End //
