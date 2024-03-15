import React, { useEffect, useState } from 'react';

const JobCategories = () => {
    const [jobsCategories, setJobCategories] = useState([])

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setJobCategories(data))
    }, [])

    return (
        <div>
            <h2>Job CateGories</h2>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    jobsCategories.map(JobCategories =>
                       
                        <div  key={JobCategories.id} className="card   shadow-xl">
                            <figure className="px-10 pt-10">
                                {/* <img src={JobCategories.logo} alt="logo" className="rounded-xl" /> */}
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-1xl">{JobCategories.category_name}</h2>
                                <p>{JobCategories.availability}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default JobCategories;