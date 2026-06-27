// প্রথমে GSAP-এর সাথে স্ক্রোল অ্যানিমেশনের প্লাগইনটি যুক্ত করে নেওয়া হলো
gsap.registerPlugin(ScrollTrigger);

// বিভিন্ন স্ক্রিন সাইজের জন্য আলাদা মিডিয়া কুয়েরি অবজেক্ট তৈরি করলাম
let mm = gsap.matchMedia();

// স্ক্রিনের চওড়া ১০২৫ পিক্সেল বা তার বেশি হলে (যেমন: ল্যাপটপ ও ডেক্সটপ) এই কোড চলবে
mm.add("(min-width: 769px)", () => {
  
  // অ্যানিমেশন চলাকালীন পুরো #about সেকশনটিকে স্ক্রিনে স্থির বা লক রাখার জন্য
  ScrollTrigger.create({
    trigger: "#education", 
    start: "top 35%",      
    end: "+=9000",         
    pin: "#about",         
    pinSpacing: false      // false দেওয়ায় #about লক থাকলেও নিচের সেকশনগুলো ওপরে স্ক্রোল হতে পারবে
  });
  
  
  // মূল টাইমলাইন: কার্ডগুলোর অ্যানিমেশন একটার পর একটা সিরিয়ালে চালানোর জন্য
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#education", 
      start: "top 35%",      
      end: "+=9000",         
      pin: true,            // পুরো #education সেকশনটি স্ক্রিনে আটকে থাকবে
      scrub: 1,             // স্ক্রোলিংয়ের সাথে অ্যানিমেশনের গতিকে একদম স্মুথ রাখার জন্য
      markers: true        
    }
  });
  
  // --- কার্ড ১ অ্যানিমেশন (Card 1 Focus) ---
  
  // কার্ড ১ ডানে সরবে, দ্বিগুণ বড় হবে এবং জেন-ইনডেক্স ১৫ পেয়ে সবার ওপরে ভেসে উঠবে
  tl.to(".ec1", { x: "31vw", scale: 2, zIndex: 15, duration: 3, ease: "power2.out" })
    // [একই সাথে] কার্ড ২ কিছুটা দেরিতে (delay: 0.5) বাঁয়ে সরে গিয়ে কার্ড ১-কে জায়গা করে দেবে
    .to(".ec2", { x: "-31vw", delay: 0.5, duration: 2, ease: "power2.out" }, "<")
    
    // কার্ড ১-এর বড় অবস্থাটি স্ক্রিনে সামান্য সময় ধরে রাখার জন্য (Hold Point)
    .to(".ec1", { x: "30vw", scale: 2, zIndex: 15, duration: 0.5, ease: "none" })
    
    // কার্ড ১ স্বাভাবিক সাইজে (scale: 1) এবং কম জেন-ইনডেক্সে (zIndex: 5) তার মূল জায়গায় ফিরে যাবে
    .to(".ec1", { x: 0, scale: 1, zIndex: 5, duration: 1, ease: "power2.inOut" })
    // [একই সাথে] কার্ড ২-ও তার নিজের আগের জায়গায় (x: 0) ফিরে আসবে
    .to(".ec2", { x: 0, delay: 0, duration: 0.5, ease: "power2.inOut" }, "<")
  
  
  // --- কার্ড ২ অ্যানিমেশন (Card 2 Focus) ---
  
  // কার্ড ২ নিজের জায়গাতেই দাঁড়িয়ে বড় হবে এবং সবার ওপরে (zIndex: 15) চলে আসবে
  .to(".ec2", { x: 0, scale: 2, zIndex: 15, duration: 3, ease: "power1.out" })
  // কার্ড ২-এর বড় অবস্থাটি স্ক্রিনে সামান্য সময় ধরে রাখার জন্য (Hold Point)
  .to(".ec2", { x: 0, scale: 2, zIndex: 15, duration: 0.8, ease: "none" })
  // কার্ড ২ স্বাভাবিক সাইজে ফিরে যাবে এবং নিচে (zIndex: 5) চলে যাবে
  .to(".ec2", { x: 0, scale: 1, zIndex: 5, duration: 0.8, ease: "power1.in" })
    
  
  // --- কার্ড ৩ অ্যানিমেশন (Card 3 Focus) ---
  
  // কার্ড ৩ বাঁয়ে সরবে, দ্বিগুণ বড় হবে এবং সবার ওপরে (zIndex: 15) আসবে
  .to(".ec3", { x: "-31vw", scale: 2, zIndex: 15, duration: 3, ease: "power2.out" })
  // [একই সাথে] কার্ড ২ কিছুটা দেরিতে (delay: 0.5) ডানে সরে গিয়ে কার্ড ৩-কে জায়গা করে দেবে
  .to(".ec2", { x: "31vw", delay: 0.5, duration: 2, ease: "power2.out" }, "<")
    
  // কার্ড ৩-এর বড় অবস্থাটি স্ক্রিনে সামান্য সময় ধরে রাখার জন্য (Hold Point)
  .to(".ec3", { x: "-31vw", scale: 2, zIndex: 15, duration: 0.5, ease: "none" })
    
  // কার্ড ৩ স্বাভাবিক সাইজে এবং কম জেন-ইনডেক্সে তার মূল জায়গায় ফিরে যাবে
  .to(".ec3", { x: 0, scale: 1, zIndex: 5, duration: 1, ease: "power2.inOut" })
  // [একই সাথে] কার্ড ২-ও তার নিজের আগের জায়গায় (x: 0) ফিরে আসবে
  .to(".ec2", { x: 0, delay: 0, duration: 0.5, ease: "power2.inOut" }, "<")
    
});

// মোবাইল স্ক্রিনের জন্য আলাদা নিয়ম (ম্যাক্স-উইডথ 480px)
mm.add("(max-width: 480px)", () => {
  // মোবাইলে কোনো অ্যানিমেশন হবে না, নরমাল স্ক্রোল হবে
});
