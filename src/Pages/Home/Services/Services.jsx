import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/public/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);


    return (
        <section className="mb-20">
           <div className="text-center space-y-5 mb-5">
           <h3 className="text-2xl font-bold text-orange-500"> Services</h3>
           <h3 className="text-4xl font-bold ">Our Services Area</h3>
           <p className="font-bold">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                }
           </div>
        </section>
    );
};

export default Services;