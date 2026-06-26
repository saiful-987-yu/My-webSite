  console.log("রেসপন্সিভ পোর্টফোলিও ওয়েবসাইটটি সফলভাবে প্রস্তুত!");
  
  document.addEventListener("DOMContentLoaded", function() {
    // এই কোডটুকু সাময়িকভাবে বন্ধ করে দেওয়া হলো
    // const nameSpan = document.getElementById("username");
    // nameSpan.innerText = "আপনার নাম"; 
  });
  gsap.to(".logo",{
    color: "#f00",
    delay: 0,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "none"
  })
  gsap.to(".hci3",{
    color: "#f00",
    delay: 0,
    duration: 3,
    /**yoyo: true,**/
    repeat: 1,
    ease: "none",
    x: "180%",
    y: "-520%",
    sclae: 2,
  })

// GSAP এবং ScrollTrigger প্লাগইন ব্যবহার করে
gsap.to(".box1", {
  scrollTrigger: {
    trigger: "#home", // কোন জায়গায় আসলে অ্যানিমেশন শুরু হবে
    start: "top top", // স্ক্রিনের কোথায় আসলে আটকাবে
    end: "+=4000",   // ইউজারকে কতক্ষণ স্ক্রোল করতে বাধ্য করা হবে (ধরে রাখুন ২ চক্কর)
    pin: true, // পেজটাকে আটকে (Pin) রাখবে, নিচে নামতে দেবে না
    scrub: true, // স্ক্রোলের স্পিডের সাথে অ্যানিমেশনের স্পিড মিলবে
  },
  rotation: 1440, // ৭২০ ডিগ্রি মানে ঠিক দুইবার ঘুরবে (360 * 2)
  ease: "none"
});





