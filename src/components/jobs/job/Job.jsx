import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { company_name, educational_requirements, experiences, job_description, job_title, job_type, logo, id } = job
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {company_name}
                </h2>
                <p>{job_title}</p>
                <p>{job_type}</p>
                <p>{experiences}</p>
                <div className="card-actions justify-end">
                    <Link to={`/jobdetails/${id}`}>
                        <button className='btn btn-primary'>See See Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Job;