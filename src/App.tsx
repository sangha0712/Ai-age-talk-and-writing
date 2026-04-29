/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ChevronDown, Clapperboard, MonitorPlay, Sparkles, 
  Video, Play, BookOpen, Gamepad2, Lightbulb, 
  Smartphone, Monitor, Trophy, Compass, ArrowRight, ArrowLeft, X, Youtube,
  Quote, Clock, PenTool, Layout
} from "lucide-react";
import { useState, useEffect } from "react";

const chapters = [
  {
    title: "초기 영상 시청과 제작 동기",
    icon: <Play className="w-6 h-6" />,
    paragraphs: [
      "어릴 적 나를 소개하자면, 날라리였다. 공부에는 크게 관심이 없었으며, 상당히 놀기만 하며 어린 시절을 보냈다. 게임을 하거나 유튜브를 보는 일이 하루의 대부분이었고, 친구들과 수영장에 가서 노는 것도 좋아했다. 공부는 아예 손도 대지 않았고, 정말 말 그대로 놀러만 다녔다. 학원에 불려가서 강제로 공부하는 정도를 제외하면, 스스로 책상 앞에 앉는 일은 거의 없었던 것 같다.",
      "그런 내가 처음 영상 쪽에 흥미를 느낀 건 8살 무렵이었다. 게임을 좋아했던 나는 게임을 하는 사람들의 영상을 보면서 대리만족을 느꼈고, 점점 더 거기에 빠져들었다. 무엇보다도 자신이 좋아하는 것을 하면서 그 과정을 기록으로 남긴다는 점이 나에게는 굉장히 매력적으로 느껴졌다. 당시의 유튜브 활동은 나에게 단순히 시간을 보내는 놀이가 아니라, 내가 좋아하는 것을 오래 남길 수 있는 방법처럼 보였다. 그렇게 유튜브를 계속 보다 보니 자연스럽게 “나도 해보고 싶다”는 생각으로 이어졌다.",
      "처음에는 부모님도 내가 유튜브를 보고 장난처럼 따라 하는 줄 알았다고 하셨다. 지금 생각해보면 그 말도 맞는 것 같다. 나 역시 처음에는 거창한 목표가 있었던 것이 아니라, 그냥 재밌어 보여서 시작한 것에 가까웠기 때문이다. 하지만 나에게는 그 장난 같은 시작이 생각보다 오래 남았다.",
    ],
  },
  {
    title: "첫 업로드와 편집의 필요성 인식",
    icon: <Video className="w-6 h-6" />,
    paragraphs: [
      "그렇게 처음 올린 영상은 지금 생각해보면 정말 엉터리였다. 우선 그냥 게임 녹화만 한 수준이었다. 음질도 다 깨져 있었고, 내 목소리도 제대로 들리지 않아 무슨 말을 하는지 알아듣기 어려웠다. 완성도만 놓고 보면 부족한 점투성이였지만, 이상하게도 그때의 나는 기대감이 컸다. 이렇게 올리면 누군가는 봐줄 것 같았고, 조회수도 조금씩 늘어날 것이라고 생각했다. 지금 돌아보면 근거 없는 기대였지만, 당시에는 그런 기대조차 나를 즐겁게 만들었다. 결과가 어떻든 간에 내가 직접 무언가를 만들고 남긴다는 사실 자체가 꽤 신났던 것 같다.",
      "하지만 영상이 몇 개 쌓이면서 조금씩 부족한 점들이 보이기 시작했다. 가장 먼저 느낀 건 조회수가 생각처럼 잘 나오지 않는다는 점이었다. 또 다른 유튜버들의 영상을 보면서 자연스럽게 비교하게 되었다. 왜 다른 사람들의 영상은 인게임 사운드나 마이크 소리가 깔끔하게 들리는데, 내 영상은 그렇지 않을까 하는 의문이 생겼다. 지금 생각해보면 모바일 게임을 녹화할 때 손가락으로 마이크를 막고 있었던 것이 원인이었지만, 그때는 그런 기본적인 부분도 잘 몰랐다. 무엇보다도 내 영상을 내가 다시 봤을 때 빠져들지 못했다. 전체적으로 심심해 보였고, 내가 하는 말 역시 그렇게 재미있게 느껴지지 않았다. 드립도 부족했고, 진행도 서툴렀다. 그렇게 하나둘 불만족스러운 점들이 쌓이면서, 단순 녹화만으로는 부족하다는 생각이 들었고 자연스럽게 편집을 해봐야겠다고 마음먹게 되었다.",
    ],
    imageUrl: "https://igx.kr/r/k0/0/0"
  },
  {
    title: "모바일 편집 프로그램 활용",
    icon: <Sparkles className="w-6 h-6" />,
    paragraphs: [
      "그렇게 모바일 편집 프로그램을 처음 만졌을 때는 그저 신기했다. 비바비디오나 키네마스터를 이것저것 눌러보면서 “와, 이런 편집이 이렇게 가능했구나” 하고 놀랐던 기억이 난다. 자막에 인 애니메이션을 넣을 수 있다는 것도 신기했고, 자막이 사람을 따라가게 만드는 것도 신기했다. 그전까지 영상은 찍고 올리는 것에 가까웠다면, 편집을 접한 뒤에는 영상 안에 생각보다 훨씬 많은 요소가 들어간다는 걸 알게 되었다. 그와 동시에 궁금한 것도 많아졌다. 왜 키프레임 모션은 내가 생각한 것처럼 부드럽고 매끄럽게 움직이지 않는지, 왜 내가 만든 자막은 다른 영상들처럼 자연스럽지 않은지 계속 의문이 생겼다. 그러면서도 그 과정을 포기하지 않고 계속 건드려 보았다. 안 되면 다시 해보고, 또 실패해보고, 또 찾아보는 식이었다. 그런 시행착오 속에서 나는 편집이라는 것에 조금씩 더 빠져들었다.",
      "초등학교 2학년부터 중학교 3학년 중반까지는 그런 식으로 모바일 편집을 계속 붙잡고 있었다. 처음에는 비바비디오와 키네마스터를 둘 다 사용했지만, 어느 순간부터는 키네마스터를 주로 사용하게 되었다. 중학교 1학년쯤부터는 한 달에 5000원씩 내면서 유료 버전도 사용할 정도였다. 그만큼 그 당시의 나는 영상 편집에 꽤 진심이었다.",
    ],
  },
  {
    title: "PC 편집 환경으로의 전환",
    icon: <MonitorPlay className="w-6 h-6" />,
    paragraphs: [
      "하지만 모바일 편집에는 분명한 한계가 있었다. 모션 그래픽이나 다양한 효과를 넣는 것도 쉽지 않았고, 재미를 더해주는 이펙트나 오디오 믹싱 같은 기능은 당시 키네마스터에서는 제대로 다루기 어려웠다. 영상을 보다 더 재밌고, 보다 더 보기 편하게 만들고 싶다는 생각은 점점 커졌는데, 모바일 환경만으로는 내가 원하는 수준까지 가는 데 한계가 느껴졌다. 전문적으로 영상 작업을 하는 사람들은 대부분 컴퓨터를 활용하고 있었고, 모바일보다 훨씬 더 최적화된 환경에서 편집을 하며 시청자가 보기 편안한 퀄리티를 만들고 있었다. 그래서 나 역시 언젠가는 PC 편집기로 넘어가야 한다고 계속 생각했다.",
      "사실 처음에는 그렇게 생각만 하고 있었다. 그런데 중학교 3학년 무렵, 키네마스터 유료 버전 가격이 갑자기 크게 오른다는 이야기를 들었다. 그 순간 차라리 1년 단위로 돈을 내고 어도비 툴을 배우는 게 더 낫겠다는 생각이 들었다. 모바일 편집의 한계를 이미 느끼고 있던 데다 가격 문제까지 겹치면서, 결국 나는 프리미어 프로와 에프터 이펙트로 넘어가게 되었다.",
      "물론 처음 PC 편집기를 만졌을 때는 기대감보다 막막함이 더 컸다. 가장 먼저 들었던 생각은 “와.. 뭐 어떻게 시작해야 하지?”였다. 모바일 편집은 터치 스크린으로 하나하나 위치를 옮기고 눈에 보이는 대로 툴을 만지면 되었지만, PC 편집은 전혀 달랐다. 단축키를 알아야 했고, 툴바의 위치와 기능도 익혀야 했으며, 파일을 불러오고 정리하는 방식조차 생각보다 복잡했다. 심지어 유튜브에서 봤을 법한 효과들도 쉽게 찾기 어려워서 초반에는 정말 모바일로 편집하던 때보다도 못한 수준의 퀄리티의 영상을 만들었던 것 같다.",
      "처음에는 그런 차이가 꽤 크게 느껴졌다. 영상 강의를 찾아보기도 했지만 설명이 너무 대충 넘어가는 경우도 많았고, 그래서 오히려 더 답답했다. 그런데 이상하게도 그때 포기하기보다는 오기가 생겼다. 몇 번이고 직접 부딪혀가면서 툴을 익혀보기 시작했다. 그러다 보니 점점 툴에 익숙해졌고, 유튜브에서 효과음과 BGM을 하나하나 찾아 상황에 맞게 넣으면서 정말로 결과물이 달라지는 것을 느끼게 되었다. “진짜 뭔가 되긴 하더라”라는 감각이 생기기 시작한 것이다. 그때부터는 하루에 몇 시간씩 편집에 몰두하기 시작했다.",
      "돌아보면 나는 편집에 한번 빠지면 꽤 깊게 들어가는 편이었다. 중학교 때도 반에서 같이 볼 영상을 만들게 되면 새벽 5시까지 편집해가며 완성했던 기억이 있다. 고등학교에 들어가서는 시험기간만 제외하면 거의 늘 편집기를 붙잡고 살았다. 직접 만든 영상을 학교 발표 자료로 사용하기도 했고, 수행평가에 활용하기도 했다. 특히 시험이 끝난 날이면 컴퓨터 앞에 앉아 새벽 3시까지 편집을 하곤 했는데, 그때 부모님이 “뭘 그렇게까지 하냐”고 말씀하신 적도 있었다. 지금 생각하면 그 시기부터 나는 이미 편집을 단순한 취미로만 대하고 있지는 않았던 것 같다.",
      "부모님 말씀에 따르면, 내가 영상에 집중하던 시기와 공부에 집중하는 능력이 조금씩 생기기 시작한 시기가 비슷했다고 한다. 전에는 좋아하는 것만 붙잡고 사는 느낌이 강했다면, 그 시기부터는 하나를 붙잡으면 끝까지 해보려는 태도가 보이기 시작했다고 하셨다. 나도 돌이켜보면 영상을 만들며 무언가를 오래 붙잡고 완성해보는 경험이 다른 일에도 조금씩 영향을 주기 시작했던 것 같다.",
    ],
    imageUrl: "https://igx.kr/r/k0/0/1"
  },
  {
    title: "제작 경험 누적과 성과",
    icon: <Clapperboard className="w-6 h-6" />,
    paragraphs: [
      "그렇게 몇 시간씩 편집에 몰두하던 시기를 지나, 내가 스스로 생각하기에 가장 고점을 찍었다고 느낀 영상도 있었다. 바로 ESCAPE THE BACKROOM이라는 공포게임 영상이었다. 이 영상에서는 프리미어 프로 환경에서 처음으로 직접 만든 인 애니메이션을 넣어보기도 했고, 자막에 효과를 넣으면서 영상의 몰입도를 이전보다 더 끌어올리려고 했다. 물론 지금 다시 보면 편집점이 애매해서 영상을 거의 통째로 넣고 대충 넘어간 듯한 구간도 있었지만, 전체적으로는 몰입이 크게 깨지지 않았고, 일반 유튜버들처럼 집중하면서 볼 만한 영상이 나온 것 같아 스스로 꽤 뿌듯했다. 무엇보다 어릴 때와는 달리 여러 경험이 쌓인 상태에서 친구들과 함께 말하며 찍은 영상이다 보니, 더 자연스럽게 웃긴 상황도 나왔고 말 자체도 조금 더 재밌어졌다고 느꼈다. 그 영상은 내가 그동안 쌓아온 편집과 진행의 결과가 처음으로 어느 정도 형태를 갖춘 순간처럼 느껴졌다.",
      "그 영상을 만든 뒤의 반응은 기대보다 나쁘지 않았다. 솔직히 조회수는 50도 안 나올 줄 알았는데, 거의 200에 가까운 조회수가 나와서 놀랐던 기억이 난다. 생각해보면 대부분의 사람들은 이름 없는 유튜버의 영상을 굳이 찾아보지 않는다. 바쁜 시간 속에서 이미 어느 정도 검증되고 재밌다고 알려진 채널의 영상을 먼저 보게 되는 경우가 훨씬 많다. 그런 점을 생각하면, 당시의 나에게 그 정도 반응은 충분히 의미 있게 다가왔다. 댓글 역시 폭발적인 수준은 아니었지만 괜찮다거나 재밌다는 반응이 달려 있었다.",
      "물론 아쉬운 감정이 전혀 없었던 것은 아니다. 더 많은 사람들이 봐줬으면 좋겠다는 마음도 있었고, 조금 더 큰 반응이 나왔다면 어땠을까 하는 생각도 했던 것 같다. 하지만 지금 돌아보면, 그 감정이 좌절이나 열등감에 더 가까웠던 것은 아니었다. 오히려 조금 부러운 감정에 가까웠다. 나는 마이너한 주제의 게임 영상을 만들고 있었고, 다른 사람들은 보다 메이저한 주제에 진지하게 임하고 있었기 때문에 단순 비교를 하기도 애매했다. “내가 더 잘하는데 왜 저 사람은 잘 되지?” 같은 식의 감정보다는, 저렇게 많은 사람들에게 닿는다는 사실 자체가 부럽다고 느꼈던 것 같다. 무엇보다 고등학생 시절에 그런 영상을 실제로 만들고, 그만한 경험을 쌓았다는 것 자체가 나에게는 꽤 즐거운 일이었다.",
    ],
    imageUrl: "https://igx.kr/r/k0/0/2"
  },
  {
    title: "제작 경험을 통한 시각 변화",
    icon: <BookOpen className="w-6 h-6" />,
    paragraphs: [
      "그 영상을 완성한 시점은 고등학교 2학년 1학기 말쯤이었다. 그때 나는 결과물을 다시 보면서 내가 여기까지 얼마나 성장해왔는지를 스스로 느낄 수 있었다. 사실 그전까지는 조회수나 반응은 물론이고, 성장이라는 말 자체에도 크게 관심이 없었던 것 같다. 그냥 만들고 싶어서 만들고, 해보고 싶어서 해왔던 것에 더 가까웠다. 그런데 편집 수준이 어느 정도 내가 만족할 만한 수준까지 올라오고 나니, 그때부터는 결과물을 남기는 것 자체가 너무 즐겁게 느껴졌다. 사람들의 반응을 보는 재미도 아예 없었던 것은 아니지만, 그보다 더 크게 남았던 것은 “내가 여기까지 왔구나”라는 감각이었다.",
      "고등학생이 된 이후에도 나는 공부와 영상 제작을 완전히 분리해서 생각하지는 않았던 것 같다. 직접 만든 영상을 발표 자료나 수행평가에도 활용했고, 그런 과정 자체가 나를 더 집중하게 만들었다. 부모님도 내가 단순히 영상을 취미처럼 소비하는 수준이 아니라, 무언가를 기록으로 남기고 완성해내는 과정에서 스스로를 조금씩 성장시키고 있었다고 보셨다. 나 역시 그 말이 아주 틀렸다고는 생각하지 않는다.",
      "그 이후로 나는 영상에서 가장 중요한 것은 결국 경험이라고 생각하게 되었다. 퀄리티를 떠나서, 영상을 직접 만들어보고 남겨보는 경험 자체가 중요하다고 느꼈다. 영상이라고 해도 광고, 영화, 유튜브처럼 분야가 굉장히 다양하고, 각 분야마다 주로 쓰이는 방식과 필요한 지식이 다르다. 그래서 오히려 한 가지 방식만 붙잡기보다는 여러 분야를 접하고 다양한 시도를 해보는 것이 더 중요하다고 생각한다. 무엇보다 영상을 많이 남기면서, 자신이 성장하는지도 모를 정도로 다양한 시도를 계속해보는 것이 필요하다고 느꼈다.",
      "나는 재능은 개화하는 것이지만, 센스는 연마하는 것이라고 생각한다. 사람들마다 각자의 페이스가 있고, 개개인의 편집 역량도 노력만 계속된다면 평균 이상의 수준까지는 충분히 올라갈 수 있다고 본다. 물론 재능도 중요하다. 어쩌면 조금 차가운 말일지도 모르지만, 편집은 재능의 영역에 조금 더 가깝다고 생각한다. 하지만 재능이 있다는 이유만으로 모든 것이 결정되는 것은 아니라고 느낀다. 노력하지 않으면, 그리고 스스로 바뀌지 않으면 결국 아무것도 바뀌지 않는다. 그 점만큼은 지금도 가장 중요하다고 생각한다.",
    ],
  },
  {
    title: "현재의 상황과 향후 방향성",
    icon: <Play className="w-6 h-6" />,
    paragraphs: [
      "대학교에 와서는 편집을 바라보는 감정이 예전과 조금 달라졌다. 고등학생 때의 편집이 단순히 내가 즐겁고 싶어서, 그리고 기록을 남기고 싶어서 하는 것이었다면, 지금의 편집은 조금 더 복잡한 의미로 다가온다. 이제는 예전처럼 가볍게만 느껴지지 않고 어느 정도의 압박감도 함께 느껴진다. 오히려 과제를 위해 영상을 만들어야 한다는 사실 자체가 부담스럽고, 때로는 조금 회피하고 싶게 느껴질 때도 있다. 예전에는 내가 좋아서 붙잡던 일이었다면, 지금은 해야 한다는 이유가 붙는 순간 낯설고 무겁게 느껴지기도 하는 것이다. 그런데 그런 감정만 있는 것은 아니다. 한편으로는 분명 설레는 마음도 있다. 내가 하고 싶었던 것을 이제는 조금 더 제대로, 그리고 전문적으로 배운다는 사실 자체가 나에게는 꽤 크게 다가온다. 그래서 지금의 나는 편집을 대할 때 예전보다 더 복잡한 감정을 느낀다. 부담스럽기도 하고, 피하고 싶기도 하지만, 동시에 기대되고 설레기도 한다. 어쩌면 그것이 내가 이 일을 단순한 취미 이상으로 받아들이기 시작했다는 뜻일지도 모른다.",
      "부모님이 보시기에도 예전의 나는 할 수 있는 것을 전부 쏟아붓는 방식에 가까웠다면, 지금의 나는 필요한 부분을 조금 더 골라서 쓰려는 쪽으로 바뀌었다고 한다. 실제로 나도 그 변화가 있다고 느낀다. 예전에는 그저 많이 넣고, 많이 시도하고, 더 화려하게 만드는 데 집중했다면, 지금은 무엇을 남기고 무엇을 덜어낼지를 조금 더 의식하게 되었다. 어릴 때의 영상 편집이 단순한 취미처럼 보였다면, 지금은 가족과 함께 드라마나 영화를 볼 때조차 장면이나 연출을 자연스럽게 보게 된다. 부모님도 그런 모습을 보며 내가 예전보다 훨씬 더 진지하게 이 분야를 바라보고 있다고 느끼신다고 했다. 나 역시 이제는 편집을 단순히 재미로만 붙잡고 있다고 말하기는 어려운 것 같다.",
      "지금 돌아보면 예전의 나에게 가장 먼저 해주고 싶은 말은, 너무 조급해하지 말라는 것이다. 그렇다고 해서 안주하라는 뜻도 아니다. 그때의 나는 남들과 비교하면서 괜히 흔들리기도 했고, 내가 가는 속도가 느린 것처럼 느껴질 때도 있었다. 하지만 지금 와서 생각해보면, 중요한 것은 남보다 빨리 가는 것이 아니라 내가 멈추지 않고 계속 가고 있었는지의 문제였던 것 같다. 나는 원래 스스로를 아주 대단한 사람이라고 생각하지는 않았지만, 그렇다고 아주 운이 없는 사람이라고도 생각하지 않았다. 그래서 포기하지 않고 계속 해나가다 보면, 언젠가는 노력한 시간과 운이 겹쳐서 나름의 결과를 만들 수 있지 않을까 생각하게 되었다.",
      "편집이라는 것은 누구나 시작할 수 있기에, 솔직히 평균과 진입장벽이 많이 높아졌다고 생각한다. 나 또한 아직 평균 이하의 실력이라고 생각하고, 대학교에 와서도 편집에 대해 제대로 배웠다고 하기는 어렵다. 하지만 그렇다고 해서 노력의 의미가 사라지는 것은 아니라고 느낀다. 내가 지금까지 해오며 느낀 것은, 계속 만들고 남기다 보면 어느 순간 스스로에게 안주하는 것이 아니라, 일단은 만족할 수 있는 지점에 가까워진다는 점이었다. 그리고 그 이후에는 더 나은 결과를 위해 다시 고민하게 되는 순간이 오는 것 같았다.",
      "돌아보면 나는 공부보다 노는 것에 더 익숙한 아이였고, 계획보다 충동이 앞서는 사람이었다. 하지만 그런 나였기에 오히려 더 솔직하게 좋아하는 것을 붙잡을 수 있었고, 그렇게 시작한 영상 편집이 내 안에 오랫동안 남게 되었다고 생각한다. 처음에는 단순히 해보고 싶어서 시작했고, 중간에는 더 잘하고 싶어서 계속했으며, 지금은 기록을 남기고 성장해나가는 과정 자체가 즐거워서 붙잡고 있다. 아직도 배울 것은 많고 부족한 것도 많다. 그래도 분명한 것은 예전의 나와 지금의 나는 다르다는 점이다. 그리고 그 차이는 결국 내가 포기하지 않고 계속 무언가를 만들어왔기 때문에 생긴 것이라고 생각한다.",
      "결국 지금의 나는 편집을 대단한 확신으로 붙잡고 있는 사람이라기보다는, 여전히 부족함을 느끼면서도 계속 배우고 싶어 하는 사람에 더 가깝다. 예전처럼 단순히 재미만으로 하는 것도 아니고, 그렇다고 완전히 부담으로만 느끼는 것도 아니다. 부담과 설렘이 함께 있는 상태로 계속 편집을 바라보고 있다. 아마 앞으로도 완전히 만족하는 순간은 쉽게 오지 않을 것 같다. 그래도 지금까지 남겨온 기록들과 경험들을 떠올리면, 적어도 나는 내가 걸어온 시간을 헛되게 보내지는 않았다고 말할 수 있을 것 같다.",
    ],
  },
];



