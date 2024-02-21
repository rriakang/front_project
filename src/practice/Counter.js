// import React, {useState} from 'react';

// //ueestate => 동적으로 처리하게 해줄수있는 함수 

// //동적값을 state , 이런걸 처리하기 위해서 useState 를 사용함

// const Counter = () => {
//     //첫번째 num 0이라는 기본값을 같는 num
//     // 두번째 인자인 setNumber  앞에있는값을 세팅할수있음
//     //num이라는 값을 변경시킬수있는 setNumber

//     const [num,setNumber] = useState(0);
 
//     const increase = () => {
//         setNumber(num + 1);
 
//     }

//     const decrease = () => {
//         setNumber(num - 1);
  
        
//     } 
//     //+버튼을 누르면 1증가 - 버튼을 누르면 1감소
//     //html 에서는 소문자 가능 그러나 react에서는 대문지 잘 지켜줘야함
//     //button 클릭을 하게되면 increase호출
    
//     return(
//         <div>
            
//             <button onClick={increase}>+1</button>
//             <button onClick={decrease}>-1</button>
//             <p>{num}</p>
//         </div>
//     );

// };

// export default Counter;