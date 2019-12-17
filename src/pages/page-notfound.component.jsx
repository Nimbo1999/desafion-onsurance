import React from 'react'
import { Result, Button, Card } from 'antd'
import { withRouter } from 'react-router-dom'

const PageNotFound = ({ history }) => (
    <Card style={{width: '80%'}}>
        <Result
            status="404"
            title="404"
            subTitle="Desulpa, a página que você estava procurando não foi encontrada."
            extra={<Button type="primary" onClick={() => history.push('/')}>Voltar</Button>}
        />
    </Card>
)

export default withRouter(PageNotFound)