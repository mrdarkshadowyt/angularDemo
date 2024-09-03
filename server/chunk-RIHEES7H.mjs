import './polyfills.server.mjs';
import{B as k,D as E,E as A,a as r,b as m,c as d,d as _,e as t,f as e,g as l,h as p,i as n,j as s,o as P,r as O,t as y,u as w,x as S}from"./chunk-S3AS2QL5.mjs";var h=class i{constructor(a){this.router=a}activeRoute="";title="demo";navigateToHome(){this.router.navigate(["/"])}navigateTo(a){this.router.navigate([`/${a}`])}static \u0275fac=function(o){return new(o||i)(_(E))};static \u0275cmp=r({type:i,selectors:[["app-root"]],standalone:!0,features:[s],decls:39,vars:0,consts:[[1,"circle-container"],[1,"circle",3,"click"],[1,"quadrant","top-left",3,"click"],["viewBox","0 0 200 200",1,"curved-text-svg-tl",2,"transform","rotate(-45deg)"],["id","curve-about","d","M50,150 A100,100 0 0,1 150,150","fill","transparent"],["href","#curve-about","startOffset","50%"],[1,"quadrant","top-right",3,"click"],["viewBox","0 0 200 200",1,"curved-text-svg-tr",2,"transform","rotate(45deg)"],["id","curve-skills","d","M50,150 A100,100 0 0,1 150,150","fill","transparent"],["href","#curve-skills","startOffset","50%"],[1,"quadrant","bottom-left",3,"click"],["viewBox","0 0 200 200",1,"curved-text-svg-bl",2,"transform","rotate(-135deg)"],["id","curve-exp","d","M50,150 A100,100 0 0,1 150,150","fill","transparent"],["href","#curve-exp","startOffset","50%"],[1,"quadrant","bottom-right",3,"click"],["viewBox","0 0 200 200",1,"curved-text-svg-br",2,"transform","rotate(135deg)"],["id","curve-contact","d","M50,150 A100,100 0 0,1 150,150","fill","transparent"],["href","#curve-contact","startOffset","50%"],[1,"content"]],template:function(o,c){o&1&&(t(0,"nav")(1,"div",0)(2,"div",1),p("click",function(){return c.navigateToHome()}),e(),t(3,"ul")(4,"li")(5,"div",2),p("click",function(){return c.navigateTo("about")}),m(),t(6,"svg",3)(7,"defs"),l(8,"path",4),e(),t(9,"text")(10,"textPath",5),n(11," ABOUT "),e()()()()(),d(),t(12,"li")(13,"div",6),p("click",function(){return c.navigateTo("skills")}),m(),t(14,"svg",7)(15,"defs"),l(16,"path",8),e(),t(17,"text")(18,"textPath",9),n(19," SKILLS "),e()()()()(),d(),t(20,"li")(21,"div",10),p("click",function(){return c.navigateTo("exp")}),m(),t(22,"svg",11)(23,"defs"),l(24,"path",12),e(),t(25,"text")(26,"textPath",13),n(27," EXPERIENCE "),e()()(),d(),l(28,"br"),e()(),t(29,"li")(30,"div",14),p("click",function(){return c.navigateTo("contact")}),m(),t(31,"svg",15)(32,"defs"),l(33,"path",16),e(),t(34,"text")(35,"textPath",17),n(36," CONTACT "),e()()()()()()()(),d(),t(37,"div",18),l(38,"router-outlet"),e())},dependencies:[k],styles:["General[_ngcontent-%COMP%]   styling[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{padding:0;margin:0}h1[_ngcontent-%COMP%]{color:#2c3e50}a[_ngcontent-%COMP%]:active{color:#8134af}a[_ngcontent-%COMP%]{color:#080808;text-decoration:wavy}a[_ngcontent-%COMP%]:hover{text-decoration:underline}body[_ngcontent-%COMP%]{background-color:#b0b0b0}.circle-container[_ngcontent-%COMP%]{position:absolute;top:30%;left:10%;width:400px;height:400px;transition:transform .5s ease}.circle[_ngcontent-%COMP%]{position:absolute;top:70%;left:70%;width:200px;height:200px;background-image:url(https://github.com/mrdarkshadowyt/ABOUT-/blob/main/IMG_20240822_162648.jpg?raw=true);background-color:#3498db;background-size:cover;background-position:center;border-radius:50%;transform:translate(-50%,-50%);z-index:1;transition:transform .3s ease}.circle[_ngcontent-%COMP%]:hover{transform:translate(-50%,-50%) scale(2)}.quadrant[_ngcontent-%COMP%]{position:absolute;width:240px;height:240px;background-color:#708090;color:#fff;font-size:24px;display:flex;justify-content:center;align-items:center}s.curved-text-svg-tl[_ngcontent-%COMP%], .curved-text-svg-tr[_ngcontent-%COMP%], .curved-text-svg-bl[_ngcontent-%COMP%], .curved-text-svg-br[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;top:0;left:0}text[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:18px;fill:#fff;text-anchor:middle}.curved-text[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:20px;fill:#fff}textPath[_ngcontent-%COMP%]{text-anchor:middle;dominant-baseline:middle}.top-left[_ngcontent-%COMP%]{top:10%;left:10%;border-radius:100% 0 0}.top-right[_ngcontent-%COMP%]{top:10%;left:70%;border-radius:0 100% 0 0}.bottom-left[_ngcontent-%COMP%]{top:70%;left:10%;border-radius:0 0 0 100%}.bottom-right[_ngcontent-%COMP%]{top:70%;left:70%;border-radius:0 0 100%}.top-left[_ngcontent-%COMP%]:hover{transform:scale(1.2);transform-origin:bottom right}.top-right[_ngcontent-%COMP%]:hover{transform:scale(1.2);transform-origin:bottom left}.bottom-left[_ngcontent-%COMP%]:hover{transform:scale(1.2);transform-origin:top right}.bottom-right[_ngcontent-%COMP%]:hover{transform:scale(1.2);transform-origin:top left}.top-left[_ngcontent-%COMP%]   .quadrant-content[_ngcontent-%COMP%]{transform:rotate(-45deg)}.top-right[_ngcontent-%COMP%]   .quadrant-content[_ngcontent-%COMP%], .bottom-left[_ngcontent-%COMP%]   .quadrant-content[_ngcontent-%COMP%]{transform:rotate(45deg)}.bottom-right[_ngcontent-%COMP%]   .quadrant-content[_ngcontent-%COMP%]{transform:rotate(-45deg)}li[_ngcontent-%COMP%]{list-style:none}.side-section[_ngcontent-%COMP%]{position:absolute;top:0;right:0;width:30%;height:100%;background-color:#f5f5f5;padding:20px;box-shadow:-2px 0 5px #0000001a;transition:opacity .3s ease;opacity:0}.side-section.visible[_ngcontent-%COMP%]{opacity:1}nav[_ngcontent-%COMP%]{position:absolute;top:5%;left:50%;transform:translate(-50%);width:100%;display:flex;justify-content:center}.router-outlet-container[_ngcontent-%COMP%]{display:none;position:relative;margin-top:20px;width:80%;max-width:800px;padding:20px;background-color:gold;border-radius:10px;box-shadow:0 4px 8px #0000001a;transition:opacity .3s ease,transform .3s ease;z-index:2}.router-outlet-container.show[_ngcontent-%COMP%]{display:block}.router-outlet-container.show[_ngcontent-%COMP%]{opacity:1;transform:scale(1)}.router-outlet-container[_ngcontent-%COMP%]:not(.show){opacity:0;transform:scale(.95)}"]})};var x=class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=r({type:i,selectors:[["app-home"]],standalone:!0,features:[s],decls:9,vars:0,consts:[[1,"content"]],template:function(o,c){o&1&&(t(0,"div",0)(1,"h1"),n(2,"Welcome to My Portfolio"),e(),t(3,"p"),n(4," Hello, I'm Mohamed Hameed, a passionate and dedicated software developer specializing in full-stack Java development. My journey in the world of technology is driven by a deep curiosity and a relentless pursuit of excellence. With a solid foundation in computer science and hands-on experience in various cutting-edge technologies, I am committed to creating innovative and impactful solutions. "),e(),t(5,"p"),n(6," On this portfolio, you'll find a showcase of my projects, skills, and experiences. From developing robust applications using Spring Boot to designing intuitive user interfaces with Angular and React, I strive to blend functionality with elegance. Whether you're interested in my technical expertise or want to explore my extracurricular activities and hobbies, you'll get a comprehensive view of my professional and personal journey. "),e(),t(7,"p"),n(8," Feel free to navigate through the sections to learn more about my work, connect with me, or get in touch for potential collaborations. Thank you for visiting, and I look forward to connecting with you! "),e()())},styles:[".content[_ngcontent-%COMP%]{position:absolute;top:10%;left:30%;width:60vw;height:fit-content;background-color:#f5f5f5;margin:0;padding:40px;border-radius:12px;box-shadow:0 8px 16px #0003}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:134px;margin-bottom:30px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:48px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:24px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px}"]})};var C=class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=r({type:i,selectors:[["app-about"]],standalone:!0,features:[s],decls:7,vars:0,consts:[[1,"content"]],template:function(o,c){o&1&&(t(0,"div",0)(1,"h1"),n(2,"About"),e(),t(3,"p"),n(4," Hello! I'm Mohamed Hameed, a passionate software developer with a B.E. in Computer Science from PERI Institute of Technology. My journey in the world of technology has been driven by a deep curiosity and a love for solving complex problems through code. With expertise in Java full-stack development, I have built robust applications and systems that meet real-world needs. "),e(),t(5,"p"),n(6," Beyond coding, I enjoy volunteering, teaching, and engaging in activities like gaming, sports, and martial arts (JUDO). My diverse interests allow me to bring a unique perspective to every project I undertake. I am committed to continuous learning and am always eager to take on new challenges that push the boundaries of my skills. "),e()())},styles:[".content[_ngcontent-%COMP%]{position:absolute;top:10%;left:30%;width:60vw;height:fit-content;margin:0;padding:40px;background:#fff;border-radius:12px;box-shadow:0 8px 16px #0003}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:134px;margin-bottom:30px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:48px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:24px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px}"]})};var v=class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=r({type:i,selectors:[["app-contact"]],standalone:!0,features:[s],decls:16,vars:0,consts:[[1,"content"],["href","https://linkedin.com/in/mohamedhameed007","target","_blank"]],template:function(o,c){o&1&&(t(0,"div",0)(1,"h1"),n(2,"Contact"),e(),t(3,"p"),n(4," I am always open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to connect, feel free to reach out! You can contact me through the following channels: "),e(),t(5,"ul")(6,"li"),n(7,"Email: smarthameed79.outlook.com"),e(),t(8,"li"),n(9,"Phone: +91 7092863772"),e(),t(10,"li"),n(11,"LinkedIn: "),t(12,"a",1),n(13,"linkedin.com/in/mohamedhameed007"),e()()(),t(14,"p"),n(15," I look forward to hearing from you and exploring how we can work together! "),e()())},styles:[".content[_ngcontent-%COMP%]{position:absolute;top:10%;left:30%;width:60vw;height:fit-content;margin:0;padding:40px;background:#fff;border-radius:12px;box-shadow:0 8px 16px #0003}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:134px;margin-bottom:30px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:48px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:24px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:30px;margin-bottom:30px}"]})};var b=class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=r({type:i,selectors:[["app-experience"]],standalone:!0,features:[s],decls:7,vars:0,consts:[[1,"content"]],template:function(o,c){o&1&&(t(0,"div",0)(1,"h1"),n(2,"Experience"),e(),t(3,"p"),n(4," I have accumulated hands-on experience in software development, particularly in Java full-stack development. My journey began with a solid foundation in computer science during my B.E. CSE at PERI Institute of Technology. Since then, I have worked on various projects, including developing a Report Card Application using Spring Boot and an Autonomous Lawnmower system. "),e(),t(5,"p"),n(6," Additionally, I have gained valuable experience through my volunteering roles, such as mentoring at Face Prep and assisting in tournament operations for Esports Club. These experiences have sharpened my problem-solving skills, enhanced my teamwork capabilities, and deepened my understanding of software development best practices. "),e()())},styles:[".content[_ngcontent-%COMP%]{position:absolute;top:10%;left:30%;width:60vw;height:fit-content;margin:0;padding:40px;background:#fff;border-radius:12px;box-shadow:0 8px 16px #0003}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:134px;margin-bottom:30px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:48px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:24px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px}"]})};var M=class i{static \u0275fac=function(o){return new(o||i)};static \u0275cmp=r({type:i,selectors:[["app-skills"]],standalone:!0,features:[s],decls:18,vars:0,consts:[[1,"content"]],template:function(o,c){o&1&&(t(0,"div",0)(1,"h1"),n(2,"Skills"),e(),t(3,"p"),n(4," My technical skill set encompasses a broad range of tools and technologies. I am proficient in: "),e(),t(5,"ul")(6,"li"),n(7,"Programming Languages: Java, JavaScript, HTML/CSS, SQL"),e(),t(8,"li"),n(9,"Frameworks: Spring Boot, Hibernate with JPA, Angular, React"),e(),t(10,"li"),n(11,"Web Development: Servlets, JSP, RESTful APIs"),e(),t(12,"li"),n(13,"Database Management: JDBC, MySQL"),e(),t(14,"li"),n(15,"Version Control: Git"),e()(),t(16,"p"),n(17," Additionally, I possess strong problem-solving abilities, a keen eye for detail, and a passion for learning new technologies, which I continually strive to integrate into my work. "),e()())},styles:[".content[_ngcontent-%COMP%]{position:absolute;top:10%;left:30%;width:60vw;height:fit-content;margin:0;padding:40px;background:#fff;border-radius:12px;box-shadow:0 8px 16px #0003}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:134px;margin-bottom:30px}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:48px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{font-size:24px;line-height:1.8;margin-bottom:30px}.content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:15px}"]})};var D=[{path:"",component:x},{path:"about",component:C},{path:"skills",component:M},{path:"exp",component:b},{path:"contact",component:v}],I=D;var T={providers:[P({eventCoalescing:!0}),A(I),w()]};var H={providers:[S()]},z=O(T,H);var F=()=>y(h,z),mt=F;export{mt as a};
