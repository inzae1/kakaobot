Utils.getMapleInfo = function(name,replier) {
    try {
        var data = org.jsoup.Jsoup.connect("https://maple.gg/u/" + name).get();
       
        var nickname = data.select('div.nickname').get(0).text();
        var world = data.select('div.world').get(0).text();
        var lv = data.select('span.level').get(0).text().replace("Lv.", "");
        var job = data.select('span.job').get(0).text();
        var pri = data.select('span.popularity').get(0).text().replace("인기도 ", "");

        var him = data.select('div.sc-39850f11-2 hIigBc').get().text();

        return [nickname, world, lv, job, pri];
    } catch (e) {
        return null;
    }
};

response = function(room, msg, sender, isGroupChat, replier, ImageDB, packageName) {
    var cmd = msg.split(" ")[0];
    var data = msg.replace(cmd + " ", "");
    if (cmd === ".메이플") {
        var result = Utils.getMapleInfo(data, replier);
        if (result === null) {
            replier.reply("캐릭터를 찾을 수 없습니다.");
        } else {
            replier.reply("[메이플스토리 캐릭터 정보]\n" +
                "이름 : " + result[0] + 
                "서버 : " + result[1] +
                "\n레벨 : " + result[2] + 
                "\n직업 : " + result[3] + 
                "\n인기도 : " + result[4] + 
                "\nhttps://maple.gg/u/" + result[0]);
        }
    }
};


<!doctype html>
<html lang="ko">
 <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
  <link rel="preload" as="image" href="https://cdn.dak.gg/maple/images/common/img-evan-round.png">
  <link rel="preload" as="image" href="https://open.api.nexon.com/static/maplestory/Character/NGIHAABAGHFBCDPBCIHPDCJLOLIAECHJLOHHIMEBIHBDFFEFGBLNIKAPNDNNIKDIJNMHGAAMFDBOGMKAPMAJDDMGNKFGLJAHFKPCJCCPGHKFMKCHJGHCHHHJOKLHJGCNGCPMCPPFHFEGJCCMLIIOFMNOKPPPIOPDNBGFBILPBKGLOEAPIJMCNIJJKMBBEKMJFEDBMFEHEOCNOBMBMGPFLPJKPLGCJDGIANKDCFLKDDMPIGAIPMNJNPIPIPGBECAO.png">
  <link rel="preload" as="image" href="//cdn.maple.gg/images/maplestory/world/ico_world_croa.gif">
  <link rel="preload" as="image" href="https://cdn.dak.gg/maple/images/guild/guild-placeholder.png">
  <link rel="stylesheet" href="//cdn.dak.gg/maple/_next/static/css/ec746eb2fb37a6b9.css" data-precedence="next">
  <link rel="stylesheet" href="//cdn.dak.gg/maple/_next/static/css/36840340f3f01bb9.css" data-precedence="next">
  <link rel="stylesheet" href="//cdn.dak.gg/maple/_next/static/css/581b706478518238.css" data-precedence="next">
  <link rel="preload" as="script" fetchpriority="low" href="//cdn.dak.gg/maple/_next/static/chunks/webpack-c7814b2b4843cec7.js">
  <script src="//cdn.dak.gg/maple/_next/static/chunks/fd9d1056-ecd9c69046593365.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/4938-8591418f1dc4855f.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/main-app-2f3800c6e4826db2.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/f4e5f4e1-5bc8dcdd72acca64.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/6946-2fa7bf036217f3b7.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/1436-7aff9b6e1a3487fb.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/1396-a5d526a0b9718370.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/9702-eb854f0861fd8f9d.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/6053-789a4626bfa14a0e.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/7724-b1dfedace01b90ae.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/713-843be05d5bc0ba04.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/2150-61a05520a335b803.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/app/(profile)/u/%5Bnickname%5D/layout-f45bbcdb4e804760.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/dc112a36-a26ec11f6dfc39b0.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/ca377847-9066ded4df52c2db.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/2260-787508622e407358.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/625-0e9e3e8f81d54af4.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/2857-29bc5f980ab33352.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/7424-6995cef075b54158.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/5431-72de76afcb802962.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/8471-39ea0bf428704a10.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/9278-5d417a8400fe489f.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/1748-c67ac111938f1720.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/8045-5db4aa5fd4d0b502.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/8067-e9440c463344d676.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/app/(profile)/u/%5Bnickname%5D/%5B%5B...tab%5D%5D/page-ac69978abc1f9d8d.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/8475-b7dd1686ef79513b.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/9949-884833fa3c1c5ccd.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/app/layout-37d08a0f059ffb23.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/app/error-2c298028d9f2a393.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/app/not-found-4e7f8bb00237eae1.js" async></script>
  <script async src="https://hb.vntsm.com/v3/live/ad-manager.min.js" type="text/javascript" data-site-id="66309f107e16dc002af512c3" data-mode="scan"></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/ad2866b8-f52813c522346a49.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/5487-e0cd8b2c5a1b5ca2.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/9277-d6893bbee72c0bef.js" async></script>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/app/(profile)/u/%5Bnickname%5D/@header/%5B%5B...tab%5D%5D/page-9ba3c7da7865f92c.js" async></script>
  <link rel="preload" href="https://securepubads.g.doubleclick.net/tag/js/gpt.js" as="script">
  <link rel="preload" href="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js" as="script" integrity="sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4">
  <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=G-WMSZNHB64M" as="script">
  <link rel="preload" href="https://www.googletagmanager.com/gtag/js?id=G-EEJXM8NE9M" as="script">
  <link rel="preload stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css" as="style" type="text/css" crossorigin="anonymous">
  <title>삑살@크로아 :: 메이플 종합 통계 - 메이플지지 Maple.GG</title>
  <meta name="description" content="메이플 종합 통계 Maple.GG에서 전적검색 및 통계 콘텐츠를 확인하세요. 유니온, 링크, 사냥터, 코디, 랭킹 등 다양한 정보를 제공합니다.">
  <meta name="keywords" content="메이플 종합 통계, 메이플 전적검색, 메이플GG, 메이플 프로필, 월드순위, 직업순위, 코디, 염색, 믹스염색, 테라버닝, 메가버닝, 무릉, 시드, 유니온, 월드리프">
  <link rel="canonical" href="https://maple.gg/u/삑살">
  <meta property="og:title" content="삑살@크로아 :: 메이플 종합 통계 - 메이플지지 Maple.GG">
  <meta property="og:description" content="삑살@크로아의 스탯, 장비, 유니온, 코디 컬렉션, 히스토리 등을 확인해보세요.">
  <meta property="og:url" content="https://maple.gg/u/삑살">
  <meta property="og:image" content="https://open.api.nexon.com/static/maplestory/Character/NGIHAABAGHFBCDPBCIHPDCJLOLIAECHJLOHHIMEBIHBDFFEFGBLNIKAPNDNNIKDIJNMHGAAMFDBOGMKAPMAJDDMGNKFGLJAHFKPCJCCPGHKFMKCHJGHCHHHJOKLHJGCNGCPMCPPFHFEGJCCMLIIOFMNOKPPPIOPDNBGFBILPBKGLOEAPIJMCNIJJKMBBEKMJFEDBMFEHEOCNOBMBMGPFLPJKPLGCJDGIANKDCFLKDDMPIGAIPMNJNPIPIPGBECAO.png">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="메이플 종합 통계 - 메이플지지 Maple.GG">
  <meta name="twitter:description" content="메이플 종합 통계 Maple.GG에서 전적검색 및 통계 콘텐츠를 확인하세요. 유니온, 링크, 사냥터, 코디, 랭킹 등 다양한 정보를 제공합니다.">
  <meta name="twitter:image" content="https://cdn.dak.gg/maple/images/meta-icon.png">
  <script src="//cdn.dak.gg/maple/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js" nomodule=""></script>
  <style data-styled="" data-styled-version="6.1.1">.bfkbdc{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));gap:4px 8px;align-self:stretch;}/*!sc*/
