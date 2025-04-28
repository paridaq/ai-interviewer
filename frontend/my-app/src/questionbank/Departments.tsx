
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
  },
  {
    id: 3,
    title: "Lecture 3",
    topics: ["Summary", "Q&A"]
  },
  {
    id: 3,
    title: "Lecture 3",
    topics: ["Summary", "Q&A"]
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
     <div style={{ padding:'200px', backgroundColor: '#f0f0f0', width: '1000px', marginLeft:'-120px', backgroundImage:'linear-gradient(to right,yellow,white'

      }}>
      {lecturesData.map((lecture) => (
        <div key={lecture.id} style={{ marginBottom: '1px' }}>
          <div 
        onClick={() => handleToggle(lecture.id)}
        style={{ cursor: 'pointer', fontWeight: 'bold', backgroundColor: '#ccc', padding: '28px', width: '100%',color:'black', textAlign:'left'}}
          >
        {lecture.title}
            {openLectureId === lecture.id && (
            <div style={{ marginTop: '10px' }}>
              {lecture.topics.map((topic, index) => (
              <div
                key={index}
                style={{
                backgroundColor: '#eee',
                padding: '20px',
                marginBottom: '10px',
                width: 'calc(100% - 40px)',
                color: 'black',
                cursor: 'pointer',
                border: '1px solid #ccc',
                borderRadius: '5px',
                textAlign:'left'
                }}
                onClick={() => alert(`You clicked on: ${topic}`)}
              >
                {topic}
              </div>
              ))}
            </div>
            )}
          </div>
        </div>
      ))}
        </div>
  );
}
