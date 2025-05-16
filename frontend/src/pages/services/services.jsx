import React from 'react';
import './style.css';
import ServicesCard from '../../components/services-card/services-card';
export default function Services() {
    return (
        <>
            <section className="services-section" id="services">
                <div className="services-content">
                    <div className="services-text">
                        <ServicesCard />
                    </div>
                </div>
            </section>
        </>
    )
}