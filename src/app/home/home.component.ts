import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  //images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
   images = ['https://www.el-ahly.com/images/news/155121-155121-%D9%85%D8%B4%D8%B1%D9%88%D8%B9%20%D8%AC%D8%AF%D9%8A%D8%AF%20(41).jpg',
  'https://images.daznservices.com/di/library/GOAL/21/42/-_zkez4dyldw0b1lkr16jppu0lu.jpg?t=908524749&quality=100',
'https://lh3.googleusercontent.com/proxy/CoBxW-VYrRXQHdpmBQVnEjHydeW-kjQWjLG_ZsOzfZZ4-Cd1g9igvdDY0qN_bdtC5yghqoScHjD9wV4a3RJH3oK4oq7KDvBHvQ7wA7oWs_uX5JugORFNm-7uCCp3I5ltdA',
'https://www.elfagr.com/upload/photo/news/366/7/600x338o/759.jpg',
'https://el-ahly.com/images/news/156249-156249-New%20Project%20(15).jpg']
}


