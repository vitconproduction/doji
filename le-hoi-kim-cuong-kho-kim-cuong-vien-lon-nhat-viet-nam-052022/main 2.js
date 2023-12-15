$(function() {

    $(window).on('load', function() {
  
      var day = '2022/05/15 10:00:00';
  
      var date15_1 = '2022/05/15 10:00:00';
      var date15_2 = '2022/05/15 12:00:00';
  
      var date21_1 = '2022/05/21 10:00:00';
      var date21_2 = '2022/05/21 12:00:00';
  
      var date22_1 = '2022/05/22 10:00:00';
      var date22_2 = '2022/05/22 12:00:00';
  
      var date28_1 = '2022/05/28 10:00:00';
      var date28_2 = '2022/05/28 12:00:00';
  
      var date29_1 = '2022/05/29 10:00:00';
      var date29_2 = '2022/05/29 12:00:00';
  
      var html_date15_pre = '<div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1219da7167i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1219DA7167I1</span><span class="lp-price">77,370,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0320da7205i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0320DA7205I1</span><span class="lp-price">125,138,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1218da9380i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1218DA9380I1</span><span class="lp-price">114,386,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0220da7116i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0220DA7116I1</span><span class="lp-price">72,080,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6585i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6585I1</span><span class="lp-price">59,945,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6489i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6489I1</span><span class="lp-price">59,945,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6584i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6584I1</span><span class="lp-price">60,163,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0221da2704i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0221DA2704I1</span><span class="lp-price">162,890,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0221da2526i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0221DA2526I1</span><span class="lp-price">499,916,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da7445i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA7445I1</span><span class="lp-price">370,965,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da7444i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA7444I1</span><span class="lp-price">370,965,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5228i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5228I1</span><span class="lp-price">288,686,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0719da6422i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0719DA6422I1</span><span class="lp-price">411,045,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1017da3552i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1017DA3552I1</span><span class="lp-price">286,951,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4576i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4576I1</span><span class="lp-price">200,223,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6517i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6517I1</span><span class="lp-price">87,560,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6514i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6514I1</span><span class="lp-price">87,560,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4439i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4439I1</span><span class="lp-price">92,350,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4445i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4445I1</span><span class="lp-price">92,350,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6508i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6508I1</span><span class="lp-price">98,820,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4433i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4433I1</span><span class="lp-price">98,820,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0222da1635i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0222DA1635I1</span><span class="lp-price">95,521,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da5923i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA5923I1</span><span class="lp-price">105,758,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5054i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5054I1</span><span class="lp-price">28,890,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5035i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5035I1</span><span class="lp-price">30,030,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5034i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5034I1</span><span class="lp-price">30,030,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5027i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5027I1</span><span class="lp-price">30,030,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0218da6319i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0218DA6319I1</span><span class="lp-price">153,264,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0619da6243i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0619DA6243I1</span><span class="lp-price">129,018,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da5879i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA5879I1</span><span class="lp-price">59,945,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da5851i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA5851I1</span><span class="lp-price">65,122,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4623i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4623I1</span><span class="lp-price">499,916,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da6009i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA6009I1</span><span class="lp-price">200,223,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0121da1852i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0121DA1852I1</span><span class="lp-price">222,033,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4434i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4434I1</span><span class="lp-price">98,820,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da5919i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA5919I1</span><span class="lp-price">105,758,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0421da3824i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0421DA3824I1</span><span class="lp-price">391,767,000 Ä‘</span></a></div>';
  
      var html_date15 = '<div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0320da7205i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0320DA7205I1</span><span class="lp-price">106,367,000 Ä‘</span><span class="lp-price-promotion">125,138,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1218da9380i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1218DA9380I1</span><span class="lp-price">97,228,000 Ä‘</span><span class="lp-price-promotion">114,386,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0220da7116i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0220DA7116I1</span><span class="lp-price">61,268,000 Ä‘</span><span class="lp-price-promotion">72,080,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6585i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6585I1</span><span class="lp-price">50,953,000 Ä‘</span><span class="lp-price-promotion">59,945,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6584i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6584I1</span><span class="lp-price">51,139,000 Ä‘</span><span class="lp-price-promotion">60,163,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6489i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6489I1</span><span class="lp-price">50,953,000 Ä‘</span><span class="lp-price-promotion">59,945,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0221da2704i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0221DA2704I1</span><span class="lp-price">140,085,000 Ä‘</span><span class="lp-price-promotion">162,890,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0221da2526i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0221DA2526I1</span><span class="lp-price">424,929,000 Ä‘</span><span class="lp-price-promotion">499,916,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da7445i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA7445I1</span><span class="lp-price">315,320,000 Ä‘</span><span class="lp-price-promotion">370,965,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da7444i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA7444I1</span><span class="lp-price">315,320,000 Ä‘</span><span class="lp-price-promotion">370,965,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5228i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5228I1</span><span class="lp-price">245,383,000 Ä‘</span><span class="lp-price-promotion">288,686,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0719da6422i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0719DA6422I1</span><span class="lp-price">349,388,000 Ä‘</span><span class="lp-price-promotion">411,045,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1017da3552i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1017DA3552I1</span><span class="lp-price">243,908,000 Ä‘</span><span class="lp-price-promotion">286,951,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6514i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6514I1</span><span class="lp-price">74,426,000 Ä‘</span><span class="lp-price-promotion">87,560,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4576i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4576I1</span><span class="lp-price">170,190,000 Ä‘</span><span class="lp-price-promotion">200,223,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6517i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6517I1</span><span class="lp-price">74,426,000 Ä‘</span><span class="lp-price-promotion">87,560,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4439i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4439I1</span><span class="lp-price">78,498,000 Ä‘</span><span class="lp-price-promotion">92,350,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4445i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4445I1</span><span class="lp-price">79,421,000 Ä‘</span><span class="lp-price-promotion">92,350,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1221da6508i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1221DA6508I1</span><span class="lp-price">83,997,000 Ä‘</span><span class="lp-price-promotion">98,820,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4433i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4433I1</span><span class="lp-price">84,985,000 Ä‘</span><span class="lp-price-promotion">98,820,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0222da1635i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0222DA1635I1</span><span class="lp-price">82,148,000 Ä‘</span><span class="lp-price-promotion">95,521,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da5923i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA5923I1</span><span class="lp-price">89,894,000 Ä‘</span><span class="lp-price-promotion">105,758,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5054i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5054I1</span><span class="lp-price">24,557,000 Ä‘</span><span class="lp-price-promotion">28,890,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5035i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5035I1</span><span class="lp-price">25,526,000 Ä‘</span><span class="lp-price-promotion">30,030,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5034i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5034I1</span><span class="lp-price">25,526,000 Ä‘</span><span class="lp-price-promotion">30,030,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0721da5027i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0721DA5027I1</span><span class="lp-price">25,526,000 Ä‘</span><span class="lp-price-promotion">30,030,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0218da6319i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0218DA6319I1</span><span class="lp-price">130,274,000 Ä‘</span><span class="lp-price-promotion">153,264,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0619da6243i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0619DA6243I1</span><span class="lp-price">109,665,000 Ä‘</span><span class="lp-price-promotion">129,018,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da5879i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA5879I1</span><span class="lp-price">50,953,000 Ä‘</span><span class="lp-price-promotion">59,945,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da5851i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA5851I1</span><span class="lp-price">55,354,000 Ä‘</span><span class="lp-price-promotion">65,122,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da6009i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA6009I1</span><span class="lp-price">170,190,000 Ä‘</span><span class="lp-price-promotion">200,223,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4623i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4623I1</span><span class="lp-price">429,928,000 Ä‘</span><span class="lp-price-promotion">499,916,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0121da1852i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0121DA1852I1</span><span class="lp-price">188,728,000 Ä‘</span><span class="lp-price-promotion">222,033,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0521da4434i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0521DA4434I1</span><span class="lp-price">83,997,000 Ä‘</span><span class="lp-price-promotion">98,820,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1121da5919i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1121DA5919I1</span><span class="lp-price">90,952,000 Ä‘</span><span class="lp-price-promotion">105,758,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-0421da3824i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">0421DA3824I1</span><span class="lp-price">333,002,000 Ä‘</span><span class="lp-price-promotion">391,767,000 Ä‘</span></a></div><div class="item"><a href="https://trangsuc.doji.vn/kim-cuong-vien-gia/kim-cuong-vien-1219da7167i1"><img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt=""><span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span><span class="lp-sku">1219DA7167I1</span><span class="lp-price">65,765,000 Ä‘</span><span class="lp-price-promotion">77,370,000 Ä‘</span></a></div>';
  
  
      // var date21 = '2022/05/13 15:22:00';
      // var date22 = '2022/05/13 15:24:00';
      // var date28 = '2022/05/13 15:25:00';
      // var date29 = '2022/05/13 15:26:00';
  
      $('#lp-listing').html('');
  
      // var datetimeEnd = '2022/05/13 15:30:20';
      if ( Date.now() < Date.parse(date15_1) ) {
        day = '2022/05/15 10:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date15_1) - Date.now() + 1);
        $('#lp-listing').html(html_date15_pre);
        load_slide_product();
  
        console.log("1");
      } else if ( Date.now() < Date.parse(date15_2) && Date.now() >= Date.parse(date15_1) ) {
        $('.main-example').find('.text-clock').html('Thá»i gian Æ°u Ä‘Ă£i cĂ²n:');
        day = '2022/05/15 12:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date15_2) - Date.now() + 1);
        $('#lp-listing').html(html_date15);
        load_slide_product();
  
        console.log("2");
  
      } else if ( Date.now() < Date.parse(date21_1) && Date.now() >= Date.parse(date15_2) ) {
        $('.main-example').find('.text-clock').html('BĂ¹ng ná»• siĂªu Æ°u Ä‘Ă£i sáº½ báº¯t Ä‘áº§u sau:');
        day = '2022/05/21 10:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date21_1) - Date.now() + 1);
        $('#lp-listing').html(html_date15_pre);
        load_slide_product();
  
        console.log("3");
  
      } else if ( Date.now() < Date.parse(date21_2) && Date.now() >= Date.parse(date21_1) ) {
        $('.main-example').find('.text-clock').html('Thá»i gian Æ°u Ä‘Ă£i cĂ²n:');
        day = '2022/05/21 12:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date21_2) - Date.now() + 1);
        $('#lp-listing').html(html_date15);
        load_slide_product();
  
        console.log("4");
  
      } else if ( Date.now() < Date.parse(date22_1) && Date.now() >= Date.parse(date21_2) ) {
        $('.main-example').find('.text-clock').html('BĂ¹ng ná»• siĂªu Æ°u Ä‘Ă£i sáº½ báº¯t Ä‘áº§u sau:');
        day = '2022/05/22 10:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date22_1) - Date.now() + 1);
        $('#lp-listing').html(html_date15_pre);
        load_slide_product();
  
        console.log("5");
  
      } else if ( Date.now() < Date.parse(date22_2) && Date.now() >= Date.parse(date22_1) ) {
        $('.main-example').find('.text-clock').html('Thá»i gian Æ°u Ä‘Ă£i cĂ²n:');
        day = '2022/05/22 12:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date22_2) - Date.now() + 1);
        $('#lp-listing').html(html_date15);
        load_slide_product();
  
        console.log("6");
  
      } else if ( Date.now() < Date.parse(date28_1) && Date.now() >= Date.parse(date22_2) ) {
        $('.main-example').find('.text-clock').html('BĂ¹ng ná»• siĂªu Æ°u Ä‘Ă£i sáº½ báº¯t Ä‘áº§u sau:');
        day = '2022/05/28 10:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date28_1) - Date.now() + 1);
        $('#lp-listing').html(html_date15_pre);
        load_slide_product();
  
        console.log("7");
  
      } else if ( Date.now() < Date.parse(date28_2) && Date.now() >= Date.parse(date28_1) ) {
        $('.main-example').find('.text-clock').html('Thá»i gian Æ°u Ä‘Ă£i cĂ²n:');
        day = '2022/05/28 12:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date28_2) - Date.now() + 1);
        $('#lp-listing').html(html_date15);
        load_slide_product();
  
        console.log("8");
  
      } else if ( Date.now() < Date.parse(date29_1) && Date.now() >= Date.parse(date28_2) ) {
        $('.main-example').find('.text-clock').html('BĂ¹ng ná»• siĂªu Æ°u Ä‘Ă£i sáº½ báº¯t Ä‘áº§u sau:');
        day = '2022/05/29 10:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date29_1) - Date.now() + 1);
        $('#lp-listing').html(html_date15_pre);
        load_slide_product();
  
        console.log("9");
  
      } else if ( Date.now() < Date.parse(date29_2) && Date.now() >= Date.parse(date29_1) ) {
        $('.main-example').find('.text-clock').html('Thá»i gian Æ°u Ä‘Ă£i cĂ²n:');
        day = '2022/05/29 12:00:00';
        setTimeout(function() {
          location.reload();
        }, Date.parse(date29_2) - Date.now() + 1);
        $('#lp-listing').html(html_date15);
        load_slide_product();
  
        console.log("10");
  
      } else if (Date.now() > Date.parse(date29_2)) {
        $('.main-example').html('<div style="text-align: center;" class="text-clock"></div>');
        $('#lp-listing').html(html_date15_pre);
        load_slide_product();
        return false;
      } else {
        day = '2022/05/15 10:00:00';
        $('.main-example').find('.text-clock').each(function(index) {
          if (index == 0) {
            $(this).html('Thá»i gian Æ°u Ä‘Ă£i cĂ²n:');
            // $(this).html('');
          }
          if (index == 1) {
            $(this).html('');
          }
        });
      }
  
      var labels = ['Ngày', 'Giờ', 'Phút', 'Giây'],
        // nextYear = (new Date().getFullYear() + 1) + '/01/01',
        nextYear = day,
        template = _.template($('#main-example-template').html()),
        currDate = '00:00:00:00:00',
        nextDate = '00:00:00:00:00',
        parser = /([0-9]{2})/gi,
        $example = $('#main-example');
      // Parse countdown string to an object
      function strfobj(str) {
        var parsed = str.match(parser),
          obj = {};
        labels.forEach(function(label, i) {
          obj[label] = parsed[i]
        });
        return obj;
      }
      // Return the time components that diffs
      function diff(obj1, obj2) {
        var diff = [];
        labels.forEach(function(key) {
          if (obj1[key] !== obj2[key]) {
            diff.push(key);
          }
        });
        return diff;
      }
      // Build the layout
      var initData = strfobj(currDate);
      labels.forEach(function(label, i) {
        $example.append(template({
          curr: initData[label],
          next: initData[label],
          label: label
        }));
      });
      // Starts the countdown
      $example.countdown(nextYear, function(event) {
        var newDate = event.strftime('%D:%H:%M:%S'),
          data;
        if (newDate !== nextDate) {
          currDate = nextDate;
          nextDate = newDate;
          // Setup the data
          data = {
            'curr': strfobj(currDate),
            'next': strfobj(nextDate)
          };
          // Apply the new values to each node that changed
          diff(data.curr, data.next).forEach(function(label) {
            var selector = '.%s'.replace(/%s/, label),
              $node = $example.find(selector);
            // Update the node
            $node.removeClass('flip');
            $node.find('.curr').text(data.curr[label]);
            $node.find('.next').text(data.next[label]);
            // Wait for a repaint to then flip
            _.delay(function($node) {
              $node.addClass('flip');
            }, 50, $node);
          });
        }
      });
  
      // const ppp = ["60857","60856","60855","60854","60853","60852","60851","60850","60849","60848","60861","60860","60859","60858","60865","60864","60863","60862"];
      //
      // const price_pro = {"60857":"109665000","60856":"50953000","60855":"55354000","60854":"429928000","60853":"170190000","60852":"188728000","60851":"83997000","60850":"90952000","60849":"25237000","60848":"28628000","60861":"116162000","60860":"131012000","60859":"129212000","60858":"109501000","60865":"98402000","60864":"66227000","60863":"48680000","60862":"52569000"};
      //
      // // console.log(get_sp("60857"));
      //
      // // var html_all = '';
      //
      // // $('#lp-listing').html('');
      // for (let x in ppp) {
      //   get_sp(ppp[x],1);
      //   // html_all += get_sp(ppp[x]);
      //   // console.log(get_sp(ppp[x]));
      // }
      // // console.log(html_all);
      // // $('#lp-listing').html(html_all);
      //
      // function get_sp(ID,old = 0){
      //
      //   var htm = '';
      //   $.getJSON('https://trangsuc.doji.vn/api/ProductAPI/'+ID, function(data){
      //     htm += '<div class="item">';
      //       htm += '<a href="https://trangsuc.doji.vn/'+data.moduleNameAscii+'/'+data.nameAscii+'">';
      //         htm += '<img src="https://trangsuc.doji.vn/Upload/landing-page/le-hoi-kim-cuong-05-2022/images/kcv.png" alt="">';
      //         htm += '<span class="lp-sub-title">Kim CÆ°Æ¡ng ViĂªn</span>';
      //         htm += '<span class="lp-sku">'+data.productCode+'</span>';
      //         if( old == 1 ){
      //           htm += '<span class="lp-price">'+numberWithCommas(price_pro[data.id])+' Ä‘</span>';
      //           htm += '<span class="lp-price-promotion">'+numberWithCommas(data.priceOld)+' Ä‘</span>';
      //         }else{
      //           htm += '<span class="lp-price">'+numberWithCommas(data.priceOld)+' Ä‘</span>';
      //         }
      //       htm += '</a>';
      //     htm += '</div>';
      //
      //     $('#lp-listing').append(htm);
      //   });
      //
      //   // return htm;
      //   // return "hllll";
      // }
      //
      // function numberWithCommas(x) {
      //   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // }
    });
  
    function load_slide_product(){
      $('#lp-listing').not('.slick-initialized').slick({
        swipeToSlide: false,
        swipe: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        rows: 2,
        slidesToScroll: 5,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: false,
        vertical: false, //* trÆ°á»£t dá»c *//
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              rows: 2,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 2,
              rows: 2,
              slidesToScroll: 2,
            }
          },
        ]
      });
    }
  
    // var products = $('#lp-listing').not('.slick-initialized').slick({
    //   swipeToSlide: false,
    //   swipe: true,
    //   infinite: true,
    //   speed: 2000,
    //   slidesToShow: 5,
    //   rows: 2,
    //   slidesToScroll: 5,
    //   arrows: false,
    //   dots: true,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
    //   centerMode: false,
    //   vertical: false, //* trÆ°á»£t dá»c *//
    //   responsive: [{
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //       }
    //     },
    //     {
    //       breakpoint: 820,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //       }
    //     },
    //   ]
    // });
  
    var win_width = $(window).width();
  
    var url_string = window.location.href;
    var url = new URL(url_string);
    var p_lp_sale = url.searchParams.get("lp_sale");
  
    if( $('#'+p_lp_sale).length > 0 && p_lp_sale == 'lpsale'){
      var lp_sale_height = $('#'+p_lp_sale).offset().top;
  
      $('html, body').animate({
        scrollTop: lp_sale_height - 115
      }, 700);
    }
  
  
    wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 250,
      mobile: true,
      live: true
    })
    wow.init();
  });