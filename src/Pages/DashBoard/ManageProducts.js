import React from 'react';
import { useQuery } from 'react-query';
import Part from '../Home/Part';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/gadgets')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl my-12 text-center'>Available Parts in <span className='text-primary font-semibold'>Gadget Depot</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-32 mx-12'>
                {
                    parts?.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;