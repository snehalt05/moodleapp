import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CoreMainmenuPagesFaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-core-mainmenu-pages-faq',
  templateUrl: 'core-mainmenu-pages-faq.html',
})
export class CoreMainmenuPagesFaqPage implements OnInit{
  display=false;
  icon="add";
  hideme = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hideme = {};
    this.faqData.forEach((data,i)=>{
      this.faqData[i]["display"]=false;
    })
    console.log(this.faqData)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoreMainmenuPagesFaqPage');
  }
  faqData=[
    {id:0,question:'Q1. Is there any eligibility criteria for this data science program?',answers:'The learner must have the HSC Certificate (Standard 12th in India) or equivalent. No  pre-requisites or experience is required. The course covers every detail required to acquire  the fundamental skill set to start a data science career path.'},
  {id:1,question:'Q2.Do I need a computer system (desktop/laptop) for this program? If so, what are the system specifications?',
  answers:'Yes, you would need a desktop or a laptop. A computer with at least i5 (or equally powerful processor) and 8 GB RAM is recommended. The computer should have built-in speaker or headphone facility. The operating system can be Windows 8 (or better), or Mac OS 10.12 (Sierra) or better/higher. A stable internet connection with good speed, and a browser will be needed. If you want to install Python or R, please refer to the specific system requirements for installing their respective versions.'
},{
  id:2,question:'Q3. What languages does Rubiversity support?',answers:'In the present version, Rubiversity LMS offers courses in English.'
},{
  id:3,question:'Q4. Do I have to start my course at a certain time?',answers:'The course is self-paced course.  It can be started at any time. The course should be completed within 2 months (60 calendar days) of starting the course.'
},{
  id:4,question:'Q5. What can I expect to get when I complete the course?',answers:'You will receive a certificate of completion which will serve as a pre-requisite for other   courses. You can explore a wide range of courses in the data science field as per your career  path and persona.'
},{
  id:5,question:'Q6. What courses does rubiVersity offer?',answers:' rubiVersity offers courses in the field of data science. The courses are uniquely  designed, industry and future-ready, learning paths that evolve into modular courses from  Foundational level to Masters level, delivering a unique learning experience. We are always building new courses to ensure that our users can learn the best technology  in market in a fully elaborated course.'
}

]
 


 click(i,faq){
   console.log(i)
  
   if(this.display==false){
    this.display=true;
    this.icon="remove"
    faq['display']=!faq['display'];
  }else{
      this.display=false;
      this.icon="add";
      //  faq['display']==faq['display']
     }  
  // Object.keys(this.hideme).forEach(h => {
  //   this.hideme[h] = false;
  // });
  // this.hideme[i.id] = true;
 
   }
  //  hideme=[];

ngOnInit(){
  // this.faqData.forEach(e => {
  //   this.hideme[e.id] = false;
  // });
}

// iconClick(faq){
//   if(faq['display']=!faq['display']){
//     this.icon="remove"
//   }else{
//     this.icon="add"
//   }
// }

}
