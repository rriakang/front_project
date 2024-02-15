import React, {useState} from "react";

const Input2 = () => {
    //여러개를 받을 수 있음
    const [inputs,setInputs ] =useState({
        name : "",
        email : "",
        tell : ""
    })
    
    const {name,email,tell} = inputs;

    const onChange = (e) =>{
        const value = e.target.value;
        const id = e.target.id;
        
        //굉장히 조심해야할 포인트가 있음
        //inputs <= 오브젝트
        //이렇게하면 상태관리가 안됌
        //배열같은 경우에는 힌메모리에 관리가 됌 힌메모리에 대한 참조 주소만 가지고 있음
        // 특정값을 바꾸면 react 값이 바꼇는지 안ㅂ바꼇는지 모름 참조 값만 알고잇음
        // 상태값을 직접 바꿔버리면 react에서는 알지를 못함 
        //변경됐다는걸 react에게 알려줘야함
        setInputs({
            ...inputs, // 이 오브젝트를 깊은 복사를 해서 새로운 오브젝트를 만든것임    
            //...inputs 에 
            // name : "",
            // email : "",
            // tell : ""
            // 이렇게 들어온것이랑 같음
            name : value,
            email : value,
            tell : value 
        })
        //inputs[id] = value;
        
    }


    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>e-mail</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tell" value={tell} onChange={onChange}/>
            </div>
        
        </div>
    );
};
export default Input2;