
// import { useState } from 'react';
// import leccData from './LeccData.json'


// function Departments(){
//     const[openId,setOpenid] = useState<number | null>(null)

//     const handleToggle=(id:number)=>{
//      setOpenid(prevId=>(prevId===id ? null:id))
//     }
//     //react automatically gives prevId to the previous


//     return(
//         <>
//         <div>
//             {leccData.map((lec)=>(
//                 <div key={lec.id}>
//                     <div onClick={()=>handleToggle(lec.id)}>
//                        {lec.title}
//                     </div>
//                     {openId===lec.id} && (
//                         <div>
//                             {lec.topics.map((topic,index)=>(
//                                 <div key={index}>{topic}</div>
//                             ))}
//                         </div>
//                     )

//                 </div>
//             ))}
//         </div>

                 
//         </>
//     )
// }
// export default Departments;

import { useState } from 'react';

const lecturesData = [
  {
    id: 1,
    title: "Lecture 1",
    topics: ["Introduction", "Basics", "Overview"]
  },
  {
    id: 2,
    title: "Lecture 2",
    topics: ["Advanced Topics", "Deep Dive"]
  },
  {
    id: 3,
    title: "Lecture 3",
    topics: ["Summary", "Q&A"]
  }
];

export default function Departments() {
  const [openLectureId, setOpenLectureId] = useState<Number | null>(null);

  const handleToggle = (id:Number) => {
    setOpenLectureId(prevId => (prevId === id ? null : id));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      {lecturesData.map((lecture) => (
        <div key={lecture.id} style={{ marginBottom: '10px' }}>
          <div 
            onClick={() => handleToggle(lecture.id)}
            style={{ cursor: 'pointer', fontWeight: 'bold', backgroundColor: '#ccc', padding: '10px' }}
          >
            {lecture.title}
          </div>

          {openLectureId === lecture.id && (
            <div style={{ backgroundColor: '#eee', padding: '10px', marginLeft: '20px' }}>
              {lecture.topics.map((topic, index) => (
                <div key={index}>{topic}</div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
