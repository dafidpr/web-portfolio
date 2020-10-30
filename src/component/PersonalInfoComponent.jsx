import React from 'react';

function PersonalInfoComponent(props) {
    return (
        <div className="column">
            <div className="card border-radius-6">
                <h3 className="card-header-title ml-4 mt-3">Personal Info</h3>
                <div className="card-content">
                    <table height="390">
                        <tr>
                            <td><b>Nama</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td>{props.name}</td>
                        </tr>
                        <tr>
                            <td><b>Jenis Kelamin</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td>{props.gender}</td>
                        </tr>
                        <tr>
                            <td><b>TTL</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td>{props.ttl}</td>
                        </tr>
                        <tr>
                            <td><b>Alamat</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td>{props.address}</td>
                        </tr>
                        <tr>
                            <td><b>Agama</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td>{props.religion}</td>
                        </tr>
                        <tr>
                            <td style={{width: "160px"}}><b>Kewarganegaraan</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td>{props.citizenship}</td>
                        </tr>
                        <tr>
                            <td style={{width: "100px"}}><b>No. Telp</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td>{props.phone}</td>
                        </tr>
                        <tr>
                            <td style={{width: "100px"}}><b>Email</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td><a href={"mailto:" + props.email}>{props.email}</a> </td>
                        </tr>
                        <tr>
                            <td><b>Hobi</b></td>
                            <td style={{width: "20px"}}>:</td>
                            <td>{props.hobi}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoComponent
