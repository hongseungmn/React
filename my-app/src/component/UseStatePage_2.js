
import {useState} from "react"

/*
useState() do double render
React 문서에 따르면, 이렇게 두 번 호출되는 것은 버그가 아닌 의도된 기능이며 StrictMode에서 실행되는 이 기능은 사이드 이펙트를 발견 할 수 있도록 도와준다

- Strict Mode
Strict Mode는 어플리케이션 내의 잠재적인 문제를 알아내기 위한 도구이다.
이 모드는 개발모드에서만 활성화되므로, 프로덕션 빌드에는 영향을 끼치지 않는다.
asldkfjasldfjalkkdafj
*/
// export default function UseStatePage_2() {
// 	const [names, setNames] = useState(["둘리","짱구"]); 
// 	const [input, setInput] = useState("");
	
// 	//인자로는 event를 받는다.
// 	const handleInputChange = (event) => {
// 		//event 안에 있는 target의 value를 새로운 input으로 지정
// 		setInput(event.target.value);
// 	}
// 	console.log(input);
// 	return (
// 		<div>
// 			<input type="text" value={input} onChange={handleInputChange}/>
// 			<button >upload</button>
// 			{/* names 이름을 돌면서 item 하나하나마다 p태그를 만들어준다
// 					key 값으로는 배열의 idx 값을 주자 */}
// 			{names.map((item, idx) => {
// 				return <p key={idx}>{item}</p>;
// 			})}
// 		</div>
// 	);
// }

//input을 입력할 때마다 state가 업데이트되는 것을 볼 수 있다.
//이제 upload를 처리해 줄 함수를 만들어 보자
// export default function UseStatePage_2() {

// 	const [names, setNames] = useState(["둘리","짱구"]);
// 	const [input, setInput] = useState("");

// 	const handleInputChange = (event) => {
// 		setInput(event.target.value);
// 	};

// 	const handleUpload = () => {
// 		setNames((prevState) => {
// 			console.log("이전 State : ", prevState);// ["둘리","짱구"]
// 			return ([input, ...prevState]);
// 		})
// 	}
	
// 	return (
// 		<div>
// 			<input type="text" value={input} onChange={handleInputChange}/>
// 			<button onClick={handleUpload}>upload</button>
// 			{names.map((item, idx) => {
// 				return <p key={idx}>{item}</p>
// 			})}
// 		</div>
// 	)
// }


//무거운 함수
const heavyWork = () => {
	console.log("무거운 작업");
	return ["둘리","짱구"];
};

export default function UseStatePage_2() {
	const [names, setNames] = useState(() => {
		return heavyWork();
	});

	const [input, setInput] = useState("");

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleUpload = () => {
		setNames((prev) => {
			console.log("이전 state : ", prev);
			return [input, ...prev];
		});
	};

	return (
		<div>
			<input type="text" value={input} onChange={handleInputChange}/>
			<button onClick={handleUpload}>upload</button>
			{names.map((name, idx) => {
				return <p key={idx}>{name}</p>
			})}
		</div>
	)
};