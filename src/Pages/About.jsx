import React from 'react'
import { teamMembers } from '../data'

const About = () => {
    return (
        <>
            {/* قسم حول */}
            <section className="about-section" style={{ paddingTop: '120px' }}>
                <div className="container">
                    <div className="section-title">
                        <h2>من نحن</h2>
                        <p>تعرف على فريقنا وخدماتنا</p>
                    </div>

                    <div className="about-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12 mb-4">
                                <div className="about-image text-center">
                                    <img
                                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="فريق العمل"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                    رؤيتنا ورسالتنا
                                </h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                    نحن فريق متخصص في تقديم الخدمات الرقمية عالية الجودة. نسعى لمساعدة الشركات
                                    والأفراد على تحقيق أهدافهم الرقمية من خلال حلول مبتكرة وإبداعية.
                                </p>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                    لدينا خبرة واسعة في مجالات تطوير المواقع والتطبيقات، التصميم الجرافيكي،
                                    والتسويق الرقمي. نحرص على تقديم أفضل النتائج لعملائنا.
                                </p>
                                <div className="mt-4">
                                    <div className="d-flex gap-4 flex-wrap">
                                        <div className="text-center">
                                            <h2 style={{ color: 'var(--secondary)' }}>+100</h2>
                                            <p style={{ color: 'var(--text-muted)' }}>مشروع منجز</p>
                                        </div>
                                        <div className="text-center">
                                            <h2 style={{ color: 'var(--secondary)' }}>+50</h2>
                                            <p style={{ color: 'var(--text-muted)' }}>عميل سعيد</p>
                                        </div>
                                        <div className="text-center">
                                            <h2 style={{ color: 'var(--secondary)' }}>5</h2>
                                            <p style={{ color: 'var(--text-muted)' }}>سنوات خبرة</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* قسم الفريق */}
            <section className="team-section">
                <div className="container">
                    <div className="section-title">
                        <h2>فريق العمل</h2>
                        <p>تعرف على فريقنا المبدع</p>
                    </div>
                    <div className="row justify-content-center">
                        {
                            teamMembers.map((member, index) => (
                                <div className="col-lg-4 col-md-6 col-12 mb-4" key={index}>
                                    <div className="team-card">
                                        <img src={member.img} alt={member.name} />
                                        <h5>{member.name}</h5>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
