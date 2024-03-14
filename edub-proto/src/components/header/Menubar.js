import Menu from "./Menu";

const menulist = [
  {
    name: "파일",
    list: [
      "새 프로젝트","","프로젝트 열기","","저장","다른 이름으로 저장","","블록 업로드","","모든탭다운로드","블록다운로드","코드 다운로드"
    ]
  },
  {
    name: "설정",
    list: [
      "코드 폰트 설정", "블록 소리 설정"
    ]
  },
  {
    name: "편집",
    list: [
      "현재 탑 실행","현재 탭 초기화","","현재 탭 콘솔 초기화","","되돌리기","다시 되돌리기"
    ]
  }
]



export default function Menubar() {
  console.log(menulist[0])
  return(<>
    <div id="menubar">
      <Menu name={menulist[0].name} list={menulist[0].list}/>
      <Menu name={menulist[1].name} list={menulist[1].list}/>
      <Menu name={menulist[2].name} list={menulist[2].list}/>
    </div>
  </>)
}