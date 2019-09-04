import React from 'react'
import Header from '../Header'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function Page({ title, children }) {
  return (
    <Header>
      <Paper style={{ padding: 30 }}>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        {children}
      </Paper>
    </Header>
  )
}
