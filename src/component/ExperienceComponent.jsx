import React from 'react';
import lksBwi from '../images/lks-bwi.jpg'; 
import lksJember from '../images/lks-jember.jpg'; 
import freelaceImg from '../images/freelance.png'; 
import magang from '../images/magang.jpg'; 
import ExperienceContent from './ExperienceContent';


function ExperienceComponent() {
    return(
        <section className="section bg-muted">
            <div className="container">
                <h3 className="title is-3 mb-6 text-color-dark mb-5">Experience</h3>
                <div className="row">
                    <div className="columns">
                        
                        <ExperienceContent 
                            image={magang}
                            title="Magang 6 Bulan"
                            subtitle="Magang di CV. Media Solusi Informasi"
                            description="Magang selama 6 bulan di perusahaan software house CV. Media Solusi Informasi di Banyuwangi"
                            date="April 2019 - Oktober 2019"
                        />
                        <ExperienceContent 
                            image={lksBwi}
                            title="Juara 2 LKS RPL"
                            subtitle="Bidang Web Desain Tingkat Kabupaten"
                            description="Juara 2 Lomba Kompetensi Siswa (LKS) RPL Bidang Web Desain Tingkat Kabupaten Banyuwangi"
                            date="November 2019"
                        />
                        <ExperienceContent 
                            image={lksJember}
                            title="Lomba LKS Wilker"
                            subtitle="Lomba LKS RPL Tingkat Wilayah Kerja"
                            description="Peserta Lomba LKS RPL Bidang Web Development Tingkat Wilayah Kerja Jawa Timur"
                            date="Desember 2019"
                        />
                        <ExperienceContent 
                            image={freelaceImg}
                            title="Freelance"
                            subtitle="Freelance Web Developer"
                            description="Mulai mengerjakan beberapa projek freelance dari klien dan membuat produk aplikasi saya sendiri"
                            date="Februari 2020 - Sekarang"
                        />
                        
                    </div>
                </div>
            </div>
        </section>
    )
} 
export default ExperienceComponent;