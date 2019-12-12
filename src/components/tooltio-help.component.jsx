import React from 'react'
import { Tooltip } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

const style = {
    color: '#4db6ac',
    cursor: 'pointer',
    marginLeft: '5px'
}

const TooltipHelp = ({title}) => (
    <Tooltip title={title}>
        <FontAwesomeIcon icon={faQuestionCircle} style={style} />
    </Tooltip>
)

export default TooltipHelp