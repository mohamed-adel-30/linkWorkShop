import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  vipWebsites = [
    { image: '../../../../assets/home/importantSites/towers.png' },
    { image: 'assets/home/importantSites/fox-hub-2.png' },
    { image: 'assets/home/importantSites/kyan.png' },
    { image: 'assets/home/importantSites/a-lab.png' },
    { image: 'assets/home/importantSites/tower.png' },
    { image: 'assets/home/importantSites/asgardia.png' },
  ];
  partners = [
    { image: '../../../../assets/home/partners/earth.png' },
    { image: 'assets/home/partners/fox-hub-2.png' },
    { image: 'assets/home/partners/lighting.png' },
    { image: 'assets/home/partners/atica.png' },
    { image: 'assets/home/partners/leaf.png' },
  ];

  newsArr = [
    {
      img: '../../../assets/home/latestNews/iStock-1189309997.png',
      title: 'مشروعات مصر | التأمين الصحى الشامل بمحافظة بور سعيد',
      details:
        ' يطبق قانون التأمين الصحى الشامل الجديد؟ يطبق القانون على 6 مراحل، على مدار 15 عاماً بداية من 2018 حتى 2032، المرحلة الأولى من 2018 حتى 2020 فى محافظات',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/latestNews/iStock-1214033376.png',
      title: 'بعد تطبيقه رسميًا.. ماذا تعرف عن قانون التأمين الصحي الشامل',
      details:
        ' من محافظة بورسعيد، بدأت المرحلة الأولى من منظومة التأمين الصحي الشامل الجديد، اليت أطلقتها الحكومة المصرية وذلك بشكل تجريبي لمدة شهرين بالتعاون',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/latestNews/iStock-1215243718.png',
      title: 'الخدمات التى يقدمها نظام التأمين الصحى الشامل للمرضى',
      details:
        'نص قانون التأمين الصحى الاجتماعى الشامل الصادر بالقانون رقم 2 لسنة 2018، على أن التأمين الصحي الاجتماعى الشامل نظام إلزامى، يقوم على التكافل ',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/latestNews/iStock-1214033376.png',
      title: 'بعد تطبيقه رسميًا.. ماذا تعرف عن قانون التأمين الصحي الشامل',
      details:
        ' من محافظة بورسعيد، بدأت المرحلة الأولى من منظومة التأمين الصحي الشامل الجديد، اليت أطلقتها الحكومة المصرية وذلك بشكل تجريبي لمدة شهرين بالتعاون',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/latestNews/iStock-1189309997.png',
      title: 'مشروعات مصر | التأمين الصحى الشامل بمحافظة بور سعيد',
      details:
        ' يطبق قانون التأمين الصحى الشامل الجديد؟ يطبق القانون على 6 مراحل، على مدار 15 عاماً بداية من 2018 حتى 2032، المرحلة الأولى من 2018 حتى 2020 فى محافظات',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/latestNews/iStock-1215243718.png',
      title: 'الخدمات التى يقدمها نظام التأمين الصحى الشامل للمرضى',
      details:
        'نص قانون التأمين الصحى الاجتماعى الشامل الصادر بالقانون رقم 2 لسنة 2018، على أن التأمين الصحي الاجتماعى الشامل نظام إلزامى، يقوم على التكافل ',
      date: '22 سبتمبر 2020',
    },
  ];

  hospitals = [
    {
      title: 'مستشفى الشيخ زايد التخصصى',
      tel: '0109 529 5009',
      loc: 'شارع على ابن أبو طالب امام مسرح الهرم ، التعاون،، الهرم، الجيزة',
      hospital: 'مستشفيات الجيزة',
    },
    {
      title: 'المعهد القومي للأورام',
      tel: '0109 529 5009',
      loc: 'شارع على ابن أبو طالب امام مسرح الهرم ، التعاون،، الهرم، الجيزة',
      hospital: 'مستشفيات القاهرة',
    },
    {
      title: 'مستشفى دار الفؤاد بمدينة 6 أكتوبر',
      tel: '0109 529 5009',
      loc: 'شارع على ابن أبو طالب امام مسرح الهرم ، التعاون،، الهرم، الجيزة',
      hospital: 'مستشفيات الجيزة',
    },
    {
      title: 'مستشفى الميرغني مصر الجديدة',
      tel: '0109 529 5009',
      loc: 'شارع على ابن أبو طالب امام مسرح الهرم ، التعاون،، الهرم، الجيزة',
      hospital: 'مستشفيات القاهرة',
    },
    {
      title: 'المعهد القومي للأورام',
      tel: '0109 529 5009',
      loc: 'شارع على ابن أبو طالب امام مسرح الهرم ، التعاون،، الهرم، الجيزة',
      hospital: 'مستشفيات القاهرة',
    },
    {
      title: 'مستشفى الشيخ زايد التخصصى',
      tel: '0109 529 5009',
      loc: 'شارع على ابن أبو طالب امام مسرح الهرم ، التعاون،، الهرم، الجيزة',
      hospital: 'مستشفيات الجيزة',
    },
    {
      title: 'مستشفى الميرغني مصر الجديدة',
      tel: '0109 529 5009',
      loc: 'شارع على ابن أبو طالب امام مسرح الهرم ، التعاون،، الهرم، الجيزة',
      hospital: 'مستشفيات القاهرة',
    },
    {
      title: 'مستشفى دار الفؤاد بمدينة 6 أكتوبر',
      tel: '0109 529 5009',
      loc: 'شارع على ابن أبو طالب امام مسرح الهرم ، التعاون،، الهرم، الجيزة',
      hospital: 'مستشفيات الجيزة',
    },
  ];

  meetings = [
    {
      img: '../../../assets/home/meetings/patient-count.png',
      title:
        'بلغ عدد المترددين علي المستشفيات التابعة للهيئة العامة للرعاية الصحية .',
      to: '٤ مساءا',
      from: '٩ صباحا',
      loc: 'مركز طب أسره',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/meetings/ubber-woman.png',
      title:
        'لو انتي من الأقصر, انزلي سجلي ليكي ولمامتك في المنظومة, أمان ليكوا وللبيت كله.',
      to: '٤ مساءا',
      from: '٩ صباحا',
      loc: 'مركز طب أسره',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/meetings/patient-count.png',
      title:
        'بلغ عدد المترددين علي المستشفيات التابعة للهيئة العامة للرعاية الصحية .',
      to: '٤ مساءا',
      from: '٩ صباحا',
      loc: 'مركز طب أسره',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/meetings/ubber-woman.png',
      title:
        'لو انتي من الأقصر, انزلي سجلي ليكي ولمامتك في المنظومة, أمان ليكوا وللبيت كله.',
      to: '٤ مساءا',
      from: '٩ صباحا',
      loc: 'مركز طب أسره',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/meetings/patient-count.png',
      title:
        'بلغ عدد المترددين علي المستشفيات التابعة للهيئة العامة للرعاية الصحية .',
      to: '٤ مساءا',
      from: '٩ صباحا',
      loc: 'مركز طب أسره',
      date: '22 سبتمبر 2020',
    },
    {
      img: '../../../assets/home/meetings/ubber-woman.png',
      title:
        'لو انتي من الأقصر, انزلي سجلي ليكي ولمامتك في المنظومة, أمان ليكوا وللبيت كله.',
      to: '٤ مساءا',
      from: '٩ صباحا',
      loc: 'مركز طب أسره',
      date: '22 سبتمبر 2020',
    },
  ];

  statisticsArr = [
    {
      img: '../../../assets/home/statistics/002-surgeon.png',
      count: '1500 +',
      name: 'الأطباء',
    },
    {
      img: '../../../assets/home/statistics/004-patient.png',
      count: '80,000 +',
      name: 'الأدوية',
    },
    {
      img: '../../../assets/home/statistics/003-running-nose.png',
      count: '50,000 K',
      name: 'المرضى',
    },
    {
      img: '../../../assets/home/statistics/001-hospital-building.png',
      count: '9000 +',
      name: 'المستشفيات',
    },
    {
      img: '../../../assets/home/statistics/002-surgeon.png',
      count: '1500 +',
      name: 'الأطباء',
    },
    {
      img: '../../../assets/home/statistics/003-running-nose.png',
      count: '50,000 K',
      name: 'المرضى',
    },
    {
      img: '../../../assets/home/statistics/001-hospital-building.png',
      count: '9000 +',
      name: 'المستشفيات',
    },
    {
      img: '../../../assets/home/statistics/004-patient.png',
      count: '80,000 +',
      name: 'الأدوية',
    },
    {
      img: '../../../assets/home/statistics/004-patient.png',
      count: '80,000 +',
      name: 'الأدوية',
    },
    {
      img: '../../../assets/home/statistics/002-surgeon.png',
      count: '1500 +',
      name: 'الأطباء',
    },
    {
      img: '../../../assets/home/statistics/001-hospital-building.png',
      count: '9000 +',
      name: 'المستشفيات',
    },
    {
      img: '../../../assets/home/statistics/003-running-nose.png',
      count: '50,000 K',
      name: 'المرضى',
    },
  ];

  partnerHeader = 'شركاء الهيئة';
  vipHeader = 'مواقع تهمك';
  constructor() {}

  ngOnInit(): void {}
}
