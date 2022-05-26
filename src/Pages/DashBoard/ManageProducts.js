import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProducts = () => {
    const [deleteModal, setDeleteModal] = useState(null);
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://boiling-island-29316.herokuapp.com/gadgets')
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl my-12 text-center'>Available Parts in <span className='text-primary font-semibold'>Gadget Depot</span></h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-32 mx-12'>
                {
                    parts?.map(part => <ManageSingleProduct
                        key={part._id}
                        part={part}
                        setDeleteModal={setDeleteModal}
                    ></ManageSingleProduct>)
                }
            </div>
            {
                deleteModal && <DeleteProduct deleteModal={deleteModal} setDeleteModal={setDeleteModal} refetch={refetch}></DeleteProduct>
            }
        </div>
    );
};

export default ManageProducts;