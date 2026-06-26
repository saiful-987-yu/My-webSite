console.log("রেসপন্সিভ পোর্টফোলিও ওয়েবসাইটটি সফলভাবে প্রস্তুত!");
// ১. প্রথমে টেক্সটের প্রতিটি অক্ষরকে আলাদা <span> ট্যাগে ভাগ করা হচ্ছে
const textElement = document.querySelector(".ani1");
const textContent = textElement.textContent;
textElement.innerHTML = textContent
  .split("")
  .map(char => char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`)
  .join("");

//একটার পর একটা অক্ষরের কালার পরিবর্তন করার অ্যানিমেশন
gsap.to(".ani1 span", {
  color: "#f00",
  duration: 0.5, // প্রতিটি অক্ষরের কালার বদলাতে কত সময় লাগবে
  stagger: {
    each: 0.2, // একটা অক্ষরের কতক্ষণ পর পরের অক্ষর শুরু হবে
    repeat: -1,   // আজীবন চলতে থাকবে
    yoyo: true   // কালার আবার আগের অবস্থায় ফিরে আসবে
  },
  ease: "power1.inOut"
});
