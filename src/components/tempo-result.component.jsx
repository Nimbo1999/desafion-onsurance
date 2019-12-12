import React from 'react'
import { Statistic, Card } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const TempoResult = ({title, dias, horas}) => {
    return (
        <Card bordered={false}>
           <Statistic title={title} value={horas * dias} prefix={<FontAwesomeIcon icon={faClock} style={{color: '#4db6ac'}} />} />
        </Card>
    )
}

export default TempoResult