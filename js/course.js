import { getCourseDetails , getAndShowRelatedCourses } from "./func/shared.js";

window.addEventListener('load', ()=>{
    getCourseDetails()
    getAndShowRelatedCourses().then(data => {
        console.log(data);
        
    })
    
})