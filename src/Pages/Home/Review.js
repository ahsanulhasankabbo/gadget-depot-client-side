import React from 'react';

const Review = ({ review }) => {
    const { image, name, company, rating, feedback } = review;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-5 pt-3">
                    <div class="avatar">
                        <div class="w-32 rounded-full">
                            <img src={image} alt='' />
                        </div>
                    </div>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="text-2xl font-bold ">{name}</h2>
                    <p class="text-xl font-semibold ">Company : {company}</p>
                    <p class="text-xl font-semibold ">Rating : {rating}</p>
                    <p>{feedback}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;