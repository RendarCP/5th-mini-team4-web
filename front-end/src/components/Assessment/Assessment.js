import React, { useEffect, useState } from "react";
import Search from "./Search";
import "../../css/Assessment.css";
import Categories from "./Categories";

//질문결과 페이지
const Assessment = () => {
  const data = [
    {
      id: 1,
      assessment: "평가제목",
      categories: [
        {
          category: "기획",
          questions: [
            {
              question: "발상:하정인의 아이디어 창출",
              description: true,
              contribution: false,
              answers: [
                {
                  writer: "사용자1",
                  answer:
                    "평가 내용_답장입력 후 상태이다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.평가 내용_답장입력 후 상태이다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.",
                  contribution: 10,
                },
                {
                  writer: "사용자2",
                  answer: "장문 답장이다.",
                  contribution: 10,
                },
                {
                  writer: "사용자3",
                  answer: "너무 잘했다.",
                  contribution: 10,
                },
              ],
            },
            {
              question: "자료조사:정보 확보 능력?",
              description: true,
              contribution: false,
              answers: [
                {
                  writer: "사용자1",
                  answer: "아주 탁월하다",
                  contribution: 10,
                },
                {
                  writer: "사용자3",
                  answer: "조사 x나 못함",
                  contribution: 10,
                },
              ],
            },
          ],
        },

        {
          category: "개발",
          questions: [
            {
              question: "코드 퀄리티는?",
              description: true,
              contribution: false,
              answers: [
                {
                  writer: "사용자2",
                  answer: "조사",
                  contribution: 10,
                },
              ],
            },
          ],
        },
      ],
    },
  ];


  const [list, setList] = useState();
  const [check, setCheck] = useState([]);
  const [keyword, setKeyword] = useState("");

  //사용자 클릭하면 그 사용자에 대한 댓글정보만 보이게끔 하는 기능 
  // 아직 아무런 기능없음
  const onClick = (e) => {
    setList([]);
    data.map((data) =>
      data.categories.map((categories) =>
        categories.questions.map((questions) =>
          questions.answers.map((answers) => {
            if (answers.writer === e.target.value) {
              setList({ ...list, answers });
            }
          })
        )
      )
    );
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  // 여기 아래 로직및 주석은 필터기능 작업하기 위해서 만든것


  // const filter = data.map((data)=>(
  //   data.categories.map((categories) => (
  //     categories.questions.map((questions)=>(
  //       questions.answers.map((answers)=>{
  //         answers.filter(answers => answers.answer.indexof(keyword) !== -1)
  //       })
  //     ))
  //   ))
  // ))


  const [listtest,setListtest] = useState(data);
  const handleClick = () => {
    setListtest(data.filter((data) =>
    data.categories.filter((categories) =>
      categories.questions.filter((questions) =>
        questions.answers.filter( (answers)=>
          answers.answer.indexOf(keyword) !== -1 ? {...data, answers} : {data}
          //answers.answer.indexOf(keyword) !== -1 ? setLe({...questions , answers:answers}) : console.log("아니다") 
        )
      )
    )
  ))
  }

  // const filter1 = data.filter((data) =>
  //   data.categories.filter((categories) =>
  //     categories.questions.filter((questions) =>
  //       questions.answers.filter( (answers)=>
  //         answers.answer.indexOf(keyword) !== -1 ? setLe(answers) : console.log("아니다") 
  //       )
  //     )
  //   )
  // );

  // const [le, setLe] = useState();
  // const filter1 = data.filter((data) => {

  //   return(
  //     data.categories.filter((categories) => {
        
  //       return(
  //         categories.questions.filter((answers)=>
  //             answers.writer.indexOf(keyword) !== -1 ? console.log("맞다") : console.log("아니다") 
  //         )
  //       )
  //     })
  //   )
  // }
  // );


  return (
    <>
      <div className="Assessment_container">
        <div className="Assessment">
          <Search onChange={handleChange} value={keyword} onClick={handleClick}></Search>

          <div>
            {/* 카테고리 제목과 questions부분 map으로 하위컴포넌트로 전달 */}
            {data.map((data) =>
              data.categories.map((categories) => (
                <Categories
                  onClick={onClick}
                  categories={categories.category}
                  questions={categories.questions}
                ></Categories>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
