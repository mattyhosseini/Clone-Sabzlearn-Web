import { getAndShowCategoryCourses } from "./func/shared.js";

window.addEventListener("load", () => {
  getAndShowCategoryCourses().then(data=>{
    console.log(data);
    
  })
});
