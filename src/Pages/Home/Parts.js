import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Part from './Part';

const Parts = () => {
    const { data: parts, isLoading } = useQuery('parts', () => fetch('http://localhost:5000/gadgets')
        .then(res => res.json()))

    const start = parts?.length - 6 ;
    const end = parts?.length;

    if (isLoading) {
            return <Loading></Loading>
        }
    return (
        <div>
            <h1 className='text-4xl my-12 text-center'>Available Parts in <span className='text-primary font-semibold'>Gadget Depot</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-12'>
                {
                    parts.slice(start,end)?.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;