const highlights = [
  { 
    title: "제작 동기 형성", 
    desc: "8살 무렵 게임 영상을 시청하며, 자신이 좋아하는 것을 기록으로 남기는 행위에 흥미를 가짐.", 
    paragraphs: [
      "초기에는 다른 이들의 게임 영상을 시청하며 대리만족을 느끼는 수준에 머물렀습니다. 하지만 점차 좋아하는 게임 플레이 과정을 직접 영상으로 기록하고 남기는 행위 자체에 큰 매력을 느끼게 되었습니다.",
      "당시의 활동은 단순한 놀이를 넘어, 경험을 오랫동안 보존할 수 있는 수단으로 다가왔습니다. 이러한 인식은 시간이 지남에 따라 자연스럽게 '나도 직접 영상을 만들어보고 싶다'는 구체적인 제작 동기로 발전했습니다."
    ],
    icon: <Gamepad2 className="w-6 h-6" /> 
  },
  { 
    title: "첫 업로드와 편집의 필요성", 
    desc: "단순 화면 녹화로 첫 영상을 제작했으나, 결과물의 한계와 편집의 중요성을 깨닫게 됨.", 
    paragraphs: [
      "최초로 올린 영상은 단순한 화면 녹화본에 불과했습니다. 깨진 음질과 알아듣기 힘든 목소리 등 완성도 측면에서 부족한 점이 많았으나, 직접 무언가를 제작하여 남겼다는 사실 자체가 당시에는 큰 즐거움으로 작용했습니다.",
      "하지만 영상이 누적되면서 타 채널 영상들과의 품질 격차(사운드, 진행 방식, 전반적인 흥미 요소 등)를 인지하게 되었습니다. 단조로운 녹화 방식의 한계를 직시하고, 결과물의 질적 향상을 위해 편집 기술의 도입이 필수적임을 깨닫게 된 계기였습니다."
    ],
    icon: <Monitor className="w-6 h-6" /> 
  },
  { 
    title: "모바일 편집 입문", 
    desc: "모바일 애플리케이션을 활용해 자막과 애니메이션 처리를 경험하며 기반을 마련함.", 
    paragraphs: [
      "비바비디오와 키네마스터 등의 모바일 앱을 통해 처음 편집을 접했습니다. 자막에 애니메이션을 적용하는 등 촬영본 이상의 요소가 추가될 수 있음을 알게 되며 영상 구성에 대한 관심이 확장되었습니다.",
      "의도한 키프레임 모션이나 효과가 제대로 구현되지 않는 등의 한계를 겪으면서도, 지속적인 시행착오를 통해 편집에 몰입했습니다. 이 과정은 초등학교 2학년부터 중학교 3학년까지 꾸준히 이어졌으며, 유료 버전을 구독할 정도로 학습에 대한 진지한 태도를 보였습니다."
    ],
    icon: <Smartphone className="w-6 h-6" /> 
  },
  { 
    title: "PC 기반 환경으로의 이주", 
    desc: "모바일 편집의 기술적 제약을 벗어나기 위해 프리미어 프로와 애프터 이펙트를 학습함.", 
    paragraphs: [
      "모션 그래픽, 시각적 이펙트, 오디오 믹싱 등 영상을 보다 다채롭게 구성하고자 하는 요구가 커짐에 따라 모바일 환경의 근본적인 한계에 직면했습니다. 또한, 이용 중이던 앱의 구독료 인상 이슈가 겹치며 PC 전문 편집 툴 도입을 결심했습니다.",
      "초기에는 낯선 단축키와 UI, 파일 관리 방식 등으로 인해 막막함을 겪었고, 결과물의 수준이 오히려 저하되는 현상도 있었습니다. 그러나 지속적인 실습과 오기를 바탕으로 툴에 적응하였으며, 상황에 맞는 효과음과 BGM 적용 등을 통해 점진적인 품질 향상을 이뤄냈습니다."
    ],
    icon: <MonitorPlay className="w-6 h-6" /> 
  },
  { 
    title: "경험의 누적과 성과", 
    desc: "고등학교 시절, 다양한 편집 효과를 적용한 영상을 제작하며 질적 성장과 유의미한 반응을 확인함.", 
    paragraphs: [
      "축적된 편집 경험을 바탕으로 제작한 'ESCAPE THE BACKROOM' 영상에서 구체적인 성과를 경험했습니다. 직접 기획한 애니메이션, 자막 효과, 그리고 친구들과의 자연스러운 대화가 어우러져 시청 몰입도를 이전보다 크게 향상시킬 수 있었습니다.",
      "비주류(마이너) 주제임에도 불구하고 약 200 수준의 유의미한 조회수와 긍정적인 평가를 얻었습니다. 대형 채널에 대한 부러움도 존재했으나, 그보다는 기획과 제작의 전 과정을 거쳐 하나의 결과물을 완성해 낸 자신의 경험과 성장에 더 큰 만족감을 느꼈습니다."
    ],
    icon: <Video className="w-6 h-6" /> 
  },
  { 
    title: "기술에 대한 관점 발전", 
    desc: "단순한 취미를 넘어 지속적인 기록과 경험 자체가 지닌 본질적인 가치를 재평가함.", 
    paragraphs: [
      "영상을 기획하고 생산하는 행위 자체에서 성취감이 생기게 되었고, 과정에 대한 경험 축적이 중요함을 깨달았습니다. 기술의 습득과 표현 방식의 확장이라는 두 마리 토끼를 잡기 위해 다양한 분야의 시도가 필요함을 인식했습니다.",
      "대학교 진학 이후, 영상 제작이 과제라는 형식으로 주어지면서 과거와 다른 압박감과 부담감을 겪기도 합니다. 하지만 이를 전문적인 훈련 과정으로 여기며 설렘을 동반한 성장 기회로 받아들이고 있습니다. 조급해하지 않고 지속해서 기록을 남기는 것이 중요하다고 믿습니다."
    ],
    icon: <BookOpen className="w-6 h-6" /> 
  }
];

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-[#111] text-white selection:bg-white/30 rounded-b-[3rem] shadow-xl">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gray-500 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-700 rounded-full mix-blend-multiply filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <motion.div 
        style={{ y, opacity }}
        className="z-10 text-center px-6 max-w-4xl"
      >
        <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm md:text-base font-sans tracking-[0.2em] text-white/60 uppercase mb-4"
        >
          영상 제작 과정
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-sans font-light leading-tight mb-8 text-[#e0e0e0]"
        >
          영상 편집 기술의 취득과 <br />
          <span className="font-semibold px-4">성장 기록</span>
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <p className="text-white/40 text-xs mb-3 font-sans tracking-widest uppercase">Scroll Down</p>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
            <ChevronDown className="w-5 h-5 text-white/40" />
        </motion.div>
      </motion.div>
    </div>
  );
};

