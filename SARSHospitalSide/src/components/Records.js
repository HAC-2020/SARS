import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecordItem = ({ record }) => {
    return (
        // <div className="card">
        // 	<div className="card-header">
        <div className='alert alert-warning p-0 m-0' role='alert'>
            <ul className='list-group container p-0'>
                <li
                    className='list-group-item list-group-item-danger text-center'
                    style={{ background: '#666666' }}>
                    {record.triageLevel}
                </li>
                <div className='row'>
                    <ul
                        className='list-group col-6 pr-0'
                        style={{ paddingLeft: '15px' }}>
                        <li className='list-group-item '>
                            Disease (With the highest probability) :
                        </li>
                        <li className='list-group-item'>
                            SymptoChecker use Date :
                        </li>
                        <li className='list-group-item'>
                            SymptoChecker use Time :
                        </li>
                        <li className='list-group-item'>
                            Patient Contact Number :
                        </li>
                        <li className='list-group-item'>Blood Group :</li>
                    </ul>
                    <ul
                        className='list-group col-6'
                        style={{ paddingRight: '15px' }}>
                        <li className='list-group-item '>{record.disease}</li>
                        <li className='list-group-item'>
                            {record.date.substring(0, 10)}
                        </li>
                        <li className='list-group-item'>
                            {record.date.substring(11, 16)} (GMT)
                        </li>
                        <li className='list-group-item'>{record.pin}</li>
                        <li className='list-group-item'>{record.bloodGrp}</li>
                    </ul>
                </div>
            </ul>
        </div>
        // 	</div>
        // </div>
    );
};

const Records = () => {
    const [recordList, setRecordList] = useState(null);

    useEffect(() => {
        axios
            .get(`https://young-hamlet-78816.herokuapp.com/record/get`)
            .then((records) => {
                setRecordList(records);
                console.log(records);
            })
            .catch((err) => console.log(err));
    }, []);

    if (!recordList) {
        return null;
    }
    return (
        <div>
            {recordList.data.map((record) => {
                return (
                    <div className='col-sm-12' key={record._id}>
                        <RecordItem record={record} />
                        <br />
                    </div>
                );
            })}
        </div>
    );
};

export default Records;
