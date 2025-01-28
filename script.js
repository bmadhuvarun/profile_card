const userData = {
  userName: "B. Madhu Varun",
  userTitle: "Student",
  userAbout:
    "To secure a challenging role in a reputable company where I can utilize my technical skills, creativity, and problem-solving abilities to drive success.",
  profileUrl: "Assets/1.jpg",
  coverUrl: "Assets/3.jpg",
};

const userNameBox = document.querySelector(".user-name");
const userTitleBox = document.querySelector(".user-title");
const userAboutBox = document.querySelector(".user-about");
const coverWrapper = document.querySelector(".cover-wrapper");
const profileWrapper = document.querySelector(".avatar-wrapper");

const profileImg = document.createElement("img");
profileImg.src = userData.profileUrl;
const coverImg = document.createElement("img");
coverImg.src = userData.coverUrl;

setTimeout(() => {
  insertUserDetails();
  document.querySelector(".profile-card").classList.remove("loading");
  removeSkeleton();
}, 3000);

const insertUserDetails = () => {
  userNameBox.textContent = userData.userName;
  userTitleBox.textContent = userData.userTitle;
  userAboutBox.textContent = userData.userAbout;
  coverWrapper.append(coverImg);
  profileWrapper.append(profileImg);
};

const removeSkeleton = () => {
  document.querySelectorAll(".skeleton").forEach((elem) => {
    elem.classList.remove("skeleton");
  });
};
