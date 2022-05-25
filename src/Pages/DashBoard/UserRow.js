import React from 'react';

const UserRow = ({user,index}) => {
    const {email} = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button className='btn btn-sm btn-primary text-white'>Admin</button></td>
            <td><button className='btn btn-sm btn-error text-white'>Remove</button></td>
        </tr>
    );
};

export default UserRow;