@media (min-width: 769px){.bfkbdc{grid-template-columns:repeat(2,auto);}}/*!sc*/
@media (min-width:840px){.bfkbdc{grid-template-columns:repeat(3,auto);}}/*!sc*/
@media (min-width: 993px){.bfkbdc{grid-template-columns:repeat(4,auto);}}/*!sc*/
.bfkbdc *{color:#4c4f5d;font-size:12px;font-weight:600;}/*!sc*/
.bfkbdc .site{display:flex;align-items:center;justify-content:flex-start;gap:4px;}/*!sc*/
.bfkbdc .site >img{width:20px;height:20px;}/*!sc*/
.bfkbdc .site >a{display:flex;align-items:center;justify-content:flex-start;gap:4px;}/*!sc*/
.bfkbdc .site >a:hover{text-decoration:underline;}/*!sc*/
.bfkbdc .site >a >span{font-weight:400;}/*!sc*/
.bfkbdc .bold{font-weight:600;}/*!sc*/
data-styled.g2[id="sc-79de26ba-0"]{content:"bfkbdc,"}/*!sc*/
.lcARpx{color:#848999;font-size:14px;line-height:14px;display:flex;flex-direction:column;row-gap:12px;}/*!sc*/
.lcARpx .company-info{display:flex;flex-direction:column;row-gap:6px;}/*!sc*/
.lcARpx .company-info >div:nth-of-type(1){cursor:pointer;display:flex;}/*!sc*/
.lcARpx .company-info >div:nth-of-type(1) >img{margin-left:4px;}/*!sc*/
.lcARpx .company-info >div:nth-of-type(2){font-size:12px;line-height:15.6px;}/*!sc*/
data-styled.g3[id="sc-f571a6d-0"]{content:"lcARpx,"}/*!sc*/
.emPtVg{display:flex;flex-wrap:wrap;row-gap:8px;color:#848999;}/*!sc*/
.emPtVg >div{display:flex;justify-content:center;align-items:center;}/*!sc*/
.emPtVg >div >span{cursor:pointer;border-bottom:1px solid transparent;}/*!sc*/
.emPtVg >div >span:hover{border-bottom:1px solid #848999;}/*!sc*/
.emPtVg >div >img{margin:0 8px;}/*!sc*/
.emPtVg >div:nth-last-of-type(1) >img{display:none;}/*!sc*/
data-styled.g4[id="sc-f571a6d-1"]{content:"emPtVg,"}/*!sc*/
.iuXuNV{max-width:1080px;width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:12px;}/*!sc*/
data-styled.g5[id="sc-fdd827c9-0"]{content:"iuXuNV,"}/*!sc*/
.dpHOci{background:#f0f0f0;display:flex;justify-content:center;align-items:flex-start;width:100%;padding:20px 16px;margin-top:100px;}/*!sc*/
@media (min-width:768px){.dpHOci{padding:40px 24px;}}/*!sc*/
@media (min-width:1080px){.dpHOci{padding:40px 0;}}/*!sc*/
data-styled.g6[id="sc-fdd827c9-1"]{content:"dpHOci,"}/*!sc*/
.lcFtrr{max-width:1080px;width:100%;display:flex;flex-direction:column;align-items:flex-start;gap:24px;}/*!sc*/
.lcFtrr >img{width:122px;height:30px;}/*!sc*/
.lcFtrr .divider{width:100%;height:1px;}/*!sc*/
.lcFtrr .text{color:#848999;font-size:12px;line-height:16px;}/*!sc*/
data-styled.g7[id="sc-fdd827c9-2"]{content:"lcFtrr,"}/*!sc*/
.bjmvDz{display:inline-flex;align-items:center;gap:8px;height:32px;padding:8px 12px;background-color:rgba(255,255,255,0.1);border-radius:100px;cursor:pointer;user-select:none;}/*!sc*/
.bjmvDz:hover,.bjmvDz.isOpen{background-color:rgba(255,255,255,0.2);}/*!sc*/
.bjmvDz .game-icon{width:20px;}/*!sc*/
.bjmvDz .game-name{font-size:14px;line-height:1;font-weight:600;color:#fff;}/*!sc*/
data-styled.g8[id="sc-70e8bd48-0"]{content:"bjmvDz,"}/*!sc*/
.lejjnM{position:absolute;left:0;top:100%;display:none;margin-top:4px;width:max-content;color:#fff;border-radius:4px;background:#27282e;border:1px solid rgba(255,255,255,0.1);transform:translateX(-65px);}/*!sc*/
@media (min-width:542px){.lejjnM{transform:none;}}/*!sc*/
.lejjnM.isOpen{display:block;}/*!sc*/
data-styled.g9[id="sc-775b6444-0"]{content:"lejjnM,"}/*!sc*/
.fWDkt{display:flex;gap:4px;padding:8px 12px;}/*!sc*/
data-styled.g10[id="sc-775b6444-1"]{content:"fWDkt,"}/*!sc*/
.gzhkbK{min-width:150px;}/*!sc*/
data-styled.g11[id="sc-775b6444-2"]{content:"gzhkbK,"}/*!sc*/
.kOzqSl{display:flex;flex-direction:column;gap:4px;}/*!sc*/
.kOzqSl .site-group-title{display:flex;align-items:center;height:28px;padding:0 6px;color:#848999;font-size:11px;font-weight:600;user-select:none;}/*!sc*/
[lang='en'] .kOzqSl .site-group-title{text-transform:capitalize;}/*!sc*/
.kOzqSl .site-group-title::after{content:'';flex:1;height:1px;margin-left:4px;background:#363944;}/*!sc*/
.kOzqSl .site-link{padding:0 8px;display:flex;align-items:center;height:32px;color:#cfd1d7;font-weight:400;user-select:none;border-radius:4px;}/*!sc*/
.kOzqSl .site-link:hover{background:rgba(255,255,255,0.1);}/*!sc*/
.kOzqSl .site-link.active{color:#fff;font-weight:600;cursor:default;}/*!sc*/
.kOzqSl .site-link img{flex-shrink:0;margin-right:8px;width:16px;}/*!sc*/
.kOzqSl .site-link span{flex-shrink:0;display:block;white-space:nowrap;font-size:12px;}/*!sc*/
data-styled.g12[id="sc-775b6444-3"]{content:"kOzqSl,"}/*!sc*/
.jbzeUw{position:relative;margin-right:16px;z-index:11;}/*!sc*/
data-styled.g13[id="sc-bb7ad503-0"]{content:"jbzeUw,"}/*!sc*/
.jJdTML{width:100%;height:1px;background:#ffffff19;margin:8px 0;}/*!sc*/
data-styled.g14[id="sc-131d6a7f-0"]{content:"jJdTML,"}/*!sc*/
.icbgiv{width:100%;max-width:1080px;height:48px;}/*!sc*/
data-styled.g15[id="sc-131d6a7f-1"]{content:"icbgiv,"}/*!sc*/
.fewdBy{display:flex;width:100%;height:100%;align-items:center;gap:20px;}/*!sc*/
data-styled.g16[id="sc-131d6a7f-2"]{content:"fewdBy,"}/*!sc*/
.blvitM{display:flex;align-items:center;position:relative;height:100%;font-size:14px;font-weight:600;line-height:14px;color:#cfd1d7;}/*!sc*/
.blvitM:hover >ul{display:flex;}/*!sc*/
.blvitM >a{display:flex;gap:4px;color:#cfd1d7;align-items:center;height:100%;white-space:nowrap;}/*!sc*/
.blvitM >a:hover{color:#cfd1d7;}/*!sc*/
.blvitM >a >span{padding:6px 0px;}/*!sc*/
.blvitM >a >span.active{padding-bottom:5px;border-bottom:1px solid #ffffff;}/*!sc*/
.hWMkJg{display:flex;align-items:center;position:relative;height:100%;font-size:14px;font-weight:600;line-height:14px;color:#cfd1d7;}/*!sc*/
.hWMkJg:hover >ul{display:flex;}/*!sc*/
.hWMkJg >a{display:flex;gap:4px;color:#FFB93B;align-items:center;height:100%;white-space:nowrap;}/*!sc*/
.hWMkJg >a:hover{color:#FFB93B;}/*!sc*/
.hWMkJg >a >span{padding:6px 0px;}/*!sc*/
.hWMkJg >a >span.active{padding-bottom:5px;border-bottom:1px solid #ffffff;}/*!sc*/
.ekkwde{display:flex;align-items:center;position:relative;height:100%;font-size:14px;font-weight:600;line-height:14px;color:#cfd1d7;}/*!sc*/
.ekkwde:hover >ul{display:flex;}/*!sc*/
.ekkwde >a{display:flex;gap:4px;color:#0DC9B8;align-items:center;height:100%;white-space:nowrap;}/*!sc*/
.ekkwde >a:hover{color:#0DC9B8;}/*!sc*/
.ekkwde >a >span{padding:6px 0px;}/*!sc*/
.ekkwde >a >span.active{padding-bottom:5px;border-bottom:1px solid #ffffff;}/*!sc*/
.ekkwde >a svg rect{fill:#0DC9B8;}/*!sc*/
.hryRRw{display:flex;align-items:center;position:relative;height:100%;font-size:14px;font-weight:600;line-height:14px;color:#cfd1d7;}/*!sc*/
.hryRRw:hover >ul{display:flex;}/*!sc*/
.hryRRw >a{display:flex;gap:4px;color:#49E049;align-items:center;height:100%;white-space:nowrap;}/*!sc*/
.hryRRw >a:hover{color:#49E049;}/*!sc*/
.hryRRw >a >span{padding:6px 0px;}/*!sc*/
.hryRRw >a >span.active{padding-bottom:5px;border-bottom:1px solid #ffffff;}/*!sc*/
data-styled.g17[id="sc-131d6a7f-3"]{content:"blvitM,hWMkJg,ekkwde,hryRRw,"}/*!sc*/
.iNOscz{position:absolute;top:100%;background:#27282e;padding:7px 8px 8px 8px;display:none;flex-direction:column;border-top:2px solid #ffffff33;border-bottom-left-radius:4px;border-bottom-right-radius:4px;z-index:9;left:50%;transform:translate(-50%,0);}/*!sc*/
data-styled.g18[id="sc-131d6a7f-4"]{content:"iNOscz,"}/*!sc*/
.bdNUVH{width:100%;font-size:12px;font-weight:400;line-height:12px;color:#cfd1d7;}/*!sc*/
.bdNUVH >a{display:flex;gap:4px;justify-content:center;align-items:center;padding:10px 20px;color:#cfd1d7;white-space:nowrap;text-align:center;white-space:nowrap;}/*!sc*/
.bdNUVH >a:not(.active):hover{color:#ffffff;background:#ffffff1a;border-radius:4px;}/*!sc*/
.bdNUVH >a.active{color:#ffffff;font-weight:600;}/*!sc*/
data-styled.g19[id="sc-131d6a7f-5"]{content:"bdNUVH,"}/*!sc*/
.kOTVoV{width:100%;height:100%;}/*!sc*/
data-styled.g20[id="sc-2366739a-0"]{content:"kOTVoV,"}/*!sc*/
.gIYRr{position:relative;width:100%;}/*!sc*/
.gIYRr::before{z-index:2;content:'';position:absolute;background:linear-gradient(270deg,rgba(54,57,68,0),#27282e);left:0;height:100%;width:20px;top:0;}/*!sc*/
@media (min-width:768px){.gIYRr::before{width:24px;}}/*!sc*/
.gIYRr::after{z-index:2;content:'';position:absolute;background:linear-gradient(90deg,rgba(54,57,68,0),#27282e);right:0;top:0;height:100%;width:50px;}/*!sc*/
@media (min-width:768px){.gIYRr::after{width:24px;}}/*!sc*/
data-styled.g21[id="sc-2366739a-1"]{content:"gIYRr,"}/*!sc*/
.tBxmD{display:flex;width:100%;height:100%;align-items:center;gap:20px;background:#27282e;height:48px;padding:0px 50px 0px 20px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none;}/*!sc*/
.tBxmD::-webkit-scrollbar{display:none;}/*!sc*/
@media (min-width:768px){.tBxmD{padding:0px 24px;}}/*!sc*/
data-styled.g22[id="sc-2366739a-2"]{content:"tBxmD,"}/*!sc*/
.fBwujA{display:flex;align-items:center;position:relative;height:100%;font-size:14px;font-weight:600;line-height:14px;color:#cfd1d7;}/*!sc*/
.fBwujA:hover >ul{display:flex;}/*!sc*/
.fBwujA >a,.fBwujA button{display:flex;gap:4px;color:#cfd1d7;align-items:center;height:100%;white-space:nowrap;}/*!sc*/
.fBwujA >a:hover,.fBwujA button:hover{color:#cfd1d7;}/*!sc*/
.fBwujA >a >span,.fBwujA button >span{padding:6px 0px;}/*!sc*/
.fBwujA >a >span.active,.fBwujA button >span.active{padding-bottom:5px;border-bottom:1px solid #ffffff;}/*!sc*/
.cSqpgg{display:flex;align-items:center;position:relative;height:100%;font-size:14px;font-weight:600;line-height:14px;color:#cfd1d7;}/*!sc*/
.cSqpgg:hover >ul{display:flex;}/*!sc*/
.cSqpgg >a,.cSqpgg button{display:flex;gap:4px;color:#FFB93B;align-items:center;height:100%;white-space:nowrap;}/*!sc*/
.cSqpgg >a:hover,.cSqpgg button:hover{color:#FFB93B;}/*!sc*/
.cSqpgg >a >span,.cSqpgg button >span{padding:6px 0px;}/*!sc*/
.cSqpgg >a >span.active,.cSqpgg button >span.active{padding-bottom:5px;border-bottom:1px solid #ffffff;}/*!sc*/
.evDeIe{display:flex;align-items:center;position:relative;height:100%;font-size:14px;font-weight:600;line-height:14px;color:#cfd1d7;}/*!sc*/
.evDeIe:hover >ul{display:flex;}/*!sc*/
.evDeIe >a,.evDeIe button{display:flex;gap:4px;color:#0DC9B8;align-items:center;height:100%;white-space:nowrap;}/*!sc*/
.evDeIe >a:hover,.evDeIe button:hover{color:#0DC9B8;}/*!sc*/
.evDeIe >a >span,.evDeIe button >span{padding:6px 0px;}/*!sc*/
.evDeIe >a >span.active,.evDeIe button >span.active{padding-bottom:5px;border-bottom:1px solid #ffffff;}/*!sc*/
.evDeIe rect{fill:#0DC9B8;}/*!sc*/
.jipTlI{display:flex;align-items:center;position:relative;height:100%;font-size:14px;font-weight:600;line-height:14px;color:#cfd1d7;}/*!sc*/
.jipTlI:hover >ul{display:flex;}/*!sc*/
.jipTlI >a,.jipTlI button{display:flex;gap:4px;color:#49E049;align-items:center;height:100%;white-space:nowrap;}/*!sc*/
.jipTlI >a:hover,.jipTlI button:hover{color:#49E049;}/*!sc*/
.jipTlI >a >span,.jipTlI button >span{padding:6px 0px;}/*!sc*/
.jipTlI >a >span.active,.jipTlI button >span.active{padding-bottom:5px;border-bottom:1px solid #ffffff;}/*!sc*/
data-styled.g23[id="sc-2366739a-3"]{content:"fBwujA,cSqpgg,evDeIe,jipTlI,"}/*!sc*/
.cdyCBT{display:none;width:100%;background:#27282e;justify-content:center;padding:0px 24px;}/*!sc*/
@media (min-width:768px){.cdyCBT{display:flex;}}/*!sc*/
data-styled.g25[id="sc-ccc91b07-1"]{content:"cdyCBT,"}/*!sc*/
.bkeqdy{width:100%;}/*!sc*/
@media (min-width:768px){.bkeqdy{display:none;}}/*!sc*/
data-styled.g26[id="sc-ccc91b07-2"]{content:"bkeqdy,"}/*!sc*/
.fWohSn{position:relative;z-index:10;display:flex;border-radius:4px;background-image:linear-gradient(90deg, #3FE6FD, #C623FF);background-clip:border-box;background-origin:border-box;border:1px solid transparent;overflow:hidden;}/*!sc*/
.fWohSn .inner{position:absolute;top:0;bottom:0;left:0;right:0;z-index:-1;border-radius:4px;background-color:#252A3C;}/*!sc*/
data-styled.g27[id="sc-f1ed9366-0"]{content:"fWohSn,"}/*!sc*/
.hMtzZe{width:100%;order:4;}/*!sc*/
@media (min-width:768px){.hMtzZe{width:250px;order:3;margin:0;}}/*!sc*/
@media (min-width:992px){.hMtzZe{order:4;}}/*!sc*/
data-styled.g28[id="sc-8839482d-0"]{content:"hMtzZe,"}/*!sc*/
.kjKrAM{width:100%;}/*!sc*/
.kjKrAM .search-form{display:flex;background-color:#2d2f37;overflow:hidden;height:34px;}/*!sc*/
@media (min-width:768px){.kjKrAM .search-form{height:30px;}}/*!sc*/
.kjKrAM .search-input{flex:1;display:block;width:100%;height:100%;padding:9px 0px 9px 11px;color:#fff;font-size:12px;border:0;background-color:#2d2f37;line-height:100%;outline:0;}/*!sc*/
.kjKrAM .search-input::placeholder{color:#ffffff80;}/*!sc*/
.kjKrAM .search-button{flex-shrink:0;display:flex;align-items:center;padding:9px 11px 9px 8px;background-color:#2d2f37;border:0;cursor:pointer;}/*!sc*/
data-styled.g29[id="sc-8839482d-1"]{content:"kjKrAM,"}/*!sc*/
.ioRvLF{width:100%;z-index:99;}/*!sc*/
data-styled.g30[id="sc-b8de4bb4-0"]{content:"ioRvLF,"}/*!sc*/
.dmtAEq{position:relative;display:flex;width:100%;align-items:center;justify-content:center;background:#212227;padding:10px 0px;}/*!sc*/
@media (min-width:768px){.dmtAEq{height:64px;padding:0px;}}/*!sc*/
data-styled.g31[id="sc-b8de4bb4-1"]{content:"dmtAEq,"}/*!sc*/
.cJfLWH{display:flex;width:100%;align-items:center;padding:0px 16px;gap:10px 8px;flex-wrap:wrap;}/*!sc*/
.cJfLWH >h1{display:none;}/*!sc*/
@media (min-width:768px){.cJfLWH{flex-direction:row;padding:0px 24px;}}/*!sc*/
@media (min-width:1144px){.cJfLWH{width:1080px;padding:0;}}/*!sc*/
.cJfLWH >.divider{flex:1;}/*!sc*/
.cJfLWH img{display:block;}/*!sc*/
data-styled.g32[id="sc-b8de4bb4-2"]{content:"cJfLWH,"}/*!sc*/
.fbEzpW{display:flex;flex-direction:column;background:#f5f5f5;min-height:100vh;}/*!sc*/
.fbEzpW >div.container-content{position:relative;display:flex;flex-direction:column;flex:1;}/*!sc*/
data-styled.g36[id="sc-b7ea3dc6-0"]{content:"fbEzpW,"}/*!sc*/
.cpuFVD{padding:12px 10px;min-height:340px;background:#fff;position:relative;display:flex;justify-content:center;align-items:center;overflow:hidden;}/*!sc*/
@media (min-width: 769px){.cpuFVD{z-index:2;width:100%;max-width:1120px;min-height:auto;height:114px;margin:20px auto;border-radius:16px;background:rgba(255,255,255,0.1);backdrop-filter:blur(6px);}}/*!sc*/
data-styled.g37[id="sc-b7ea3dc6-1"]{content:"cpuFVD,"}/*!sc*/
.geJaGr{width:100%;margin:0 auto;}/*!sc*/
data-styled.g38[id="sc-b7ea3dc6-2"]{content:"geJaGr,"}/*!sc*/
.dctiIf{background:#f5f5f5;width:100%;max-width:1120px;padding:0 16px;margin:0 auto;z-index:1;}/*!sc*/
@media (min-width: 769px){.dctiIf{padding:0 20px;}}/*!sc*/
@media (min-width: 1121px){.dctiIf{border-radius:16px;}}/*!sc*/
data-styled.g39[id="sc-b7ea3dc6-3"]{content:"dctiIf,"}/*!sc*/
.kQqPij{width:100%;border-radius:4pxz;height:44px;}/*!sc*/
data-styled.g117[id="sc-2502f828-0"]{content:"kQqPij,"}/*!sc*/
.bhtmxA{z-index:2;display:flex;align-items:center;width:100%;height:100%;}/*!sc*/
@media (min-width: 769px){.bhtmxA{height:230px;padding:0;}}/*!sc*/
data-styled.g118[id="sc-fab36292-0"]{content:"bhtmxA,"}/*!sc*/
.laInop{width:100%;height:100%;padding:20px 0px;}/*!sc*/
@media (min-width: 769px){.laInop{padding:0px;flex:1;}}/*!sc*/
data-styled.g119[id="sc-fab36292-1"]{content:"laInop,"}/*!sc*/
.kuwSSY{height:fit-content;display:flex;flex-direction:column;align-items:center;height:376px;max-width:1120px;margin:0 auto;position:relative;}/*!sc*/
@media (min-width: 769px){.kuwSSY{height:fit-content;margin-top:20px;position:static;}}/*!sc*/
data-styled.g121[id="sc-fab36292-3"]{content:"kuwSSY,"}/*!sc*/
.fujpSb{position:absolute;width:100%;height:100%;top:0;left:0;}/*!sc*/
@media (min-width: 769px){.fujpSb{height:520px;}}/*!sc*/
.fujpSb >img{width:100%;height:100%;object-fit:cover;}/*!sc*/
.fujpSb >img.bg{display:none;}/*!sc*/
@media (min-width: 769px){.fujpSb >img.bg{display:unset;}}/*!sc*/
.fujpSb >img.mobile-bg{height:376px;object-fit:cover;height:100%;}/*!sc*/
@media (min-width: 769px){.fujpSb >img.mobile-bg{display:none;}}/*!sc*/
data-styled.g122[id="sc-fab36292-4"]{content:"fujpSb,"}/*!sc*/
.cpMfsc{display:flex;flex-direction:column;gap:20px;padding:20px 0px;}/*!sc*/
@media (min-width: 769px){.cpMfsc{gap:24px;}}/*!sc*/
data-styled.g123[id="sc-dce3266-0"]{content:"cpMfsc,"}/*!sc*/
.Bikvy{display:flex;gap:10px;align-items:center;padding:11px 15px;background:#ffffff;border:1px solid #e9eaed;border-radius:8px;}/*!sc*/
.Bikvy >.notice{display:flex;flex-direction:column;gap:2px;}/*!sc*/
.Bikvy >.notice >div{display:flex;align-items:center;gap:6px;}/*!sc*/
.Bikvy >.notice >div >.decoration{display:block;width:4px;height:4px;background:#cfd1d7;}/*!sc*/
.Bikvy >.notice >div >p{flex:1;margin:0;padding:0;font-size:12px;line-height:16px;}/*!sc*/
.Bikvy >.notice >div >p.strong{font-weight:600;color:#cd5c5c;}/*!sc*/
data-styled.g124[id="sc-dce3266-1"]{content:"Bikvy,"}/*!sc*/
.JNOGS{width:100%;height:1200px;}/*!sc*/
data-styled.g155[id="sc-fbc9b63-0"]{content:"JNOGS,"}/*!sc*/
.glfQNR{border-radius:8px;overflow:hidden;backdrop-filter:blur(6px);background:#ffffff14;min-width:156px;max-width:100%;}/*!sc*/
@media (min-width: 769px){.glfQNR{min-width:unset;width:140px;order:1;}}/*!sc*/
.glfQNR >.detail-link{display:flex;justify-content:center;align-items:center;gap:4px;width:100%;padding:11px 12px 12px 12px;font-size:12px;font-weight:600;line-height:12px;color:#ff99b1;border-top:1px solid rgba(255,153,177,0.4);background:rgba(255,153,177,0.1);}/*!sc*/
.glfQNR >.detail-link path{fill:#ff99b1;}/*!sc*/
.glfQNR >.detail-link:hover{filter:brightness(1.2);}/*!sc*/
.glfQNR >.contents{display:flex;flex-direction:column;gap:8px;padding:12px;}/*!sc*/
.glfQNR >.contents >li{display:flex;align-items:center;gap:8px;}/*!sc*/
.glfQNR >.contents >li >.category{color:rgba(255,255,255,0.5);font-size:12px;line-height:12px;}/*!sc*/
.glfQNR >.contents >li >.name{flex:1;width:auto;color:#ffffff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:12px;line-height:12px;}/*!sc*/
data-styled.g215[id="sc-ebddf4c0-0"]{content:"glfQNR,"}/*!sc*/
.hXqwuF{display:flex;flex-direction:column;gap:16px;align-items:center;height:100%;}/*!sc*/
@media (min-width: 769px){.hXqwuF{padding-left:32px;flex-direction:row;}}/*!sc*/
.hXqwuF .tooltip{z-index:3;white-space:pre-line;background:#8dd28d;text-align:center;line-height:130%;max-width:90vw;color:#1b6b1b;}/*!sc*/
data-styled.g228[id="sc-497a8bef-0"]{content:"hXqwuF,"}/*!sc*/
.iPmmyi{display:flex;align-items:center;justify-content:center;gap:16px;}/*!sc*/
data-styled.g229[id="sc-497a8bef-1"]{content:"iPmmyi,"}/*!sc*/
.iULSDL{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;}/*!sc*/
@media (min-width: 769px){.iULSDL{order:2;}}/*!sc*/
data-styled.g230[id="sc-497a8bef-2"]{content:"iULSDL,"}/*!sc*/
.djykdc{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:6px;}/*!sc*/
.djykdc >.last-activity-day{display:flex;align-items:center;gap:4px;color:#e9eaed;}/*!sc*/
.djykdc >.last-activity-day >span{font-size:12px;line-height:12px;}/*!sc*/
.djykdc >.last-activity-day >svg:focus{outline:none;}/*!sc*/
.djykdc >.date{display:flex;align-items:center;gap:4px;}/*!sc*/
.djykdc >.date >span{color:#a5a8b4;font-size:12px;line-height:12px;}/*!sc*/
.djykdc >.date >svg:focus{outline:none;}/*!sc*/
data-styled.g231[id="sc-497a8bef-3"]{content:"djykdc,"}/*!sc*/
.jcpxHi{display:flex;flex-direction:column;gap:20px;}/*!sc*/
data-styled.g232[id="sc-497a8bef-4"]{content:"jcpxHi,"}/*!sc*/
.fSzGby{display:flex;flex-direction:column;gap:12px;}/*!sc*/
data-styled.g233[id="sc-497a8bef-5"]{content:"fSzGby,"}/*!sc*/
.dmNVAu{display:flex;align-items:center;gap:8px;}/*!sc*/
.dmNVAu >.nickname{font-size:24px;font-weight:600;line-height:24px;color:#ffffff;}/*!sc*/
.dmNVAu >.world{display:flex;align-items:center;gap:2px;padding:5px 7px;border:1px solid #666a7a;border-radius:24px;}/*!sc*/
.dmNVAu >.world >img{object-fit:contain;}/*!sc*/
.dmNVAu >.world >span{font-size:12px;line-height:12px;color:#ffffff;}/*!sc*/
data-styled.g234[id="sc-497a8bef-6"]{content:"dmNVAu,"}/*!sc*/
.jucfQS{color:#e9eaed;display:flex;flex-wrap:wrap;align-items:center;gap:6px;}/*!sc*/
.jucfQS >span{font-size:12px;line-height:12px;}/*!sc*/
.jucfQS >.divider{width:1px;height:8px;background:#666a7a;}/*!sc*/
.jucfQS >.guild{display:flex;align-items:center;gap:2px;color:#f6a730;}/*!sc*/
.jucfQS >.guild >img{object-fit:contain;}/*!sc*/
.jucfQS >.guild span{font-size:12px;line-height:12px;}/*!sc*/
.jucfQS >.guild span:hover{text-decoration:underline;}/*!sc*/
data-styled.g235[id="sc-497a8bef-7"]{content:"jucfQS,"}/*!sc*/
.eNJI >.button-wrapper{display:flex;align-items:center;gap:6px;margin-bottom:8px;}/*!sc*/
.eNJI >.button-wrapper >.card-link{position:relative;display:flex;background-image:linear-gradient(to right,#dcba41 10%,#3fb9fd 60%,#ae13f8 100%);background-clip:border-box;background-origin:border-box;border:2px solid transparent;border-radius:4px;width:113px;}/*!sc*/
.eNJI >.button-wrapper >.card-link >.inner{flex:1;display:flex;align-items:center;justify-content:center;height:32px;padding:0 10px;color:#fff;background-color:#1b1b1e;border-radius:2px;}/*!sc*/
.eNJI >.button-wrapper >.card-link >.inner:hover{background-color:#323236;}/*!sc*/
.eNJI >.button-wrapper >.card-link >.inner .link-text{font-size:12px;font-weight:600;line-height:12px;}/*!sc*/
.eNJI >.last-updated{font-size:12px;line-height:12px;color:#e9eaed;}/*!sc*/
data-styled.g236[id="sc-497a8bef-8"]{content:"eNJI,"}/*!sc*/
.lgMRup{padding:12px;font-size:12px;font-weight:600;line-height:12px;border:none;border-radius:4px;cursor:pointer;white-space:nowrap;height:36px;display:flex;align-items:center;justify-content:center;}/*!sc*/
.lgMRup:hover{filter:brightness(1.2);}/*!sc*/
data-styled.g237[id="sc-497a8bef-9"]{content:"lgMRup,"}/*!sc*/
.ieRXFm{background:#5cb85c;color:#ffffff;}/*!sc*/
data-styled.g238[id="sc-497a8bef-10"]{content:"ieRXFm,"}/*!sc*/
.dNUmBB{background:#f6a730;color:#000000;}/*!sc*/
data-styled.g239[id="sc-497a8bef-11"]{content:"dNUmBB,"}/*!sc*/
.lfdRrX{width:36px;height:36px;background:#00000080;display:flex;align-items:center;justify-content:center;border:none;border-radius:4px;cursor:pointer;padding:0;}/*!sc*/
.lfdRrX >svg{width:16px;height:16px;}/*!sc*/
.lfdRrX:hover path{fill:#f6d554;}/*!sc*/
data-styled.g240[id="sc-497a8bef-12"]{content:"lfdRrX,"}/*!sc*/
.dZNJMP{display:flex;gap:2px;align-items:center;}/*!sc*/
.dZNJMP >span{font-size:12px;line-height:12px;}/*!sc*/
.dZNJMP >a{width:12px;height:12px;background:#00000080;border-radius:12px;display:flex;align-items:center;justify-content:center;}/*!sc*/
.dZNJMP >a >svg{width:6px;height:6px;}/*!sc*/
.dZNJMP >a >svg >path{fill:#ffffff;}/*!sc*/
data-styled.g241[id="sc-497a8bef-13"]{content:"dZNJMP,"}/*!sc*/
</style>
 </head>
 <body>
  <div class="sc-b7ea3dc6-0 fbEzpW">
   <header class="sc-b8de4bb4-0 ioRvLF">
    <div class="sc-b8de4bb4-1 dmtAEq">
     <div class="sc-b8de4bb4-2 cJfLWH">
      <h1>Maple.GG 메이플지지</h1><a href="https://dak.gg"><img src="https://cdn.dak.gg/maple/images/gnb/dakgg.svg" alt="DAK.GG" loading="lazy"></a>
      <div class="sc-bb7ad503-0 jbzeUw game-list-dropdown">
       <div class="sc-70e8bd48-0 bjmvDz btn-dropdown-trigger">
        <img src="https://cdn.dak.gg/maple/images/gnb/family/ico-maple.svg" class="game-icon" alt="Maple Story" loading="lazy">
        <div class="game-name">
         메이플스토리
        </div>
        <svg width="6" height="6" viewbox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M5.59334 1C5.9566 1 6.13824 1.52071 5.87588 1.8284L3.29263 4.85799C3.13118 5.04734 2.86882 5.04734 2.70737 4.85799L0.124121 1.8284C-0.138239 1.52071 0.043395 1 0.406664 1H5.59334Z" fill="white"></path>
        </svg>
       </div>
       <div class="sc-775b6444-0 lejjnM dropdown-list">
        <div class="sc-775b6444-1 fWDkt">
         <div class="sc-775b6444-2 gzhkbK">
          <div class="sc-775b6444-3 kOzqSl site-group">
           <a class="site-link" target="_self" href="https://poro.gg/?hl=ko-KR"><img src="https://cdn.dak.gg/maple/images/gnb/family/ico-lol.svg" class="dropdown-game-icon" alt="리그오브레전드" loading="lazy"><span class="dropdown-game-name">리그오브레전드</span></a><a class="site-link" target="_self" href="https://lolchess.gg/?hl=ko-KR"><img src="https://cdn.dak.gg/maple/images/gnb/family/ico-tft.svg" class="dropdown-game-icon" alt="전략적 팀 전투" loading="lazy"><span class="dropdown-game-name">전략적 팀 전투</span></a><a class="site-link" target="_self" href="https://dak.gg/valorant/?hl=ko"><img src="https://cdn.dak.gg/maple/images/gnb/family/ico-val.svg" class="dropdown-game-icon" alt="발로란트" loading="lazy"><span class="dropdown-game-name">발로란트</span></a><a class="site-link" target="_self" href="https://dak.gg/pubg/?hl=ko-KR"><img src="https://cdn.dak.gg/maple/images/gnb/family/ico-pubg.svg" class="dropdown-game-icon" alt="배틀그라운드" loading="lazy"><span class="dropdown-game-name">배틀그라운드</span></a><a class="site-link" target="_self" href="https://dak.gg/er/?hl=ko"><img src="https://cdn.dak.gg/maple/images/gnb/family/ico-er.svg" class="dropdown-game-icon" alt="이터널 리턴" loading="lazy"><span class="dropdown-game-name">이터널 리턴</span></a><a class="site-link active" target="_self" href="https://maple.gg"><img src="https://cdn.dak.gg/maple/images/gnb/family/ico-maple.svg" class="dropdown-game-icon" alt="메이플스토리" loading="lazy"><span class="dropdown-game-name">메이플스토리</span></a><a class="site-link" target="_self" href="https://dak.gg/genshin/?hl=ko"><img src="https://cdn.dak.gg/maple/images/gnb/family/ico-genshin.svg" class="dropdown-game-icon" alt="원신" loading="lazy"><span class="dropdown-game-name">원신</span></a>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="divider"></div>
      <div class="sc-8839482d-0 hMtzZe">
       <div class="sc-f1ed9366-0 fWohSn">
        <div class="inner"></div>
        <div class="sc-8839482d-1 kjKrAM">
         <form class="search-form">
          <input maxlength="20" type="text" class="search-input" placeholder="캐릭터 또는 길드" required name="maple-nickname"><button class="search-button" type="submit">
           <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.824 11.0391L8.68035 7.89844C9.3607 7.07812 9.73607 6.02344 9.73607 4.875C9.73607 2.20312 7.53079 0 4.85631 0C2.15836 0 0 2.20312 0 4.875C0 7.57031 2.18182 9.75 4.85631 9.75C5.9824 9.75 7.03812 9.375 7.8827 8.69531L11.0264 11.8359C11.1437 11.9531 11.2845 12 11.4487 12C11.5894 12 11.7302 11.9531 11.824 11.8359C12.0587 11.625 12.0587 11.2734 11.824 11.0391ZM1.1261 4.875C1.1261 2.8125 2.79179 1.125 4.87977 1.125C6.94428 1.125 8.63343 2.8125 8.63343 4.875C8.63343 6.96094 6.94428 8.625 4.87977 8.625C2.79179 8.625 1.1261 6.96094 1.1261 4.875Z" fill="white"></path>
           </svg></button>
         </form>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div class="sc-ccc91b07-0 kqfhDP">
     <nav class="sc-ccc91b07-1 cdyCBT">
      <nav class="sc-131d6a7f-1 icbgiv">
       <ul class="sc-131d6a7f-2 fewdBy">
        <li class="sc-131d6a7f-3 blvitM"><a href="/"><span class="">메인</span></a></li>
        <li class="sc-131d6a7f-3 blvitM"><a href="/info/link"><span class="">가이드</span></a>
         <ul class="sc-131d6a7f-4 iNOscz">
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/info/link">링크</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/info/union">유니온</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/info/dungeon">폭업 사냥터</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/info/muto">무토 레시피</a></li>
         </ul></li>
        <li class="sc-131d6a7f-3 blvitM"><a href="/tools/analysis"><span class="">유용한 도구</span></a>
         <ul class="sc-131d6a7f-4 iNOscz">
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/tools/analysis">코디 분석</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/tools/coordinate">믹염 코디</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/tools/mycharacters">메애기 한눈에</a></li>
         </ul></li>
        <li class="sc-131d6a7f-3 hWMkJg"><a href="/jobs"><span class="">직업 분석</span></a></li>
        <li class="sc-131d6a7f-3 ekkwde"><a href="/history/cube"><span class="">큐브/스타포스</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewbox="0 0 12 12">
           <rect width="12" height="12" fill="#FBDB51" rx="2"></rect><path fill="#000" d="M8.571 3H7.303v3.812h-.06L4.553 3H3.429v6h1.277V5.188h.05L7.466 9H8.57z"></path>
          </svg></a></li>
        <li class="sc-131d6a7f-3 blvitM"><a href="/trends/popular"><span class="">트렌드</span></a>
         <ul class="sc-131d6a7f-4 iNOscz">
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/trends/popular">실시간 인기 프로필</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/trends/challenge">만렙 도전 현황</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/trends/leap">월드 리프 현황</a></li>
          <li class="sc-131d6a7f-0 jJdTML"></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/trends/power">전투력 통계</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/trends/job">직업 통계</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/trends/world">월드 통계</a></li>
         </ul></li>
        <li class="sc-131d6a7f-3 blvitM"><a href="/ranks/power"><span class="">순위표</span></a>
         <ul class="sc-131d6a7f-4 iNOscz">
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/power">전투력 랭킹</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/birthday">메생 랭킹
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewbox="0 0 12 12">
             <rect width="12" height="12" fill="#FBDB51" rx="2"></rect><path fill="#000" d="M8.571 3H7.303v3.812h-.06L4.553 3H3.429v6h1.277V5.188h.05L7.466 9H8.57z"></path>
            </svg></a></li>
          <li class="sc-131d6a7f-0 jJdTML"></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/total">일반 랭킹</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/reboot">리부트 랭킹</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/guild">길드 랭킹</a></li>
          <li class="sc-131d6a7f-0 jJdTML"></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/dojang">무릉도장 랭킹</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/seed">더 시드 랭킹</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/achievement">업적 랭킹</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/ranks/union">유니온 랭킹</a></li>
         </ul></li>
        <li class="sc-131d6a7f-3 blvitM"><a href="/favorite"><span class="">즐겨찾기</span></a></li>
        <li class="sc-131d6a7f-3 blvitM"><a href="/board/news/list"><span class="">새소식</span></a>
         <ul class="sc-131d6a7f-4 iNOscz">
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/board/news/list">업데이트 정보</a></li>
          <li class="sc-131d6a7f-5 bdNUVH"><a class="" href="/board/event/list">이벤트 정보</a></li>
         </ul></li>
        <li class="sc-131d6a7f-3 hryRRw"><a href="https://dak.gg/cards?view=grid&amp;game=maplestory&amp;type=all&amp;from=maplestory"><span class="">닥지지 카드</span></a></li>
       </ul>
      </nav>
     </nav>
     <nav class="sc-ccc91b07-2 bkeqdy">
      <nav class="sc-2366739a-0 kOTVoV">
       <div class="sc-2366739a-1 gIYRr">
        <ul class="sc-2366739a-2 tBxmD">
         <li class="sc-2366739a-3 fBwujA"><a href="/"><span class="">메인</span></a></li>
         <li class="sc-2366739a-3 fBwujA"><a href="/info/link"><span class="">가이드</span></a></li>
         <li class="sc-2366739a-3 fBwujA"><a href="/tools/analysis"><span class="">유용한 도구</span></a></li>
         <li class="sc-2366739a-3 cSqpgg"><a href="/jobs"><span class="">직업 분석</span></a></li>
         <li class="sc-2366739a-3 evDeIe"><a href="/history/cube"><span class="">큐브/스타포스</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewbox="0 0 12 12">
            <rect width="12" height="12" fill="#FBDB51" rx="2"></rect><path fill="#000" d="M8.571 3H7.303v3.812h-.06L4.553 3H3.429v6h1.277V5.188h.05L7.466 9H8.57z"></path>
           </svg></a></li>
         <li class="sc-2366739a-3 fBwujA"><a href="/trends/popular"><span class="">트렌드</span></a></li>
         <li class="sc-2366739a-3 fBwujA"><a href="/ranks/power"><span class="">순위표</span></a></li>
         <li class="sc-2366739a-3 fBwujA"><a href="/favorite"><span class="">즐겨찾기</span></a></li>
         <li class="sc-2366739a-3 fBwujA"><a href="/board/news/list"><span class="">새소식</span></a></li>
         <li class="sc-2366739a-3 jipTlI"><a href="https://dak.gg/cards?view=grid&amp;game=maplestory&amp;type=all&amp;from=maplestory"><span class="">닥지지 카드</span></a></li>
        </ul>
       </div>
      </nav>
     </nav>
    </div>
   </header>
   <div class="container-content" id="content-container">
    <div class="sc-b7ea3dc6-2 geJaGr">
     <div class="VenatusRichMedia" id="rich-media-placement">
      <div class="vm-placement" data-id="664b0240423195164ba97793" style="display:none"></div>
     </div>
     <section class="sc-fab36292-3 kuwSSY">
      <div id="inner-header-container" class="sc-fab36292-4 fujpSb">
       <img class="bg" src="https://cdn.dak.gg/maple/images/bg/guide-top-bg.jpg" alt="background" loading="lazy">
       <img class="mobile-bg" src="https://cdn.dak.gg/maple/images/bg/guide-top-bg-m.jpg" alt="background" loading="lazy">
      </div>
      <div class="sc-fab36292-0 bhtmxA">
       <div class="sc-fab36292-1 laInop">
        <section class="sc-497a8bef-0 hXqwuF">
         <div class="sc-497a8bef-1 iPmmyi">
          <div class="sc-497a8bef-2 iULSDL">
           <img class="character-image" src="https://open.api.nexon.com/static/maplestory/Character/NGIHAABAGHFBCDPBCIHPDCJLOLIAECHJLOHHIMEBIHBDFFEFGBLNIKAPNDNNIKDIJNMHGAAMFDBOGMKAPMAJDDMGNKFGLJAHFKPCJCCPGHKFMKCHJGHCHHHJOKLHJGCNGCPMCPPFHFEGJCCMLIIOFMNOKPPPIOPDNBGFBILPBKGLOEAPIJMCNIJJKMBBEKMJFEDBMFEHEOCNOBMBMGPFLPJKPLGCJDGIANKDCFLKDDMPIGAIPMNJNPIPIPGBECAO.png" alt="삑살" width="156" height="156">
           <div class="sc-497a8bef-3 djykdc">
            <div class="last-activity-day">
             <span>마지막 활동일: <!-- -->최근 7일</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="none" viewbox="0 0 13 12" data-tooltip-id="tooltip-latestDataChangedAt">
              <path fill="url(#a)" fill-opacity="0.5" d="M5.917.324a1.2 1.2 0 0 1 1.166 0l4.2 2.333a1.2 1.2 0 0 1 .617 1.05v4.587a1.2 1.2 0 0 1-.617 1.049l-4.2 2.333a1.2 1.2 0 0 1-1.166 0l-4.2-2.333a1.2 1.2 0 0 1-.617-1.05V3.707a1.2 1.2 0 0 1 .617-1.049z"></path><path fill="url(#b)" fill-rule="evenodd" d="M10.7 3.706 6.5 1.373 2.3 3.706v4.588l4.2 2.333 4.2-2.333zM7.083.324a1.2 1.2 0 0 0-1.166 0l-4.2 2.333a1.2 1.2 0 0 0-.617 1.05v4.587c0 .436.236.837.617 1.049l4.2 2.333a1.2 1.2 0 0 0 1.166 0l4.2-2.333a1.2 1.2 0 0 0 .617-1.05V3.707a1.2 1.2 0 0 0-.617-1.049z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M8.66 4.293a.486.486 0 0 1 .138.716L6.822 7.581a.604.604 0 0 1-.824.1L4.302 6.395a.483.483 0 0 1-.072-.724.603.603 0 0 1 .795-.066l1.223.928 1.624-2.114a.6.6 0 0 1 .786-.126" clip-rule="evenodd"></path><defs>
               <lineargradient id="a" x1="3.256" x2="9.256" y1="1.2" y2="10.5" gradientunits="userSpaceOnUse">
                <stop stop-color="#13B5B1"></stop>
                <stop offset="1" stop-color="#0F8885"></stop>
               </lineargradient>
               <lineargradient id="b" x1="6.5" x2="6.5" y1="0" y2="12" gradientunits="userSpaceOnUse">
                <stop stop-color="#7FDBD9"></stop>
                <stop offset="1" stop-color="#2D8987"></stop>
               </lineargradient>
              </defs>
             </svg>
            </div>
            <div class="date">
             <span>Since <!-- -->2016-07-05</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" fill="none" viewbox="0 0 13 12" data-tooltip-id="tooltip-sinceValid">
              <path fill="url(#a)" fill-opacity="0.5" d="M5.917.324a1.2 1.2 0 0 1 1.166 0l4.2 2.333a1.2 1.2 0 0 1 .617 1.05v4.587a1.2 1.2 0 0 1-.617 1.049l-4.2 2.333a1.2 1.2 0 0 1-1.166 0l-4.2-2.333a1.2 1.2 0 0 1-.617-1.05V3.707a1.2 1.2 0 0 1 .617-1.049z"></path><path fill="url(#b)" fill-rule="evenodd" d="M10.7 3.706 6.5 1.373 2.3 3.706v4.588l4.2 2.333 4.2-2.333zM7.083.324a1.2 1.2 0 0 0-1.166 0l-4.2 2.333a1.2 1.2 0 0 0-.617 1.05v4.587c0 .436.236.837.617 1.049l4.2 2.333a1.2 1.2 0 0 0 1.166 0l4.2-2.333a1.2 1.2 0 0 0 .617-1.05V3.707a1.2 1.2 0 0 0-.617-1.049z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M8.66 4.293a.486.486 0 0 1 .138.716L6.822 7.581a.604.604 0 0 1-.824.1L4.302 6.395a.483.483 0 0 1-.072-.724.603.603 0 0 1 .795-.066l1.223.928 1.624-2.114a.6.6 0 0 1 .786-.126" clip-rule="evenodd"></path><defs>
               <lineargradient id="a" x1="3.256" x2="9.256" y1="1.2" y2="10.5" gradientunits="userSpaceOnUse">
                <stop stop-color="#13B5B1"></stop>
                <stop offset="1" stop-color="#0F8885"></stop>
               </lineargradient>
               <lineargradient id="b" x1="6.5" x2="6.5" y1="0" y2="12" gradientunits="userSpaceOnUse">
                <stop stop-color="#7FDBD9"></stop>
                <stop offset="1" stop-color="#2D8987"></stop>
               </lineargradient>
              </defs>
             </svg>
            </div>
           </div>
          </div>
          <div class="sc-ebddf4c0-0 glfQNR">
           <ul class="contents">
            <li title="">
             <div class="category">
              모자
             </div>
             <div class="name"></div></li>
            <li title="">
             <div class="category">
              헤어
             </div>
             <div class="name"></div></li>
            <li title="">
             <div class="category">
              성형
             </div>
             <div class="name"></div></li>
            <li title="">
             <div class="category">
              상의
             </div>
             <div class="name"></div></li>
            <li title="">
             <div class="category">
              하의
             </div>
             <div class="name"></div></li>
            <li title="">
             <div class="category">
              신발
             </div>
             <div class="name"></div></li>
            <li title="">
             <div class="category">
              무기
             </div>
             <div class="name"></div></li>
           </ul><a class="detail-link" href="/tools/analysis/character/%EC%82%91%EC%82%B4">코디 상세 분석
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewbox="0 0 12 12">
             <path fill="#CA9372" d="M11.864 5.655 8.309 1.66a.44.44 0 0 0-.661-.021.526.526 0 0 0-.02.71l2.87 3.201H.75a.45.45 0 1 0 0 .9h9.732l-2.853 3.2c-.175.21-.175.523.019.711a.44.44 0 0 0 .66-.02l3.556-3.996A.512.512 0 0 0 12 6.01a.618.618 0 0 0-.136-.355"></path>
            </svg></a>
          </div>
         </div>
         <div class="sc-497a8bef-4 jcpxHi">
          <div class="sc-497a8bef-5 fSzGby">
           <div class="sc-497a8bef-6 dmNVAu">
            <div class="nickname">
             삑살
            </div>
            <div class="world">
             <img src="//cdn.maple.gg/images/maplestory/world/ico_world_croa.gif" alt="world" width="12" height="12"><span>크로아</span>
            </div>
           </div>
           <div class="sc-497a8bef-7 jucfQS">
            <span class="level">Lv.<!-- -->288</span><span class="divider"></span><span class="job">
             <div class="sc-497a8bef-13 dZNJMP">
              <span>아크메이지(불,독)</span><a href="/jobs/아크메이지(불,독)/equipment">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewbox="0 0 14 14">
                <path fill="#000" d="m5.633 1.092 5.53 5.438c.121.143.212.313.212.484 0 .171-.09.342-.211.456l-5.53 5.438a.753.753 0 0 1-1.028.028c-.303-.256-.303-.683-.03-.968l5.076-4.982-5.077-4.954a.652.652 0 0 1 .03-.968.753.753 0 0 1 1.028.028"></path>
               </svg></a>
             </div></span><span class="divider"></span><span class="popularity">인기도<!-- --> <!-- -->798</span><span class="divider"></span>
            <div class="guild">
             <img src="https://cdn.dak.gg/maple/images/guild/guild-placeholder.png" alt="guild" width="12" height="12"><a href="/guild/croa/Case"><span>Case</span></a>
            </div>
           </div>
          </div>
          <div class="sc-497a8bef-8 eNJI">
           <div class="button-wrapper">
            <button class="sc-497a8bef-9 sc-497a8bef-10 lgMRup ieRXFm">정보 갱신</button><button class="sc-497a8bef-9 sc-497a8bef-11 lgMRup dNUmBB">프로필 저장</button><a class="card-link" target="_blank" href="https://dak.gg/cards/edit?game=maplestory&amp;nickname=%EC%82%91%EC%82%B4&amp;shard=kr">
             <div class="inner">
              <span class="link-text">닥지지 카드 만들기</span>
             </div></a><button class="sc-497a8bef-12 lfdRrX">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewbox="0 0 18 18">
              <path fill="#fff" d="M8.983 0c.341 0 .614.21.75.492l2.354 4.952 5.219.808c.307.035.546.281.648.562a.844.844 0 0 1-.205.878l-3.786 3.864L14.85 17a.86.86 0 0 1-.307.843c-.273.176-.614.21-.887.07l-4.673-2.599-4.673 2.6c-.273.14-.58.105-.853-.07-.239-.177-.375-.528-.341-.844l.92-5.444L.252 7.692a.844.844 0 0 1-.205-.878c.102-.28.341-.527.648-.562l5.219-.808L8.267.492C8.403.21 8.676 0 8.983 0m0 2.775L7.209 6.603c-.136.246-.34.422-.614.457l-4.059.597 2.934 2.986c.204.21.272.491.238.772l-.682 4.18 3.582-1.967a.783.783 0 0 1 .784 0l3.582 1.967-.682-4.18c-.069-.28.034-.562.238-.772l2.9-2.986-4.025-.597a.771.771 0 0 1-.614-.457z"></path>
             </svg></button>
           </div>
           <div class="last-updated">
            마지막 업데이트<!-- -->: <!-- -->4시간 전
           </div>
          </div>
         </div>
        </section>
       </div>
      </div>
     </section>
    </div>
    <div class="sc-b7ea3dc6-1 cpuFVD"></div>
    <main class="sc-b7ea3dc6-3 dctiIf">
     <div class="sc-dce3266-0 cpMfsc">
      <div class="sc-dce3266-1 Bikvy">
       <img src="https://cdn.dak.gg/maple/images/common/img-evan-round.png" alt="에반" width="48" height="48">
       <div class="notice">
        <div>
         <span class="decoration"></span>
         <p>캐릭터 스탯 및 장비 정보는 2023.12.21 이후 접속한 계정의 캐릭터만 확인이 가능합니다.</p>
        </div>
        <div>
         <span class="decoration"></span>
         <p class="strong">이제 캐릭터 정보와 유니온 정보가 실시간으로 갱신됩니다. 평균 15분 내외의 딜레이가 있습니다.</p>
        </div>
       </div>
      </div>
      <section class="sc-2502f828-0 kQqPij">
       <span aria-live="polite" aria-busy="true"><span class="react-loading-skeleton" style="height:100%;border-radius:6px">‌</span><br></span>
      </section>
      <section class="sc-fbc9b63-0 JNOGS">
       <span aria-live="polite" aria-busy="true"><span class="react-loading-skeleton" style="height:100%;border-radius:8px">‌</span><br></span>
      </section>
     </div>
    </main>
   </div>
   <div class="sc-fdd827c9-1 dpHOci">
    <div class="sc-fdd827c9-2 lcFtrr">
     <a href="https://dak.gg"><img src="https://cdn.dak.gg/maple/images/footer/logo/dakgg-logo.svg" alt="DAKGG" loading="lazy"></a>
     <div class="sc-79de26ba-0 bfkbdc">
      <div class="site">
       <img src="https://cdn.dak.gg/maple/images/footer/logo/lol-logo.svg" alt="service-img" loading="lazy"><a href="https://poro.gg" target="_blank"><span><b>포로지지 - </b>롤 전적검색</span></a>
      </div>
      <div class="site">
       <img src="https://cdn.dak.gg/maple/images/footer/logo/maple-logo.svg" alt="service-img" loading="lazy"><a href="https://maple.gg/" target="_blank"><span><b>메이플지지 - </b>메이플스토리 전적검색</span></a>
      </div>
      <div class="site">
       <img src="https://cdn.dak.gg/maple/images/footer/logo/er-logo.svg" alt="service-img" loading="lazy"><a href="https://dak.gg/er" target="_blank"><span><b>이터널 리턴 닥지지 - </b>이터널 리턴 전적검색</span></a>
      </div>
      <div class="site">
       <img src="https://cdn.dak.gg/maple/images/footer/logo/tft-logo.svg" alt="service-img" loading="lazy"><a href="https://lolchess.gg" target="_blank"><span><b>롤체지지 - </b>전략적 팀 전투 전적검색</span></a>
      </div>
      <div class="site">
       <img src="https://cdn.dak.gg/maple/images/footer/logo/val-logo.svg" alt="service-img" loading="lazy"><a href="https://dak.gg/valorant" target="_blank"><span><b>발로란트 닥지지 - </b>발로란트 전적검색</span></a>
      </div>
      <div class="site">
       <img src="https://cdn.dak.gg/maple/images/footer/logo/pubg-logo.svg" alt="service-img" loading="lazy"><a href="https://dak.gg/pubg" target="_blank"><span><b>배그 닥지지 - </b>배틀그라운드 전적검색</span></a>
      </div>
      <div class="site">
       <img src="https://cdn.dak.gg/maple/images/footer/logo/genshin-logo.svg" alt="service-img" loading="lazy"><a href="https://dak.gg/genshin" target="_blank"><span><b>원신 닥지지 - </b>원신 전적검색</span></a>
      </div>
     </div>
     <img class="divider" src="https://cdn.dak.gg/maple/images/footer/icons/divider.svg" alt="divider" loading="lazy">
     <div class="sc-fdd827c9-0 iuXuNV">
      <div class="sc-f571a6d-0 lcARpx">
       <div class="sc-f571a6d-1 emPtVg">
        <div>
         <a href="/about/agreement">서비스 이용 약관</a>
         <img alt="rectangle" src="https://cdn.dak.gg/maple/images/footer/icons/rectangle.svg" loading="lazy">
        </div>
        <div>
         <a href="/about/privacy">개인정보 취급방침</a>
         <img alt="rectangle" src="https://cdn.dak.gg/maple/images/footer/icons/rectangle.svg" loading="lazy">
        </div>
        <div>
         <a href="mailto:biz@dak.gg">제휴 문의</a>
         <img alt="rectangle" src="https://cdn.dak.gg/maple/images/footer/icons/rectangle.svg" loading="lazy">
        </div>
        <div>
         <span>고객센터</span>
         <img alt="rectangle" src="https://cdn.dak.gg/maple/images/footer/icons/rectangle.svg" loading="lazy">
        </div>
        <div>
         <a href="https://career.dak.gg/">채용</a>
         <img alt="rectangle" src="https://cdn.dak.gg/maple/images/footer/icons/rectangle.svg" loading="lazy">
        </div>
       </div>
      </div>
      <div class="text">
       © All Rights Reserved. Hosted by PlayXP Inc. Maple.GG is not associated with NEXON Korea. Data based on NEXON Open API.
      </div>
     </div>
    </div>
   </div>
  </div>
  <script src="//cdn.dak.gg/maple/_next/static/chunks/webpack-c7814b2b4843cec7.js" async></script>
  <script>(self.__next_f=self.__next_f||[]).push([0]);self.__next_f.push([2,null])</script>
  <script>self.__next_f.push([1,"1:HL[\"//cdn.dak.gg/maple/_next/static/css/ec746eb2fb37a6b9.css\",\"style\"]\n0:\"$L2\"\n"])</script>
  <script>self.__next_f.push([1,"3:HL[\"//cdn.dak.gg/maple/_next/static/css/36840340f3f01bb9.css\",\"style\"]\n4:HL[\"//cdn.dak.gg/maple/_next/static/css/581b706478518238.css\",\"style\"]\n"])</script>
  <script>self.__next_f.push([1,"5:I[47690,[],\"\"]\n8:I[5613,[],\"\"]\nb:I[31778,[],\"\"]\n"])</script>
  <script>self.__next_f.push([1,"10:I[23122,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"1396\",\"static/chunks/1396-a5d526a0b9718370.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"6053\",\"static/chunks/6053-789a4626bfa14a0e.js\",\"7724\",\"static/chunks/7724-b1dfedace01b90ae.js\",\"713\",\"static/chunks/713-843be05d5bc0ba04.js\",\"2150\",\"static/chunks/2150-61a05520a335b803.js\",\"5800\",\"static/chunks/app/(profile)/u/%5Bnickname%5D/layout-f45bbcdb4e804760.js\"],\"\"]\n"])</script>
  <script>self.__next_f.push([1,"13:I[48955,[],\"\"]\n9:[\"nickname\",\"%EC%82%91%EC%82%B4\",\"d\"]\na:[\"tab\",\"\",\"oc\"]\nc:\"$Ld\"\nf:[\"tab\",\"\",\"oc\"]\n"])</script>
  <script>self.__next_f.push([1,"2:[[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"//cdn.dak.gg/maple/_next/static/css/ec746eb2fb37a6b9.css\",\"precedence\":\"next\",\"crossOrigin\":\"$undefined\"}]],[\"$\",\"$L5\",null,{\"buildId\":\"7xF7BHTnUc8zoDEUfmGxn\",\"assetPrefix\":\"//cdn.dak.gg/maple\",\"initialCanonicalUrl\":\"/u/%EC%82%91%EC%82%B4\",\"initialTree\":[\"\",{\"children\":[\"(profile)\",{\"children\":[\"u\",{\"children\":[[\"nickname\",\"%EC%82%91%EC%82%B4\",\"d\"],{\"header\":[\"children\",{\"children\":[[\"tab\",\"\",\"oc\"],{\"children\":[\"__PAGE__\",{}]}]}],\"children\":[[\"tab\",\"\",\"oc\"],{\"children\":[\"__PAGE__\",{}]}]}]}]}]},\"$undefined\",\"$undefined\",true],\"initialSeedData\":[\"\",{\"children\":[\"(profile)\",{\"children\":[\"u\",{\"children\":[[\"nickname\",\"%EC%82%91%EC%82%B4\",\"d\"],{\"header\":[\"children\",{\"children\":[[\"tab\",\"\",\"oc\"],{\"children\":[\"__PAGE__\",{},[\"$L6\",\"$L7\",null]]},[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(profile)\",\"children\",\"u\",\"children\",\"$9\",\"header\",\"children\",\"children\",\"$a\",\"children\"],\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"loadingScripts\":\"$undefined\",\"hasLoading\":false,\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$Lb\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"styles\":null}]]},[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(profile)\",\"children\",\"u\",\"children\",\"$9\",\"header\",\"children\",\"children\"],\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"loadingScripts\":\"$undefined\",\"hasLoading\":false,\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$Lb\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"styles\":null}]],\"children\":[[\"tab\",\"\",\"oc\"],{\"children\":[\"__PAGE__\",{},[\"$c\",\"$Le\",null]]},[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(profile)\",\"children\",\"u\",\"children\",\"$9\",\"children\",\"$f\",\"children\"],\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"loadingScripts\":\"$undefined\",\"hasLoading\":false,\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$Lb\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"styles\":[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"//cdn.dak.gg/maple/_next/static/css/581b706478518238.css\",\"precedence\":\"next\",\"crossOrigin\":\"$undefined\"}]]}]]},[null,[\"$\",\"$L10\",null,{\"header\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"header\",\"segmentPath\":[\"children\",\"(profile)\",\"children\",\"u\",\"children\",\"$9\",\"header\"],\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"loadingScripts\":\"$undefined\",\"hasLoading\":false,\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$Lb\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"styles\":null}],\"children\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(profile)\",\"children\",\"u\",\"children\",\"$9\",\"children\"],\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"loadingScripts\":\"$undefined\",\"hasLoading\":false,\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$Lb\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"styles\":null}],\"params\":{\"nickname\":\"%EC%82%91%EC%82%B4\"}}],null]]},[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(profile)\",\"children\",\"u\",\"children\"],\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"loadingScripts\":\"$undefined\",\"hasLoading\":false,\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$Lb\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"styles\":[[\"$\",\"link\",\"0\",{\"rel\":\"stylesheet\",\"href\":\"//cdn.dak.gg/maple/_next/static/css/36840340f3f01bb9.css\",\"precedence\":\"next\",\"crossOrigin\":\"$undefined\"}]]}]]},[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\",\"(profile)\",\"children\"],\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"loadingScripts\":\"$undefined\",\"hasLoading\":false,\"error\":\"$undefined\",\"errorStyles\":\"$undefined\",\"errorScripts\":\"$undefined\",\"template\":[\"$\",\"$Lb\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":\"$undefined\",\"notFoundStyles\":\"$undefined\",\"styles\":null}]]},[null,\"$L11\",null]],\"initialHead\":[false,\"$L12\"],\"globalErrorComponent\":\"$13\"}]]\n"])</script>
  <script>self.__next_f.push([1,"14:I[20399,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"4705\",\"static/chunks/dc112a36-a26ec11f6dfc39b0.js\",\"7674\",\"static/chunks/ca377847-9066ded4df52c2db.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"1396\",\"static/chunks/1396-a5d526a0b9718370.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"6053\",\"static/chunks/6053-789a4626bfa14a0e.js\",\"713\",\"static/chunks/713-843be05d5bc0ba04.js\",\"2260\",\"static/chunks/2260-787508622e407358.js\",\"625\",\"static/chunks/625-0e9e3e8f81d54af4.js\",\"2857\",\"static/chunks/2857-29bc5f980ab33352.js\",\"7424\",\"static/chunks/7424-6995cef075b54158.js\",\"5431\",\"static/chunks/5431-72de76afcb802962.js\",\"8471\",\"static/chunks/8471-39ea0bf428704a10.js\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"1748\",\"static/chunks/1748-c67ac111938f1720.js\",\"8045\",\"static/chunks/8045-5db4aa5fd4d0b502.js\",\"8067\",\"static/chunks/8067-e9440c463344d676.js\",\"8459\",\"static/chunks/app/(profile)/u/%5Bnickname%5D/%5B%5B...tab%5D%5D/page-ac69978abc1f9d8d.js\"],\"\"]\n"])</script>
  <script>self.__next_f.push([1,"15:I[85935,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"8475\",\"static/chunks/8475-b7dd1686ef79513b.js\",\"9949\",\"static/chunks/9949-884833fa3c1c5ccd.js\",\"3185\",\"static/chunks/app/layout-37d08a0f059ffb23.js\"],\"\"]\n16:I[20856,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217"])</script>
  <script>self.__next_f.push([1,"f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"8475\",\"static/chunks/8475-b7dd1686ef79513b.js\",\"9949\",\"static/chunks/9949-884833fa3c1c5ccd.js\",\"3185\",\"static/chunks/app/layout-37d08a0f059ffb23.js\"],\"\"]\n17:I[57969,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.j"])</script>
  <script>self.__next_f.push([1,"s\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"8475\",\"static/chunks/8475-b7dd1686ef79513b.js\",\"9949\",\"static/chunks/9949-884833fa3c1c5ccd.js\",\"3185\",\"static/chunks/app/layout-37d08a0f059ffb23.js\"],\"\"]\n18:I[18203,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"8475\",\"static/chunks/8475-b7dd1686ef79513b.js\",\"99"])</script>
  <script>self.__next_f.push([1,"49\",\"static/chunks/9949-884833fa3c1c5ccd.js\",\"3185\",\"static/chunks/app/layout-37d08a0f059ffb23.js\"],\"\"]\n19:I[31187,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"8475\",\"static/chunks/8475-b7dd1686ef79513b.js\",\"9949\",\"static/chunks/9949-884833fa3c1c5ccd.js\",\"3185\",\"static/chunks/app/layout-37d08a0f059ffb23.js\"],\"\""])</script>
  <script>self.__next_f.push([1,"]\n1c:I[23247,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"8475\",\"static/chunks/8475-b7dd1686ef79513b.js\",\"9949\",\"static/chunks/9949-884833fa3c1c5ccd.js\",\"3185\",\"static/chunks/app/layout-37d08a0f059ffb23.js\"],\"\"]\n1d:I[37838,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf0362"])</script>
  <script>self.__next_f.push([1,"17f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"8475\",\"static/chunks/8475-b7dd1686ef79513b.js\",\"9949\",\"static/chunks/9949-884833fa3c1c5ccd.js\",\"3185\",\"static/chunks/app/layout-37d08a0f059ffb23.js\"],\"\"]\n1e:I[18027,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d"])</script>
  <script>self.__next_f.push([1,".js\",\"9278\",\"static/chunks/9278-5d417a8400fe489f.js\",\"8475\",\"static/chunks/8475-b7dd1686ef79513b.js\",\"9949\",\"static/chunks/9949-884833fa3c1c5ccd.js\",\"3185\",\"static/chunks/app/layout-37d08a0f059ffb23.js\"],\"\"]\n1f:I[80449,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"1396\",\"static/chunks/1396-a5d526a0b9718370.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"6053\",\"static/chunks/6053-789a4626bfa14a0e.js\",\""])</script>
  <script>self.__next_f.push([1,"7724\",\"static/chunks/7724-b1dfedace01b90ae.js\",\"2150\",\"static/chunks/2150-61a05520a335b803.js\",\"7601\",\"static/chunks/app/error-2c298028d9f2a393.js\"],\"\"]\n20:I[28667,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"1396\",\"static/chunks/1396-a5d526a0b9718370.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"6053\",\"static/chunks/6053-789a4626bfa14a0e.js\",\"7724\",\"static/chunks/7724-b1dfedace01b90ae.js\",\"2150\",\""])</script>
  <script>self.__next_f.push([1,"static/chunks/2150-61a05520a335b803.js\",\"9160\",\"static/chunks/app/not-found-4e7f8bb00237eae1.js\"],\"\"]\ne:[\"$\",\"$L14\",null,{}]\n"])</script>
  <script>self.__next_f.push([1,"1a:[[0,{\"id\":0,\"key\":\"scania\",\"name\":\"스카니아\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_scania.gif\"}],[1,{\"id\":1,\"key\":\"bera\",\"name\":\"베라\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_bera.gif\"}],[3,{\"id\":3,\"key\":\"luna\",\"name\":\"루나\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_luna.gif\"}],[4,{\"id\":4,\"key\":\"zenith\",\"name\":\"제니스\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_zenith.gif\"}],[5,{\"id\":5,\"key\":\"croa\",\"name\":\"크로아\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_croa.gif\"}],[16,{\"id\":16,\"key\":\"elysium\",\"name\":\"엘리시움\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_elysium.gif\"}],[10,{\"id\":10,\"key\":\"union\",\"name\":\"유니온\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_union.gif\"}],[29,{\"id\":29,\"key\":\"enosis\",\"name\":\"이노시스\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_enosis.gif\"}],[43,{\"id\":43,\"key\":\"red\",\"name\":\"레드\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_red.gif\"}],[44,{\"id\":44,\"key\":\"aurora\",\"name\":\"오로라\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_aurora.gif\"}],[45,{\"id\":45,\"key\":\"reboot\",\"name\":\"리부트\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_reboot.gif\",\"isReboot\":true}],[46,{\"id\":46,\"key\":\"reboot2\",\"name\":\"리부트2\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_reboot2.gif\",\"isReboot\":true}],[48,{\"id\":48,\"key\":\"burning2\",\"name\":\"버닝2\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_burning.gif\",\"isBurning\":true}],[49,{\"id\":49,\"key\":\"burning\",\"name\":\"버닝\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_burning.gif\",\"isBurning\":true}],[50,{\"id\":50,\"key\":\"arcane\",\"name\":\"아케인\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_arcane.gif\"}],[51,{\"id\":51,\"key\":\"nova\",\"name\":\"노바\",\"iconUrl\":\"//cdn.maple.gg/images/maplestory/world/ico_world_nova.gif\"}],[-1,{\"id\":-1,\"key\":\"all\",\"name\":\"전체\",\"iconUrl\":\"https://cdn.dak.gg/maple/images/page/rank/icon/ico-world-all.png\"}]]\n"])</script>
  <script>self.__next_f.push([1,"1b:[[1,{\"id\":1,\"name\":\"기사단\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[2,{\"id\":2,\"name\":\"소울마스터\",\"key\":\"SoulMaster\",\"shortName\":\"소마\",\"classStart\":1,\"classEnd\":5}],[3,{\"id\":3,\"name\":\"도적\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[4,{\"id\":4,\"name\":\"듀얼블레이더\",\"key\":\"BladeMaster\",\"shortName\":\"듀블\",\"classStart\":4,\"classEnd\":5}],[5,{\"id\":5,\"name\":\"마법사\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[6,{\"id\":6,\"name\":\"비숍\",\"key\":\"Bishop\",\"shortName\":\"$undefined\",\"classStart\":4,\"classEnd\":5}],[7,{\"id\":7,\"name\":\"나이트로드\",\"key\":\"NightLord\",\"shortName\":\"나로\",\"classStart\":4,\"classEnd\":5}],[8,{\"id\":8,\"name\":\"제로\",\"key\":\"Zero\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[9,{\"id\":9,\"name\":\"해적\",\"key\":\"Pirate\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":1}],[10,{\"id\":10,\"name\":\"바이퍼\",\"key\":\"Viper\",\"shortName\":\"$undefined\",\"classStart\":4,\"classEnd\":5}],[11,{\"id\":11,\"name\":\"레지스탕스\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[12,{\"id\":12,\"name\":\"아크메이지(썬,콜)\",\"key\":\"IL_ArchMage\",\"shortName\":\"썬콜\",\"classStart\":4,\"classEnd\":5}],[13,{\"id\":13,\"name\":\"아란\",\"key\":\"Aran\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[14,{\"id\":14,\"name\":\"데몬슬레이어\",\"key\":\"DemonSlayer\",\"shortName\":\"데슬\",\"classStart\":1,\"classEnd\":5}],[15,{\"id\":15,\"name\":\"와일드헌터\",\"key\":\"WildHunter\",\"shortName\":\"와헌\",\"classStart\":1,\"classEnd\":5}],[16,{\"id\":16,\"name\":\"메르세데스\",\"key\":\"Mercedes\",\"shortName\":\"메르\",\"classStart\":1,\"classEnd\":5}],[17,{\"id\":17,\"name\":\"팬텀\",\"key\":\"Phantom\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[18,{\"id\":18,\"name\":\"궁수\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[19,{\"id\":19,\"name\":\"보우마스터\",\"key\":\"BowMaster\",\"shortName\":\"보마\",\"classStart\":4,\"classEnd\":5}],[20,{\"id\":20,\"name\":\"카이저\",\"key\":\"Kaiser\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[21,{\"id\":21,\"name\":\"배틀메이지\",\"key\":\"BattleMage\",\"shortName\":\"배메\",\"classStart\":1,\"classEnd\":5}],[22,{\"id\":22,\"name\":\"전사\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[23,{\"id\":23,\"name\":\"다크나이트\",\"key\":\"DarkKnight\",\"shortName\":\"닼나\",\"classStart\":4,\"classEnd\":5}],[24,{\"id\":24,\"name\":\"아크\",\"key\":\"Ark\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[25,{\"id\":25,\"name\":\"스트라이커\",\"key\":\"Striker\",\"shortName\":\"스커\",\"classStart\":1,\"classEnd\":5}],[26,{\"id\":26,\"name\":\"아크메이지(불,독)\",\"key\":\"AP_ArchMage\",\"shortName\":\"불독\",\"classStart\":4,\"classEnd\":5}],[27,{\"id\":27,\"name\":\"윈드브레이커\",\"key\":\"WindBreaker\",\"shortName\":\"윈브\",\"classStart\":1,\"classEnd\":5}],[28,{\"id\":28,\"name\":\"플레임위자드\",\"key\":\"FlameWizard\",\"shortName\":\"플위\",\"classStart\":1,\"classEnd\":5}],[29,{\"id\":29,\"name\":\"캐논마스터\",\"key\":\"CannonMaster\",\"shortName\":\"캐논\",\"classStart\":4,\"classEnd\":5}],[30,{\"id\":30,\"name\":\"히어로\",\"key\":\"Hero\",\"shortName\":\"$undefined\",\"classStart\":4,\"classEnd\":5}],[31,{\"id\":31,\"name\":\"은월\",\"key\":\"Eunwol\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[32,{\"id\":32,\"name\":\"팔라딘\",\"key\":\"Paladin\",\"shortName\":\"$undefined\",\"classStart\":4,\"classEnd\":5}],[33,{\"id\":33,\"name\":\"메카닉\",\"key\":\"Mechanic\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[34,{\"id\":34,\"name\":\"루미너스\",\"key\":\"Luminous\",\"shortName\":\"루미\",\"classStart\":1,\"classEnd\":5}],[35,{\"id\":35,\"name\":\"키네시스\",\"key\":\"Kinesis\",\"shortName\":\"키네\",\"classStart\":1,\"classEnd\":5}],[36,{\"id\":36,\"name\":\"섀도어\",\"key\":\"Shadower\",\"shortName\":\"$undefined\",\"classStart\":4,\"classEnd\":5}],[37,{\"id\":37,\"name\":\"나이트워커\",\"key\":\"NightWalker\",\"shortName\":\"나워\",\"classStart\":1,\"classEnd\":5}],[38,{\"id\":38,\"name\":\"엔젤릭버스터\",\"key\":\"AngelicBuster\",\"shortName\":\"엔버\",\"classStart\":1,\"classEnd\":5}],[39,{\"id\":39,\"name\":\"신궁\",\"key\":\"CrossbowMaster\",\"shortName\":\"$undefined\",\"classStart\":4,\"classEnd\":5}],[40,{\"id\":40,\"name\":\"에반\",\"key\":\"Evan\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[41,{\"id\":41,\"name\":\"캡틴\",\"key\":\"Captain\",\"shortName\":\"$undefined\",\"classStart\":4,\"classEnd\":5}],[42,{\"id\":42,\"name\":\"카데나\",\"key\":\"Cadena\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[43,{\"id\":43,\"name\":\"블래스터\",\"key\":\"Blaster\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[44,{\"id\":44,\"name\":\"일리움\",\"key\":\"Illium\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[45,{\"id\":45,\"name\":\"시티즌(초보자)\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[46,{\"id\":46,\"name\":\"노블레스\",\"key\":\"Noblesse\",\"shortName\":\"$undefined\",\"classStart\":0,\"classEnd\":0}],[47,{\"id\":47,\"name\":\"초보자\",\"key\":\"Beginner\",\"shortName\":\"$undefined\",\"classStart\":0,\"classEnd\":0}],[48,{\"id\":48,\"name\":\"핑크빈\",\"key\":\"PinkBean\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":4}],[49,{\"id\":49,\"name\":\"클레릭\",\"key\":\"Cleric\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[50,{\"id\":50,\"name\":\"프리스트\",\"key\":\"Priest\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[51,{\"id\":51,\"name\":\"헌터\",\"key\":\"Hunter\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[52,{\"id\":52,\"name\":\"어쌔신\",\"key\":\"Assassin\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[53,{\"id\":53,\"name\":\"레인저\",\"key\":\"Ranger\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[54,{\"id\":54,\"name\":\"파이터\",\"key\":\"Fighter\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[55,{\"id\":55,\"name\":\"나이트\",\"key\":\"WhiteKnight\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[56,{\"id\":56,\"name\":\"메이지(썬,콜)\",\"key\":\"IL_Mage\",\"shortName\":\"썬콜\",\"classStart\":3,\"classEnd\":3}],[57,{\"id\":57,\"name\":\"페이지\",\"key\":\"Page\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[58,{\"id\":58,\"name\":\"위자드(썬,콜)\",\"key\":\"IL_Wizard\",\"shortName\":\"썬콜\",\"classStart\":2,\"classEnd\":2}],[59,{\"id\":59,\"name\":\"허밋\",\"key\":\"Hermit\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[60,{\"id\":60,\"name\":\"검사\",\"key\":\"Swordman\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":1}],[61,{\"id\":61,\"name\":\"매지션\",\"key\":\"Magician\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":1}],[62,{\"id\":62,\"name\":\"메이지(불,독)\",\"key\":\"FP_Mage\",\"shortName\":\"불독\",\"classStart\":3,\"classEnd\":3}],[63,{\"id\":63,\"name\":\"인파이터\",\"key\":\"Infighter\",\"shortName\":\"인파\",\"classStart\":2,\"classEnd\":2}],[64,{\"id\":64,\"name\":\"아처\",\"key\":\"Archer\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":1}],[65,{\"id\":65,\"name\":\"캐논슈터\",\"key\":\"CannonShooter\",\"shortName\":\"캐슈\",\"classStart\":1,\"classEnd\":2}],[66,{\"id\":66,\"name\":\"시프\",\"key\":\"Bandit\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[67,{\"id\":67,\"name\":\"위자드(불,독)\",\"key\":\"FP_Wizard\",\"shortName\":\"불독\",\"classStart\":2,\"classEnd\":2}],[68,{\"id\":68,\"name\":\"로그\",\"key\":\"Rogue\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":1}],[69,{\"id\":69,\"name\":\"듀어러\",\"key\":\"BladeAcolyte\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[70,{\"id\":70,\"name\":\"버서커\",\"key\":\"Berserker\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[71,{\"id\":71,\"name\":\"시프마스터\",\"key\":\"ChiefBandit\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[72,{\"id\":72,\"name\":\"크루세이더\",\"key\":\"Crusader\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[73,{\"id\":73,\"name\":\"건슬링거\",\"key\":\"Gunslinger\",\"shortName\":\"건슬\",\"classStart\":2,\"classEnd\":2}],[74,{\"id\":74,\"name\":\"슬래셔\",\"key\":\"BladeLord\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[75,{\"id\":75,\"name\":\"캐논블래스터\",\"key\":\"CannonBlaster\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[76,{\"id\":76,\"name\":\"버커니어\",\"key\":\"Buccaneer\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[77,{\"id\":77,\"name\":\"발키리\",\"key\":\"Valkyrie\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[78,{\"id\":78,\"name\":\"스피어맨\",\"key\":\"SpearMan\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[79,{\"id\":79,\"name\":\"세미듀어러\",\"key\":\"BladeRecruit\",\"shortName\":\"$undefined\",\"classStart\":1.5,\"classEnd\":1.5}],[80,{\"id\":80,\"name\":\"저격수\",\"key\":\"Sniper\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[81,{\"id\":81,\"name\":\"사수\",\"key\":\"CrossbowMan\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[82,{\"id\":82,\"name\":\"듀얼마스터\",\"key\":\"BladeSpecialist\",\"shortName\":\"$undefined\",\"classStart\":2.5,\"classEnd\":2.5}],[83,{\"id\":83,\"name\":\"\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[84,{\"id\":84,\"name\":\"제논\",\"key\":\"Xenon\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[85,{\"id\":85,\"name\":\"데몬어벤져\",\"key\":\"DemonAvenger\",\"shortName\":\"데벤져\",\"classStart\":1,\"classEnd\":5}],[86,{\"id\":86,\"name\":\"미하일\",\"key\":\"Mihile\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":5}],[87,{\"id\":87,\"name\":\"시티즌\",\"key\":\"Resistance\",\"shortName\":\"$undefined\",\"classStart\":0,\"classEnd\":0}],[90,{\"id\":90,\"name\":\"패스파인더\",\"key\":\"Pathfinder\",\"shortName\":\"패파\",\"classStart\":4,\"classEnd\":5}],[91,{\"id\":91,\"name\":\"에인션트아처\",\"key\":\"AncientArcher\",\"shortName\":\"$undefined\",\"classStart\":2,\"classEnd\":2}],[92,{\"id\":92,\"name\":\"체이서\",\"key\":\"Chaser\",\"shortName\":\"$undefined\",\"classStart\":3,\"classEnd\":3}],[93,{\"id\":93,\"name\":\"아처(패스파인더)\",\"key\":\"P_Archer\",\"shortName\":\"$undefined\",\"classStart\":1,\"classEnd\":1}],[94,{\"id\":94,\"name\":\"호영\",\"key\":\"HoYoung\",\"shortName\":\"$undefined\",\"classStart\":0,\"classEnd\":5}],[95,{\"id\":95,\"name\":\"아델\",\"key\":\"Adele\",\"shortName\":\"$undefined\",\"classStart\":0,\"classEnd\":5}],[96,{\"id\":96,\"name\":\"카인\",\"key\":\"Kain\",\"shortName\":\"$undefined\",\"classStart\":0,\"classEnd\":5}],[97,{\"id\":97,\"name\":\"라라\",\"key\":\"Lara\",\"shortName\":\"$undefined\",\"classStart\":0,\"classEnd\":5}],[98,{\"id\":98,\"name\":\"칼리\",\"key\":\"Khali\",\"shortName\":\"$undefined\",\"classStart\":0,\"classEnd\":5}],[99,{\"id\":99,\"name\":\"프렌즈 월드\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}],[100,{\"id\":100,\"name\":\"초월자\",\"key\":null,\"shortName\":\"$undefined\",\"classStart\":\"$undefined\",\"classEnd\":\"$undefined\"}]]\n"])</script>
  <script>self.__next_f.push([1,"11:[\"$\",\"html\",null,{\"lang\":\"ko\",\"children\":[[\"$\",\"head\",null,{\"children\":[[\"$\",\"link\",null,{\"rel\":\"preload stylesheet\",\"href\":\"https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css\",\"as\":\"style\",\"type\":\"text/css\",\"crossOrigin\":\"anonymous\"}],[\"$\",\"$L15\",null,{\"async\":true,\"src\":\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"}],[\"$\",\"$L15\",null,{\"id\":\"adx-service\",\"dangerouslySetInnerHTML\":{\"__html\":\"window.googletag = window.googletag || {cmd: []};\\n          googletag.cmd.push(function () {\\n          googletag.pubads().enableSingleRequest();\\n          googletag.enableServices();\\n        });\"}}],[\"$\",\"$L15\",null,{\"src\":\"https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js\",\"integrity\":\"sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4\",\"crossOrigin\":\"anonymous\"}],[\"$\",\"$L15\",null,{\"async\":true,\"src\":\"https://www.googletagmanager.com/gtag/js?id=G-WMSZNHB64M\"}],[\"$\",\"$L15\",null,{\"id\":\"dakgg-ga4\",\"dangerouslySetInnerHTML\":{\"__html\":\"window.dataLayer = window.dataLayer || []\\n                function gtag() {\\n                  dataLayer.push(arguments)\\n                }\\n                gtag('js', new Date())\\n                gtag('config', 'G-WMSZNHB64M')\"}}],[\"$\",\"script\",null,{\"async\":true,\"src\":\"https://hb.vntsm.com/v3/live/ad-manager.min.js\",\"type\":\"text/javascript\",\"data-site-id\":\"66309f107e16dc002af512c3\",\"data-mode\":\"scan\"}]]}],[\"$\",\"body\",null,{\"children\":[\"$\",\"$L16\",null,{\"children\":[\"$\",\"$L17\",null,{\"locale\":\"ko\",\"children\":[\"$\",\"$L18\",null,{\"children\":[\"$\",\"$L19\",null,{\"isDakggMobile\":false,\"isMobile\":false,\"notification\":[],\"worlds\":\"$Q1a\",\"jobs\":\"$Q1b\",\"serverTime\":\"2024-08-27T16:08:17+09:00\",\"notificationKey\":\"\",\"bannerKey\":\"\",\"children\":[false,[\"$\",\"$L1c\",null,{}],[\"$\",\"$L1d\",null,{\"children\":[\"$\",\"$L1e\",null,{\"children\":[\"$\",\"$L8\",null,{\"parallelRouterKey\":\"children\",\"segmentPath\":[\"children\"],\"loading\":\"$undefined\",\"loadingStyles\":\"$undefined\",\"loadingScripts\":\"$undefined\",\"hasLoading\":false,\"error\":\"$1f\",\"errorStyles\":[],\"errorScripts\":[],\"template\":[\"$\",\"$Lb\",null,{}],\"templateStyles\":\"$undefined\",\"templateScripts\":\"$undefined\",\"notFound\":[\"$\",\"$L20\",null,{}],\"notFoundStyles\":[],\"styles\":null}]}]}]]}]}]}]}]}]]}]\n"])</script>
  <script>self.__next_f.push([1,"12:[[\"$\",\"meta\",\"0\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no\"}],[\"$\",\"meta\",\"1\",{\"charSet\":\"utf-8\"}],[\"$\",\"title\",\"2\",{\"children\":\"삑살@크로아 :: 메이플 종합 통계 - 메이플지지 Maple.GG\"}],[\"$\",\"meta\",\"3\",{\"name\":\"description\",\"content\":\"메이플 종합 통계 Maple.GG에서 전적검색 및 통계 콘텐츠를 확인하세요. 유니온, 링크, 사냥터, 코디, 랭킹 등 다양한 정보를 제공합니다.\"}],[\"$\",\"meta\",\"4\",{\"name\":\"keywords\",\"content\":\"메이플 종합 통계, 메이플 전적검색, 메이플GG, 메이플 프로필, 월드순위, 직업순위, 코디, 염색, 믹스염색, 테라버닝, 메가버닝, 무릉, 시드, 유니온, 월드리프\"}],[\"$\",\"link\",\"5\",{\"rel\":\"canonical\",\"href\":\"https://maple.gg/u/삑살\"}],[\"$\",\"meta\",\"6\",{\"property\":\"og:title\",\"content\":\"삑살@크로아 :: 메이플 종합 통계 - 메이플지지 Maple.GG\"}],[\"$\",\"meta\",\"7\",{\"property\":\"og:description\",\"content\":\"삑살@크로아의 스탯, 장비, 유니온, 코디 컬렉션, 히스토리 등을 확인해보세요.\"}],[\"$\",\"meta\",\"8\",{\"property\":\"og:url\",\"content\":\"https://maple.gg/u/삑살\"}],[\"$\",\"meta\",\"9\",{\"property\":\"og:image\",\"content\":\"https://open.api.nexon.com/static/maplestory/Character/NGIHAABAGHFBCDPBCIHPDCJLOLIAECHJLOHHIMEBIHBDFFEFGBLNIKAPNDNNIKDIJNMHGAAMFDBOGMKAPMAJDDMGNKFGLJAHFKPCJCCPGHKFMKCHJGHCHHHJOKLHJGCNGCPMCPPFHFEGJCCMLIIOFMNOKPPPIOPDNBGFBILPBKGLOEAPIJMCNIJJKMBBEKMJFEDBMFEHEOCNOBMBMGPFLPJKPLGCJDGIANKDCFLKDDMPIGAIPMNJNPIPIPGBECAO.png\"}],[\"$\",\"meta\",\"10\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"$\",\"meta\",\"11\",{\"name\":\"twitter:card\",\"content\":\"summary\"}],[\"$\",\"meta\",\"12\",{\"name\":\"twitter:title\",\"content\":\"메이플 종합 통계 - 메이플지지 Maple.GG\"}],[\"$\",\"meta\",\"13\",{\"name\":\"twitter:description\",\"content\":\"메이플 종합 통계 Maple.GG에서 전적검색 및 통계 콘텐츠를 확인하세요. 유니온, 링크, 사냥터, 코디, 랭킹 등 다양한 정보를 제공합니다.\"}],[\"$\",\"meta\",\"14\",{\"name\":\"twitter:image\",\"content\":\"https://cdn.dak.gg/maple/images/meta-icon.png\"}]]\n"])</script>
  <script>self.__next_f.push([1,"6:null\nd:null\n"])</script>
  <script>self.__next_f.push([1,"21:I[31970,[\"691\",\"static/chunks/f4e5f4e1-5bc8dcdd72acca64.js\",\"4705\",\"static/chunks/dc112a36-a26ec11f6dfc39b0.js\",\"7337\",\"static/chunks/ad2866b8-f52813c522346a49.js\",\"6946\",\"static/chunks/6946-2fa7bf036217f3b7.js\",\"1436\",\"static/chunks/1436-7aff9b6e1a3487fb.js\",\"1396\",\"static/chunks/1396-a5d526a0b9718370.js\",\"9702\",\"static/chunks/9702-eb854f0861fd8f9d.js\",\"713\",\"static/chunks/713-843be05d5bc0ba04.js\",\"2260\",\"static/chunks/2260-787508622e407358.js\",\"7424\",\"static/chunks/7424-6995cef075b54158.js\",\"8471\",\"static/chunks/8471-39ea0bf428704a10.js\",\"5487\",\"static/chunks/5487-e0cd8b2c5a1b5ca2.js\",\"9277\",\"static/chunks/9277-d6893bbee72c0bef.js\",\"5754\",\"static/chunks/app/(profile)/u/%5Bnickname%5D/@header/%5B%5B...tab%5D%5D/page-9ba3c7da7865f92c.js\"],\"\"]\n"])</script>
  <script>self.__next_f.push([1,"7:[\"$\",\"$L21\",null,{\"profile\":{\"character\":{\"name\":\"삑살\",\"imageUrl\":\"https://open.api.nexon.com/static/maplestory/Character/NGIHAABAGHFBCDPBCIHPDCJLOLIAECHJLOHHIMEBIHBDFFEFGBLNIKAPNDNNIKDIJNMHGAAMFDBOGMKAPMAJDDMGNKFGLJAHFKPCJCCPGHKFMKCHJGHCHHHJOKLHJGCNGCPMCPPFHFEGJCCMLIIOFMNOKPPPIOPDNBGFBILPBKGLOEAPIJMCNIJJKMBBEKMJFEDBMFEHEOCNOBMBMGPFLPJKPLGCJDGIANKDCFLKDDMPIGAIPMNJNPIPIPGBECAO.png\",\"worldId\":5,\"jobId\":5,\"detailJobId\":26,\"level\":288,\"popular\":798,\"guildName\":\"Case\",\"syncedAt\":1724728657000,\"since\":\"2016-07-05\",\"sinceValid\":true,\"accessFlag\":true}},\"accessFlag\":true}]\n"])</script>
  <script>self.__next_f.push([1,""])</script>
  <style data-styled="" data-styled-version="6.1.1"></style>
 </body>
</html>