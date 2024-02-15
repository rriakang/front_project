import React from 'react';

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>

    )

}

const UserList = () => {
    const Users = [
        {email : 'user1@gmail.com',name:'유재석'},
        {email : 'user2@gmail.com',name:'김종국'},
        {email : 'user3@gmail.com',name:'하하'},
        {email : 'user4@gmail.com',name:'송지효'}
    ];

    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {Users.map(user => <User userData={user}/>)} 
            </tbody>
        </table>
    )

}

//users.map은 위의 const use 참고
export default UserList;