const SummaryCard = ({ item, index, onClick }: { item: typeof highlights[0], index: number, onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white p-6 md:p-8 border border-black/5 rounded-3xl shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col items-start relative h-full flex-grow"
    >
      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-[#2d2a26] mb-5 group-hover:bg-[#2d2a26] group-hover:text-white transition-colors duration-300">
        <motion.div
          whileHover={{ rotate: 15, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {item.icon}
        </motion.div>
      </div>
      <h3 className="text-lg md:text-xl font-sans font-bold text-[#2d2a26] mb-3 group-hover:text-gray-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-[#4a4744] font-sans leading-relaxed text-sm mb-6 flex-grow">
        {item.desc}
      </p>
      
      <div className="inline-flex items-center gap-1 text-xs font-sans font-bold text-gray-400 group-hover:text-[#2d2a26] transition-colors mt-auto">
        상세 보기
        <ArrowRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
};

const HighlightsGrid = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<typeof highlights[0] | null>(null);

  useEffect(() => {
    if (selectedHighlight) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedHighlight]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 relative">
      <div className="mb-14 md:mb-16 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#8c857f] font-sans text-sm tracking-widest uppercase mb-3"
        >
          Summary Of Progress
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-sans font-bold text-[#2d2a26]"
        >
          핵심 내용
        </motion.h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {highlights.map((item, idx) => (
           <SummaryCard key={idx} item={item} index={idx} onClick={() => setSelectedHighlight(item)} />
        ))}
      </div>

      <AnimatePresence>
        {selectedHighlight && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedHighlight(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white w-full max-w-2xl max-h-[85vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-black/5 shrink-0 bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#2d2a26]">
                    {selectedHighlight.icon}
                  </div>
                  <h3 className="text-xl font-sans font-bold text-[#2d2a26]">{selectedHighlight.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedHighlight(null)}
                  className="p-2 rounded-full hover:bg-black/5 text-gray-400 hover:text-black transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="px-8 py-8 overflow-y-auto overscroll-contain">
                <div className="space-y-6">
                  {selectedHighlight.paragraphs.map((p, i) => (
                    <p key={i} className="text-base font-sans leading-[1.8] text-[#4a4744]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const milestones = [
  { year: "8살", title: "유튜브 시청과 대리만족", desc: "영상을 보며 '나도 해보고 싶다'는 단순한 호기심으로 시작." },
  { year: "초등~중학", title: "모바일 편집의 시작", desc: "비바비디오와 키네마스터를 만지며 시행착오 속에서 편집의 재미를 발견." },
  { year: "중학교 3학년", title: "PC 툴로의 전환", desc: "모바일의 한계와 유료화 이슈로 프리미어 프로와 애프터 이펙트에 입문." },
  { year: "고등학교 2학년", title: "BACKROOM 편집", desc: "직접 만든 애니메이션과 효과를 반영한 결과물로 약 200회의 조회수를 기록." },
  { year: "현재 (대학생)", title: "전문적인 학습과 기대", desc: "부담감과 설렘이 교차하는 가운데 편집을 단순한 취미 이상의 것으로 탐구." }
];

const TimelineSection = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <div className="mb-14 text-center">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[#8c857f] font-sans text-sm tracking-widest uppercase mb-3"
      >
        History
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-sans font-bold text-[#2d2a26]"
      >
        타임라인
      </motion.h2>
    </div>
    
    <div className="relative border-l border-black/10 ml-4 md:ml-20 space-y-12">
      {milestones.map((ms, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="relative pl-8 md:pl-12"
        >
          <div className="absolute -left-[5px] top-1.5 w-[11px] h-[11px] rounded-full bg-[#2d2a26] ring-4 ring-white" />
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-2">
            <span className="text-sm font-bold text-gray-400 font-sans tracking-wide">{ms.year}</span>
            <h3 className="text-xl font-bold font-sans text-[#2d2a26]">{ms.title}</h3>
          </div>
          <p className="text-[#4a4744] font-sans leading-relaxed text-sm">{ms.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const ToolsSection = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <div className="mb-14 text-center">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-[#8c857f] font-sans text-sm tracking-widest uppercase mb-3"
      >
        Tools
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-sans font-bold text-[#2d2a26]"
      >
        활용 도구
      </motion.h2>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { name: "VivaVideo", desc: "1세대 모바일 경험", color: "bg-orange-50 text-orange-600" },
        { name: "KineMaster", desc: "모바일 편집의 심화", color: "bg-red-50 text-red-600" },
        { name: "Premiere Pro", desc: "본격적인 PC 편집", color: "bg-purple-50 text-purple-600" },
        { name: "After Effects", desc: "시각적 이펙트의 연출", color: "bg-indigo-50 text-indigo-600" }
      ].map((tool, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className={`p-6 rounded-3xl flex flex-col items-center justify-center text-center ${tool.color} shadow-sm transition-all`}
        >
          <PenTool className="w-8 h-8 mb-4 opacity-80" />
          <h3 className="font-bold font-sans mb-1">{tool.name}</h3>
          <p className="text-xs opacity-70 font-sans">{tool.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const StatsSection = () => (
  <div className="max-w-4xl mx-auto px-6 py-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { value: "05:00", unit: "AM", label: "반환점 없는 몰입", desc: "중학교 시절, 밤을 새워가며 영상을 완성했던 열정적인 새벽 시간." },
        { value: "200", unit: "Views", label: "첫 유의미한 성과", desc: "BACKROOM 영상으로 처음 경험한 대중과의 의미 있는 연결." },
        { value: "8", unit: "Years Old", label: "여정의 시작", desc: "단순한 호기심으로 유튜브 영상을 보며 처음 느꼈던 창작의 동기." }
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white border text-center border-black/5 rounded-[2rem] p-8 shadow-sm flex flex-col items-center"
        >
          <div className="flex items-baseline gap-1 mb-2 text-[#2d2a26]">
            <span className="text-4xl md:text-5xl font-sans font-light tracking-tighter">{stat.value}</span>
            <span className="font-bold text-gray-400 text-sm tracking-widest">{stat.unit}</span>
          </div>
          <h4 className="font-bold font-sans text-[#2d2a26] mb-3">{stat.label}</h4>
          <p className="text-xs text-gray-500 font-sans leading-relaxed">{stat.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const QuoteSection = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto px-6 py-20"
  >
    <div className="bg-[#2d2a26] text-[#fcfbf9] rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden">
      <Quote className="absolute top-8 left-8 w-16 h-16 text-white/5 rotate-180" />
      <Quote className="absolute bottom-8 right-8 w-16 h-16 text-white/5" />
      <p className="relative z-10 text-xl md:text-3xl font-sans font-light leading-relaxed mb-6">
        "재능은 개화하는 것이지만, 센스는 연마하는 것이다. 포기하지 않고 스스로 바뀌지 않으면 결국 아무것도 바뀌지 않는다."
      </p>
      <div className="relative z-10 w-12 h-px bg-white/20 mx-auto mb-6"></div>
      <p className="relative z-10 text-white/50 text-sm font-sans tracking-widest uppercase">제작 경험을 통한 시각의 변화</p>
    </div>
  </motion.div>
);

const YouTubeLinkBox = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto px-6 pb-6 md:pb-10"
  >
    <a 
      href="https://youtu.be/fm8lnmEG9uo?si=P7qjYG0AUbt-02p-" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-white border text-[#2d2a26] border-black/10 rounded-[2.5rem] p-10 md:p-14 text-center cursor-pointer hover:border-black/20 hover:shadow-2xl transition-all shadow-xl overflow-hidden relative group block"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 via-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <motion.div
        whileHover={{ rotate: 5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative z-10 w-16 h-16 mx-auto mb-6 bg-red-50 text-[#ff0000] rounded-full flex items-center justify-center group-hover:bg-[#ff0000] group-hover:text-white transition-colors"
      >
        <Youtube className="w-8 h-8" />
      </motion.div>
      
      <h2 className="relative z-10 text-2xl md:text-3xl font-sans font-bold mb-3 group-hover:text-black transition-colors">관련 유튜브 영상 시청</h2>
      <p className="relative z-10 text-gray-500 mb-8 font-sans text-sm md:text-base">이야기에 등장하는 영상을 직접 유튜브에서 확인하실 수 있습니다</p>
      
      <motion.div 
        whileHover={{ x: 5 }}
        className="relative z-10 inline-flex items-center gap-3 text-xs md:text-sm font-sans tracking-widest uppercase bg-black/5 px-6 py-3 rounded-full group-hover:bg-[#ff0000] group-hover:text-white transition-colors font-bold"
      >
        Watch on YouTube
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </a>
  </motion.div>
);

const CTABox = ({ onRead }: { onRead: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="max-w-4xl mx-auto px-6 pb-32"
  >
    <div 
      onClick={onRead}
      className="bg-[#2d2a26] text-[#fcfbf9] rounded-[2.5rem] p-10 md:p-14 text-center cursor-pointer hover:bg-[#1a1816] transition-all shadow-xl overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-600/10 via-transparent to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <motion.div
        whileHover={{ rotate: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative z-10 w-14 h-14 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors"
      >
        <BookOpen className="w-6 h-6 opacity-80" />
      </motion.div>
      
      <h2 className="relative z-10 text-2xl md:text-3xl font-sans font-bold mb-3">전체 기록 읽기</h2>
      <p className="relative z-10 text-white/50 mb-8 font-sans text-sm md:text-base">영상 편집 기술의 발전과 관련 경험을 서술한 전체 모음</p>
      
      <motion.div 
        whileHover={{ x: 5 }}
        className="relative z-10 inline-flex items-center gap-3 text-xs md:text-sm font-sans tracking-widest uppercase bg-white/10 px-6 py-3 rounded-full group-hover:bg-white group-hover:text-black transition-colors"
      >
        Read Full Text 
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </div>
  </motion.div>
);

const ChapterBlock = ({ chapter, index }: { chapter: typeof chapters[0] | any, index: number }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-14 md:py-20 relative max-w-3xl mx-auto px-6"
    >
      <div className="flex items-center gap-4 mb-8 md:mb-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 text-[#2d2a26]">
          {chapter.icon}
        </div>
        <div>
          <p className="text-xs font-sans tracking-widest text-black/40 uppercase mb-1">Section {String(index + 1).padStart(2, '0')}</p>
          <h2 className="text-xl md:text-2xl font-sans font-bold text-[#2d2a26]">{chapter.title}</h2>
        </div>
      </div>
      
      {chapter.imageUrl && (
        <div className="mb-8 md:mb-10 rounded-2xl overflow-hidden shadow-lg border border-black/5 bg-gray-100 flex justify-center">
          <img src={chapter.imageUrl} alt={chapter.title} className="w-full h-auto object-cover max-h-[500px]" referrerPolicy="no-referrer" />
        </div>
      )}

      <div className="space-y-6 md:space-y-8">
        {chapter.paragraphs.map((p, i) => (
          <p key={i} className="text-base md:text-lg font-sans leading-relaxed text-[#4a4744]">
            {p}
          </p>
        ))}
      </div>
      
      {index !== chapters.length - 1 && (
        <div className="w-px h-16 bg-black/10 mx-auto mt-14 md:mt-20"></div>
      )}
    </motion.section>
  );
};

const FullStory = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#fcfbf9] min-h-screen relative z-30 pt-6 pb-32">
      <div className="max-w-3xl mx-auto px-6 sticky top-6 z-40">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -4, backgroundColor: "rgba(0,0,0,0.05)" }}
          onClick={onBack}
          className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm text-sm font-sans tracking-wide font-medium border border-black/5 transition-all text-[#2d2a26]"
        >
          <ArrowLeft className="w-4 h-4" /> 뒤로가기
        </motion.button>
      </div>
      
      <div className="pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto px-6 mb-12 md:mb-20 text-center">
          <p className="text-xs font-sans tracking-[0.2em] text-black/40 uppercase mb-3">Full Record</p>
          <h1 className="text-2xl md:text-3xl font-sans font-bold text-[#2d2a26]">영상 편집 과정과<br/>성장 기록</h1>
        </div>

        {chapters.map((chapter, idx) => (
          <ChapterBlock key={idx} chapter={chapter} index={idx} />
        ))}
      </div>
    </div>
  )
};

export default function App() {
  const [view, setView] = useState<'summary' | 'full'>('summary');

  return (
    <div className="min-h-screen break-words antialiased bg-[#fcfbf9] flex flex-col">
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {view === 'summary' ? (
            <motion.div 
              key="summary" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <HeroSection />
              <main className="relative z-20">
                <HighlightsGrid />
                <TimelineSection />
                <ToolsSection />
                <StatsSection />
                <QuoteSection />
                <YouTubeLinkBox />
                <CTABox onRead={() => setView('full')} />
              </main>
            </motion.div>
          ) : (
            <motion.div 
              key="full" 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FullStory onBack={() => setView('summary')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <footer className="bg-[#111] text-white/30 text-center py-20 font-sans text-sm uppercase relative z-30 flex flex-col items-center justify-center">
        <Video className="w-5 h-5 mb-6 opacity-40" />
        <p className="tracking-widest opacity-80">END</p>
      </footer>
    </div>
  );
}
